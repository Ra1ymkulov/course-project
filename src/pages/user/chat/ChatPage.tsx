"use client";

import { useEffect, useState } from "react";
import { useChatStore } from "@/src/entities/chat/model/chat.store";
import { createChat, getMyChats } from "@/src/entities/chat/api/chatService";
import { useSocket } from "@/src/app/providers/SocketProvider";
import { Chat } from "@/src/entities/chat/types";

const ChatPage = () => {
  const { chats, setChats, selectedChat, selectChat } = useChatStore();
  const { socket } = useSocket();
  const [newChatTitle, setNewChatTitle] = useState("");
  const [newChatUsers, setNewChatUsers] = useState("");
  const [messageText, setMessageText] = useState("");
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const chatsData = await getMyChats();
        setChats(chatsData);
        console.log(chatsData);
      } catch (err) {
        console.error("Failed to fetch chats:", err);
      }
    };
    fetchChats();
  }, [setChats]);
  useEffect(() => {
    if (!socket || !selectedChat) return;

    socket.emit("joinRoom", selectedChat.id);
  }, [socket, selectedChat]);
  // Обработка создания нового чата
  const handleCreateChat = async () => {
    if (!newChatTitle || !newChatUsers) return;

    try {
      const usersArray = newChatUsers.split(",").map((u) => u.trim());
      const chat: Chat = await createChat(newChatTitle, usersArray);
      setChats([...chats, chat]); // добавляем новый чат в Zustand
      selectChat(chat); // сразу выбираем его
      setNewChatTitle("");
      setNewChatUsers("");
    } catch (err) {
      console.error("Failed to create chat:", err);
    }
  };

  // Отправка сообщения через socket
  const handleSendMessage = () => {
    if (!socket || !selectedChat || !messageText) return;
    socket.emit("sendMessage", {
      chatId: selectedChat.id,
      text: messageText,
    });
    setMessageText("");
  };

  // Если чатов нет, показываем форму создания
  if (chats.length === 0) {
    return (
      <div className="p-4">
        <h2>No chats yet. Create one:</h2>
        <input
          type="text"
          placeholder="Chat title"
          value={newChatTitle}
          onChange={(e) => setNewChatTitle(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Users (comma separated)"
          value={newChatUsers}
          onChange={(e) => setNewChatUsers(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={handleCreateChat}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Create Chat
        </button>
      </div>
    );
  }

  // Основной UI чата
  return (
    <div className="flex w-full h-175 border-r border-b border-gray-500">
      {/* Список чатов */}
      <div className="w-1/3 border-r border-gray-300 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => {
              selectChat(chat), socket?.emit("joinRoom", chat.id);
            }}
            className={`p-2 cursor-pointer ${
              selectedChat?.id === chat.id ? "bg-gray-200" : ""
            }`}
          >
            {chat.title}
          </div>
        ))}
      </div>

      {/* Выбранный чат */}
      <div className="flex-1 flex flex-col p-2">
        {selectedChat ? (
          <>
            <div className="flex-1 overflow-y-auto border p-2 mb-2">
              {selectedChat?.messages?.map((msg) => (
                <div key={msg.id}>
                  <b>{msg.user.name}:</b> {msg.text}
                </div>
              )) || <div>No messages yet</div>}
            </div>

            <div className="flex">
              <input
                type="text"
                placeholder="Type message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="border p-1 flex-1 mr-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-500 text-white p-2 rounded"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div>Select a chat</div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;

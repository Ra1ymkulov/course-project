"use client";

import { useSocket } from "@/src/app/providers/SocketProvider";
import { createChat, getMyChats } from "@/src/entities/chat/api/chatService";
import { useChatStore } from "@/src/entities/chat/model/chat.store";
import { Chat } from "@/src/entities/chat/types";
import { useGetUserQuery } from "@/src/entities/user/api/useApi";
import { useEffect, useState } from "react";

const ChatPageUser = () => {
  const { chats, setChats, selectedChat, selectChat } = useChatStore();
  const { socket } = useSocket();
  const { data: user } = useGetUserQuery();
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
  const handleSendMessage = () => {
    if (!socket || !selectedChat || !messageText) return;
    socket.emit("sendMessage", {
      chatId: selectedChat.id,
      text: messageText,
    });
    setMessageText("");
  };

  const handleCreateChat = async () => {
    if (!newChatTitle || !newChatUsers) return;

    try {
      const usersArray = newChatUsers.split(",").map((u) => u.trim());
      const chat: Chat = await createChat(newChatTitle, usersArray);
      setChats([...chats, chat]);
      selectChat(chat);
      setNewChatTitle("");
      setNewChatUsers("");
    } catch (err) {
      console.error("Failed to create chat:", err);
    }
  };
  const formatMessageDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const startOfMessageDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const diffDays = Math.floor(
      (startOfToday.getTime() - startOfMessageDay.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (diffDays === 0) return `Сегодня, ${time}`;
    if (diffDays === 1) return `Вчера, ${time}`;
    if (diffDays === 2) return `Позавчера, ${time}`;

    const fullDate = date.toLocaleDateString("ru-RU");
    return `${fullDate}, ${time}`;
  };

  return (
    <div className="grid grid-cols-[400px_1fr] w-full h-175 border-r border-b border-gray-500">
      <div className="border-gray-500 border-r">
        {chats?.length > 0 ? (
          chats.map((item, index) => (
            <div
              onClick={() => {
                selectChat(item), socket?.emit("joinRoom", item.id);
              }}
              key={index}
              className="flex items-center gap-3 p-3 border-b border-gray-500"
            >
              <img
                src={
                  item.users.find((el) => el.user.id !== user?.id)?.user
                    .avatar || "/images/images.jpeg"
                }
                className="w-20 h-20 rounded-full"
                alt="/images/images.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-2xl">
                  {item.users.map(
                    (el) => el.user.id !== user?.id && el.user.name
                  )}
                </p>
                {selectedChat?.messages && (
                  <p className="text-xs">
                    {
                      selectedChat.messages[selectedChat.messages.length - 1]
                        ?.text
                    }
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            Загрузка...
          </div>
        )}
      </div>
      <div className="flex flex-col">
        {selectedChat ? (
          <>
            <div className="w-full h-162 flex flex-col gap-3 overflow-y-auto border-b p-2 ">
              {selectedChat?.messages?.map((el) => (
                <div
                  className={`
                   flex flex-col gap-1   ${
                     el.user.id === user?.id ? "items-end" : "items-start"
                   } 
                  `}
                  key={el.id}
                >
                  <p
                    className={`py-2 px-6 ${
                      el.user.id === user?.id ? "bg-[#23A6F0]" : "bg-[#363636]"
                    }    text-white`}
                  >
                    {el.text}
                  </p>
                  <p className="text-xs">{formatMessageDate(el.createdAt)}</p>
                </div>
              )) || <div>No messages yet</div>}
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="w-full h-13 pl-4 outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#23A6F0] text-white p-2 rounded"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            Выберите чат
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPageUser;

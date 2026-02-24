import { create } from "zustand";
import { Chat, Message } from "../types";

interface ChatState {
  chats: Chat[];
  selectedChat?: Chat;

  setChats: (chats: Chat[]) => void;
  selectChat: (chat: Chat) => void;
  addMessage: (message: Message) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chats: [],
  selectedChat: undefined,

  // ✅ Установка списка чатов
  setChats: (chats) =>
    set({
      chats: chats.map((chat) => ({
        ...chat,
        messages: chat.messages || [], // защита если сообщений нет
      })),
    }),

  // ✅ Выбор чата
  selectChat: (chat) =>
    set({
      selectedChat: {
        ...chat,
        messages: chat.messages || [], // защита от undefined
      },
    }),

  // ✅ Добавление нового сообщения (realtime)
  addMessage: (message) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === message.chatId
          ? {
              ...chat,
              // 🔥 ГЛАВНАЯ ЗАЩИТА ОТ ОШИБКИ
              messages: [...(chat.messages || []), message],
            }
          : chat
      ),

      selectedChat:
        state.selectedChat?.id === message.chatId
          ? {
              ...state.selectedChat,
              // 🔥 ГЛАВНАЯ ЗАЩИТА ОТ ОШИБКИ
              messages: [...(state.selectedChat.messages || []), message],
            }
          : state.selectedChat,
    })),
}));

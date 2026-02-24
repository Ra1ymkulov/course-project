import { BASE_URL } from "@/src/shared/api";
import { Chat } from "../types";
import { Message } from "react-hook-form";
import { token } from "@/src/shared/lib/token";

export const getMyChats = async () => {
  const response = await BASE_URL.get<Chat[]>("/chat", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getAllChats = async () => {
  const response = await BASE_URL.get<Chat[]>("/chat/all", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
};

export const createChat = async (
  title: string,
  users: string[],
  avatar?: string
) => {
  const response = await BASE_URL.post<Chat>(
    "/chat",
    { title, users, avatar },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const sendMessage = async (chatId: string, text: string) => {
  const response = await BASE_URL.post<Message>(
    "/chat/message",
    { chatId, text },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(chatId, text);

  return response.data;
};

export const deleteChat = async (chatId: string) => {
  const response = await BASE_URL.delete(`/chat/${chatId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

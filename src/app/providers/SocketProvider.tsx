"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { io, type Socket } from "socket.io-client";
import { token } from "@/src/shared/lib/token";
import { Message } from "@/src/entities/chat/types";
import { useChatStore } from "@/src/entities/chat/model/chat.store";

interface ServerToClientEvents {
  newMessage: (message: Message) => void;
}

interface ClientToServerEvents {
  sendMessage: (message: { chatId: string; text: string }) => void;

  // ✅ ДОБАВЛЕНО: чтобы TypeScript знал про joinRoom
  joinRoom: (chatId: string) => void;
}

interface SocketContextValue {
  socket?: Socket<ServerToClientEvents, ClientToServerEvents>;
}

const SocketContext = createContext<SocketContextValue>({});

export const useSocket = () => useContext(SocketContext);

interface Props {
  children: ReactNode;
}

export const SocketProvider = ({ children }: Props) => {
  const [socket, setSocket] =
    useState<Socket<ServerToClientEvents, ClientToServerEvents>>();

  const addMessage = useChatStore((state) => state.addMessage);

  // ✅ ДОБАВЛЕНО: берём выбранный чат
  const selectedChat = useChatStore((state) => state.selectedChat);
  useEffect(() => {
    if (!socket || !selectedChat) return;

    socket.emit("joinRoom", selectedChat.id);
    console.log("JOIN ROOM:", selectedChat.id);
  }, [socket, selectedChat]);
  useEffect(() => {
    if (!token) return;

    const s: Socket<ServerToClientEvents, ClientToServerEvents> = io(
      "http://localhost:5000",
      {
        auth: { token },
        // transports: ["websocket"],
      }
    );

    setSocket(s);

    s.on("newMessage", (message) => {
      console.log("NEW MESSAGE:", message);
      addMessage(message);
    });

    return () => {
      s.disconnect();
    };
  }, [addMessage]);

  // ✅ ДОБАВЛЕНО: автоматическое подключение к комнате чата

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

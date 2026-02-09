"use client";

import { useGetUserQuery } from "@/src/entities/user/api/useApi";
import { useUserStore } from "@/src/entities/user/model/userstore";
import { useEffect } from "react";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { data: user } = useGetUserQuery();
  const setUser = useUserStore((state) => state.setUser);
  useEffect(() => {
    if (user) setUser(user);
  }, [user]);
  return children;
}

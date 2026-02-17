"use client";
import { USER_API } from "@/src/shared/api";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
interface Decode {
  id: string;
  email: string;
  iat: number;
  exp: number;
}
const useGetUserQuery = () => {
  const token =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;
  return useQuery<USER.GetUser, Error>({
    queryKey: ["/user", token],
    queryFn: async () => {
      const decoded = jwtDecode<Decode>(token);
      const response = await USER_API.get(`/user/user/${decoded.id}`);
      return response.data.user;
    },
    enabled: !!token,
  });
};
export { useGetUserQuery };

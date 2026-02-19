"use client";
import { USER_API } from "@/src/shared/api/user";
import { useQuery } from "@tanstack/react-query";

const useGetUserByIdQuery = (id?: string) => {
  return useQuery<User, Error>({
    queryKey: ["/user"],
    queryFn: async () => {
      const response = await USER_API.get(`/user/user/${id}`);
      return response.data.user;
    },
  });
};
export { useGetUserByIdQuery };

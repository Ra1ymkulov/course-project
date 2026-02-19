"use client";
import { USER_API } from "@/src/shared/api";
import { useQuery } from "@tanstack/react-query";

const useGetUsersQuery = () => {
  return useQuery<USERS.GetUsers, Error>({
    queryKey: ["/users"],
    queryFn: async () => {
      const response = await USER_API.get(`/user/users`);
      return response.data.users;
    },
  });
};
export { useGetUsersQuery };

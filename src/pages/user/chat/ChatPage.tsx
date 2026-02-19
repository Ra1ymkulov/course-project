"use client";

import { useCourseStore } from "@/src/entities/course/model/coursestore";
import { useGetUserQuery } from "@/src/entities/user/api/useApi";
import { useUserStore } from "@/src/entities/user/model/userstore";

const ChatPage = () => {
  const { data: userQuery } = useGetUserQuery();
  const user = useUserStore((state) => state.user);
  const course = useCourseStore((state) => state.course);

  return (
    <div>
      <h1 className="text-3xl font-bold ">ChatPage</h1>
      <div>{userQuery?.name}</div>
      <div className="text-red-500">{user?.name}</div>
    </div>
  );
};

export default ChatPage;

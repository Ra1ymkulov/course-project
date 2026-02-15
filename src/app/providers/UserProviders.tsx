"use client";

import { useGetAllCoursesQuery } from "@/src/entities/course/api/useCourse";
import { useCourseStore } from "@/src/entities/course/model/coursestore";
import { useGetUserQuery } from "@/src/entities/user/api/useApi";
import { useUserStore } from "@/src/entities/user/model/userstore";
import { useEffect } from "react";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { data: user } = useGetUserQuery();
  const { data: course } = useGetAllCoursesQuery();
  const setUser = useUserStore((state) => state.setUser);
  const setCourse = useCourseStore((state) => state.setCourse);
  useEffect(() => {
    if (user) setUser(user);
  }, [user]);
  useEffect(() => {
    if (course) setCourse(course);
  }, [course]);
  return children;
}

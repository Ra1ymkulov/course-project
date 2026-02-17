"use client";
import { USER_API } from "@/src/shared/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllCoursesQuery = () => {
  return useQuery<COURSE.GetCourse, Error>({
    queryKey: ["/course"],
    queryFn: async () => {
      const response = await USER_API.get("/course/get-all-courses");
      return response.data.courses;
    },
  });
};
const useGetAllCategoryQuery = () => {
  return useQuery<CATEGORY.GetCategory, Error>({
    queryKey: ["/category"],
    queryFn: async () => {
      const response = await USER_API.get("/course/get-all-category");
      return response.data.category;
    },
  });
};
const useGetAllVideoQuery = () => {
  return useQuery<VIDEO.GetVideo, Error>({
    queryKey: ["/video"],
    queryFn: async () => {
      const response = await USER_API.get("/course/get-all-video");
      return response.data.video;
    },
  });
};
export { useGetAllCoursesQuery, useGetAllCategoryQuery, useGetAllVideoQuery };

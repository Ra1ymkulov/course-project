"use client";
import { USER_API } from "@/src/shared/api/user";
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
const useGetCourseByIdQuery = (id: string | string[] | undefined) => {
  return useQuery<COURSE.GetCourse, Error>({
    queryKey: ["/one-course", id],
    queryFn: async () => {
      const response = await USER_API.get(`/course/get-course-by-id/${id}`);
      return response.data.course;
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
    queryKey: ["/videos"],
    queryFn: async () => {
      const response = await USER_API.get("/course/get-all-video");

      return response.data.video;
    },
  });
};
const useGetVideoByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ["/video"],
    queryFn: async () => {
      const response = await USER_API.get(`/course/get-video-by/${id}`);

      return response.data.video;
    },
  });
};
export {
  useGetAllCoursesQuery,
  useGetAllCategoryQuery,
  useGetAllVideoQuery,
  useGetVideoByIdQuery,
  useGetCourseByIdQuery,
};

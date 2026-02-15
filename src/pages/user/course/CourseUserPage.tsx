"use client";

import { useGetAllCategoryQuery } from "@/src/entities/course/api/useCourse";
import { useCourseStore } from "@/src/entities/course/model/coursestore";
import CourseCardUserComponents from "@/src/shared/ui/course-card/CourseCardUserComponents";
import { useState } from "react";

const CourseUserPage = () => {
  const course = useCourseStore((state) => state.course);
  const { data: category } = useGetAllCategoryQuery();
  const [state, setState] = useState<string>("all");
  const filtered =
    state === "all"
      ? course
      : course?.filter((item) => item.category === state);
  return (
    <div className="mt-5 ml-5">
      <div className="flex flex-col items-center gap-10">
        <div className="flex items-center gap-5 pt-5">
          {category?.map((item) => (
            <button
              key={item.id}
              onClick={() => setState(item.type)}
              className={
                item.type === state
                  ? "button"
                  : "py-2.5 px-5 border border-gray-500 rounded-md"
              }
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="w-full h-140 overflow-x-auto overflow-y-hidden no-scrollbar">
          <div className="flex gap-4 w-max ">
            {filtered?.map((item) => (
              <CourseCardUserComponents item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseUserPage;

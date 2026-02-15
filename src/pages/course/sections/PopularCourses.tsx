"use client";
import { useGetAllCategoryQuery } from "@/src/entities/course/api/useCourse";
import { useCourseStore } from "@/src/entities/course/model/coursestore";
import CourseCardComponents from "@/src/shared/ui/course-card/CourseCardComponents";
import { useState } from "react";

const PopularCourses = () => {
  const course = useCourseStore((state) => state.course);
  const { data: category } = useGetAllCategoryQuery();
  const [state, setState] = useState<string>("all");
  const filtered =
    state === "all"
      ? course
      : course?.filter((item) => item.category === state);

  return (
    <div className="py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-4xl font-bold text-center">Популярные курсы</h1>
            <p className="text-base font-normal text-center w-150">
              Мы предоставляем множество функций, которые вы можете
              использовать. Постепенное накопление информация
            </p>
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
          </div>
          <div className="grid grid-cols-3 gap-20 py-12 mx-auto">
            {filtered?.map((item) => (
              <CourseCardComponents item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;

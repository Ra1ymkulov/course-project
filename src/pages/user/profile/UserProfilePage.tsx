"use client";

import { useCourseStore } from "@/src/entities/course/model/coursestore";
import { useUserStore } from "@/src/entities/user/model/userstore";
import CourseCardUserComponents from "@/src/shared/ui/course-card/CourseCardUserComponents";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const UserProfilePage = () => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const course = useCourseStore((state) => state.course);
  const category = [
    { id: "ui232y4iu2njsnd", name: "Все курсы", type: "all" },
    { id: "ui232y4iu2njwdwd", name: "Бесплатные", type: "free" },
    { id: "ui232y4iasdajsnd", name: "Платные", type: "paid" },
  ];
  const [state, setState] = useState<string>("all");
  const filtered =
    state === "all"
      ? course
      : state === "free"
      ? course?.filter((item) => +item.price === 0)
      : course?.filter((item) => +item.price > 0);

  return (
    <div className="mt-5 ml-5 flex flex-col gap-3">
      <div className="border border-gray-500 rounded-lg w-full h-75 relative">
        <div className="flex flex-col">
          {user?.banner ? (
            <img
              className="w-full h-45 rounded-t-lg absolute left-0 top-0 z-0"
              src={user?.banner}
              alt=""
            />
          ) : (
            <div className="w-full h-45 rounded-t-lg bg-gray-200 absolute left-0 top-0 z-0"></div>
          )}
          <div className=" w-full h-29.5 rounded-b-lg absolute left-0 bottom-4 flex items-end justify-between px-5">
            <div className="flex items-end gap-5">
              {user?.avatar ? (
                <img
                  className="w-40 h-40 rounded-full"
                  src={user?.avatar}
                  alt=""
                />
              ) : (
                <div className="w-40 h-40 rounded-full flex items-center justify-center border border-gray-500 bg-gray-200">
                  <FaUser className="text-3xl text-gray-500" />
                </div>
              )}
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl">{user?.name}</h1>
                <p className="text-sm">
                  {user?.role === "STUDENT" ? "Студент" : "Владелец"}
                </p>
              </div>
            </div>
            <button
              onClick={() => router.push("/user/setting")}
              className="button"
            >
              Редактировать
            </button>
          </div>
        </div>
      </div>
      <div className="border border-gray-500 rounded-lg w-full h-full mb-5">
        {user?.role === "STUDENT" ? (
          <div className="flex items-center gap-5 pt-5 pl-5"></div>
        ) : (
          <div className="flex items-center gap-5 pt-5 pl-5 pb-5">
            {category?.map((category) => (
              <button
                key={category.id}
                onClick={() => setState(category.type)}
                className={
                  category.type === state
                    ? "button"
                    : "py-2.5 px-5 border border-gray-500 rounded-md"
                }
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
        <div className="w-full h-full pl-5 pb-7 overflow-x-auto overflow-y-hidden no-scrollbar">
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

export default UserProfilePage;

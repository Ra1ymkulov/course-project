"use client";
import { FC, useState } from "react";
import { IoLockClosedOutline, IoPlay } from "react-icons/io5";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface IProps {
  course: any;
}
const Lessons: FC<IProps> = ({ course }) => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <section className="py-20">
      <div className="container">
        <div className="">
          {course.work.map((item: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-col gap-5 border-t-[1.5px] border-solid border-black/10 py-4"
            >
              <div className="flex justify-between items-center gap-10">
                <span className="font-semibold text-sm ">
                  Урок {item.id}: {item.name}
                </span>
                {currentItem === item.id ? (
                  <MdOutlineKeyboardArrowUp
                    onClick={() => setCurrentItem(0)}
                    className="bg-[#23A6F0] rounded-[50%] p-1 text-white text-2xl"
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown
                    onClick={() => setCurrentItem(item.id)}
                    className="bg-black/20 hover:border-2 hover:text-[#23A6F0] hover:border-[#23A6F0] hover:bg-white rounded-[50%] p-1 text-white text-2xl"
                  />
                )}
              </div>
              {currentItem === item.id && (
                <div className="flex gap-10 my-10 overflow-x-scroll w-full no-scrollbar">
                  {item.lessons.map((el: any, idx: number) => (
                    <div
                      className="flex flex-col gap-2 w-70 shrink-0"
                      key={idx}
                    >
                      <div className="relative">
                        <img src={el.video} alt="" />
                        <span className="absolute bottom-2 left-2 z-10 px-2 bg-black/50 text-white text-xs rounded-md p-1">
                          {el.time}
                        </span>
                        {el.lock ? (
                          <IoLockClosedOutline className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#23A6F0] text-white rounded-[50%] p-1.5 text-3xl" />
                        ) : (
                          <IoPlay className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#23A6F0] text-white rounded-[50%] p-1.5 text-3xl" />
                        )}
                      </div>
                      <h2 className="text-xs text-black/50 font-semibold">
                        {el.courseName}
                      </h2>
                      <p className="text-sm font-semibold">{el.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lessons;

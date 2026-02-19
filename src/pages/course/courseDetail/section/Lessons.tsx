"use client";
import { useParams, useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaPlay } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface IProps {
  course: any;
}
const Lessons: FC<IProps> = ({ course }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const router = useRouter();
  const params = useParams();

  if (!course.lessons) {
    return (
      <div className="container">
        <h1>Нету такого урока</h1>
      </div>
    );
  }
  return (
    <section className="py-20 w-full">
      <div className="container">
        <div className="">
          {course.lessons?.map((item: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-col gap-5 border-t-[1.5px] border-solid border-black/10 py-4"
            >
              <div className="flex justify-between items-center gap-10">
                <span className="font-semibold text-sm ">{item.title}</span>
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
                  {item.videos
                    ?.sort((a: any, b: any) => a.id - b.id)
                    .map((el: any, idx: number) => (
                      <div
                        className="flex flex-col gap-2 w-90 shrink-0"
                        key={idx}
                      >
                        <div
                          className="relative"
                          onClick={() =>
                            router.push(`/course/${params?.id}/${item.id}`)
                          }
                        >
                          <img
                            src={el.preview}
                            alt="lesson"
                            className="rounded w-full h-50 object-cover"
                          />
                          <div className="">
                            <div className="absolute top-[50%] left-[50%] translate-[-50%] flex items-center justify-center text-blue-400 p-3 bg-blue-400 rounded-[50%]">
                              <FaPlay fontSize="large" color="white" />
                            </div>
                          </div>
                          <span className="absolute bottom-2 left-2 z-10 px-2 bg-black/50 text-white text-xs rounded-md p-1">
                            {`${Math.floor(el.duration / 60)}ч ${el.duration % 60}м`}
                          </span>
                        </div>
                        <h2 className="text-xs text-black/50 font-semibold">
                          {course.title}
                        </h2>
                        <p className="text-sm font-semibold">{el.title}</p>
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

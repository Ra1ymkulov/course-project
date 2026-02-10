"use client";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { IoIosChatbubbles } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between w-70 min-h-screen border-r border-gray-500">
      <div className="flex flex-col gap-2.5 items-start cursor-pointer">
        <div
          className="flex items-center gap-3 py-5 text-gray-500 w-full"
          onClick={() => router.push("/user")}
        >
          <FaUser />
          <p>Профиль</p>
        </div>
        <div
          className="flex items-center gap-3 py-5 text-gray-500 w-full"
          onClick={() => router.push("/user/chat")}
        >
          <IoIosChatbubbles />
          <p>Чат</p>
        </div>
        <div className="flex items-center gap-3 py-5 text-gray-500 w-full">
          <IoBookSharp />
          <p>Курсы</p>
        </div>
        <div className="flex items-center gap-3 py-5 text-gray-500 w-full">
          <FaStar />
          <p>Оценить</p>
        </div>
        <div className="flex items-center gap-3 py-5 text-gray-500 w-full">
          <IoMdSettings />
          <p>Настройки</p>
        </div>
      </div>
      <div className="flex flex-col gap2.5">
        <div className="flex items-center gap-3 py-5 text-gray-500 w-full">
          <BsFillQuestionCircleFill />
          <p>Помощь</p>
        </div>
        <div className="flex items-center gap-3 py-5 text-gray-500 w-full">
          <IoLogOutOutline />
          <p>Выйти</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

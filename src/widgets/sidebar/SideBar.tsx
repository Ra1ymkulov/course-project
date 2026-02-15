"use client";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { IoIosChatbubbles } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { useUserStore } from "@/src/entities/user/model/userstore";
import { useState } from "react";

const SideBar = () => {
  const router = useRouter();
  const [modal, setModal] = useState<boolean>(false);
  const logout = useUserStore((state) => state.logout);
  function logoutFn() {
    logout();
    router.push("/");
  }
  return (
    <div className="flex flex-col w-full border-r border-gray-500 gap-40">
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
        <div
          className="flex items-center gap-3 py-5 text-gray-500 w-full"
          onClick={() => router.push("/user/students")}
        >
          <FaStar />
          <p>Студенты</p>
        </div>
        <div
          onClick={() => router.push("/user/course")}
          className="flex items-center gap-3 py-5 text-gray-500 w-full"
        >
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
      <div className="flex flex-col gap2.5 cursor-pointer">
        <div className="flex items-center gap-3 py-5 text-gray-500 w-full">
          <BsFillQuestionCircleFill />
          <p>Помощь</p>
        </div>
        <div
          onClick={() => setModal(true)}
          className="flex items-center gap-3 py-5 text-gray-500 w-full hover:text-red-500"
        >
          <IoLogOutOutline />
          <p>Выйти</p>
        </div>
      </div>
      {modal && (
        <div className="absolute top-0 left-0 w-full min-h-screen bg-black/80 z-100 flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl text-white">Выйти с аккаунта?</h1>
          <div className="flex items-center gap-5">
            <button
              className="text-white py-2 px-4 border border-gray-400 rounded-sm"
              onClick={() => setModal(false)}
            >
              Отменить
            </button>
            <button
              className="text-white bg-red-500 py-2 px-4 rounded-sm"
              onClick={logoutFn}
            >
              Подтвердить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;

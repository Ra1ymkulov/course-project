"use client";

import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between w-[320px] min-h-screen border-r border-gray-500">
      <div className="flex flex-col gap-2.5">
        <div onClick={() => router.push("/user")}>
          <p>Профиль</p>
        </div>
        <div onClick={() => router.push("/user/chat")}>
          <p>Чат</p>
        </div>
        <div>
          <p>Курсы</p>
        </div>
        <div>
          <p>Оценить</p>
        </div>
        <div>
          <p>Настройки</p>
        </div>
      </div>
      <div className="flex flex-col gap2.5">
        <div>
          <p>Помощь</p>
        </div>
        <div>
          <p>Выйти</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

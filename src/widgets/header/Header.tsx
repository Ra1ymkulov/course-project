"use client";
import { useGetUserQuery } from "@/src/entities/user/api/useApi";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const hideHeader = pathname?.startsWith("/auth");
  const { data: user } = useGetUserQuery();
  return !hideHeader ? (
    <header className={`${user ? "" : ""} py-5`}>
      <div className="container">
        {user ? (
          <div className="flex items-center justify-between gap-4">
            <h1
              onClick={() => router.push("/")}
              className="text-2xl font-medium"
            >
              Logo
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm border border-gray-500 flex items-center justify-center">
                <IoMdNotificationsOutline className="text-[23px] text-gray-500" />
              </div>
              {user.avatar ? (
                <img
                  className="w-10 h-10 rounded-full border border-gray-500"
                  src={user.avatar}
                  onClick={() => router.push("/user")}
                  alt=""
                />
              ) : (
                <div className="w-10 h-10 rounded-sm border border-gray-500 flex items-center justify-center">
                  <FaRegUser className="text-[18px] text-gray-500" />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <h1
              onClick={() => router.push("/")}
              className="text-2xl font-medium"
            >
              Logo
            </h1>
            <nav>
              <p onClick={() => router.push("/")}>Главная</p>
              <p onClick={() => router.push("/about-us")}>О нас</p>
              <p onClick={() => router.push("/course")}>Курсы</p>
              <p>Контакты</p>
            </nav>
            <div className="flex items-center gap-2.5">
              <button className="py-2.5 px-5 font-medium text-base">
                Войти
              </button>
              <button
                onClick={() => {
                  router.push("/auth/login");
                }}
                className="button flex items-center gap-2.5"
              >
                Присоединяйся
                <IoIosArrowRoundForward className="text-xl" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  ) : (
    ""
  );
};

export default Header;

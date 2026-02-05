"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  const router = useRouter();
  let isAuth = false;
  return isAuth ? (
    <header className="py-5">
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          <h4>Logo</h4>
          <nav>
            <p onClick={() => router.push("/")}>Главная</p>
            <p onClick={() => router.push("/about-us")}>О нас</p>
            <p onClick={() => router.push("/course")}>Курсы</p>
            <p>Контакты</p>
          </nav>
          <div className="flex items-center gap-2.5">
            <button className="py-2.5 px-5 font-medium text-base">Войти</button>
            <button
              onClick={() => {
                router.push("/auth/login");
                isAuth = true;
              }}
              className="button flex items-center gap-2.5"
            >
              Присоединяйся
              <IoIosArrowRoundForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  ) : (
    ""
  );
};

export default Header;

import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <header className="py-5">
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          <h4>Logo</h4>
          <nav>
            <p>Главная</p>
            <p>О нас</p>
            <p>Курсы</p>
            <p>Контакты</p>
          </nav>
          <div className="flex items-center gap-2.5">
            <button className="py-2.5 px-5 font-medium text-base">Войти</button>
            <button className="button flex items-center gap-2.5">
              Присоединяйся
              <IoIosArrowRoundForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

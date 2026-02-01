import { IoTicket } from "react-icons/io5";
import { IoIosCard } from "react-icons/io";
import { IoMapOutline } from "react-icons/io5";

const Info = () => {
  return (
    <section className="py-20 pt-0">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-20 gap-y-10">
          <div className="w-80 flex flex-col justify-between gap-5 shadow-[0_3px_7px_rgba(0,0,0,0.2)] p-10 rounded-md ">
            <div className="bg-[#23a6f0] rounded-xl w-16 h-18 flex items-center justify-center text-white">
              <IoTicket fontSize={29} />
            </div>
            <h2 className="font-bold">Пожизненный доступ</h2>
            <div className="bg-[#E74040] w-1/5 h-0.5"></div>
            <p className="text-[12px]">
              Постепенное накопление информация об атомном и мелкомасштабное
              поведение...
            </p>
          </div>
          <div className="w-80 flex flex-col justify-between gap-5 shadow-[0_3px_7px_rgba(0,0,0,0.2)] p-10 rounded-md ">
            <div className="bg-[#40BB15] rounded-xl w-16 h-18 flex items-center justify-center text-white">
              <IoIosCard fontSize={29} />
            </div>
            <h2 className="font-bold">Сертифицированный преподаватель</h2>
            <div className="bg-red-500 w-1/5 h-0.5"></div>
            <p className="text-[12px]">
              Постепенное накопление информация об атомном и мелкомасштабное
              поведение...
            </p>
          </div>
          <div className="w-80 flex flex-col justify-between gap-5 shadow-[0_3px_7px_rgba(0,0,0,0.2)] p-10 rounded-md ">
            <div className="bg-[#3C403D] rounded-xl w-16 h-18 flex items-center justify-center text-white">
              <IoMapOutline fontSize={29} />
            </div>
            <h2 className="font-bold">Обучающие курсы</h2>
            <div className="bg-red-500 w-1/5 h-0.5"></div>
            <p className="text-[12px]">
              Постепенное накопление информация об атомном и мелкомасштабное
              поведение...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

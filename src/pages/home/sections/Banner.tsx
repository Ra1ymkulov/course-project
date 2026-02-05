"use client";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="py-15">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-10 w-full max-w-120">
            <h1 className="font-xl text-3xl font-bold">
              Надо много учиться, чтобы знать хоть немного.
            </h1>
            <p>
              Обеспечьте сеть для всех ваших потребностей легко и весело,
              используя наши курсы.Откройте для себя интересные функции от нас.
            </p>
            <button className="button w-1/2">Начать</button>
          </div>
          <Image
            width={400}
            height={200}
            src="/images/banner.svg"
            alt="bannerImg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

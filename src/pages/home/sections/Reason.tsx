"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Reason = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const startFnRef1 = useRef<(() => void) | null>(null);
  const startFnRef2 = useRef<(() => void) | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            if (startFnRef1.current) startFnRef1.current();
            if (startFnRef2.current) startFnRef2.current();
          }
        });
      },
      { threshold: 0.4 },
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [started]);

  return (
    <div className="container">
      <section ref={sectionRef} className="py-10 w-[105%] ml-auto">
        <div className="flex flex-wrap">
          <div className="w-1/2 flex flex-col justify-between gap-10 min-h-150 py-2 min-w-120">
            <div>
              <h1 className="text-4xl font-bold mb-5">
                Почему (название кур.)
              </h1>
              <p className="text-[#737373] text-[14px]">
                Мы предоставляем множество функций, которые вы можете
                использовать. Постепенное накопление информация
              </p>
            </div>
            <div>
              <h1 className="text-[70px] font-semibold text-[#23A6F0]">
                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  decimals={0}
                  separator=" "
                  suffix="%"
                  redraw={false}
                >
                  {({ countUpRef, start }) => {
                    startFnRef1.current = start;
                    return <span ref={countUpRef} />;
                  }}
                </CountUp>
              </h1>
              <p className="text-[#737373] text-[14px]">
                Мы предоставляем множество функций, которые вы можете
                использовать. Постепенное накопление информация
              </p>
            </div>
            <div>
              <h1 className="text-[70px] font-semibold text-[#23A6F0]">
                <CountUp
                  start={0}
                  end={80}
                  duration={3}
                  decimals={0}
                  separator=" "
                  suffix="%"
                  redraw={false}
                >
                  {({ countUpRef, start }) => {
                    startFnRef2.current = start;
                    return <span ref={countUpRef} />;
                  }}
                </CountUp>
              </h1>
              <p className="text-[#737373] text-[14px]">
                Мы предоставляем множество функций, которые вы можете
                использовать. Постепенное накопление информация
              </p>
            </div>
          </div>
          <div className="w-1/2 p-20 py-10 bg-[#F5F9FC] flex flex-col gap-8 justify-evenly">
            <div className="flex items-center gap-5 w-full max-w-120">
              <img src="/images/Vector.svg" alt="" />
              <div>
                <h4 className="text-2xs font-bold mb-1">Личное обучение</h4>
                <p className="text-[14px] text-[#737373]">
                  Постепенное накопление информация об атомном и мелкомасштабное
                  поведение...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 w-full max-w-120">
              <img src="/images/Vector-1.svg" alt="" />
              <div>
                <h4 className="text-2xs font-bold mb-1">Интерактивные уроки</h4>
                <p className="text-[14px] text-[#737373]">
                  Постепенное накопление информация об атомном и мелкомасштабное
                  поведение...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 w-full max-w-120">
              <img src="/images/support_svgrepo.com.svg" alt="" />
              <div>
                <h4 className="text-2xs font-bold mb-1">
                  24/7 Поддержка учеников
                </h4>
                <p className="text-[14px] text-[#737373]">
                  Постепенное накопление информация об атомном и мелкомасштабное
                  поведение...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reason;

import React from "react";
import Banner from "./sections/Banner";
import Lessons from "./sections/Lessons";

const Marketing = () => {
  const course = {
    name: "Маркетинг",
    description:
      "Мы предоставляем множество функций, которые вы можете использовать. Постепенное накоплениеинформация ",
    banner: "/images/marketingMainImage.svg",
    descriptionHeadline: [
      {
        text: "Прежде чем разбирать бизнес-кейсы, стоит поговорить об основах финансовой грамотности. На вопрос, как сохранить деньги, Маргулан Калиевич предлагает несколько стратегий:",
      },
      {
        subtitle: "Фиксированный налог",
        text: "на будущее и безопасность. С каждого своего дохода откладывайте по 10% на будущее и на безопасность. Прелесть этой стратегии в том, что она подходит как длялюдей с доходом 500$, так и для людей с доходом 500 000$.",
      },
      {
        subtitle: "Прогрессивный налог",
        text: "на будущее. Суть метода в том, что вы откладываете не 10%, а столько, сколько вам лет. Например, если вам 30, то и налог — 30%. Это могут позволить уже не все, зато для обладателей больших доходов такой подход более уместен, ведь он лучше страхует от рисков, связанных с предпринимательской деятельностью.",
      },
      {
        subtitle: "Регрессивный налог",
        text: "на будущее. В данном случае вы откладываете не такой процент, сколько вам лет, а процент, равный вычитанию возраста из 100. То есть если вам 30, то откладывайте 70% дохода. Очевидно, этот способ подойдёт только для тех, лишь малая доля дохода которых уже обеспечивает комфорт. Зато это неплохой задел на раннюю пенсию и безбедное детство детей.",
      },
      {
        textBottom:
          "Хранить эти деньги стоит диверсифицированно. 10% сбережений оставляйте в национальной валюте вашей страны. 90 % распределите на 3 валюты: швейцарский франк, норвежская крона, и что-то из: американского доллара, евро либо йены. Рассмотрите варианты сбережений вгосударственных бумагах, фиксированных к инфляции.Эти рекомендации касаются личного бюджета. Ниже мы рассмотрим основные финансовые рискив бизнесе и стратегии управления ими.",
      },
    ],
    work: [
      {
        id: 1,
        name: "Ознакомление",
        lessons: [
          {
            courseName: "1. Ознакомление",
            video: "/images/videoImg.svg",
            lock: false,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "2. Ознакомление",
            video: "/images/videoImg.svg",
            lock: true,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "3. Ознакомление",
            video: "/images/videoImg.svg",
            lock: true,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "4. Ознакомление",
            video: "/images/videoImg.svg",
            lock: true,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
        ],
      },
      {
        id: 2,
        name: "Методы бизнеса",
        lessons: [
          {
            courseName: "1. Методы бизнеса",
            video: "/images/videoImg.svg",
            lock: false,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "2. Методы бизнеса",
            video: "/images/videoImg.svg",
            lock: false,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "3. Методы бизнеса",
            video: "/images/videoImg.svg",
            lock: true,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "4. Методы бизнеса",
            video: "/images/videoImg.svg",
            lock: true,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
        ],
      },
      {
        id: 3,
        name: "Как начать зарабатывать больше",
        lessons: [
          {
            courseName: "1. Как начать зарабатывать больше",
            video: "/images/videoImg.svg",
            lock: false,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "2. Как начать зарабатывать больше",
            video: "/images/videoImg.svg",
            lock: true,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "3. Как начать зарабатывать больше",
            video: "/images/videoImg.svg",
            lock: true,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "4. Как начать зарабатывать больше",
            video: "/images/videoImg.svg",
            lock: true,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
        ],
      },
      {
        id: 4,
        name: "Заключение",
        lessons: [
          {
            courseName: "1. Заключение",
            video: "/images/videoImg.svg",
            lock: false,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "2. Заключение",
            video: "/images/videoImg.svg",
            lock: false,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "3. Заключение",
            video: "/images/videoImg.svg",
            lock: true,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
          {
            courseName: "4. Заключение",
            video: "/images/videoImg.svg",
            lock: true,
            time: "1 ч. 23м.",
            description: "Как ставить о оценивать задачи",
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <Banner course={course} />
      {0 ? (
        <button className="button w-full max-w-80">Купить курс</button>
      ) : null}
      <Lessons course={course} />
    </div>
  );
};

export default Marketing;

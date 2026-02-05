import CourseCardComponents from "@/src/shared/ui/course-card/CourseCardComponents";

const AvailableCourses = () => {
  const dataCourse = [
    {
      id: 1,
      image: "/images/product-cover-76.svg",
      name: "Как ставить о оценивать задачи",
      description:
        "Мы ориентируемся на эргономику иты где работаешь. Это всего лишьнажатие клавиши.",
      timeLesson: "22ч 30мин",
      lessons: 64,
      progress: "Прогресс",
      price: 1200,
    },
    {
      id: 12,
      image: "/images/product-cover-76.svg",
      name: "Как ставить о оценивать задачи",
      description:
        "Мы ориентируемся на эргономику иты где работаешь. Это всего лишьнажатие клавиши.",
      timeLesson: "22ч 30мин",
      lessons: 64,
      progress: "Прогресс",
      price: 0,
    },
    {
      id: 13,
      image: "/images/product-cover-76.svg",
      name: "Как ставить о оценивать задачи",
      description:
        "Мы ориентируемся на эргономику иты где работаешь. Это всего лишьнажатие клавиши.",
      timeLesson: "22ч 30мин",
      lessons: 64,
      progress: "Прогресс",
      price: 0,
    },
  ];
  return (
    <div className="py-12">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-5xl font-bold">Доступные курсы</h1>
            <p className="text-base text-center max-w-135">
              Мы предоставляем множество функций, которые вы можете
              использовать. Постепенное накопление информация
            </p>
          </div>
          <div className="flex items-start justify-between gap-2.5 py-5">
            {dataCourse.map((item) => (
              <CourseCardComponents item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCourses;

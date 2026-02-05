"use client";
import CourseCardComponents from "@/src/shared/ui/course-card/CourseCardComponents";
import { useState } from "react";

const PopularCourses = () => {
  const dataCategory = [
    {
      id: 1,
      key: "all",
      name: "Все курсы",
    },
    {
      id: 2,
      key: "management",
      name: "Управление компанией",
    },
    {
      id: 3,
      key: "team_building",
      name: "Командообразование",
    },
    {
      id: 4,
      key: "marketing",
      name: "Маркетинг",
    },
    {
      id: 5,
      key: "sales",
      name: "Продажи",
    },
  ];
  const [categoryCourse, setCategoryCourse] = useState<string>("all");
  const dataCourse = [
    {
      id: 1,
      image: "/images/Frame 112.svg",
      name: "Как ставить о оценивать задачи",
      description:
        "Мы ориентируемся на эргономику иты где работаешь. Это всего лишьнажатие клавиши.",
      timeLesson: "22ч 30мин",
      lessons: 64,
      progress: "Прогресс",
      price: 1200,
      category: "management",
    },
    {
      id: 2,
      image: "/images/Frame 113.svg",
      name: "Как ставить о оценивать задачи",
      description:
        "Мы ориентируемся на эргономику иты где работаешь. Это всего лишьнажатие клавиши.",
      timeLesson: "22ч 30мин",
      lessons: 64,
      progress: "Прогресс",
      price: 0,
      category: "team_building",
    },
    {
      id: 4,
      image: "/images/Frame 114.svg",
      name: "Как ставить о оценивать задачи",
      description:
        "Мы ориентируемся на эргономику иты где работаешь. Это всего лишьнажатие клавиши.",
      timeLesson: "22ч 30мин",
      lessons: 64,
      progress: "Прогресс",
      price: 0,
      category: "marketing",
    },
    {
      id: 5,
      image: "/images/Frame 115.svg",
      name: "Как ставить о оценивать задачи",
      description:
        "Мы ориентируемся на эргономику иты где работаешь. Это всего лишьнажатие клавиши.",
      timeLesson: "22ч 30мин",
      lessons: 64,
      progress: "Прогресс",
      price: 0,
      category: "sales",
    },
    {
      id: 6,
      image: "/images/product-cover-76.svg",
      name: "Как ставить о оценивать задачи",
      description:
        "Мы ориентируемся на эргономику иты где работаешь. Это всего лишьнажатие клавиши.",
      timeLesson: "22ч 30мин",
      lessons: 64,
      progress: "Прогресс",
      price: 0,
      category: "sales",
    },
  ];
  const filteredCourses =
    categoryCourse === "all"
      ? dataCourse
      : dataCourse.filter((el) => el.category === categoryCourse);
  return (
    <div className="py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-4xl font-bold text-center">Популярные курсы</h1>
            <p className="text-base font-normal text-center w-150">
              Мы предоставляем множество функций, которые вы можете
              использовать. Постепенное накопление информация
            </p>
            <div className="flex items-center gap-5 pt-5">
              {dataCategory.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setCategoryCourse(category.key)}
                  className={
                    category.key === categoryCourse
                      ? "button"
                      : "py-2.5 px-5 border border-gray-500 rounded-md"
                  }
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20 py-12 mx-auto">
            {filteredCourses.map((item) => (
              <CourseCardComponents item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;

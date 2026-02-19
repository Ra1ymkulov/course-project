"use client";
import { IoTimeOutline } from "react-icons/io5";
import { FiBook } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
type CourseCardProps = {
  item: Course;
};
const CourseCardComponents = ({ item }: CourseCardProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-89 relative">
      {item.image ? (
        <img
          className="w-full h-75 object-cover rounded-t-md"
          src={item.image}
        />
      ) : (
        <img
          className="w-full h-75 object-cover rounded-t-md"
          src="/images/skeleton-image.webp"
        />
      )}
      <div className="w-full rounded-b-md shadow-lg p-5 flex flex-col gap-3">
        <h4 className="text-base font-bold">{item.theme}</h4>
        <p className="text-sm text-[#737373]">{item.description}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IoTimeOutline className="text-blue-500" />
            <span>30мин</span>
          </div>
          <div className="flex items-center gap-1">
            <FiBook className="text-red-500" />
            <span>{`${
              item.lessons && item.lessons.length > 0
                ? item.lessons.reduce(
                    (total, lesson) => total + (lesson.videos?.length || 0),
                    0,
                  )
                : 0
            } Уроков`}</span>
          </div>
          <div className="flex items-center gap-1">
            <BsGraphUp className="text-green-500" />
            <span>Прогресс</span>
          </div>
        </div>
        <button
          className="flex items-center justify-center text-[#23A6F0] w-48 h-11 border border-[#23A6F0] rounded-2xl"
          onClick={() => router.push(`/course/${item.id}`)}
        >
          Узнать больше
          <IoIosArrowForward className="text-lg" />
        </button>
        <p className="absolute top-2 left-2 bg-red-600 py-1 px-3 text-white rounded-lg text-base">
          {item.price > 0 ? `${item.price} сом` : "бесплатно"}
        </p>
      </div>
    </div>
  );
};

export default CourseCardComponents;

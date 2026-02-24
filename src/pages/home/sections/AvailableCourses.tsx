import { useGetAllCoursesQuery } from "@/src/entities/course/api/useCourse";
import CourseCardComponents from "@/src/shared/ui/course-card/CourseCardComponents";

const AvailableCourses = () => {
  const { data: dataCourse } = useGetAllCoursesQuery();
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
            {dataCourse?.slice(0, 3).map((item) => (
              <CourseCardComponents item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCourses;

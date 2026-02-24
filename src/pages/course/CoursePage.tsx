import ReviewCourse from "../home/sections/ReviewCourse";
import CourseBanner from "./sections/CourseBanner";
import PopularCourses from "./sections/PopularCourses";

const CoursePage = () => {
  return (
    <>
      <CourseBanner />
      <PopularCourses />
      <ReviewCourse />
    </>
  );
};

export default CoursePage;

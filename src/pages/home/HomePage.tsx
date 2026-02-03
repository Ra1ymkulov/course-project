"use client";
import AvailableCourses from "./sections/AvailableCourses";
import Banner from "./sections/Banner";
import Info from "./sections/Info";
import Reason from "./sections/Reason";
import ReviewCourse from "./sections/ReviewCourse";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Reason />
      <AvailableCourses />
      <ReviewCourse />
    </div>
  );
};

export default HomePage;

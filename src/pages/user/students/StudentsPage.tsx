"use client";
import { useGetAllVideoQuery } from "@/src/entities/course/api/useCourse";

const StudentsPage = () => {
  const { data: video } = useGetAllVideoQuery();
  const url = video?.filter((item) => item.id === 1);

  return (
    <div className="mt-5 ml-5">
      StudentsPage
      {url?.map((item) => (
        <video
          key={item.id}
          src={item.videoUrl}
          controls
          autoPlay={false}
          muted={true}
          width={200}
          height={200}
        />
      ))}
    </div>
  );
};

export default StudentsPage;

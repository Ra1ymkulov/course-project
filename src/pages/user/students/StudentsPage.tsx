"use client";
import { useGetAllVideoQuery } from "@/src/entities/course/api/useCourse";
import { useGetUserQuery } from "@/src/entities/user/api/useApi";
import { useGetUsersQuery } from "@/src/entities/users/useUserApi";
import StudentCard from "@/src/shared/ui/student-card/StudentCard";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

const StudentsPage = () => {
  // const { data: video } = useGetAllVideoQuery();
  // const url = video?.filter((item) => item.id === 1);
  const { data: users } = useGetUsersQuery();
  const { data: user } = useGetUserQuery();

  const students = users?.filter((item) => item.role === "STUDENT");

  const router = useRouter();

  console.log(users);
  console.log(students);

  return (
    <div className="mt-5 ml-5 flex flex-col gap-3">
      <div className="border border-gray-500 rounded-lg w-full h-75 relative">
        <div className="flex flex-col">
          {user?.banner ? (
            <img
              className="w-full h-45 rounded-t-lg absolute left-0 top-0 z-0"
              src={user?.banner}
              alt=""
            />
          ) : (
            <div className="w-full h-45 rounded-t-lg bg-gray-200 absolute left-0 top-0 z-0"></div>
          )}
          <div className=" w-full h-29.5 rounded-b-lg absolute left-0 bottom-4 flex items-end justify-between px-5">
            <div className="flex items-end gap-5">
              {user?.avatar ? (
                <img
                  className="w-40 h-40 rounded-full"
                  src={user?.avatar}
                  alt=""
                />
              ) : (
                <div className="w-40 h-40 rounded-full flex items-center justify-center border border-gray-500 bg-gray-200">
                  <FaUser className="text-3xl text-gray-500" />
                </div>
              )}
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl">{user?.name}</h1>
                <p className="text-sm">
                  {user?.role === "STUDENT" ? "Студент" : "Владелец"}
                </p>
              </div>
            </div>
            <button
              onClick={() => router.push("/user/setting")}
              className="button"
            >
              Редактировать
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 border border-[#6a7282] rounded-xl p-5 my-5">
        {students?.map((item) => (
          <StudentCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;

{
  /* {url?.map((item) => (
   <video
     key={item.id}
     src={item.videoUrl}
     controls
     autoPlay={false}
     muted={true}
     width={200}
     height={200}
   />
 ))} */
}

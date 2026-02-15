"use client";
import { useUserStore } from "@/src/entities/user/model/userstore";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

const SettingProfilePage = () => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[70vh] w-full">
        <h1>
          Войдите в аккаунт{" "}
          <button className="button" onClick={() => router.push("/auth/login")}>
            Войти
          </button>
        </h1>
      </div>
    );
  }
  return (
    <div className="mt-5 ml-5 flex flex-col gap-3">
      <div className="border border-gray-500 rounded-lg w-full h-75 relative">
        <div className="flex flex-col">
          {user.banner ? (
            <img
              className="w-full h-45 rounded-t-lg absolute left-0 top-0 z-0"
              src={user.banner}
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
                  src={user.avatar}
                  alt=""
                />
              ) : (
                <div className="w-40 h-40 rounded-full flex items-center justify-center border border-gray-500 bg-gray-200">
                  <FaUser className="text-3xl text-gray-500" />
                </div>
              )}
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl">{user.name}</h1>
                <p className="text-sm">
                  {user?.role === "STUDENT" ? "Студент" : "Владелец"}
                </p>
              </div>
            </div>
            <button
              onClick={() => router.push("/user/setting")}
              className="button"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingProfilePage;

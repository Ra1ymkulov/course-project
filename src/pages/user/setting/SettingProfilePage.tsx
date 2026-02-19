"use client";
import { useUserStore } from "@/src/entities/user/model/userstore";
import { useUpdateProfile } from "@/src/features/updateUser/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegImages, FaUser } from "react-icons/fa";

const SettingProfilePage = () => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);

  const { mutateAsync: updateProfile } = useUpdateProfile();

  const [avatarHover, setAvatarHover] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [privateMode, setPrivateMode] = useState(false);

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
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);
  const [banner, setBanner] = useState(user.banner);
  const [country, setCountry] = useState(user.country);
  const handleSubmit = () => {
    updateProfile({
      id: user.id,
      update: { name, email, avatar, banner, country },
    });
    router.push("/user");
  };
  return (
    <div className="mt-5 ml-5 flex flex-col gap-3">
      <div className="border border-gray-500 rounded-lg w-full relative">
        <div className="flex flex-col ">
          {user.banner ? (
            <div className="w-full h-45 rounded-t-lg absolute left-0 top-0 z-10">
              <img
                className="w-full h-45 rounded-t-lg"
                src={user.banner}
                alt=""
              />
            </div>
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlC3qVkP_FEnBNqAAXgD9ACbwpuu1tC9Yarg&s"
              className="w-full object-top h-45 rounded-t-lg bg-gray-200 absolute left-0 top-0 z-0"
            />
          )}
          <div className="w-full mt-20 mb-10 rounded-b-lg  flex flex-col items-center justify-center gap-5 px-5">
            <div className="flex flex-col items-center gap-5 z-10">
              {user?.avatar ? (
                <div
                  className="relative rounded-full"
                  onMouseEnter={() => setAvatarHover(true)}
                  onMouseLeave={() => setAvatarHover(false)}
                >
                  <img
                    className="w-40 h-40 rounded-full shadow-[0_-30px_90px__10px_#0000005e]"
                    src={user.avatar}
                    alt=""
                  />
                  {avatarHover && (
                    <FaUser className="text-5xl bg-white/10 rounded-full p-12 backdrop-blur-xs w-full h-full text-[#23a6f0] border-4 border-[#23a6f0] absolute top-0 left-0" />
                  )}
                </div>
              ) : (
                <div className="w-40 h-40 rounded-full flex items-center justify-center border border-gray-500 bg-gray-200">
                  <FaUser className="text-3xl text-gray-500" />
                </div>
              )}
              <div className="flex flex-col gap-1 text-center">
                <h1 className="text-3xl">{user.name}</h1>
                <p className="text-sm">
                  {user.role === "STUDENT" ? "Студент" : "Владелец"}
                </p>
              </div>
            </div>
            <button onClick={() => handleSubmit()} className="button">
              Сохранить
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-15 py-10">
        <form className="flex flex-col gap-5 w-full max-w-140 mx-auto bg-gray-100 rounded-2xl p-5 py-10">
          <span className="-mb-3 text-[#23a6f0] font-semibold">Имя</span>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border p-2 text-xl font-medium rounded-md border-b-2 bg-white"
            placeholder="Введите имя..."
            defaultValue={name}
          />
          <span className="-mb-3 text-[#23a6f0] font-semibold">Email</span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border p-2 text-xl font-medium rounded-md border-b-2 bg-white"
            placeholder="Введите email..."
            defaultValue={email}
          />
          <span className="-mb-3 text-[#23a6f0] font-semibold">
            Фото профиля
          </span>
          <input
            onChange={(e) => setAvatar(e.target.value)}
            type="text"
            className="border p-2 text-xl font-medium rounded-md border-b-2 bg-white"
            placeholder="Введите URL фото профиля..."
            defaultValue={avatar}
          />
          <span className="-mb-3 text-[#23a6f0] font-semibold">
            Фото баннера
          </span>
          <input
            onChange={(e) => setBanner(e.target.value)}
            type="text"
            className="border p-2 text-xl font-medium rounded-md border-b-2 bg-white"
            placeholder="Введите URL фото баннера..."
            defaultValue={banner}
          />
          <span className="-mb-3 text-[#23a6f0] font-semibold">Страна</span>
          <input
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            className="border p-2 text-xl font-medium rounded-md border-b-2 bg-white"
            placeholder="Введите вашу страну..."
            defaultValue={country}
          />
          <div className="flex justify-between w-full my-5">
            <p className="text-xl font-medium">Ночной режим</p>
            <div
              className="relative rounded-2xl w-13 h-7 p-1 bg-black"
              onClick={() => setDarkMode(!darkMode)}
            >
              <div
                className="bg-white w-[65%] h-full rounded-2xl"
                style={{
                  justifySelf: darkMode ? "end" : "start",
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between w-full my-5">
            <p className="text-xl font-medium">Приватный режим</p>
            <div
              className="relative rounded-2xl w-13 h-7 p-1 bg-black"
              onClick={() => setPrivateMode(!privateMode)}
            >
              <div
                className="bg-white w-[65%] h-full rounded-2xl"
                style={{
                  justifySelf: privateMode ? "end" : "start",
                }}
              ></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingProfilePage;

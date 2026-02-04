"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";

const Login = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setError,
  } = useForm();
  const onSubmit = (inputValues: any) => {
    try {
      reset();
      router.push("/");
    } catch (error: any) {
      const message = error.message?.toLowerCase() || "";
      if (message.includes("пользователь")) {
        setError("email", {
          type: "manual",
          message: "Пользователь не найден!",
        });
      } else if (message.includes("пароль")) {
        setError("password", {
          type: "manual",
          message: "Неверный пароль!",
        });
      } else {
        setError("password", {
          type: "manual",
          message: "Произошла ошибка при входе. Попробуйте позже.",
        });
      }
    }
  };
  return (
    <div className="auth gap-10">
      <img
        className="h-full w-full max-w-130 object-top"
        src="/images/loginImage.svg"
        alt=""
      />
      <FiX
        className="text-4xl text-[#333333] absolute top-10 right-10 cursor-pointer"
        onClick={() => router.push("/")}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-10 flex flex-col items-center justify-center gap-7 mx-auto w-full max-w-130"
      >
        <h1 className="text-3xl font-extrabold">Добро пожаловать</h1>
        {errors.email && (
          <span className="text-red-500 text-xs -mb-7 self-start">
            {`${errors.email.message}`}
          </span>
        )}
        <input
          {...register("email", {
            required: "Email обязателен!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Неправильный email",
            },
          })}
          className={`w-full py-1 bg-none border-b-[1.5px] border-solid border-black/30 outline-none focus:border-black/70 transition-all ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
          type="text"
          placeholder="Почта"
        />
        {errors.password && (
          <span className="text-red-500 text-xs -mb-7 self-start">
            {`${errors.password.message}`}
          </span>
        )}
        <input
          {...register("password", {
            required: "Пароль обязателен!",
            minLength: {
              value: 6,
              message: "Минимальная длина пароля 6 символов",
            },
          })}
          className={`w-full py-1 bg-none border-b-[1.5px] border-solid border-black/30 outline-none focus:border-black/70 transition-all ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
          type="text"
          placeholder="Пароль"
        />
        <span className="ml-auto text-black/56 -mt-3 text-sm">
          Забыли пароль?
        </span>
        <button type="submit" className="button w-full">
          Войти
        </button>
        <p className="text-sm font-bold">
          У вас нет аккаунта?{" "}
          <a href="/auth/register" className="text-[#23A6F0]">
            Зарегистрироваться
          </a>
        </p>
        <p className="w-[70%] flex items-center gap-5">
          <span className="flex-1 h-0.5 bg-[#348bca9f]"></span>Или
          <span className="flex-1 h-0.5 bg-[#348BCA9f]"></span>
        </p>
        <div className="flex w-full gap-5">
          <button className="flex justify-center items-center gap-3 flex-1 py-2 rounded-lg shadow-[0_0_3px_#348BCA] font-medium">
            <img className="h-5" src="/images/icon (1).svg" alt="" />
            Google
          </button>
          <button className="flex justify-center items-center gap-3 flex-1 py-2 rounded-lg shadow-[0_0_3px_#348BCA] font-medium">
            <img className="h-5" src="/images/icon (2).svg" alt="" />
            Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

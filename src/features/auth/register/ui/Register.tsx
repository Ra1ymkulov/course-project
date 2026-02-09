"use client";
import { useRegisterApi } from "@/src/features/auth/register";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const Register = () => {
  const { mutateAsync: registerFunc } = useRegisterApi();
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
      const data: USERREGISTER.GetUserReq = {
        name: inputValues.name,
        email: inputValues.email,
        password: inputValues.password,
      };
      registerFunc(data);
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
    <div className="auth flex flex-col gap-3">
      <div className="w-full flex justify-end py-5 pr-20 border-b-[0.8px] border-solid border-black/40">
        <button
          className="bg-none text-[#23A6F0] "
          onClick={() => router.push("/auth/login")}
        >
          Войти
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-10 flex flex-col items-center justify-center gap-7 mx-auto w-full max-w-130"
      >
        <h1 className="text-3xl font-bold">Регистрация</h1>
        {errors.name ? (
          <span className="text-red-500 text-xs font-semibold -mb-5 self-start">
            {`${errors.name.message}`}
          </span>
        ) : (
          <span className="text-xs -mb-5 font-semibold self-start">Имя</span>
        )}
        <input
          {...register("name", {
            required: "Имя обязательно!",
          })}
          className={`w-full p-2 bg-none border-[0.8px] rounded border-solid border-black/40 outline-none focus:border-black/70 transition-all ${
            errors.email
              ? "border-red-500 focus:border-red-500 placeholder:text-red-500"
              : ""
          }`}
          type="text"
          placeholder="Введите свое имя"
        />
        {errors.email ? (
          <span className="text-red-500 text-xs font-semibold -mb-5 self-start">
            {`${errors.email.message}`}
          </span>
        ) : (
          <span className="text-xs -mb-5 font-semibold self-start">Почта</span>
        )}
        <input
          {...register("email", {
            required: "Email обязателен!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Неправильный email",
            },
          })}
          className={`w-full p-2 bg-none border-[0.8px] rounded border-solid border-black/40 outline-none focus:border-black/70 transition-all ${
            errors.email
              ? "border-red-500 focus:border-red-500 placeholder:text-red-500"
              : ""
          }`}
          type="text"
          placeholder="Введите свою почту"
        />
        {errors.password ? (
          <span className="text-red-500 text-xs font-semibold -mb-5 self-start">
            {`${errors.password.message}`}
          </span>
        ) : (
          <span className="text-xs -mb-5 font-semibold self-start">Пароль</span>
        )}
        <input
          {...register("password", {
            required: "Пароль обязателен!",
            minLength: {
              value: 6,
              message: "Минимальная длина пароля 6 символов",
            },
          })}
          className={`w-full p-2 bg-none border-[0.8px] rounded border-solid border-black/40 outline-none focus:border-black/70 transition-all ${
            errors.email
              ? "border-red-500 focus:border-red-500 placeholder:text-red-500"
              : ""
          }`}
          type="text"
          placeholder="Пароль"
        />
        <span className="mr-auto text-black -mt-3 text-xs font-semibold flex gap-2">
          <input type="checkbox" />
          Согласен с Условиями
        </span>
        <button type="submit" className="button w-full">
          Регистрация
        </button>
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

"use client";
import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useGoogleLoginApi } from "@/src/features/google/api";
import { useRegisterApi } from "@/src/features/register/api";

declare global {
  interface Window {
    google: any;
  }
}

const Register = () => {
  const router = useRouter();
  const { mutate: googleLoginMutation } = useGoogleLoginApi();
  const { mutate: registerFunc } = useRegisterApi();
  const [agree, setAgree] = useState(false);
  const googleButtonRef = useRef<HTMLDivElement>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setError,
  } = useForm();

  const handleGoogleSignIn = (response: any) => {
    try {
      if (response.credential) {
        googleLoginMutation({ id_token: response.credential });
      }
      alert("Регистрация прошла успешно! Теперь вы можете войти в систему.");
    } catch (error) {
      alert("Произошла ошибка при регистрации. Пожалуйста, попробуйте позже.");
    }
  };

  useEffect(() => {
    if (window.google && googleButtonRef.current) {
      window.google.accounts.id.initialize({
        client_id:
          "1011957134529-39qds19hh2ua0505nnggk02kuockiv3e.apps.googleusercontent.com",
        callback: handleGoogleSignIn,
      });
      window.google.accounts.id.renderButton(googleButtonRef.current, {
        theme: "outline",
        size: "large",
        width: "100%",
      });
    }
  }, [handleGoogleSignIn]);

  const onSubmit = async (inputValues: any) => {
    try {
      await registerFunc(inputValues);
      reset();
      // router.push("/");
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
          className="bg-none text-[#23A6F0]"
          onClick={() => router.push("/auth/login")}
        >
          Войти
        </button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 flex flex-col items-center justify-center gap-7 mx-auto w-full max-w-130"
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
          {...register("name", { required: "Имя обязательно!" })}
          className={`text-sm  font-medium w-full p-2 py-3 bg-none border-[0.8px] rounded border-black/40 outline-none focus:border-black/70 transition-all ${
            errors.name ? "border-red-500" : ""
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
            pattern: { value: /\S+@\S+\.\S+/, message: "Неправильный email" },
          })}
          className={`text-sm  font-medium w-full p-2 py-3 bg-none border-[0.8px] rounded border-black/40 outline-none focus:border-black/70 transition-all ${
            errors.email ? "border-red-500" : ""
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
            minLength: { value: 6, message: "Минимальная длина 6 символов" },
          })}
          className={`text-sm  font-medium w-full p-2 py-3 bg-none border-[0.8px] rounded border-black/40 outline-none focus:border-black/70 transition-all ${
            errors.password ? "border-red-500" : ""
          }`}
          type="password"
          placeholder="Пароль"
        />

        <span className="mr-auto text-black -mt-3 text-xs font-semibold flex gap-2">
          <input
            type="checkbox"
            {...register("agree", {
              required: "Вы должны согласиться с условиями!",
            })}
            onChange={(e) => setAgree(e.target.checked)}
          />
          {errors.agree ? (
            <span className="text-red-500 text-xs font-semibold">
              {`${errors.agree.message}`}
            </span>
          ) : (
            "Согласен с Условиями "
          )}
        </span>

        <button
          disabled={!agree}
          type="submit"
          className={`button w-full ${!agree ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Регистрация
        </button>

        <p className="w-[70%] flex items-center gap-5">
          <span className="flex-1 h-0.5 bg-[#348bca9f]"></span>Или
          <span className="flex-1 h-0.5 bg-[#348BCA9f]"></span>
        </p>

        <div className="flex w-full gap-5">
          <div ref={googleButtonRef} className="flex-1"></div>

          <button className="text-sm flex justify-center items-center gap-3 flex-1 py-2 rounded-lg shadow-[0_0_3px_#348BCA] font-normal">
            <img className="h-5" src="/images/icon (2).svg" alt="" />
            Facebook
          </button>
        </div>
      </form>

      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default Register;

"use client";
import { useGetNotificationById } from "@/src/entities/notification/api";
import { useParams, useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const Detail = () => {
  const params = useParams();
  const id = Number(params?.id);

  const { data: item } = useGetNotificationById(id);
  const router = useRouter();

  if (!item) {
    return (
      <div className="flex flex-col gap-5 items-center py-30">
        <h1 className="text-3xl font-bold">Не удалось найти уведомление!</h1>
        <button
          onClick={() => router.back()}
          className="button flex gap-2 items-center"
        >
          <BsArrowLeft />
          Вернутся
        </button>
      </div>
    );
  }
  const data: string[] = item.message.split("  ").join(" ").split(" \n");

  const title = data[0];
  const subtitle = data[1];
  const text = data[2];
  const recomended = data[3];
  const logoImg = data[data.length - 2];
  const bannerImg = data[data.length - 1];

  return (
    <section className="py-20 relative">
      <img
        src={bannerImg}
        alt=""
        className="absolute top-0 left-0 w-full h-100 opacity-[0.2] -z-1"
      />
      <div className="container">
        <div className="flex flex-col items-center gap-15">
          <div className="flex flex-col items-center text-center gap-15 max-w-200 bg-white/70 p-10 rounded-4xl border border-[#23A6F0]">
            <img src={logoImg} alt="" className="w-full max-w-40" />
            <h2 className="text-4xl font-bold">{title}</h2>
            <h4 className="text-2xl font-bold">{subtitle && subtitle}</h4>
            <h6 className="text-md font-bold">{text && text}</h6>
            <p className="text-3xl font-bold">{recomended && recomended}</p>
            <button className="button">Перейти</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;

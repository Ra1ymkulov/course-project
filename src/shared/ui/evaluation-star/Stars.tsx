"use client";
import { useState } from "react";
import { Rating } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useSendReviewMutate } from "@/src/features/review/api";
import { useGetUserQuery } from "@/src/entities/user/api/useApi";

const Stars = () => {
  const [starValue, setStarValue] = useState<number>(0);
  const [textValue, setTextValue] = useState<string>("");
  const { mutateAsync: sendReview } = useSendReviewMutate();
  const { data: user } = useGetUserQuery();
  const router = useRouter();
  if (!user) {
    return (
      <div className="container">
        <h1>Зарегистрируйтесь чтобы написать ваши отзывы.</h1>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center bg-black/30 backdrop-blur-2xl fixed top-0 left-0 w-full h-full z-10">
      <div className="flex flex-col items-center gap-5 p-10 bg-white w-130 relative">
        <h2
          className="rotate-45 text-6xl absolute right-3 top-0 text-[#252B42B2] cursor-pointer"
          onClick={() => router.back()}
        >
          +
        </h2>
        <h3 className="text-2xl font-semibold">Как вам наш курс?</h3>
        <Rating
          name="simple-controlled"
          value={starValue}
          onChange={(_, newValue) => setStarValue(newValue ? newValue : 0)}
          className="w-full gap-5 mx-auto"
          icon={<Star style={{ fontSize: "70px" }} />}
          emptyIcon={<Star style={{ fontSize: "70px" }} />}
          precision={1}
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md min-h-10"
          placeholder="Комментарий..."
          onChange={(e) => setTextValue(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="button w-full"
          onClick={() => {
            router.back();
            sendReview({
              newReview: {
                userId: user.id,
                text: textValue,
                rating: starValue,
                courseId: "khjbsjf892u4enfn834f",
              },
            });
          }}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Stars;

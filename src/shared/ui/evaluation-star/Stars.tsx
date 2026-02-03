"use client";
import { useState } from "react";
import { Rating } from "@mui/material";
import { Star } from "@mui/icons-material";

const Stars = () => {
  const [starValue, setStarValue] = useState<number | null>(0);
  return (
    <div className="flex items-center justify-center bg-black/30 backdrop-blur-2xl fixed top-0 left-0 w-full h-full z-10">
      <div className="flex flex-col items-center gap-5 p-10 bg-white w-130 relative">
        <h2 className="rotate-45 text-6xl absolute right-3 top-0 text-[#252B42B2]">
          +
        </h2>
        <h3 className="text-2xl font-semibold">Как вам наш курс?</h3>
        <Rating
          name="simple-controlled"
          value={starValue}
          onChange={(_, newValue) => setStarValue(newValue)}
          className="w-full gap-5 mx-auto"
          icon={<Star style={{ fontSize: "70px" }} />}
          emptyIcon={<Star style={{ fontSize: "70px" }} />}
          precision={1}
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md min-h-10"
          placeholder="Комментарий..."
        ></textarea>
        <button type="submit" className="button w-full">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Stars;

"use client";

import { FC } from "react";
import { FaStar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

interface IType {
  item: any;
  isPage?: boolean;
}

const ReviewCardComponents: FC<IType> = ({ item, isPage }) => {
  if (item.rating < 4) {
    return;
  }
  return (
    <div className="w-100 min-h-57 border border-gray-500 p-6 flex flex-col gap-3 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {item.user?.avatar ? (
            <img
              src={item.user?.avatar}
              alt="image-avatar"
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
              <FaUserAlt className="text-gray-400 text-[18px]" />
            </div>
          )}
          <div className="flex flex-col">
            <h4 className="font-medium text-[18px]">
              {item.user?.name ? item.user?.name : "Аноним"}
            </h4>
            <p className="text-base">
              {item.user?.country ? item.user?.country : "Не известно"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <p>{item.rating}</p>
          <FaStar className="text-amber-500" />
        </div>
      </div>
      {isPage ? (
        <>
          <p className="text-base">
            {item.text.length > 130
              ? `${item.text.slice(0, 130)}...}`
              : item.text}
          </p>
          <a
            href="/reviews"
            className="text-xs font-medium text-[#23a6f0] ml-auto mt-auto"
          >
            Посмотреть все отзывы
          </a>
        </>
      ) : (
        <p className="text-base">{item.text}</p>
      )}
    </div>
  );
};

export default ReviewCardComponents;

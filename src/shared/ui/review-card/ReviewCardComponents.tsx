"use client";

import { FaStar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const ReviewCardComponents = ({ item }: any) => {
  return (
    <div className="w-100 h-57 border border-gray-500 p-6 flex flex-col gap-3 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {item.avatar ? (
            <img
              src={item.avatar}
              alt="image-avatar"
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
              <FaUserAlt className="text-gray-400 text-[18px]" />
            </div>
          )}
          <div className="flex flex-col">
            <h4 className="font-medium text-[18px]">{item.name}</h4>
            <p className="text-base">{item.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <p>{item.review}</p>
          <FaStar className="text-amber-500" />
        </div>
      </div>
      <p className="text-base">{item.description}</p>
    </div>
  );
};

export default ReviewCardComponents;

import { useGetUserByIdQuery } from "@/src/entities/user/api/useGetUserById";
import { FC } from "react";
import { PiShareFatLight } from "react-icons/pi";

interface IProps {
  item: {
    id: string;
    userId: string;
    user: User;
    text: string;
    videoId: number;
    timestamp: number;
    createdAt: string;
  };
}
const Comment: FC<IProps> = ({ item }) => {
  const getTimeAgo = (createdAt: string) => {
    const createdDate = new Date(createdAt);
    const now = new Date();

    const diffMs = now.getTime() - createdDate.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays} дн. назад`;
    if (diffHours > 0) return `${diffHours} ч. назад`;
    if (diffMin > 0) return `${diffMin} мин. назад`;
    return `${diffSec} сек. назад`;
  };

  const user = item.user;

  return (
    <div className="flex items-start gap-5">
      <img
        src={
          user?.avatar
            ? user.avatar
            : "https://media.istockphoto.com/id/470100848/vector/male-profile-icon-white-on-the-blue-background.jpg?s=612x612&w=0&k=20&c=2Z3As7KdHqSKB6UDBpSIbMkwOgYQtbhSWrF1ZHX505E="
        }
        className="min-w-13 max-13 min-h-13 h-13 object-cover rounded-[50%] shadow-[0_0_5px]/20"
        alt=""
      />
      <div className="flex flex-col gap-1">
        <div className="flex gap-5">
          <h3 className="font-semibold">{user?.name}</h3>
          <p className="text-black/60">
            {item.createdAt.split("T").join(" ").slice(10, -8)}
          </p>
        </div>
        <p className="text-[13px] font-medium">{item.text}</p>
        <div className="flex justify-between gap-1 w-full mt-2">
          <p className="flex gap-2 items-center text-gray-600 text-sm">
            <PiShareFatLight className="" />
            Ответить
          </p>
          <p className="flex gap-2 items-center text-gray-600 text-sm">
            {getTimeAgo(item.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

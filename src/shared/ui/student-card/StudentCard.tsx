import { FC } from "react";
import { FaUser } from "react-icons/fa";

interface IProps {
  item: any;
}
const StudentCard: FC<IProps> = ({ item }) => {
  return (
    <div className="flex justify-between gap-10 items-center p-3 rounded-2xl shadow-[0_0_20px]/13">
      {item?.avatar ? (
        <img src={item.avatar} alt="" className="w-25 h-25 rounded-[50%]" />
      ) : (
        <div className="w-25 h-25 rounded-full flex items-center justify-center border border-gray-500 bg-gray-200">
          <FaUser className="text-3xl text-gray-500" />
        </div>
      )}
      <div className="flex flex-col gap-2 mr-auto">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm">Студент</p>
      </div>
      <button className="button">Смотреть</button>
    </div>
  );
};

export default StudentCard;

import { IoTimeOutline } from "react-icons/io5";
import { FiBook } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";

const CourseCardComponents = ({ item }: any) => {
  return (
    <div>
      {item.image ? (
        <img className="w-82 h-75 object-cover rounded-t-md" src={item.image} />
      ) : (
        <img
          className="w-82 h-75 object-cover rounded-t-md"
          src="/images/skeleton-image.webp"
        />
      )}
      <div className="w-82 rounded-b-md shadow-lg p-5 flex flex-col gap-3">
        <h4 className="text-base font-bold">{item.name}</h4>
        <p className="text-sm text-[#737373]">{item.description}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IoTimeOutline className="text-blue-500" />
            <span>{item.timeLesson}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiBook className="text-red-500" />
            <span>{item.lessons}</span>
          </div>
          <div className="flex items-center gap-1">
            <BsGraphUp className="text-green-500" />
            <span>{item.progress}</span>
          </div>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default CourseCardComponents;

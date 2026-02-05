import ReviewCardComponents from "@/src/shared/ui/review-card/ReviewCardComponents";

const ReviewCourse = () => {
  const data = [
    {
      id: 1,
      avatar: "/images/images.jpeg",
      name: "Yessica Christy",
      location: "Shanxi, China",
      review: 4.7,
      description:
        "Мне это нравится, потому что я люблю путешествовать далеко и все еще могу подключаться к высокой скорости.",
    },
    {
      id: 2,
      avatar: "/images/images.jpeg",
      name: "Yessica Christy",
      location: "Shanxi, China",
      review: 4.7,
      description:
        "Мне это нравится, потому что я люблю путешествовать далеко и все еще могу подключаться к высокой скорости.",
    },
    {
      id: 3,
      avatar: "/images/images.jpeg",
      name: "Yessica Christy",
      location: "Shanxi, China",
      review: 4.7,
      description:
        "Мне это нравится, потому что я люблю путешествовать далеко и все еще могу подключаться к высокой скорости.",
    },
    {
      id: 4,
      avatar: "/images/images.jpeg",
      name: "Yessica Christy",
      location: "Shanxi, China",
      review: 4.7,
      description:
        "Мне это нравится, потому что я люблю путешествовать далеко и все еще могу подключаться к высокой скорости.",
    },
    {
      id: 5,
      avatar: "/images/images.jpeg",
      name: "Yessica Christy",
      location: "Shanxi, China",
      review: 4.7,
      description:
        "Мне это нравится, потому что я люблю путешествовать далеко и все еще могу подключаться к высокой скорости.",
    },
  ];
  return (
    <div className="py-12">
      <div className="container">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-10 items-center">
            <h1 className="text-4xl font-medium text-center max-w-110 w-full">
              Нам доверяют тысячи довольных учеников
            </h1>
            <p className="text-base font-normal text-center max-w-137 w-full">
              Мы предоставляем множество функций, которые вы можете
              использовать. Постепенное накопление информация
            </p>
          </div>
          <div className="flex items-center gap-10 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-12">
              {data.map((item) => (
                <ReviewCardComponents item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCourse;

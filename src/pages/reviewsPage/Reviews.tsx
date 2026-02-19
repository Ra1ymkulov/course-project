"use client";
import { useGetReviewsQuery } from "@/src/entities/review/api";
import ReviewCardComponents from "@/src/shared/ui/review-card/ReviewCardComponents";
interface IType {
  id: string;
  userId: string;
  text: string;
  rating: number;
  createdAt: string;
}
const Reviews = () => {
  const { data } = useGetReviewsQuery();

  if (!data) {
    return (
      <div className="container">
        <h1>Нету отзывов или ошибка на сервере</h1>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-3 gap-5 gap-y-10 w-200">
          {data.map((item: IType) => (
            <ReviewCardComponents item={item} key={item.id} isPage={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

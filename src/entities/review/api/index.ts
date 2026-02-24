import { USER_API } from "@/src/shared/api";
import { useQuery } from "@tanstack/react-query";

const useGetReviewsQuery = () => {
  return useQuery<Review.GetReviewReq, Error>({
    queryKey: ["/reviews"],
    queryFn: async () => {
      const response = await USER_API.get("/course/get-reviews");
      return response.data.reviews;
    },
  });
};
export { useGetReviewsQuery };

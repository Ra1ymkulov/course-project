import { USER_API } from "@/src/shared/api/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSendReviewMutate = () => {
  const queryClient = useQueryClient();
  return useMutation<SendReview.SendReviewReq, Error, SendReview.SendReviewRes>(
    {
      mutationFn: async ({ newReview }) => {
        const response = await USER_API.post(`/course/send-review`, newReview);
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["review"] });
      },
    },
  );
};

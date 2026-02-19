import { USER_API } from "@/src/shared/api/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSendCommentMutate = () => {
  const queryClient = useQueryClient();
  return useMutation<
    SendComment.SendCommentRes,
    Error,
    SendComment.SendCommentReq
  >({
    mutationFn: async ({ newComment }) => {
      const response = await USER_API.post(`/course/send-comment`, newComment);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment"] });
    },
  });
};

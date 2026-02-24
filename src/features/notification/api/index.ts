import { USER_API } from "@/src/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useHandleReadMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Read.GetReadReq, Error, Read.GetReadRes>({
    mutationFn: async ({ id }) => {
      const response = await USER_API.put(
        `/notification/notification/${id}/read`,
      );
      return response.data.notification;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["read"] });
    },
  });
};
export { useHandleReadMutation };

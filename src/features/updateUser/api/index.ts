import { USER_API } from "@/src/shared/api/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation<UPDATEPROFILE.GetUserRes, Error, UPDATEPROFILE.GetUserReq>(
    {
      mutationFn: async ({ id, update }) => {
        const response = await USER_API.patch(`/user/user-edit/${id}`, update);
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["user-edit"] });
      },
    },
  );
};

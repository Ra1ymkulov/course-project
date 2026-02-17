import { USER_API } from "@/src/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRegisterApi = () => {
  const queryClient = useQueryClient();
  return useMutation<USERREGISTER.GetUserRes, Error, USERREGISTER.GetUserReq>({
    mutationFn: async (newUser) => {
      const response = await USER_API.post("/auth/register", newUser);
      localStorage.setItem("user", JSON.stringify(response.data.token));
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

import { USER_API } from "@/src/shared/api/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useGoogleLoginApi = () => {
  const queryClient = useQueryClient();

  return useMutation<USERLOGIN.GetUserRes, Error, GoogleLoginReq>({
    mutationFn: async ({ id_token }) => {
      try {
        const response = await USER_API.post<USERLOGIN.GetUserRes>(
          "/google-login",
          { id_token },
        );
        console.log(id_token);
        console.log(response);

        localStorage.setItem("user", JSON.stringify(response.data.token));

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            error.response?.data?.message || "Ошибка входа через Google",
          );
        }
        throw new Error("Ошибка входа через Google");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

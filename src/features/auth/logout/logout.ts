import { useUserStore } from "@/src/entities/user/model/userstore";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const logoutStore = useUserStore((state) => state.logout);
  const navigate = useRouter();
  const logout = () => {
    logoutStore();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate.push("/auth/login");
  };
  return logout;
};

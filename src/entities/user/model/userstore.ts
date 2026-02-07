import { create } from "zustand";

interface UserStore {
  user: User | null;
  isAuth: boolean;
  setUser: (user: User | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}
export const useAuthStore = create<UserStore>((set) => ({
  user: null,
  token: null,
  isAuth: false,
  setUser: (user) =>
    set({
      user,
      isAuth: Boolean(user),
    }),
  setToken: (token) =>
    set({
      token,
      isAuth: Boolean(token),
    }),
  logout: () => {
    localStorage.removeItem("token");
    set({
      user: null,
      token: null,
      isAuth: false,
    });
  },
}));

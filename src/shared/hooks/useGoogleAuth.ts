"use client";

import { googleLogin } from "../api/user";
import { useMutation } from "@tanstack/react-query";

interface GoogleAuthResponse {
  success: boolean;
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    avatar?: string;
  };
}
export const useGoogleAuth = () => {
  return useMutation<GoogleAuthResponse, Error, string>({
    mutationFn: (credential: string) => googleLogin(credential),
    onSuccess: (data) => {
      if (data.success && data.token) {
        localStorage.setItem("user", JSON.stringify(data.token));
      }
    },
  });
};

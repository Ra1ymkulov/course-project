import axios from "axios";

export const USER_API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const BASE_URL = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const googleLogin = async (credential: string) => {
  const response = await USER_API.post("/auth/google", { credential });
  return response.data;
};

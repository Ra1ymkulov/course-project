// "use client";
// import { useQuery } from "@tanstack/react-query";
// import { USER_API } from "../api/user";
// import JwtDecode from "jwt-decode";

// interface Decode {
//   id: string;
//   email: string;
//   iat: number;
//   exp: number;
// }

// export const useGetUserQuery = () => {
//   const user =
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage.getItem("user") || "null")
//       : null;
//   const token = user?.token || null;

//   return useQuery<any, Error>({
//     queryKey: ["user", token],
//     queryFn: async () => {
//       if (!token) throw new Error("Токен отсутствует");
//       let decoded: Decode;
//       try {
//         decoded = JwtDecode<Decode>(token);
//       } catch (e) {
//         throw new Error("Некорректный токен");
//       }
//       const response = await USER_API.get(`/get-user/${decoded.id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data.user;
//     },
//     enabled: !!token,
//   });
// };

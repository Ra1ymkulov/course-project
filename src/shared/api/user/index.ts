import axios from "axios";

export const USER_API = axios.create({
  baseURL: "http://localhost:5000/api/user",
});

import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { instance } from "./axiosInstance";

export const useAxios = () => {
  const { user } = useAuth();

  // Skapa en ny instans baserat på global instance, men med auth-header
  const authedInstance = axios.create({
    ...instance.defaults,
    headers: {
      ...instance.defaults.headers,
      ...(user?.token ? { Authorization: `Bearer ${user.token}` } : {}),
    },
  });

  return authedInstance;
};

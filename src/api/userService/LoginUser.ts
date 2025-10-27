import { instance } from "../axiosInstance";
import type { LoginData, AuthResponse } from "../../types/UserType";

export const login = async (userData: LoginData): Promise<AuthResponse> => {
  const res = await instance.post<AuthResponse>("/auth/login", userData)
  return res.data
}
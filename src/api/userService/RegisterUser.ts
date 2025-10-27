import { instance } from "../axiosInstance";
import type { RegisterData, AuthResponse } from "../../types/UserType";


export const register = async (userData: RegisterData): Promise<AuthResponse> => {
  const res = await instance.post<AuthResponse>("/auth/register", userData)
  return res.data
}
import { instance } from "../axiosInstance";
import type { Review } from "../../types/ReviewType";

export const getReviews = async (id: string): Promise<Review[]> => {
  const res = await instance.get<Review[]>(`/${id}`)
  return res.data
}
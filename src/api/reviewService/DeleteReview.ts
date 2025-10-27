import { instance } from "../axiosInstance";
import type { Review } from "../../types/ReviewType";

export const deleteReview = async (id: string): Promise<Review> => {
  const res = await instance.delete<Review>(`/${id}`)
  return res.data
}
import { instance } from "../axiosInstance";
import type { Review } from "../../types/ReviewType";

export const createReview = async (): Promise<Review> => {
  const res = await instance.post<Review>("/review/add")
  return res.data
}
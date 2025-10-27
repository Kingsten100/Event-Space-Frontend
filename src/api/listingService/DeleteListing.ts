import type { Listing } from "../../types/ListingType";
import { instance } from "../axiosInstance";

export const deleteListing = async (id: string): Promise<Listing> => {
  const res = await instance.delete<Listing>(`/listing/${id}`)
  return res.data
}
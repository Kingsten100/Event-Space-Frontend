import type { Listing } from "../../types/ListingType";
import { instance } from "../axiosInstance";

export const fetchListingById = async (id: string, updatedData: Partial<Listing>): Promise<Listing> => {
  const res = await instance.patch<Listing>(`/listing/${id}`, updatedData)
  return res.data
}
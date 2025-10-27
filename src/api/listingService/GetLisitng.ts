import type { Listing } from "../../types/ListingType";
import { instance } from "../axiosInstance";

export const fetchListingById = async (id: string): Promise<Listing> => {
  const res = await instance.get<Listing>(`/listing/${id}`)
  return res.data
}
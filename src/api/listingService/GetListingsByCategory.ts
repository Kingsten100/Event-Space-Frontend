import { instance } from "../axiosInstance"
import type { Listing } from "../../types/ListingType"

export const getListingsByCategory = async (category: string): Promise<Listing[]> => {
  const res = await instance.get<Listing[]>(`/listing/category?category=${category}`)
  return res.data
}

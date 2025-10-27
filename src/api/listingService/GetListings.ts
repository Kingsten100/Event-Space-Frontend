import { instance } from "../axiosInstance.ts";
import type { Listing } from "../../types/ListingType.ts";


export const fetchListings = async (): Promise<Listing[]> => {
  const res = await instance.get<Listing[]>("/listing/alllistings")
  return res.data
};
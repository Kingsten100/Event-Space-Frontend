import { instance } from "../axiosInstance";

export interface Listing {
  _id: string;
  title: string;
  description: string;
  price: number;
}

export const fetchListings = async (): Promise<Listing[]> => {
  const res = await instance.get<Listing[]>("/listing/alllistings");
  return res.data;
};
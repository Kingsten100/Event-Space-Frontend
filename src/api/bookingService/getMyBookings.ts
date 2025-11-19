import { instance } from "../axiosInstance";
import type { BookingData } from "../../types/BookingType";

export const getMyBookings = async (): Promise<BookingData[]> => {
  const res = await instance.get<BookingData[]>("/bookings/me/bookings")
  return res.data
}
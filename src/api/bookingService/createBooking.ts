import { instance } from "../axiosInstance";
import type { BookingData } from "../../types/BookingType";


export const createBooking = async (bookingData: Omit<BookingData, "_id">): Promise<BookingData> => {
  const res = await instance.post<BookingData>("/bookings", bookingData)
  return res.data
}
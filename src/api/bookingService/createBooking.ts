import { instance } from "../axiosInstance";
import type { Booking } from "../../types/BookingType";


export const createBooking = async (bookingData: Omit<Booking, "_id">): Promise<Booking> => {
  const res = await instance.post<Booking>("/bookings", bookingData)
  return res.data
}
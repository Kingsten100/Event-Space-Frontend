import { instance } from "../axiosInstance";
import type { Booking } from "../../types/BookingType";

export const getMyBookings = async (): Promise<Booking[]> => {
  const res = await instance.get<Booking[]>("/bookings/me/bookings")
  return res.data
}
import { instance } from "../axiosInstance";
import type { Booking } from "../../types/BookingType";

export const deleteBooking = async(id: string): Promise<Booking> => {
  const res = await instance.delete(`/bookings/me/${id}`)
  return res.data
}
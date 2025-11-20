import { instance } from "../axiosInstance";

export const fetchBookedDates = async (listingId: string) => {
  try {
    const res = await instance.get(`/listing/alllistings/${listingId}/availability`)
    return res.data
  } catch (err) {
    console.error("Error fetching booked dates:", err)
    throw err
  }
};
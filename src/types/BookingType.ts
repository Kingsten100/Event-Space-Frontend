import type { Listing } from "./ListingType";

export interface BookingData {
  _id?: string;
  listingId?: string;
  userId?: string;
  startDate?: Date;
  endDate?: Date;
  totalPrice?: number;
  days?: number;
  listing: Listing;
}


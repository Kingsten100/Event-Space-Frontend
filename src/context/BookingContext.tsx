import type { BookingData } from "@/types/BookingType.ts";
import { createContext, useContext, useState, type ReactNode } from "react";


interface BookingContextType {
  booking: BookingData;
  createBooking: (data: BookingData) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export const BookingProvider = ({ children }: { children: ReactNode}) => {
  const [booking, setBooking] = useState<BookingData>({} as BookingData)

  const createBooking = (data: BookingData) => {
    setBooking((prev) => ({...prev, ...data}))
  }

  return (
    <BookingContext.Provider value={{booking, createBooking}}>
      { children }
    </BookingContext.Provider>
  )

}
export const useBooking = () => {
const context = useContext(BookingContext)
if (!context) throw new Error("useBooking must be used within BookingProvider")
return context
}
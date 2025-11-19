import { getMyBookings } from "@/api/bookingService/getMyBookings"
import { fetchListingById } from "@/api/listingService/GetLisitng"
import BookedCard from "@/components/BookedListingCard/BookedCard"
import { useAuth } from "@/context/AuthContext"
import type { BookingData } from "@/types/BookingType"

import { useEffect, useState } from "react"

const MyBookingsPage = () => {

  const { user } = useAuth()

  const [bookings, setBookings] = useState<BookingData[]>([])
  

  useEffect(() => {
    getMyBookings().then(setBookings)
  }, [])

  if(!user) return (
    <div className="container">
      <p className="warning-text">You need to be logged in to view your bookings</p>
    </div>
  )

  return (
    <div className='container'>
      <div className="bookings-wrapper">
        <div>
          <p className="welcome-text">Hello, {user.name}!</p>
          <p>Here you can see all of your bookings...</p>
        </div>

        <div>
          <div className="booking-card-container">
            {bookings.map((b: any) => (
              
                <BookedCard key={b._id} booking={b}/>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBookingsPage

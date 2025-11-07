import { fetchListingById } from "@/api/listingService/GetLisitng"
import { useBooking } from "@/context/BookingContext"
import type { Listing } from "@/types/ListingType"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

import { MdArrowRightAlt } from "react-icons/md";
import { useAuth } from "@/context/AuthContext"
import { createBooking } from "@/api/bookingService/createBooking"

const BookingPage = () => {

  const { booking } = useBooking()
  const { id } = useParams< {id: string}>()
  const { user } = useAuth()

  const token = localStorage.getItem('token')

  const [listing, setListing] = useState<Listing>()
  const [loading, setLoading] = useState(true)

  if(!booking) {
    return <p>No booking found</p>
  }

  if(!id) return null

  useEffect(() => {
        const getListings = async () => {
          try {
            const res = await fetchListingById(id)
            setListing(res)
          } catch (err) {
            console.log(err)
          } finally {
            setLoading(false)
          }
        }
        getListings()
      }, [])
  
      if(!listing){
        return null
      }

      const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault()

        if(!user){
          console.log('No user found', user)
          return null
        }

        try {
          const res = await createBooking(booking)
        } catch (err: any) {
          console.log('Something went wrong')
        }


      }


  return (
    <div className="container">
      <div className="progressbar">
        <p>You’re almost there — complete your Eventspace booking</p>        
      </div>

      <div className="flex gap-5">

        <div>
          <div className="payment-container">
            <form onSubmit={handlePayment} className="flex  flex-col gap-5 form-constraint justify-center">
              <h3 className="font-bold text-2xl">Payment</h3>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name on card</label>
                <input className="inputfield" type="text" placeholder="John Doe"/>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cardnumber">Card number</label>
                <input type="text" className="inputfield" placeholder="0000 0000 0000 0000"/>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <label htmlFor="expiration">Expiration date</label>
                  <input type="text" className="inputfield-short" placeholder="01 / 01"/>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="security">Security code</label>
                  <input type="text" className="inputfield-short" placeholder="123"/>
                </div>
              </div>
              <button className="pay-btn ">Confirm & pay</button>
              <p className="warning text-center">This is a fake payment. No input will be saved or validated.</p>
            </form>
          </div>
        </div>

        <div className="selected-venue">
          <div className="booking-img">
            <img src={listing.images[0]} alt="" />
          </div>
          <div className="flex flex-col justify-between bottom">
            <div>
              <p className="font-bold text-2xl title-b"> {listing.title}</p>
              <div className="flex gap-9">
                <div className="">
                  <p><b>Address</b></p>
                  <p>{listing.address}</p>
                </div>
                <div>
                  <p><b>Capacity</b></p>
                  <p>{listing.capacity} people</p>
                </div>
              </div>
                <p className="padding"><b>Selected dates</b></p>
              <div className="flex gap-5 items-center">
                <p>{booking.startDate?.toLocaleDateString()}</p>
                <MdArrowRightAlt />
                <p> {booking.endDate?.toLocaleDateString()}</p>
              </div>
              <div className="padding">
                <p><b>Total days</b></p>
                <p>{booking.days} days</p>
              </div>
            </div>
            <p><b>Total:</b> ${booking.totalPrice}</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default BookingPage

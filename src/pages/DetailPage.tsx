import { useEffect, useState } from "react"
import { fetchListingById } from "../api/listingService/GetLisitng"
import type { Listing } from "../types/ListingType"
import { useParams } from "react-router"
import { amenityIcons } from "../utils/AmenitiesIcons"
import BookingCalendar from "../components/Calendar/BookingCalendar"

const DetailPage = () => {
  const [listing, setListing] = useState<Listing>()
  const [loading, setLoading] = useState(true)

  const { id } = useParams< {id: string}>()

  if(!id){
    return
  }


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
  return (
    <div className="container">
      <div className="content-layout">

        <div className="detail-listing-card">
          <div className="img-design">
            <div className="img-container">
              <img src={listing?.images[0]} alt="" />
            </div>

            <div className="image-grid">
              <div className="image-grid-one">
                <img src={listing?.images[0]} alt="" />
                <img src={listing?.images[0]} alt="" />
              </div>
              <div className="image-grid-two">
                <img src={listing?.images[0]} alt="" />
                <img src={listing?.images[0]} alt="" />
              </div>
            </div>
          </div>
          <h2>{listing.title}</h2>
          <p>{listing.description}</p>
          <div>
            <div className="divider"/>
            <div>
              <h3>General</h3>
              <div className="general-content">
                <p><b>Capacity:</b> {listing.capacity} people</p>
                <p><b>Location:</b> {listing.location.city}</p>
                <p><b>Address:</b> {listing.address}</p>
                <p><b>Price:</b> ${listing.price} / day</p>
                <p className="align-text"><b>Alcohol:</b> {listing.rules.alcoholAllowed ? <p>Allowed</p> : <p>Not allowed</p>}</p>
                <p className="align-text"><b>Pets:</b> {listing.rules.petsAllowed ? <p>Allowed</p> : <p>Not allowed</p>}</p>
                
              </div>
            </div>
            <div className="divider"/>
            <div>
              <h3>Amenities</h3>
              <div className="amenities-grid">
                {
                  listing.amenities.map((a) => (
                    <div className="amenity-content">
                      <p>{amenityIcons[a]}</p>
                      <p>{a}</p>
                    </div>
                    
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className="calendar-section">
          <div className="calendar">
            <BookingCalendar />
          </div>
          <button className="book-btn">Book</button>
        </div>
      </div>
      
    </div>
  )
}

export default DetailPage

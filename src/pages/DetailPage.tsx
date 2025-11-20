import { useEffect, useState } from "react"
import { fetchListingById } from "../api/listingService/GetLisitng"
import type { Listing } from "../types/ListingType"
import { useParams } from "react-router"
import { amenityIcons } from "../utils/AmenitiesIcons"
import BookingCalendar from "../components/Calendar/BookingCalendar"
import { fetchBookedDates } from "@/api/listingService/AvailableListing"

const DetailPage = () => {
  const [listing, setListing] = useState<Listing>()
  const [loading, setLoading] = useState(true)
  const [bookedDates, setBookedDates] = useState<{ startDate: string; endDate: string}[]>([])

  const { id } = useParams< {id: string}>()

  if(!id){
    return null
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
    }, [id])

    useEffect(() => {
      const load = async () => {
        const dates = await fetchBookedDates(id)
        setBookedDates(dates)
      }
      load()
    }, [id])

    if (loading) return <p>Loading...</p>
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
                {listing.rules.alcoholAllowed ? <p className="align-text"><b>Alcohol: </b>Allowed</p> : <p className="align-text"><b>Alcohol: </b>Not allowed</p>}
                {listing.rules.petsAllowed ? <p className="align-text"><b>Pets: </b>Allowed</p> : <p className="align-text"><b>Pets: </b>Not allowed</p>}
                
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
            <BookingCalendar price={listing.price} listingId={listing._id} bookedDates={bookedDates}/>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default DetailPage

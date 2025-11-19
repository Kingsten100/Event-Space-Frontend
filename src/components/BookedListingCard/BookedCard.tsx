import type { BookingData } from '@/types/BookingType'
import { FaLocationDot, FaStar } from 'react-icons/fa6'
import { FiDollarSign } from 'react-icons/fi'
import { IoMdPeople } from 'react-icons/io'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

interface BookingProps {
  booking: BookingData
}


const BookedCard = ({ booking }: BookingProps) => {

  const listing = booking.listing
  

  return (
   <div className='booking-card'>
      <div className='card-img-container'>
        <Link to={`/listing/${listing._id}`}>
          <img className='card-img' src={`${listing.images[0]}?w=400&q=70&auto=format`} alt="" loading='lazy'/>
        </Link>
        
      </div>
      <div className='card-style'>
        <div className='listing-card-content'>
          <p className='card-title'>{listing.title}</p>
          <p className='date-flex'>
            <FaRegCalendarAlt />
            {booking.startDate?.toString().split("T")[0]} 
            <FaArrowRight />
            {booking.endDate?.toString().split("T")[0]}
          </p>
          <p className='card-price'><FiDollarSign /> total: {booking.totalPrice}</p>
          <p className='card-capacity'><IoMdPeople /> {listing.capacity}</p>
          <p className='card-location'><FaLocationDot /> {listing.location.city}</p>
        </div>
        <div>
          <p className='card-rating'><FaStar /> {listing.averageRating}/5</p>
        </div>

      </div>
    </div>
  )
}

export default BookedCard

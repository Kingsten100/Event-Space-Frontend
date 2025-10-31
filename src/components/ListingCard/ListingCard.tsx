import React from 'react'
import type { Listing } from '../../types/ListingType'

import { IoMdPeople } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';


interface CardProps {
  listing: Listing
}

const ListingCard = ({ listing }: CardProps) => {
  return (
    <div className='listing-card'>
      <div className='card-img-container'>
        <Link to={`/listing/${listing._id}`}>
          <img className='card-img' src={`${listing.images[0]}?w=400&q=70&auto=format`} alt="" loading='lazy'/>
        </Link>
        
      </div>
      <div className='card-style'>
        <div className='listing-card-content'>
          <p className='card-title'>{listing.title}</p>
          <p className='card-price'><FiDollarSign /> {listing.price} / day</p>
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

export default ListingCard

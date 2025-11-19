import React from 'react'
import { useNavigate } from 'react-router'

const ThankYouPage = () => {

  const navigate = useNavigate()

  return (
    <div className='container'>
      <div className='thanks-text'>
        <p className='thanks-title'>Thank you for booking with us!</p>
        <p>Go to "My Bookings" to find information about your booking</p>
        <button onClick={() => navigate('/mybookings')} className='thanks-btn'>My Bookings</button>
      </div>
    </div>
  )
}

export default ThankYouPage

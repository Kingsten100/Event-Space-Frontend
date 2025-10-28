import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <div className='container navbar-container'>
        <div className='logo-container'>
          <a href="/">
            <img className='logo-img' src="../../public/Logotype.svg" alt="Event Space Logotype" />
          
          </a>
        </div>
        <div className='navbar-btns'>
          <div >
            <ul className='navlinks-container'>
              <li className='navlink-item'><NavLink className='navlink-style' to={'/'}>Home</NavLink></li>
              <li className='navlink-item'><NavLink className='navlink-style' to={'/'}>Venues</NavLink></li>
              <li className='navlink-item'><NavLink className='navlink-style' to={'/about'}>About Us</NavLink></li>
              <li className='navlink-item'><NavLink className='navlink-style' to={'/mybooking'}>My Booking</NavLink></li>
            </ul>
          </div>
          <div className='login-btn-container'>
            <button className='login-btn'>Login</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar

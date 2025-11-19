import React from 'react'
import { Link, NavLink } from 'react-router'
import  { useAuth } from '../../context/AuthContext'

const Navbar = () => {

  const { user } = useAuth()

  const token = localStorage.getItem('token')

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
              <li className='navlink-item'><NavLink className='navlink-style' to={'/search'}>Venues</NavLink></li>
              <li className='navlink-item'><NavLink className='navlink-style' to={'/about'}>About Us</NavLink></li>
              <li className='navlink-item'><NavLink className='navlink-style' to={'/mybookings'}>My Bookings</NavLink></li>
            </ul>
          </div>
          <div className='login-btn-container'>
            <button className='login-btn'>{user ? <Link className='profile-link' to='/profile'>Profile</Link> : <Link className='profile-link' to='/login'>Login</Link>}</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar

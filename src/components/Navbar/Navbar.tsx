import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import  { useAuth } from '../../context/AuthContext'

const Navbar = () => {

  const { user } = useAuth()

  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobileMenu = () => setMobileOpen(prev => !prev)

  return (
    <div>
      <div className='container navbar-container'>
        <div className='logo-container'>
          <a href="/">
            <img className='logo-img' src="../../public/Logotype.svg" alt="Event Space Logotype" />
          
          </a>
        </div>

        <div>

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

        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {mobileOpen && (
          <div className="mobile-nav">
              <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
              <NavLink to="/search" onClick={() => setMobileOpen(false)}>Venues</NavLink>
              <NavLink to="/about" onClick={() => setMobileOpen(false)}>About Us</NavLink>
              <NavLink to="/mybookings" onClick={() => setMobileOpen(false)}>My Bookings</NavLink>
              {user ? (
                <NavLink to="/profile" onClick={() => setMobileOpen(false)}>Profile</NavLink>
              ) : (
                <NavLink to="/login" onClick={() => setMobileOpen(false)}>Login</NavLink>
              )}
            </div>
            )}
          </div>
        </div>

      </div>
  )
}

export default Navbar

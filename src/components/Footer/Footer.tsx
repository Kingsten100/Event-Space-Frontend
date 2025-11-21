import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='container footer-flex'>
        <div>
          <img className='logo' src="../../public/Logotype2.svg" alt="" />
        </div>
        <div className='links-container'>
          <ul>
            <li className='link-style'><Link className='link-style'  to={'/'}>Home</Link></li>
            <li className='link-style'><Link className='link-style' to={'/venues'}>Venues</Link></li>
            <li className='link-style'><Link className='link-style' to={'/about'}>About us</Link></li>
          </ul>
          <ul>
            <li className='link-style'><Link className='link-style' to={'/mybooking'}>My booking</Link></li>
            <li className='link-style'><Link className='link-style' to={'/contact'}>Contact us</Link></li>
          </ul>
        </div>
        <div>
          <div className='socials-container'>
            <div>
              <img src="../../public/Facebook.svg" alt="Facebook" />
            </div>
            <div>
              <img src="../../public/Instagram.svg" alt="Instagram" />
            </div>
          </div>
            <p className='socials-text'>Follow us</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

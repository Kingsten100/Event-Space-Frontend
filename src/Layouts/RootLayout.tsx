import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'


const RootLayout = () => {
  return (
    <>
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className='container'>
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default RootLayout

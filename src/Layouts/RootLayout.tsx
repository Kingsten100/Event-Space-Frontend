import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'


const RootLayout = () => {
  return (
    <div className='layout'>
      <nav>
        <Navbar />
      </nav>
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout

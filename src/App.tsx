import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import ProfilePage from './pages/ProfilePage'
import DetailPage from './pages/DetailPage'
import RootLayout from './Layouts/RootLayout'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import MyBookingsPage from './pages/MyBookingsPage'
import ThankYouPage from './pages/ThankYouPage'
import AboutPage from './pages/AboutPage'
import CreateListingPage from './pages/CreateListingPage'



function App() {
  

  return (
    <>
     <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/:id/booking' element={<BookingPage />}/>
        <Route path='/listing/:id' element={<DetailPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/mybookings' element={<MyBookingsPage />}/>
        <Route path='/thanks' element={<ThankYouPage />}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/create' element={<CreateListingPage/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import ProfilePage from './pages/ProfilePage'
import DetailPage from './pages/DetailPage'
import ListingsPage from './pages/ListingsPage'
import RootLayout from './Layouts/RootLayout'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'



function App() {
  

  return (
    <>
     <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/booking' element={<BookingPage />}/>
        <Route path='/listings' element={<ListingsPage />}/>
        <Route path='/listing/:id' element={<DetailPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Route>
     </Routes>
    </>
  )
}

export default App

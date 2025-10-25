import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import BookingPage from './pages/BookingPage'
import ProfilePage from './pages/ProfilePage'
import DetailPage from './pages/DetailPage'
import ListingsPage from './pages/ListingsPage'


function App() {
  

  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/auth' element={<AuthPage />}/>
        <Route path='/booking' element={<BookingPage />}/>
        <Route path='/listings' element={<ListingsPage />}/>
        <Route path='/detail' element={<DetailPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>

     </Routes>
    </>
  )
}

export default App

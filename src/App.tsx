import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import BookingPage from './pages/BookingPage'
import ProfilePage from './pages/ProfilePage'
import DetailPage from './pages/DetailPage'
import ListingsPage from './pages/ListingsPage'
import RootLayout from './Layouts/RootLayout'



function App() {
  

  return (
    <>
     <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/auth' element={<AuthPage />}/>
        <Route path='/booking' element={<BookingPage />}/>
        <Route path='/listings' element={<ListingsPage />}/>
        <Route path='/detail' element={<DetailPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Route>
     </Routes>
    </>
  )
}

export default App

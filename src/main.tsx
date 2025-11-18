import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import { BookingProvider } from './context/BookingContext.tsx'

import './components/Navbar/NavbarStyles.css'
import './components/Footer/FooterStyles.css'
import './components/AuthForms/AuthFormStyles.css'
import './components/ListingCard/ListingCardStyles.css'
import './components/AdvancedFilter/AdvancedFilterStyles.css'

import './pages/AuthPageStyles.css'
import './pages/HomePageStyles.css'
import './pages/DetailPageStyles.css'
import './pages/BookingPageStyles.css'
import './pages/SearchPageStyles.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BookingProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookingProvider>
    </AuthProvider>
  </StrictMode>,
)

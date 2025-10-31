import { IoMdSearch } from "react-icons/io"
import ListingCard from "../components/ListingCard/ListingCard"
import { useEffect, useState } from "react"
import type { Listing } from "../types/ListingType"
import { getListingsByCategory } from "../api/listingService/GetListingsByCategory"


const HomePage = () => {

  const [partyVenues, setPartyVenues] = useState<Listing[]>([])
  const [banquetsVenues, setBanquetsVenues] = useState<Listing[]>([])
  const [conferenceVenues, setConferenceVenues] = useState<Listing[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getListings = async () => {
      try {
        const [partyRes, banquetsRes, conferenceRes] = await Promise.all([
          getListingsByCategory('party'),
          getListingsByCategory('banquet hall'),
          getListingsByCategory('conference')
        ])
        setPartyVenues(partyRes) 
        setBanquetsVenues(banquetsRes)
        setConferenceVenues(conferenceRes)
      } catch (err) {
        console.log(err)
      } finally { 
        setLoading(false)
      }
    }
    getListings()
  }, [])

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="container hero-margin">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>An easier way to find your venue</h1>
              <p>To find a venue should bring joy, not stress</p>
            </div>
            <div>
              <form className="search-form">
                <input className="searchbar" type="text" placeholder="Search for a city or area..."/>
                <button className="search-btn"><IoMdSearch /></button>
              </form>
            </div>
          </div>
          <div className="hero-img-container">
            <img className="hero-img" src="../../public/HeroImg.png" alt="Woman smiling besides neonlights" />
          </div>
        </div>
      </div>
    
      <div className="container party-container">
        <div>
          <h3 className="venue-title">Party</h3>
        </div>
        <div className="venues-container">
          {
            partyVenues.map((p) => (
              <ListingCard key={p._id} listing={p}/>
            ))
          }

        </div>
        
      </div>

      <div className="party-container container">
        <div>
          <h3 className="venue-title">Banquets</h3>
        </div>
        <div className="venues-container">
          { 
            banquetsVenues.map((b) => (
              <ListingCard key={b._id} listing={b}/>
            ))
          }
        </div>
        
      </div>

      <div className="party-container container">
        <div>
          <h3 className="venue-title">Conference</h3>
        </div>
        <div className="venues-container">
          {  
            conferenceVenues.map((p) => (
              <ListingCard key={p._id} listing={p}/>
            ))
          }

        </div>
        
      </div>
    </>
  )
}

export default HomePage

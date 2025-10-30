import { IoMdSearch } from "react-icons/io"
import ListingCard from "../components/ListingCard/ListingCard"
import { useEffect, useState } from "react"
import type { Listing } from "../types/ListingType";
import { fetchListings } from "../api/listingService/GetListings";


const HomePage = () => {

  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getListings = async () => {
      try {
        const res = await fetchListings()
        setListings(res)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getListings()
  }, [])

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
    
      <div className="venues-container container">
        {
          listings.map((l) => (
            <ListingCard key={l._id} listing={l}/>
          ))
        }
        
      </div>
    </>
  )
}

export default HomePage

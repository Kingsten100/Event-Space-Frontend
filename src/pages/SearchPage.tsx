import { searchListings } from '@/api/listingService/SearchListings'
import ListingCard from '@/components/ListingCard/ListingCard'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

const SearchPage = () => {

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const query = params.get("query") || ""

  useEffect(() => {
    if(!query) return
    console.log('i min effect', query)

    setLoading(true)
    searchListings(query)
      .then((data) => {
        console.log('effect', data)
        setResults(data)})
      
      .finally(() => setLoading(false))
  }, [query]) 

  return (
    <div>
      {loading && <p>Loading...</p>}

       <div className="venues-container">
                {
                  results.map((listing: any) => (
                    <ListingCard listing={listing}/>
                  ))
                }
      
              </div>
    </div>
  )
}

export default SearchPage

import { useEffect, useState } from "react"
import { fetchListings, type Listing } from "../api/listingService/GetListings"


const ListingsPage = () => {

  const [listings, setListings] = useState<Listing[]>([])

  useEffect(() => {
    fetchListings().then(setListings)
  }, [])
  return (
    <div>
      {
        listings.map((l) => (
          <div key={l._id}>{l.title} {l.price}</div>
        ))
      }
    </div>
  )
}

export default ListingsPage

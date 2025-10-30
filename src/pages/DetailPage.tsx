import { useEffect, useState } from "react"
import { fetchListingById } from "../api/listingService/GetLisitng"
import type { Listing } from "../types/ListingType"
import { useParams } from "react-router"

const DetailPage = () => {
  const [listing, setListing] = useState<Listing>()
  const [loading, setLoading] = useState(true)

  const { id } = useParams< {id: string}>()

  if(!id){
    return
  }

  useEffect(() => {
      const getListings = async () => {
        try {
          const res = await fetchListingById(id)
          setListing(res)
        } catch (err) {
          console.log(err)
        } finally {
          setLoading(false)
        }
      }
      getListings()
    }, [])
  return (
    <div className="container">
      
      {listing?.title}
    </div>
  )
}

export default DetailPage

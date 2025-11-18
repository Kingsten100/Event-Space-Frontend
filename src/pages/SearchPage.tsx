import { getFilters } from '@/api/filtersService/getFilters'
import { searchListings } from '@/api/listingService/SearchListings'
import AdvancedFilter from '@/components/AdvancedFilter/AdvancedFilter'
import ListingCard from '@/components/ListingCard/ListingCard'
import type { Filter } from '@/types/FilterType'
import React, { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { useLocation } from 'react-router'

const SearchPage = () => {

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [categories, setCategories] = useState<string[]>([])
  const [amenities, setAmenities] = useState<string[]>([])
  const [openFilter, setOpenFilter] = useState(false)
  const [shouldFilter, setShouldFilter] = useState(false)



  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const query = params.get("query") || ""

  const [filters, setFilters] = useState<Filter>({
    minPrice: 0,
    maxPrice: 15000,
    capacity: 1,
    categories: [],
    amenities: []
  })

  

  useEffect(() => {
    if(!shouldFilter) return
    if(!search.trim()) return

    setLoading(true)
    searchListings(search, filters)
      .then(data => setResults(data))
      .finally(() => setLoading(false))

    setShouldFilter(false)
  }, [shouldFilter, filters])


  const handleApplyFilters = (newFilters: Filter) => {
    setFilters(newFilters)
    setShouldFilter(true)  
  }


    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if(!search.trim()) return

    try {
      console.log(search)
      const data = await searchListings(search)
      setResults(data)
    } catch (error) {
      console.error("Sökning misslyckades:", error)
    }
  }

   useEffect(() => {
    if(!query) return
   
    setSearch(query)

    setLoading(true)
    searchListings(query)
      .then((data) => {
        setResults(data)
      })
      .finally(() => setLoading(false))
  }, [query]) 

  
  useEffect(() => {
    getFilters().then(data => {
      setCategories(data.categories)
      setAmenities(data.amenities)
    })
  }, [])

  
  
  


//   useEffect(() => {
//   if (!shouldFilter) return
//   if (!search.trim()) return

//   setLoading(true)
//   searchListings(search, filters)
//     .then((data) => setResults(data))
//     .finally(() => setLoading(false))

//   setShouldFilter(false)
// }, [shouldFilter])

 

  return (
    <div className='container search-page'>
      
      <div>
        <div className='filter-container'>
          <div>
            <form onSubmit={handleSubmit} className="search-form">
              <input className="searchbar" type="text" placeholder="Search for a city or area..." value={search} onChange={(e) => setSearch(e.target.value)}/>
              <button className="search-btn"><IoMdSearch /></button>
            </form>
          </div>
          <div>
            <button onClick={() => setOpenFilter(true)} className='filter-btn'>Filter</button>
            <AdvancedFilter open={openFilter} onClose={() => setOpenFilter(false)} initialFilters={filters} categories={categories} amenities={amenities} onApply={handleApplyFilters}/> 
          </div>
        </div>
      </div>
       
      <p className='text-sm'>{results.length} results</p>
      <div className="venues-container">
        {
          results.map((listing: any) => (
            <ListingCard key={listing._id} listing={listing}/>
          ))
        }
      
      </div>
    </div>
  )
}

export default SearchPage

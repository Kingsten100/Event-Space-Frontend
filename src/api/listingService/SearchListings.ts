import { instance } from "../axiosInstance" 
import type { Filter } from "@/types/FilterType"



export const searchListings = async (searchQuery: string, filters?: Filter) => {

  const params: any = { search: searchQuery }

  if(filters) {
    if (filters.minPrice !== undefined) params.minPrice = filters.minPrice
    if (filters.maxPrice !== undefined) params.maxPrice = filters.maxPrice
    if (filters.capacity) params.capacity = filters.capacity
    if (filters.categories?.length) params.categories = filters.categories
    if (filters.amenities?.length) params.amenities = filters.amenities
  }

  const res = await instance.get('/listing/search', { params }
  )
  return res.data
}
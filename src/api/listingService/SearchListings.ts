import { instance } from "../axiosInstance" 

export const searchListings = async (searchQuery: string) => {
  const res = await instance.get('/listing/search', { params: {search: searchQuery}}
  )
  console.log(res.config.url)
  console.log(res)
  return res.data
}
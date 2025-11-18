import { instance } from "../axiosInstance"

export const getFilters = async () => {
  const res = await instance.get("/filters")
  return res.data
}

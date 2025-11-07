import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:9000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") // eller från ditt auth-context
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
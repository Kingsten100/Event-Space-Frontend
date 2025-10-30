import { useContext, createContext, useState, type ReactNode, useEffect } from "react"
import { login } from "../api/userService/LoginUser"
import { register } from "../api/userService/RegisterUser"
import { instance } from "../api/axiosInstance"



interface User {
  _id: String,
  name: String,
  email: String,
  isHost: boolean,
  token: String
}

interface AuthConntextType {
  user: User | null,
  setUser: ( user: User | null ) => void
  loginUser: (email: string, password: string) => Promise<void>
  registerUser: (name: string, email: string, password: string, repeatPassword: string) => Promise<void>

}

const AuthContext = createContext<AuthConntextType>({
  user: null,
  setUser: () => {},
  loginUser: async () => {},
  registerUser: async () => {}
})

export const AuthProvider = ({ children }: { children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const fetchUser = async () => {
    try {
      const res = await instance.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      setUser({ ...res.data.user, token });
    } catch (err) {
      console.error("Failed to fetch user", err)
      localStorage.removeItem("token")
      setUser(null);
    }
  };

  fetchUser();
}, []);


  const loginUser = async (email: string, password: string) => {

    try {
      const data = await login({ email, password })
      setUser({ ...data.user, token: data.token })
      localStorage.setItem("token", data.token)
      
    } catch (err: any) {
      throw new Error(err.response?.data?.message || 'Something went wrong')
    }

  };

  
  const registerUser = async (name: string, email: string, password: string, repeatPassword: string) => {

    try {
      const data = await register({ name, email, password, repeatPassword })
      setUser({ ...data.user, token: data.token })
      localStorage.setItem("token", data.token)
    } catch (err: any) {
      throw new Error(err.response?.data?.message || 'Something went wrong') 
    }

  };

  return (
    <AuthContext.Provider value={{ user, setUser, loginUser, registerUser }}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
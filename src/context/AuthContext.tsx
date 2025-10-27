import { useContext, createContext, useState, type ReactNode } from "react"
import { login } from "../api/userService/LoginUser"
import { register } from "../api/userService/RegisterUser"



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
  registerUser: (name: string, email: string, password: string) => Promise<void>

}

const AuthContext = createContext<AuthConntextType>({
  user: null,
  setUser: () => {},
  loginUser: async () => {},
  registerUser: async () => {}
})

export const AuthProvider = ({ children }: { children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null)

  const loginUser = async (email: string, password: string) => {
    const data = await login({ email, password });
    setUser({ ...data.user, token: data.token });
    localStorage.setItem("token", data.token);
  };

  
  const registerUser = async (name: string, email: string, password: string) => {
    const data = await register({ name, email, password });
    setUser({ ...data.user, token: data.token });
    localStorage.setItem("token", data.token);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loginUser, registerUser }}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
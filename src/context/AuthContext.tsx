import { useContext, createContext, useState, type ReactNode } from "react"



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
}

const AuthContext = createContext<AuthConntextType>({
  user: null,
  setUser: () => {}
})

export const AuthProvider = ({ children }: { children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser}}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
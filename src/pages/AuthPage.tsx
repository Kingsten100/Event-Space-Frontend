import { useNavigate } from "react-router"
import LoginForm from "../components/AuthForms/LoginForm"
import RegisterForm from "../components/AuthForms/RegisterForm"

const AuthPage = () => {

  const token = localStorage.getItem('authToken')

  const navigate = useNavigate()
  return (
    <div className="form-placement">
      <RegisterForm />

    </div>
  )
}

export default AuthPage

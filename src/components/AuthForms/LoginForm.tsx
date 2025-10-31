import React, { useState } from 'react'
import type { LoginData } from '../../types/UserType'
import { Link, useNavigate } from 'react-router'
import { login } from '../../api/userService/LoginUser'
import { useAuth } from '../../context/AuthContext'

const LoginForm = () => {

  const { loginUser } = useAuth()

  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: ''
  })

  const [error, setError] = useState<Partial<LoginData>>({})
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value}))
  }

  const handlesubmit = async(e: React.FormEvent) => {
      e.preventDefault()
  
  
      try {
        const res = await loginUser(formData.email, formData.password)
          navigate('/')
        
      } catch (err: any) {
        setMessage(err.response?.data?.message || 'An error occurred')
      }
  
  
    }

  return (
    <div className='container'>
      <div className='auth-card'>
        <div className='auth-title'>
          <p>Welcome to <b>EventSpace</b><br/> please login or register</p>
        </div>
        <div className='center'>
          <form className='form-container' onSubmit={handlesubmit}>
            <div className='form-content'>
              <label className='form-label' htmlFor="email">Email</label>
              <input className='form-input' type="text" name='email'  value={formData.email} onChange={handleChange}/>
              {error.email && <p className='form-error'>{error.email}</p>}
            </div>
            
            <div className='form-content'>
              <label className='form-label' htmlFor="password">Password</label>
              <input className='form-input' type="password" name='password' value={formData.password} onChange={handleChange}/>
              {error.password && <p className='form-error'>{error.password}</p>}
            </div>
            
            <div className='form-text'>
              <p>Don't have an account? </p> 
              <Link className='auth-link' to={'/register'}>
                <p className='underline'>Register in here</p>
              </Link>
            </div>
            {message && <p className='form-error'>{message}</p>}
            <button className='submit-btn'>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default LoginForm

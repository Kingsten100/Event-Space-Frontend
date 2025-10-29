import React, { useState } from 'react'
import type { FormData } from '../../types/FormData.ts'
import { register } from '../../api/userService/RegisterUser.ts'
import type { RegisterData } from '../../types/UserType.ts'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../../context/AuthContext.tsx'

const RegisterForm = () => {

  const { registerUser } = useAuth()

  const [formData, setFormData] = useState<RegisterData>({
    email: '',
    name: '',
    password: '',
    repeatPassword: ''
  })

  const [error, setError] = useState<Partial<RegisterData>>({})
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value}))
  }

  const validate = (): boolean => {
    const newError: Partial<RegisterData> = {}

    if(!formData.name.trim()){
      newError.name = 'Username is required'
    }

    if(!formData.email.trim() || !formData.email.includes('@')){
      newError.email = 'Invalid email address'
    }

    if(formData.password.length < 6){
      newError.password = 'Password must be atleast 6 charachters long'
    }

    if(formData.password !== formData.repeatPassword){
      newError.repeatPassword = 'Passwords must match'
    }

    setError(newError)
    return Object.keys(newError). length === 0
  }

  const handlesubmit = async(e: React.FormEvent) => {
    e.preventDefault()

    if(!validate) return

    try {
      const res = await registerUser(formData.name, formData.email, formData.password, formData.repeatPassword)

      navigate('/')
      
    } catch (err: any) {
      setMessage(err.message)
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
              <label className='form-label' htmlFor="name">Username</label>
              <input className='form-input' type="text" name='name' value={formData.name} onChange={handleChange}/>
              {error.name && <p className='form-error'>{error.name}</p>}
            </div>
            <div className='form-content'>
              <label className='form-label' htmlFor="password">Password</label>
              <input className='form-input' type="password" name='password' value={formData.password} onChange={handleChange}/>
              {error.password && <p className='form-error'>{error.password}</p>}
            </div>
            <div className='form-content'>
              <label className='form-label' htmlFor="repeatPassword">Repeat password</label>
              <input className='form-input' type="password" name='repeatPassword' value={formData.repeatPassword} onChange={handleChange}/>
              {error.repeatPassword && <p className='form-error'>{error.repeatPassword}</p>}
            </div>
            <div className='form-text'>
              <p>Already have an account? </p> 
              <Link className='auth-link' to={'/login'}>
                <p className='underline'>Login in here</p>
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

export default RegisterForm

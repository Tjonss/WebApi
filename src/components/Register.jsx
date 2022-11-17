import axios from 'axios';
import { useState, useEffect } from 'react'
import { useForm }  from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState({})
  const [registered, setRegistered] = useState(false)

  const navigate = useNavigate()

  const registerUser = async (formData) => {
    setLoading(true)
    try {
      const res = await axios.post('https://localhost:7179/api/users', formData)
      setUser(res.data)
      setLoading(false)
      setError(null)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if(registered)
      navigate('/create')
    }, 1000);
  }, [registered, navigate])
  
  const onSubmit = async (formData) => {
    await registerUser(formData)
    setRegistered(true)
  }

  return (
    <>
      <h2 className='text-center mt-3 Create'>Register</h2>
       {!registered && (
      <form onSubmit={handleSubmit(onSubmit)} className='container mt-4'>
        <div className='mb-4'>
          <label htmlFor='firstName' className='form-label'>Firstname:</label>
          <input 
            id='firstName' 
            type='text' 
            className='form-control' 
            aria-describedby='emailHelp'
            {...register('firstName', {required: 'You need to enter your firstname.'})}
          />
          {errors.firstName && <small className='errorMessage'>{errors.firstName.message}</small>}
        </div>
        <div className='mb-4'>
          <label htmlFor='lastName' className='form-label'>Lastname:</label>
          <input 
            id='lastName' 
            type='text' 
            className='form-control'
            { ...register('lastName', {required: 'You need to enter your lastname.'}) }
          />
          { errors.lastName && <small className='errorMessage'>{errors.lastName.message}</small> }
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='form-label'>Email:</label>
          <input 
            id='email' 
            type='email' 
            className='form-control'
            {...register('email', {required: 'You need to enter your email address.'})}
          />
          {errors.email && <small className='errorMessage'>{errors.email.message}</small>}
        </div>
        <div className='mb-5'>
          <label htmlFor='phoneNumber' className='form-label'>Phone-number:</label>
          <input 
            id='phoneNumber' 
            type='text' 
            placeholder='Optional...' 
            className='form-control' 
            {...register('phoneNumber')}
            />
        </div>
        <button type='submit' className='btn btn-primary w-50 d-block mx-auto'>Register</button>
      </form>
    )}
      { registered && <div className='d-flex justify-content-center align-items-center mt-5'>You are now registered.</div> }
    </>
  )
}

export default Register
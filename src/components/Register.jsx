import React from 'react'
import { useForm }  from 'react-hook-form'
// import axios from 'axios';

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();


  const registerUser = async (formData) => {
   
  }

  const onSubmit = (formData) => {
    registerUser(formData)
  }

  return (
    <>
      <h2 className='text-center mt-3 Create'>Register</h2>
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
            {...register('lastName', {required: 'You need to enter your lastname.'})}  />
            {errors.lastName && <small className='errorMessage'>{errors.lastName.message}</small>}

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
        <div className='mb-4'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input 
            id='password' 
            type='password' 
            className='form-control'
            {...register('password', {required: 'You need to enter a password.', minLength: {value: 4, message: 'Your password must be atleast 7 characters long.'} })}
            />
          {errors.password && <small className='errorMessage'>{errors.password.message}</small>}
        </div>
        <div className='mb-5'>
          <label htmlFor='phonenumber' className='form-label'>Phone-number:</label>
          <input 
            id='phonenumber' 
            type='text' 
            placeholder='Optional...' 
            className='form-control' 
            />
        </div>
        <button type='submit' className='btn btn-primary w-50 d-block mx-auto'>Register</button>
      </form>
    </>
  )
}

export default Register
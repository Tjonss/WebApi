import { useContext } from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {


  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (formData) => {
    
  }

  return (
    <>
      <h2 className='text-center mt-3 Create'>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='container mt-4'>
        <div className='mb-4'>
          <label htmlFor='email' className='form-label'>Email address</label>
          <input 
            type='email' 
            className='form-control' 
            id='email' 
            aria-describedby='emailHelp'
            {...register('email', { required: 'You need to enter your email address.'} )}
            />
            {errors.email && <small className='errorMessage'>{errors.email.message}</small>}
        </div>
        <div className='mb-5'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input 
            type='password' 
            className='form-control' 
            id='password'
            {...register('password', { required: 'You need to enter your password.'} )} />
            {errors.password && <small className='errorMessage'>{errors.password.message}</small>}

        </div>
        <button type='submit' className='btn btn-primary w-50 d-block mx-auto '>Login</button>
      </form>
    </>
  )
}

export default Login
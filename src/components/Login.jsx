import React from 'react'

const Login = () => {
  return (
    <>
      <h2 className='text-center mt-3 Create'>Login</h2>
      <form className='container mt-4'>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Email address</label>
          <input type='email' className='form-control' id='email' aria-describedby='emailHelp'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input type='password' className='form-control' id='password' />
        </div>
        <button type='submit' className='btn btn-primary w-50 d-block mx-auto'>Login</button>
      </form>
    </>
  )
}

export default Login
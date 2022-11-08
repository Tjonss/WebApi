import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'

const Create = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate()

  
  const onSubmit = (formData) => {
    newIssue(formData)
      navigate(`/issues`)
  }
  
 
  
  
  const newIssue = async (formData) => {
    try {
      const json = JSON.stringify(formData)
      const res = await fetch('https://localhost:7292/api/issues', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: json
      })
      if(!res.status === 201) {
        throw new Error()
      }
      const data = await res.json()
        console.log(data)
      }
      catch (err) {
        console.log(err.message)
      }
  }


  return (
    <>
    <h2 className='text-center mt-3 Create'>Create new Issue</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='container mt-5'>
        <div className='form-floating position-relative py-1'>
          <input 
            type='text' 
            className='form-control' 
            id='inputtitle' 
            placeholder='Enter a title'
            name='title'
            {...register('title', { required: 'You have to enter a title.'} )}
              />
              {errors.title && <small className='errorMessage'>{errors.title.message}</small>}
          <label htmlFor='inputtitle'>Enter a title..</label>
        </div>
        <div className='form-floating mt-4 py-1'>
          <textarea 
            style={styles.textarea} 
            className='form-control custom-textarea' 
            id='formtextarea'
            placeholder='name@email.com'
            name='desc'
            {...register('description', { required: 'You have to enter a description.'})}
            >
          </textarea>
          <label htmlFor='formtextarea'>Description..</label>
            {errors.description && <small className='errorMessage'>{errors.description.message}</small>}
        </div>
        <div className='row g-2 mt-4 py-1'>
          <div className='col-md'>
            <div className='form-floating'>
              <input 
                type='email' 
                className='form-control' 
                id='floatingInputGrid' 
                placeholder='name@email.com'
                name='email'
                {...register('email', { required: 'You have to enter your email address.'})}
                />
              <label htmlFor='floatingInputGrid'>Enter your email..</label>
              {errors.email && <small className='errorMessage'>{errors.email.message}</small>}
            </div>
          </div>
        </div>
        <button className='btn btn-primary d-block w-75 mx-auto my-5'>Submit</button>
      </form>
    </>
  )
}

const styles = {
  textarea: {
    minHeight: '200px',
    resize: 'none'
  }
}



export default Create
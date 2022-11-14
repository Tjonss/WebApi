import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  // const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [createIssue, setCreateIssue] = useState({})
  const [users, setUsers] = useState([])
  
  const newIssue = async (formData) => {
    setLoading(true)
    try {
      const res = await axios.post('https://localhost:7179/api/issues', formData)
      console.log(res.data)
      setCreateIssue(res.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  const getUsers = async () => {
    try {
      const res = await axios.get('https://localhost:7179/api/users')
      setUsers(res.data)
    }
    catch (err) {
      setError(err.message)
    }
  }

  const onSubmit = (formData) => {
      newIssue(formData)
      // navigate('/issues')
    }

    useEffect(() => {
      getUsers()
    }, [])

  return (
    <>
      <h2 className='text-center mt-3 Create'>Create new issue</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='container mt-5'>
        <div className='position-relative'>
          <small className='ms-1 fs-6'>Select user:</small>
          { users.length 
          ?  
            <select 
              className='form-select form-control mb-4' 
              id='select'
              placeholder='Select a customer..'
              {...register('userId', { required: 'You have to select a user.'} )}
              >
              { users && users.map(user => <option value={user.id} key={user.id}>{user.firstName} {user.lastName}</option>)}
            </select>
            : <select className='form-select mb-4' disabled> <option>Register a new user to create issues</option></select>
          }
         
        {errors.userId && <small className='selectErrorMessage'>{errors.userId.message}</small>}
        </div>
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
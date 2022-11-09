import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

const SingleIssue = () => {

  const {register, handleSubmit} = useForm()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [issue, setIssue] = useState({})
  
  const { id } = useParams();
  const { comments } = issue
  
  const getIssue = async () => {
    setLoading(true)
    try {
      const res = await axios.get('https://localhost:7179/api/issues/' + id)
      setIssue(res.data)
      console.log(res.data)
      setLoading(false)
      setError(null)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    getIssue()
  },[])

  const onSubmit = (formData) => {
    console.log(formData)
  }


  return ( <>
    { loading && <div className='text-center'>Loading issues...</div>}
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='Single-Issue container mt-5'>
        <div className='card mb-3 pb-2'>
          <div className='card-header d-flex justify-content-between align-items-center'>
            <small className='fs-5'>{issue.title}</small>
            <div className='form-floating'>
              <select 
                className='form-select mb-3' 
                id='select'
                placeholder='Select a customer..'
                {...register('status')}>
              </select>
              <label htmlFor='select'>Status</label>
            </div>
          </div>
          <div className='fw-lighter container text-center my-2 mb-0 d-flex justify-content-between'>
            <small className='fst-italic'>
            {Date().toLocaleString(issue.created).slice(0,16)}
            </small>
            <small>{issue.email}</small>
          </div>
          <div className='card-body py-2'>
            <p className='card-text'>{issue.description}</p>
          </div>
        </div>
        <div className='Comments'>
            <div className='w-100 mb-2'>
              <textarea className='form-control' placeholder='Leave a comment here...' {...register('comment')}></textarea>
            </div>
            <div className='d-flex justify-content-start'>
              <button type='submit' className='btn btn-primary d-block w-100'>Save</button>
            </div>
        </div>
        <h5 className='mt-3 text-decoration-underline'>Comments:</h5>
        <ul>
        { comments && comments.map(comment => <li key={comment.id}>{comment.comment}</li>)}
        </ul>
      </div>
    </form>  </>
  )
}

export default SingleIssue 
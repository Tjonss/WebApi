import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const SingleIssue = () => {

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

  const changeStatus = (e) => {
 
  }

  // Errordelen

  return ( <>


    { error && <p>Something went wrong</p> } 
    { loading && <div className='text-center'>Loading issues...</div>}
    <form>
      <div className='Single-Issue container mt-5'>
        <div className='card mb-3 pb-2'>
          <div className='card-header d-flex justify-content-between align-items-center'>
            <small className='fs-5'>{issue.title}</small>
            <div className='form-floating'>
              <select 
                  onChange={changeStatus}
                  className='form-select' 
                  id='select'>
                <option value={issue.status} >Not opened</option>
                <option value={issue.status} >Opened</option>
                <option value={issue.status}>Closed</option>
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
              <textarea className='form-control' placeholder='Leave a comment here...'></textarea>
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
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const CommentForm = ({ issue, getIssue, setIssue }) => {

  const { id } = useParams()
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const addComment = async (message) => {
    try {
      const res = await axios.post('https://localhost:7179/api/comments', {
        message,
        userId: issue.user.id,
        issueId: issue.id
      })
      setIssue((state) => ({...state, message: res.data}))
      getIssue(id)
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(message !== '') {
      addComment(message)
      setMessage('')
    }
    else 
      navigate('/issues')
  }

  return (
    <> 
      <form onSubmit={handleSubmit} className='Comments'>
        <div className='w-100 mb-2'>
          <textarea
            className='form-control'
            placeholder='Leave a comment here...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className='d-flex justify-content-start'>
          <button type='submit' className='btn btn-primary d-block w-100'>
            Save
          </button>
        </div>
      </form>
      <h5 className='mt-3 text-decoration-underline'>Comments:</h5>
      <ul>
        { issue.comments &&
          issue.comments.map((comment) => <li key={comment.id}>{comment.message}</li>
        )}  
      </ul>
    </>
  )
}

export default CommentForm
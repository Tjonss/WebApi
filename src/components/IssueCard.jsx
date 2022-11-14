import { Link } from 'react-router-dom'

const IssueCard = ({ issue }) => {

  return (
    <div className='Issue'>
      <Link to={`/issues/${issue.id}`}className='Issue-Link'>
        <div className='card my-3'>
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
              <h6 className='card-title fw-bold'>{issue.title}</h6>
              <small className='fst-italic'>{issue.user.email}</small>
            </div>
            <hr className='m-0' />
            <div className='text-center mt-1'>
              <small className='fw-lighter fst-italic align-self-end text-decoration-underline'>{issue.created.slice(0,10)}</small>
            </div>
              <div className='mt-2 d-flex'>
                <small className='card-text d-block mb-1 fst-italic'>{issue.description}</small>
              </div>
            <small className='Status'>{issue.status.status}</small>
          </div>
        </div>
      </Link> 
    </div>
  )
}

export default IssueCard
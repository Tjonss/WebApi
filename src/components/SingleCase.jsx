import React from 'react'

const SingleCase = () => {
  return (
    <form>
      <div className='Single-Case container mt-5'>
        <div className='card mb-3 pb-2'>
          <div className='card-header d-flex justify-content-between align-items-center'>
            <small className='fs-4'>Title</small>
            <div className='form-floating'>
              <select className='form-select' id='select'>
                <option>Not opened</option>
                <option>Opened</option>
              </select>
              <label htmlFor='select'>Status</label>
            </div>
          </div>
          <div className='fw-lighter container text-center my-2 mb-0 d-flex justify-content-between'>
            <small className='fst-italic'>
              18 november 09:30</small>
            <small>jonas@mail.se</small>
          </div>
          <div className='card-body py-2'>
            <p className='card-text'>Lorem ipsum dolor sit amet consecteturmet consecteturmet consecteturmet consectetur adipisicing elit. Consectetur aperiam non voluptatibus recusandae ipsum aliquid quae veritatis magnam veniam dicta, iusto aspernatur impedit ab facere.</p>
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
          <li>Comment 1</li>
          <li>Comment 2</li>
          <li>Comment 3</li>
        </ul>
      </div>
    </form>
  )
}

export default SingleCase
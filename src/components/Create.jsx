import React from 'react'

const Create = () => {

  return (
    <>
    <h2 className='text-center mt-3 Create'>Create new case</h2>
      <form className='container mt-5'>
        <div className='form-floating'>
            <input type='text' className='form-control' id='floatingInputGrid' placeholder='name@example.com' />
            <label htmlFor='floatingInputGrid'>Enter a title..</label>
        </div>
        <div className='form-floating mt-4'>
          <textarea style={styles.textarea} className='form-control custom-textarea' placeholder='Leave a comment here' id='floatingTextarea2' ></textarea>
          <label htmlFor='floatingTextarea2'>Description</label>
        </div>

        <div className='row g-2 mt-3'>
          <div className='col-md'>
            <div className='form-floating'>
              <input type='email' className='form-control' id='floatingInputGrid' placeholder='name@example.com' />
              <label htmlFor='floatingInputGrid'>Email address</label>
            </div>
          </div>
          <div className='col-md'>
            <div className='form-floating'>
              <select className='form-select' id='floatingSelectGrid'>
                <option>Not opened</option>
                <option>Opened</option>
                <option>Finished</option>
              </select>
              <label htmlFor='floatingSelectGrid'>Status</label>
            </div>
          </div>
        </div>
        <button className='btn btn-primary d-block w-75 mx-auto mt-4'>Submit</button>
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
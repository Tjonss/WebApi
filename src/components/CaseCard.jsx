import React from 'react'
import { Link } from 'react-router-dom'


const Case = () => {
  return (
        <div className='Case'>
          <Link to='/cases/:id' className='Case-Link'>
                <div className='card my-3'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                      <h6 className='card-title fw-bold'>Card title</h6>
                      <small className='fst-italic'>jonas@mail.se</small>
                    </div>
                    <hr className='m-0' />
                    <div className='text-center mt-1'>
                      <small className='fw-lighter fst-italic align-self-end text-decoration-underline'>18 november 09:30</small>
                    </div>
                    <div className='mt-2 d-flex'>
                      <small className='card-text d-block mb-1 fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae, eaque ipsum ea cupiditate cumque corporis voluptatum praesentium nobis iste autem sequi sint unde? Consequuntur.</small>
                    </div>
                  </div>
                </div>
            </Link> 
        </div>
  )
}

export default Case
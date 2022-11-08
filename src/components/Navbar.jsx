import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isAuth, setIsAuth] = useState(true)


  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/issues' className='nav-link active' aria-current='page'>Issues</Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-link' >Register</Link>
            </li>
            { isAuth && (

              <li className='nav-item'>
                <Link to='/create' className='nav-link'>Create</Link>
              </li>
              )}

            { isAuth && (

            <li className='nav-item'>
              <a className='nav-link' >Logout</a>
            </li>
            )}
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
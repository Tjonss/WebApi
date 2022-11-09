import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav  d-flex justify-content-between'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Register</Link>
            </li>
            <li className='nav-item'>
              <Link to='/create' className='nav-link'>Create</Link>
            </li>
            <li className='nav-item'>
              <Link to='/issues' className='nav-link' aria-current='page'>Issues</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
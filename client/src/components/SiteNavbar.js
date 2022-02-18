import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


//bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Buffer } from 'buffer'
import { getTokenFromLocalStorage, userIsAuthenticated } from '../helpers/auth'




const SiteNavbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    // Remove token
    window.localStorage.removeItem('planets-token')
    // Redirect to the home page
    navigate('/')
  }
  return (
  <div className='nav-style'>
      <div className='nav-logo'>
      <Navbar.Brand>
        <Link className='btn btn-logo' to='/'> <img className='logo' src={require('../image/logo.png')} alt='logo' key= 'logo' /> </Link>
      </Navbar.Brand>
      </div>

        <div className='nav-profile'>
          <Nav.Item>
            <Link className='btn btn-nav' to="/profile">Profile</Link>
        </Nav.Item>
        </div>

        <div className='nav-register'>
          <Nav.Item>
            <Link className='btn btn-nav' to="/register">Register</Link>
          </Nav.Item>
        </div>

        <div className='nav-login'>
          <Nav.Item>
            <Link className='btn btn-nav' to="/login">Login</Link>
          </Nav.Item>
        </div>

        <div className='nav-offers'>
          <Nav.Item>
            <Link className='btn btn-nav' to="/offers">Offers</Link>
            </Nav.Item>
        </div>
    </div>
  )

  // return (
  // <Navbar>
  //   <Container>
  //   <div className='nav-style'>
  //     <div className='nav-logo'>
  //       <Navbar.Brand>
  //         <Link className='btn btn-logo' to='/'> Home </Link>
  //       </Navbar.Brand>
  //     </div>
  //     <div className='nav-offers'>
  //         <Nav.Item>
  //           <Link className='btn btn-nav' to="/offers">Offers</Link>
  //         </Nav.Item>
  //     </div>

  //     { userIsAuthenticated() ?
  //       <>
  //         <Nav.Item onClick={handleLogout}>
  //           <span>Logout</span>
  //         </Nav.Item>

  //         <div className='nav-profile'>
  //           <Nav.Item>
  //             <Link className='btn btn-nav' to="/profile">Profile</Link>
  //           </Nav.Item>
  //         </div>
  //       </>
  //       :
  //       <>
  //         <div className='nav-register'>
  //           <Nav.Item>
  //             <Link className='btn btn-nav' to="/register">Register</Link>
  //           </Nav.Item>
  //         </div>

  //         <div className='nav-login'>
  //           <Nav.Item>
  //             <Link className='btn btn-nav' to="/login">Login</Link>
  //           </Nav.Item>
  //         </div> 
  //       </>
  //     }
  //   </div>
     //   </Container>
    // </Navbar>
  // )
}
export default SiteNavbar
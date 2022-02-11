import React from 'react'
import { Link } from 'react-router-dom'

//bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const SiteNavbar = () => {


  return (
    <div className='nav-style'>

      <div className='nav-logo'>
      <Navbar.Brand>
        <Link className='btn btn-logo' to='/'>Home </Link>
      </Navbar.Brand>
      </div>

        <div className='nav-profile'>
          <Navbar.Brand>
            <Link className='btn btn-nav' to="/profile"> My Profile </Link>
          </Navbar.Brand>
        </div>

        <div className='nav-register'>
          <Navbar.Brand>
            <Link className='btn btn-nav' to="/register"> Register </Link>
          </Navbar.Brand>
        </div>

        <div className='nav-login'>
          <Navbar.Brand>
            <Link className='btn btn-nav' to="/login"> Login </Link>
          </Navbar.Brand>
        </div>

        <div className='nav-offers'>
          <Navbar.Brand>
            <Link className='btn btn-nav' to="/offers"> Offers </Link>
          </Navbar.Brand>
        </div>

    </div>
  )
}
export default SiteNavbar
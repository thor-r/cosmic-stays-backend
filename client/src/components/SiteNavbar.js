import React from 'react'
import { Link } from 'react-router-dom'

//bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const SiteNavbar = () => {


  return (
    <Navbar  className = 'bg-white' >
      <Container>
      <Navbar.Brand className='btn btn-nav text-black'> Home  </Navbar.Brand>
      <Nav>
        <Link className='nav-profile btn btn-nav text-black' to="/profile"> My Profile </Link>
        <Link className='nav-register btn btn-nav text-black' to="/register"> Register </Link>
        <Link className='nav-login btn btn-nav text-black' to="/login"> Login </Link>
        <Link className='nav-offers btn btn-nav text-black' to="/offers"> Offers </Link>
      </Nav>
        </Container>
      </Navbar>
  )
}
export default SiteNavbar
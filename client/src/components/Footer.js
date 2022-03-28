import React from 'react'
import { Link } from 'react-router-dom'

//bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Footer = () => {

  return (
    <>
      <div className='nav-footer'>
        <Navbar>
          <Nav.Item>
            Spacebook by 
            {<a className='github' id ='jomari' href="https://github.com/camjom" target='_blank' rel="noreferrer">Jomari,</a>}  
            {<a className='github' href='https://github.com/thor-r' target='_blank' rel="noreferrer">Thor </a>}and
            {<a className='github' id ='neil' href='https://github.com/spurs129' target='_blank' rel="noreferrer">Neil</a>}
          </Nav.Item>
        </Navbar>
      </div>
    </>
  )
}
export default Footer
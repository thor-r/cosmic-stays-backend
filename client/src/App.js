import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importing components
import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'
import Footer from './components/Footer'


function App() {
  return (
    <div className='site-wrapper'>
      <BrowserRouter>
      <SiteNavbar />
      
      <Routes>

        <Route path="/" element = {<Home />} />
        {/* <Route path="/login" element = {<Login />} /> */}
        {/* <Route path="/register" element = {<Register />} /> */}
        {/* <Route path="/profile" element = {<Profile />} /> */}
        {/* <Route path="/offers" element = {<Offers />} /> */}
        {/* <Route path="/planet/:id element = {<ShowPlanet />} /> */}

      </Routes>

      <Footer />
    </BrowserRouter>
  
  
  </div >
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importing components
import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Offers from './components/Offers'
import Profile from './components/Profile'
import PlanetDetails from './components/PlanetDetails'
import Booking from './components/Booking'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className='site-wrapper'>
      <BrowserRouter>
      <SiteNavbar />
      
      <Routes>

        <Route path="/" element = {<Home />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/offers" element = {<Offers />} />
        <Route path="/profile" element = {<Profile />} />
        <Route path="/planets/:planetId" element = {<PlanetDetails />} />
        <Route path="/planets/:planetId/reviews" element = {<Reviews />} />
        <Route path="/booking" element = {<Booking />} />
        
  
        {/* <Route path="/planet/:id element = {<ShowPlanet />} /> */}

      </Routes>

      <Footer />
    </BrowserRouter>
  
  
  </div >
  )
}

export default App

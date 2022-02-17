import React, { useState } from 'react'
import axios from 'axios' 

import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Booking = () => {

  const navigate = useNavigate()

  const [ bookingData, setBookingData ] = useState({
    email: '',
    HomePlanet: '',
    DateOfDeparture: '',
    DateOfReturn: '',
    SizeOfParty: '',
    cryoSleep: false
  })

  const [ formErrors, setFormErrors ] = useState({
    email: '',
    HomePlanet: '',
    DateOfDeparture: '',
    DateOfReturn: '',
    SizeOfParty: '',
  })

  const handleChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setBookingData({ ...bookingData, [event.target.name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    window.alert(`Submitting ${JSON.stringify(bookingData, null, 2)}`)
  }

  return (
    <div className='booking-parent'>
    <div className='booking-section'>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label'>Email</label>
          <div className='control'>
            <input 
              className='input'
              name="email"
              value={bookingData.email}
              onChange={handleChange}
              />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Home Planet</label>
          <div className='control'>
            <input 
              className='input'
              name="homePlanet"
              value={bookingData.homePlanet}
              onChange={handleChange}
              />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Date of Departure</label>
          <div className='control'>
            <input 
              className='input'
              name="dateOfDeparture"
              value={bookingData.DateOfDeparture}
              onChange={handleChange}
              />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Size of Party</label>
          <div className='control'>
            <input 
              className='input'
              name="sizeOfParty"
              value={bookingData.SizeOfParty}
              onChange={handleChange}
              />
          </div>
        </div>

        <div className='field'>
          <label className='checkbox label'>
            Cryogenic Sleep Required 
            <input 
            type="checkbox"
            name="cryoSleep"
            checked={bookingData.cryoSleep}
            onChange={handleChange}
            />
          </label>
        </div>
        <Button type="button" class="btn btn-dark">Confirm</Button>
      </form>
    </div>
    </div>
  )

}

export default Booking
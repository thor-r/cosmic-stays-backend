import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Review = () => {
  const { planetId } = useParams()
  const localToken = localStorage.getItem('planets-token')
  const navigate = useNavigate()
  // const authAxios = axios.create({
  //   headers: {
  //     Authorization : `Bearer ${localToken}`
  //   }
  // })
  const [formData, setFormData] = useState({
    text: '',
    rating: 1,
  })

  const [errors, setErrors] = useState({
    text: { message: '' }
  })

  const handleChange = event => {
    if ( event.target.name === 'rating') {
      setFormData({ ...formData, [event.target.name]: parseInt(event.target.value) })
    } else { 
    setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    console.log(formData)
    setErrors({ ...errors, [event.target.name]: '' })
  }

  const handleSubmit = async (event) => {
    // console.log(event)
    event.preventDefault()
    try {
      await axios.post(
        `/api/planets/${planetId}/reviews`,
        formData,
        { headers: {
          Authorization : `Bearer ${localToken}`
        } }
      )
      navigate(`/planets/${planetId}`) 
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <> 
    <form className='review-form' onSubmit={handleSubmit}>

          <label>Rate your Visit</label>
          <input className='rating-input' name='rating' onChange={handleChange} type="number" placeholder="1" min='1' max='5' value={formData.rating} />

          <br></br>

          <label>Review </label>
          <input className='text-input' name='text' type="text" value={formData.text} onChange={handleChange} /> 
        

        <br></br>

        <input className='submit-input' type="submit" value="Submit" />
    </form>

  </>
  )
}

export default Review
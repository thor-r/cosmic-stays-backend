import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Review = () => {
  const { planetId } = useParams()
  const localToken = localStorage.getItem('planets-token')
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
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <> 
    <form onSubmit={handleSubmit}>

        <label>
          Review
          <input name='text' type="text" value={formData.text} onChange={handleChange} /> 
          <input name='rating' onChange={handleChange} type="number" placeholder="1" value={formData.rating} />
        </label>
        <input type="submit" value="Submit" />
    </form>

  </>
  )
}

export default Review
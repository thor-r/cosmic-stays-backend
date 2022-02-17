import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const  Wishlist = () => {
  const { planetId } = useParams()
  const localToken = localStorage.getItem('planets-token')
  // const authAxios = axios.create({
  //   headers: {
  //     Authorization : `Bearer ${localToken}`
  //   }
  // })
  const [formData, setFormData] = useState({
    reviewedPlanet : planetId
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
        `/api/planets/${planetId}`,
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
          Add to Wishlist
          <input name='wishlist' onChange={handleChange} value={formData.rating} />
        </label>
        <input type="submit" value="Submit" />
    </form>

  </>
  )
}

export default Wishlist
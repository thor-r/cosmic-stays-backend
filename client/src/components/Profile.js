import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Card, Col, Carousel } from 'react-bootstrap'

const Profile = () => {

  const [profile, setProfile] = useState([])

  useEffect(() => {
    const getData = async () => {
    try {
          const { data } = await axios.get('/api/planets/profile') 
          console.log(data)
          setProfile(data)
    } catch (error) {
      console.log(error)
  }
    }
    getData()
  }, [])

  return (
    <> 

    <h1> Text to go here </h1>

    </>
  )

}

export default Profile
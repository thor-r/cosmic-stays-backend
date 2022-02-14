import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Home = () => {

  useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get('/api/planets/') // * <-- replace with your endpoint
    console.log(data)
  }
  getData()
})

  return (
    <>
    </>
  )
}

export default Home
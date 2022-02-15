import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

const PlanetDetails = () => {

const [ planet, setPlanet ] = useState(null)
const [ hasError, setHasError ] = useState({ error: false, message: '' })

const { planetId } = useParams()

  useEffect(() => {
    console.log('test')
    const getSinglePlanet = async () => {
      try {
        const { data } = await axios.get(`/api/planets/${planetId}`)
        setPlanet(data.data)
        console.log(data)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
  getSinglePlanet()

  },[planetId])

  return(
    <Container className="mt-4">
      <div className='planet-details'>
        <h2>{planet.name}</h2>
        <hr/>
        <h4>{`${planet.planetOverview}`}</h4>
        <hr/>
        <h4>{`Distance from Earth: ${planet.distanceFromEarth}`}</h4>
        <hr/>
        <h4>{`Travel Time: ${planet.travelTime}`}</h4>
        <hr/>
        <h4>{`Current Temperature: ${planet.temperature}`}</h4>
        <hr/>
        <h4>{`Things to Do: ${planet.thingsToDo}`}</h4>
        <hr/>
        <h4>{`Danger Level: ${planet.dangerLevel}`}</h4>
        <hr/>
        <h4>{`Average Rating: ${planet.avgRating}`}</h4>
      </div>
    </Container>
  )
}

export default PlanetDetails
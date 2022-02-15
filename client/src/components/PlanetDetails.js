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
        setPlanet(data)
        console.log(data)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
  getSinglePlanet()

  },[planetId])

  
  return(
    <Container className="mt-2">
      <div className= "card-and-pics">
        {planet && 
        <div className='planet-details'>
          <h1>{planet.name}</h1>
          <hr/>
          <h4>{planet.planetOverview}</h4>
          <hr/>
          <h6>{`Distance from Earth: ${planet.distanceFromEarth}`}</h6>
          <hr/>
          <h6>{`Travel Time: ${planet.travelTime}`}</h6>
          <hr/>
          <h6>{`Current Temperature: ${planet.temperature}`}</h6>
          <hr/>
          <h6>{`Things to Do: ${planet.thingsToDo}`}</h6>
          <hr/>
          <h6>{`Danger Level: ${planet.dangerLevel}`}</h6>
          <hr/>
          <h6>{`Average Rating: ${planet.avgRating}`}</h6>
        </div> }

      { planet &&
      <div className='planet-images'>
        {planet.imageGallery.map(image => {
          console.log(image)
        return <div>
        <img className="image" src={image} alt= "Planet" />
        </div>
        })}
      </div>}
    </div>

      { planet &&
      <div className='planet-reviews'>
        {planet.reviews.map(review => {
          console.log(review)
          return <div key={review._id}>
            <h4>Planet Reviews</h4>
            <p>{`Rating: ${review.rating} Reviewed by: ${review.owner.username}`}</p>
            <p>{review.text}</p>
          </div>
        })}
      </div> }
    </Container>
  )
}
export default PlanetDetails
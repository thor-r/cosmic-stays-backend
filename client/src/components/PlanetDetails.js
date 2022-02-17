import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'

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

  const localToken = localStorage.getItem('planets-token')
  console.log('local token -> ', localToken)

  const authAxios = axios.create({
    headers: {
      Authorization : `Bearer ${localToken}`
    }
  })

  const handleAddWishList = async (req, res) => {
    try { 
      await authAxios.post( `/api/planets/${planetId}`, {
        planet: planet.id,
        addedToWishlist: true, 
      },
      { headers: { Authorization : `Bearer ${localToken}`},})
      await planetId()
    } catch (error) {
      console.log(error)
    }
  }

  // const handlePostReview = async (req, res) => {
  //   try { 
  //     await authAxios.post( `/api/planets/${planetId}`, {
  //       planet: planet.id,
  //       addedToWishlist: true, 
  //     },
  //     { headers: { Authorization : `Bearer ${localToken}`},})
  //     await planetId()
  //     console.log(req)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleRemoveWishList = async (planetId) => {
  //   try {
  //     await authAxios.delete(`/api/planets/${planetId}/`, {
  //       headers: { Authorization : `Bearer ${localToken}` },
  //     })
  //     await planetId()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // } 

  
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
        <h4>Planet Reviews</h4>
        {planet.reviews.map(review => {
          console.log(review)
          return <div key={review._id}>
            <p>{`Rating: ${review.rating} By: ${review.owner.username} Review ${review.text}`}</p>
          </div>
        })}
      </div> }
      <Link to="/booking">Go Here</Link>
      <Button onClick={handleAddWishList}> Add to Wish List </Button>
      <Link to={`/planets/${planetId}/reviews/`}> <button>Add Review</button> </Link>
    </Container>
  )
}
export default PlanetDetails
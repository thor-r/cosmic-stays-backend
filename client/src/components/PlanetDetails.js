import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'

const PlanetDetails = () => {

const [ planet, setPlanet ] = useState(null)
const [ hasError, setHasError ] = useState({ error: false, message: '' })
const [ image, setImage ] = useState("")
const [ reviews, setReview ] = useState(null)
const { planetId } = useParams()

  useEffect(() => {
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

// const localToken = localStorage.getItem('planets-token')
// console.log('local token -> ', localToken)

// const authAxios = axios.create({
//   headers: {
//     Authorization : `Bearer ${localToken}`
//   }
// })

// const deleteReview = ( planetId, reviewId ) => {
//     return axios.delete( `api/planets/${planetId}/reviews/${reviewId}` , {
//       headers: {
//         Authorization : `Bearer ${localToken}`
//       }
//     })
//   }

// const getOnePlanet = (planetId) => {
//     return axios.get(`api/planets/${planetId}`, {
//       headers: {
//         Authorization : `Bearer ${localToken}`
//       }
//     })
//   }
  // const handleDelete = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await deleteReview(planet._id, reviews._id)
  //     const res = await getOnePlanet(planetId)
  //     setPlanet(res.data)
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
          <h6>Distance from Earth: <span class="info">{planet.distanceFromEarth}</span></h6>
          <hr/>
          <h6>Travel Time: <span class="info">{planet.travelTime}</span></h6>
          <hr/>
          <h6>Current Temperature: <span class="info">{planet.temperature}</span></h6>
          <hr/>
          <h6>Things to Do: <span class="info">{planet.thingsToDo}</span></h6>
          <hr/>
          <h6>Danger Level: <span class="info">{planet.dangerLevel}</span></h6>
          <hr/>
          <h6>Average Rating: <span class="info">{planet.avgRating}</span></h6>
          <Link className='btn btn-book' to="/booking">Book {planet.name}</Link>
        </div> }

      { planet &&
      <div className='planet-images'>
        {planet.imageGallery.map(image => {
          console.log(image)
        return <div>
        <img className="image" onClick={() => setImage(image)} src={image} alt= "planet"/>
        </div>
        })}
        </div>}
      </div>

      {image &&  
      <div className="spotlight-container" onClick={() => setImage(null)}>
        <img className="spotlight-image" src={image} alt="planet"/>
      </div>}


      { planet &&
      <div className='planet-reviews'>
        <h4>Planet Reviews</h4>
        {planet.reviews.map(review => {
          console.log(review)
          return <div key={review._id}>
            <div className='review-box'>
            <span className='user'>{review.owner.username}</span><span className='rating'>Rating : {review.rating}</span> <br /><br /> <span className='review-text'><em>{review.text}</em></span>
            </div>
          </div>
        })}
        <Link to={`/planets/${planetId}/reviews/`}> <button className='review-btn'> Review {planet.name}</button> </Link>
      </div> }

    </Container>
    
  )
}
export default PlanetDetails
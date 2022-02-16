import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

const PlanetDetails = () => {

const [ planet, setPlanet ] = useState(null)
const [ hasError, setHasError ] = useState({ error: false, message: '' })
const [ image, setImage ] = useState("")

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
          <Link className='btn btn-book' to="/booking">Travel</Link>
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
            {review.owner.username} <br></br> {review.text} <br></br> <br></br>Rating : {review.rating}
            </div>
          </div>
        })}
      </div> }

    
      <Link to={`/planets/${planetId}/reviews/`}> <button className='review-btn'>Add Review</button> </Link>
    </Container>
    
  )
}
export default PlanetDetails
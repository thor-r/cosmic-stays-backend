import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Card, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Profile = () => {

  const localToken = localStorage.getItem('planets-token')
  console.log('local token -> ', localToken)

  const authAxios = axios.create({
    headers: {
      Authorization : `Bearer ${localToken}`
    }
  })

  const [ profile, setProfile ] = useState([])
  const [ hasError, setHasError ] = useState({ error: false, message: '' })
  const [ planets, setPlanets ] = useState([])

  useEffect(() => {
    const getData = async () => {
    try {
      const { data } = await authAxios.get('/api/profile')
      console.log(data)
      setProfile(data)
    } catch (error) {
      setHasError({ error: true, message: error.message })
  }
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
    try {
      const { data } = await authAxios.get('/api/planets/')
      // console.log(data)
      setPlanets(data)
    } catch (error) {
      setHasError({ error: true, message: error.message })
  }
    }
    getData()
  }, [])

  const allReviews = []

  if (profile.reviewedPlanet) {
    profile.reviewedPlanet.forEach(e => { 
      allReviews.push(<>
      <div className='singleReview'>
        <Col className='col-md-2'> <div className='review-name'> { e.planet } Review </div> </Col>
        <div className='review-spacer'> </div>
        <Col className='col-md-2'> <div className='review-rating'> {e.rating} out of 5 </div> </Col>
        <div className='review-spacer'> </div>
        <Col className='col-md-5'> <div className='review-info'>  {e.text}</div> </Col>        
        <div className='review-spacer'> </div>
        <Col className='col-md-2'> 
          <div className='btn jump-review-btn'> 
            <Link to={`/planets/${e.planetId}`} className='review-button'>
              Jump to Review
            </Link>
          </div> 
        </Col>   
      </div>
      </>)
    });
  }

  return (
    <> 
    <Container className='profile-cont'> 
      <Row className='profile-card'>
      <div className="col-4 profile-img"> 
      {/* <img className='profilePic' src={profilePic} alt='profile'/>   */}
      </div>
      <div className="col-8 profile-info">          
        <div className='profile-name'> Username: {profile.username} </div>
        <div className='profile-email'> Email: {profile.email} </div>
      </div>       
      </Row>
    </Container>

    <Container className='review-cont'> 
      <Row className='review-card'>  
      {allReviews}
      </Row>
    </Container>

    <Container className='wishList-cont'> 
      <Row className='wishList-card'> 
      <Row> <h3> Wishlist </h3> </Row>  
      {planets.map((planet, i) => {
    if (i <= 2) {
      console.log(planet)
      return (
        <> 
          <div className='singleWishlist'> 
          <Col className='col-md-5'>
            <div className='wishList-name'> {planet.name} </div>
            <div className='btn wishList-btn'> {planet.offers[0]} </div>     
          </Col>
          </div>
        </>
      )
    } else {
      console.log("no matching planets")
    }
  })}
      </Row>
    </Container>
    </>
  )

}

export default Profile
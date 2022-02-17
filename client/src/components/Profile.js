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
  const [ planet, setPlanet ] = useState([])

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
      setPlanet(data)
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
        <Col className='col-md-3'> <div className='review-name'> { e.planet } </div> </Col>
        <Col className='col-md-2'> <div className='review-rating'> {e.rating} </div> </Col>
        <Col className='col-md-4'> <div className='review-info'>  {e.text}</div> </Col>        
        <Col className='col-md-2'> 
          <div className='btn jump-review-btn'> 
            <Link to={`/planets/${e.planetId}`}>
              Link to Planet
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
      <div className="col-4 profile-img"> Image Here </div>
      <div className="col-8 profile-info">          
        <div className='profile-name'> {profile.username} </div>
        <div className='profile-email'> {profile.email} </div>
      </div>       
      </Row>
    </Container>

    <Container className='profile-cont'> 
    
      <Row className='review-card'>  
      {allReviews}
      </Row>

    </Container>

    <Container className='profile-cont'> 
      <Row className='wishList-card'>    
      <div className='singleWishlist'> 
      <Col className='col-md-5'>
        <div className='wishList-name'> Planet Name </div>
        <div className='btn wishList-btn'>   Jump to Planet </div>     
      </Col>
      </div>

      <div className='singleWishlist'> 
      <Col className='col-md-5'>
        <div className='wishList-name'> Planet Name </div>
        <div className='btn wishList-btn'>   Jump to Planet </div>     
      </Col>
      </div>

      <div className='singleWishlist'> 
      <Col className='col-md-5'>
        <div className='wishList-name'> Planet Name </div>
        <div className='btn wishList-btn'>   Jump to Planet </div>     
      </Col>
      </div>
      </Row>
    </Container>
    </>
  )

}

export default Profile
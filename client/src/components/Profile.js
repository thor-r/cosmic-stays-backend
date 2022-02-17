import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Card, Col, Carousel } from 'react-bootstrap'

const Profile = () => {

  const localToken = localStorage.getItem('planets-token')
  console.log('local token -> ', localToken)

  const authAxios = axios.create({
    headers: {
      Authorization : `Bearer ${localToken}`
    }
  })

  const [profile, setProfile] = useState([])
  const [ hasError, setHasError ] = useState({ error: false, message: '' })

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
      <div className='singleReview'>
        <Col className='col-md-3'> <div className='review-name'> Planet Name Here </div> </Col>
        <Col className='col-md-2'> <div className='review-rating'> Review Rating </div> </Col>
        <Col className='col-md-4'> <div className='review-info'>   Review Text Here </div> </Col>        
        <Col className='col-md-2'> <div className='btn jump-review-btn'>   jump to Planet Review </div> </Col>   
      </div>
      <div className='singleReview'>
        <Col className='col-md-3'> <div className='review-name'> Planet Name Here </div> </Col>
        <Col className='col-md-2'> <div className='review-rating'> Review Rating </div> </Col>
        <Col className='col-md-4'> <div className='review-info'>   Review Text Here </div> </Col>        
        <Col className='col-md-2'> <div className='btn jump-review-btn'>   jump to Planet Review </div> </Col>   
      </div>
      <div className='singleReview'>
        <Col className='col-md-3'> <div className='review-name'> Planet Name Here </div> </Col>
        <Col className='col-md-2'> <div className='review-rating'> Review Rating </div> </Col>
        <Col className='col-md-4'> <div className='review-info'>   Review Text Here </div> </Col>        
        <Col className='col-md-2'> <div className='btn jump-review-btn'>   jump to Planet Review </div> </Col>   
      </div>
      <div className='singleReview'>
        <Col className='col-md-3'> <div className='review-name'> Planet Name Here </div> </Col>
        <Col className='col-md-2'> <div className='review-rating'> Review Rating </div> </Col>
        <Col className='col-md-4'> <div className='review-info'>   Review Text Here </div> </Col>        
        <Col className='col-md-2'> <div className='btn jump-review-btn'>   jump to Planet Review </div> </Col>   
      </div>
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
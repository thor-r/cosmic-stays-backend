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
        <Col> <div className='review-name'> Planet Name 0 </div> </Col>
        <Col> <div className='col review-info'>   Review Given </div> </Col>        
        <Col> <div className='btn review-btn'>   jump to review </div> </Col>   
      </Row>

    </Container>

    <Container className='profile-cont'> 
      <Row className='wishList-card'>    
        <div className='wishList-name'> Planet Name </div>
        <div className='wishList-info'>   Review Given </div>
        <div className='btn wishList-btn'>   jump to review </div>     
      </Row>
    </Container>
    </>
  )

}

export default Profile
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Card, Col, Carousel } from 'react-bootstrap'




const Offers = () => {

  const [offers, setOffers] = useState([])

  useEffect(() => {
  const getData = async () => {
  try {
        const { data } = await axios.get('/api/offers') 
        console.log(data)
        setOffers(data)
  } catch (error) {
    console.log(error)
}
  }
  getData()
}, [])

  const randomOffer = () => { return offers[Math.floor(Math.random() * offers.length)] }

  const allOffers = []

  for (let i = 0; i < 4; i++ ) {
    allOffers.push(<Col> <div className='listed_offers' key={i}> <h6> {randomOffer()} </h6> </div> </Col>)
  }

  return (
    <Container>
      <Row className='offer_row'>
      <Carousel>
      {offers.map((deal, i) => 
        <Carousel.Item className='offer_box' id={`offer-${i}`} key={i} >
          <h3> Deal Number {i + 1} </h3>
            <p> {deal} </p>
        </Carousel.Item>
      )}
      </Carousel>
      </Row>
      <Row className= 'featured-offers'>
        <Row className= 'text-white d-flex justify-content-center'> <h2 className= 'd-flex justify-content-center'> Featured Offers! </h2> </Row>
        <Row> { allOffers } </Row>
      </Row>
    </Container>
  )
}

export default Offers
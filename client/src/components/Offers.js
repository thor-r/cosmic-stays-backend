import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Carousel } from 'react-bootstrap'




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

  // const deals = () => {
  //   return       <ul>
  //   {offers.map((deal, i) => {
  //     return <li > {deal} </li>
  //   })}
  // </ul>
  // }
  // console.log(randomOffer)

  const randomOffer = () => { return offers[Math.floor(Math.random() * offers.length)] }

  const allOffers = []

  for (let i = 0; i < 5; i++ ) {
    allOffers.push(<Col> <div className='listed_offers' key={i}> <h5> {randomOffer()} </h5> </div> </Col>)
  }
  // const groupedOffer = () => { 
  //   return <>
  //   <Col> <div className='listed_offers'> <h5> {randomOffer()} </h5> </div> </Col>
  //   <Col> <div className='listed_offers'> <h5> {randomOffer()} </h5> </div> </Col>
  //   <Col> <div className='listed_offers'> <h5> {randomOffer()} </h5> </div> </Col>
  //   <Col> <div className='listed_offers'> <h5> {randomOffer()} </h5> </div> </Col>
  //   <Col> <div className='listed_offers'> <h5> {randomOffer()} </h5> </div> </Col>
  //   </>
  // }

  return (
    <Container>
      <Row className='offer_row'>
      <Carousel>
      {offers.map((deal, i) => 
        <Carousel.Item className='offer_box' key={i} >
          <h3> Deal Number {i + 1} </h3>
            <p> {deal} </p>
        </Carousel.Item>
      )}
      </Carousel>
      </Row>
      <Row>
        {/* {offers.map((deal, i) => 
          <Col> <div className='listed_offers'> <h5> Deal Number {i + 1}. <br /> {deal} </h5> </div> </Col>
        )} */}
        { allOffers }

      </Row>
    </Container>
  )
}

export default Offers
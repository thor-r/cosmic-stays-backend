import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {

  const [planets, setPlanets] = useState([])
  const [planetList, setPlanetList] = useState([])

  const [isError, setIsError] = useState(false)


  useEffect(() => {
    const getPlanets = async () => {
      try {
        const { data } = await axios.get('/api/planets') // * <-- replace with your endpoint
        // console.log(data)
        setPlanets(data)
        // console.log(data)
      } catch (err) {
        setIsError(true)
      }
    }
    getPlanets()
  }, [])

  const orderedPlanets = []

  const orderingPlanets = () => {
    if (planets) {
      planets.sort((a,b) => a.planetPosition -  b.planetPosition)
      console.log(orderingPlanets)
        
      // planets.forEach(order => { console.log(order)})
      // const result = Object.keys(planets).sort((a,b)=> planets[b] -  planets[a]);
      // console.log(result)
    
    }
  }

  


  return (
    <>
      <header className='title'>
        <h1>C</h1>
      </header>

      <div className='planetsContainer'>
        {orderingPlanets()}
        {planets.map((planet, i) => {
          if (planet.isReal === true && i <= 10) {
            return (
              <Link id='planet-link' to={`/planets/${planet.id}`}>
                <div className={`planet-div ${planet.name}`} id='css-fix' key={i} value={i}>

                  <img src={planet.image} alt={planet.name} />

                </div>

                <div className='hover-info'>・{planet.name} <br></br> ・{planet.distanceFromEarth} <br></br> ・{planet.travelTime} away
                </div>
              </Link>
              
            )
          } else {
            console.log("no matching planets")
          }
        })}
      </div>
    </>
  )
}

export default Home
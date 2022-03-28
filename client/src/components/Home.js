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
        const { data } = await axios.get('/api/planets') 
        // console.log(data)
        setPlanets(data)
        console.log(data)
      } catch (err) {
        setIsError(true)
      }
    }
    getPlanets()
  }, [])

  const orderingPlanets = () => {
    if (planets) {
      planets.sort((a,b) => a.planetPosition - b.planetPosition)
    }
  }

return (
  <>
  
    <header className='title'>
      <h1>C</h1>
    </header>

    <div className='planets-container'>


      <div className='planet-div'>
      {orderingPlanets()}
      {planets.map((planet, i) => {
        if (planet.isReal === true && i <= 10) {
          return (

            <>
        
                <Link className='planet_face' to={`/planets/${planet.id}`}>
        
                <img className={`planet_face ${planet.name}`} src={planet.image} alt={planet.name} />
  
                <div className='hover-info'>・{planet.name} <br></br> ・{planet.distanceFromEarth} <br></br> ・{planet.travelTime} away </div> 

                        
            </Link>
          
          </>
                
          )
        } else {
          console.log("no matching planets")
        }
      })} 
      </div>
    </div>
  </>
)
}

export default Home
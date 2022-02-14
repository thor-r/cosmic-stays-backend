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
      console.log(data)
    } catch (err) {
      setIsError(true)
    }
  }
  getPlanets()
}, [])


  return (
    <>
    <header className='title'>
        <h1>Cosmic Stays</h1>
      </header>

      <div className='planetsContainer'>
      {planets.map((planet, i) => {
          if (i <= 9) {
            return (
              <div className={planet.name} key={i} value={i}>
                <img src={planet.image} alt={planet.name} />
              </div>
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
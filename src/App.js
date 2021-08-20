import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Games from './Components/Games'



const App = () => {
  const [gamesList, setGamesList] = useState([])
  const [numberOfGamesToShow, setNumberOfGamesToShow] = useState(5)
  const baseUrl = 'https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED'

  const hook = () => {
    const api_key = process.env.REACT_APP_API_KEY
    console.log(api_key)
    axios
      .get(baseUrl, { headers: {'X-Auth-Token' : api_key}})
      .then(response => {
        setGamesList(response.data.matches)
        console.log(response.data.matches[0])
      })
  }
  useEffect(hook, [])

  return (
    <div>
      <h1>Real madrid upcoming games</h1>
      
      <Games gamesList={gamesList.slice(0,numberOfGamesToShow)} />

      <button onClick={()=>{setNumberOfGamesToShow(numberOfGamesToShow+5)}}>
        Show more
      </button>
      <button onClick={()=>{setNumberOfGamesToShow(5)}}>Reset List</button>
    </div>
  )
}

export default App

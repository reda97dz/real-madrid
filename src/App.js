import React, {useEffect, useState} from 'react'
import UpcomingGames from './Components/UpcomingGames'
import FinishedGames from './Components/FinishedGames'
import gameService from './Services/games'



const App = () => {
  const [upcomingGamesList, setUpcomingGamesList] = useState([])
  const [finishedGamesList, setFinishedGamesList] = useState([])
  const [numberOfGamesToShow, setNumberOfGamesToShow] = useState(5)
  
  const hook = () => {
    gameService.upcomingGames().then(games => setUpcomingGamesList(games))
    gameService.finishedGames().then(games => setFinishedGamesList(games))
  }

  useEffect(hook, [])

  return (
    <div>
      <h1>Finished games</h1>

      <FinishedGames gamesList={finishedGamesList} />

      <h1>Upcoming games</h1>
      
      <UpcomingGames gamesList={upcomingGamesList.slice(0,numberOfGamesToShow)} />

      <button onClick={()=>{setNumberOfGamesToShow(numberOfGamesToShow+5)}}>
        Show more
      </button>
      <button onClick={()=>{setNumberOfGamesToShow(5)}}>Reset List</button>
    </div>
  )
}

export default App

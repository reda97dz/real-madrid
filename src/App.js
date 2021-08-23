import React, {useEffect, useState} from 'react'
import UpcomingGames from './Components/UpcomingGames'
import FinishedGames from './Components/FinishedGames'
import gameService from './Services/games'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

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
    <Container>
      
      <FinishedGames gamesList={finishedGamesList} />

      <UpcomingGames gamesList={upcomingGamesList.slice(0,numberOfGamesToShow)} />


      <Button onClick={()=>{setNumberOfGamesToShow(numberOfGamesToShow+5)}}>
        Show more
      </Button>
      <Button onClick={()=>{setNumberOfGamesToShow(5)}}>Reset List</Button>

    </Container>
  )
}

export default App

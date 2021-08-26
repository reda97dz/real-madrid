import React, {useState, useEffect} from 'react'
import Games from './Components/Games'
import gameService from './Services/games'

import Container from '@material-ui/core/Container'

const App = () => {
  const [upcomingGamesList, setUpcomingGamesList] = useState([])
  const [finishedGamesList, setFinishedGamesList] = useState([])

  const hook = () => {
    gameService.upcomingGames().then(games => setUpcomingGamesList(games))
    gameService.finishedGames().then(games => setFinishedGamesList(games))
  }
  useEffect(hook, [])

  return (
    <Container>
      
      <Games upcomingGamesList={upcomingGamesList} finishedGamesList={finishedGamesList} />

    </Container>
  )
}

export default App

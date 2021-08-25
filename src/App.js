import React, {useState, useEffect} from 'react'
import UpcomingGames from './Components/UpcomingGames'
// import FinishedGames from './Components/FinishedGames'
import gameService from './Services/games'

import Container from '@material-ui/core/Container'

const App = ({upcomingGames, finishedGames}) => {
  const [upcomingGamesList, setUpcomingGamesList] = useState(upcomingGames)
  // const [finishedGamesList, setFinishedGamesList] = useState(finishedGames)

  const hook = () => {
    gameService.upcomingGames().then(games => setUpcomingGamesList(games))
    // gameService.finishedGames().then(games => setFinishedGamesList(games))
  }
  useEffect(hook, [])

  return (
    <Container>
      
      {/* <FinishedGames gamesList={finishedGamesList} /> */}

      <UpcomingGames gamesList={upcomingGamesList} />

    </Container>
  )
}

export default App

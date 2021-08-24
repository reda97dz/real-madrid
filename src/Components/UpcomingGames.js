import React, {useState} from 'react'
import Fixture from './Fixture'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Box, CardActions } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 15,
  },
}));

const UpcomingGames = ({gamesList}) => {
  const classes = useStyles()
  const [numberOfGamesToShow, setNumberOfGamesToShow] = useState(2)

    return (
      <Paper  className={classes.paper} elevation={3} square>
        
        <Typography variant="h2" component="h2" gutterBottom align='center'>
          Upcoming Games
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Real Madrid Next Fixtures
        </Typography>
        {gamesList.slice(0, numberOfGamesToShow).map(match => <Fixture key={match.id} match={match} />)}
        
        <Box textAlign='center'>
          <Button onClick={()=>{setNumberOfGamesToShow(numberOfGamesToShow+1)}} >
            Show more
          </Button>
          <Button onClick={()=>{setNumberOfGamesToShow(2)}}>
            Reset List
          </Button>
        </Box>
      </Paper>
    )
}

export default UpcomingGames
import React, {useState, useEffect} from 'react'
import DoneFixture from './DoneFixture'
import Fixture from './Fixture'
// import Header from './Header'
// import Subtitle from './Subtitle'
import gameService from '../Services/games'

import Paper from '@material-ui/core/Paper'

import { makeStyles, withStyles  } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

const useStyles = makeStyles((theme) => ({
  paper : {
    padding: theme.spacing(2),
    maxWidth: 700
  },
  titlePaper: {
    backgroundColor: '#16150f80'
  },
  listPaper: {
    backgroundColor : '#f0e1c51A'
  }
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    marginTop : theme.spacing(1),
    borderRadius : 0,
    padding: theme.spacing(0.5),
    border: 'none'
  },
}))(ToggleButtonGroup);

const Games = () => {

  const [upcomingGamesList, setUpcomingGamesList] = useState([])
  const [finishedGamesList, setFinishedGamesList] = useState([])

  const hook = () => {
    gameService.upcomingGames().then(games => setUpcomingGamesList(games))
    gameService.finishedGames().then(games => setFinishedGamesList(games))
  }
  useEffect(hook, [])

  const classes = useStyles()
  const [competition, setCompetition] = useState('all')
  const [numberOfGamesToShow, setNumberOfGamesToShow] = useState(4)
  const [upcomingGamesToShow, setUpcomingGamesToShow] = useState(upcomingGamesList)
  const [finishedGamesToShow, setFinishedGamesToShow] = useState(finishedGamesList)
  console.log(finishedGamesToShow)
  const handleCompetition = (event, newCompetition) => {
    
    setCompetition(newCompetition)
    switch (newCompetition) {
      case 'all':
        setFinishedGamesToShow(finishedGamesList)
        setUpcomingGamesToShow(upcomingGamesList)
        break
      case 'league':
        setFinishedGamesToShow(finishedGamesList.filter(match => match.competition.name === 'Primera Division'))
        setUpcomingGamesToShow(upcomingGamesList.filter(match => match.competition.name === 'Primera Division'))
        break
      case 'ucl':
        setFinishedGamesToShow(finishedGamesList.filter(match => match.competition.name === 'UEFA Champions League'))
        setUpcomingGamesToShow(upcomingGamesList.filter(match => match.competition.name === 'UEFA Champions League'))
        break
      default:
        break
    }
  }
  return (
    <Paper  className={classes.paper} variant='outlined' square >

      <Typography variant='button' component='h2' style={{fontSize:18}}>
          Fixtures and Results
      </Typography>

      <StyledToggleButtonGroup exclusive value={competition} onChange={handleCompetition}>
        <ToggleButton value='all'>
          All
        </ToggleButton>
        <ToggleButton value='league'>
          Primera Division
        </ToggleButton>
        <ToggleButton value='ucl'>
          UEFA Champions League
        </ToggleButton>
      </StyledToggleButtonGroup>

      <Box>
        <Paper className={classes.listPaper} elevation={0} square>
          {finishedGamesToShow.map(match => <DoneFixture key={match.id} match={match} />)}
          {upcomingGamesToShow.slice(0, numberOfGamesToShow).map(match => <Fixture key={match.id} match={match} />)}
        </Paper>
      </Box>
      <Box textAlign='center'>
        <IconButton aria-label="show more" onClick={()=>{setNumberOfGamesToShow(numberOfGamesToShow+5)}} >
          <KeyboardArrowDownIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="show less" onClick={()=>{setNumberOfGamesToShow(5)}} >
          <KeyboardArrowUpIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Paper>
  )
}

export default Games
import React, {useState} from 'react'
import Fixture from './Fixture'
import DoneFixture from './DoneFixture'
import Header from './Header'
import Subtitle from './Subtitle'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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

const Games = ({upcomingGamesList, finishedGamesList}) => {
  const classes = useStyles()
  const [numberOfGamesToShow, setNumberOfGamesToShow] = useState(4)
  console.log(finishedGamesList)

  return (

    <Grid container >
      <Grid item xs={12} md={12} lg={12} align='center'>
        <Paper  className={classes.paper} square >

          <Header title='Scores' />

          <Subtitle subtitle='All' />

          <Box>
            <Paper className={classes.listPaper} elevation={1} square>
              {finishedGamesList.map(match => <DoneFixture key={match.id} match={match} />)}
              {upcomingGamesList.slice(0, numberOfGamesToShow).map(match => <Fixture key={match.id} match={match} />)}
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
      </Grid>
    </Grid>
  )
}

export default Games
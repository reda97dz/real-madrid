import React, {useState} from 'react'
import Fixture from './Fixture'
import DoneFixture from './DoneFixture'
import Header from './Header'
import Subtitle from './Subtitle'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
// import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 15,
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
  const [numberOfGamesToShow, setNumberOfGamesToShow] = useState(10)
  console.log(finishedGamesList)

  return (
    <Grid align='center'>
      <Box width={1/2} p={2}>
        <Paper  className={classes.paper} square >
          
          {/* <Box bgcolor='primary.main' color='white'>
            <Typography variant="h3" component="h2" gutterBottom align='center'>
                Upcoming Games
            </Typography>
          </Box> */}

          <Header title='Real Madrid 21/22' />
        

          {/* <Subtitle subtitle='Done Fixtures' />

          <Box>
            <Paper className={classes.listPaper} elevation={1} square>
              {finishedGamesList.map(match => <DoneFixture key={match.id} match={match} />)}
            </Paper>
          </Box> */}

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
        </Box>
    </Grid>
  )
}

export default Games
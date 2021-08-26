import React,{useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/core'
import gameService from '../Services/games'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  crest:{
    width: 20,
  }
}))

const Fixture = ({match}) => {
  const classes = useStyles()

  const date = new Date(match.utcDate)
  const day = date.getDate()
  const month = date.getMonth()

  const [homeTeam, setHomeTeam] = useState({})
  const [awayTeam, setAwayTeam] = useState({})

  useEffect(() => {
    gameService.teamDetails(match.homeTeam.id).then(team => {
        setHomeTeam(team)
    })
    gameService.teamDetails(match.awayTeam.id).then(team => {
        setAwayTeam(team)
    })
  }, [])
  
  return(
    <Box p={2} >
      <Grid container>
        <Grid item xs={2} align='left'>
          <Box fontWeight="fontWeightRegular" fontSize={12}>
              {match.competition.name}
          </Box>
        </Grid>
        <Grid item xs  container direction='row'>
          <Grid item xs  container direction='row' alignItems='center'>
            <Grid item xs align='right'>
              <Box fontWeight="fontWeightMedium">
                {match.homeTeam.name}
              </Box>
            </Grid>
            <Grid item xs={1} align='center'>
              <img src={homeTeam.crestUrl} className={classes.crest} />
            </Grid>
            -
            <Grid item xs={1} align='center'>
              <img src={awayTeam.crestUrl} className={classes.crest} />
            </Grid>
            <Grid item xs align='left'>
              <Box fontWeight="fontWeightMedium">
                {match.awayTeam.name}
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={2} aling='center'>
            {/* <Paper elevation={1} square> */}
            <Box fontWeight="fontWeightLight">
              {day}/{month}
            </Box>
            {/* </Paper> */}
          </Grid>
        </Grid>
          
      </Grid>
      <Divider />
    </Box>
  )
}

export default Fixture
import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/core'
import gameService from '../Services/games'
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles'

const breakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 570,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const useStyles = makeStyles((theme) => ({
  crest: {
    width: 18
  },
  
  league : {
    minWidth : 142,
    order : 1,
    alignSelf : 'flex-end',
    textAlign : 'left',
    [breakpoints.breakpoints.down('xs')]:{
      maxWidth: 65,
      minWidth:1
    }
  },
  match : {
      alignSelf : 'center',
      order : 2,
      direction : 'row',
      alignItems : 'center',
      paddingRight : 25,
      [breakpoints.breakpoints.down('xs')]:{
        paddingRight : 16
      }
  },
  home : {
      order : 1,
      textAlign : 'right',
      [breakpoints.breakpoints.down('xs')]:{
          textAlign : 'right'
      }
  },
  homeScore : {
      order : 2,
      textAlign: 'center',
      maxWidth : 25,
      [breakpoints.breakpoints.down('xs')]:{
          textAlign : 'center'
      }
  },
  dash : {
      order : 3,
      textAlign: 'center',
      maxWidth : 10,
      [breakpoints.breakpoints.down('xs')]:{
      display: 'none'
      }
  },
  awayScore : {
      order : 4,
      textAlign: 'center',
      maxWidth : 25,
      [breakpoints.breakpoints.down('xs')]:{
          order : 5,
          textAlign : 'center'
      }
  },
  away : {
      order : 5,
      textAlign : 'left',
      [breakpoints.breakpoints.down('xs')]:{
          order : 4,
          textAlign : 'right'
      }
  },
  date : {
      alignSelf: 'center',
      order : 3,
      padding : 5
  },
}))

const Fixture = ({ match }) => {
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

  return (
    <ThemeProvider theme={breakpoints}>
      <Box>
        <Grid container style={{ padding: 7 }}>
          <Grid item className={classes.league}>
            <Box fontWeight='fontWeightRegular' fontSize={12}>
              {match.competition.name}
            </Box>
          </Grid>
          <Grid item container xs className={classes.match}>
            <Grid item xs={10} sm className={classes.home}>
              <Box fontWeight="fontWeightMedium">
                {match.homeTeam.name}
              </Box>
            </Grid>
            <Grid item xs sm className={classes.homeScore}>
              <img src={homeTeam.crestUrl} className={classes.crest} />
            </Grid>
            <Grid item sm className={classes.dash}>
              -
            </Grid>
            <Grid item xs sm className={classes.awayScore}>
              <img src={awayTeam.crestUrl} className={classes.crest} />
            </Grid>
            <Grid item xs={10} sm className={classes.away}>
              <Box fontWeight="fontWeightMedium">
                {match.awayTeam.name}
              </Box>
            </Grid>
          </Grid>
          <Grid item className={classes.date}>
            <Box fontWeight='fontWeightLight'>
              {day}/{month}
            </Box>
          </Grid>




          {/* <Grid item xs={2} align='left'>
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
              <Box fontWeight="fontWeightLight">
                {day}/{month}
              </Box>
            </Grid>
          </Grid> */}

        </Grid>
        <Divider />
      </Box>
    </ThemeProvider>
  )
}

export default Fixture
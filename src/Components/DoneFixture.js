import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'

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
        direction : 'row'
    },
    home : {
        order : 1,
        textAlign : 'right',
        [breakpoints.breakpoints.down('xs')]:{
            textAlign : 'right',
            paddingRight : 5
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
            textAlign : 'right',
            paddingRight : 5
        }
    },
    date : {
        paddingLeft : theme.spacing(2.2),
        alignSelf: 'center',
        order : 3,
        padding : 5
    },
}));

const DoneFixture = ({match}) => {
    const classes = useStyles()

    return(
        <ThemeProvider theme={breakpoints}>
            <Box>
                <Grid container style={{padding: 7}}>
                    <Grid item className={classes.league}>
                        <Box fontWeight='fontWeightRegular' fontSize={12}>
                            {match.competition.name}
                        </Box>
                    </Grid>
                    <Grid item container xs className={classes.match} style={{paddingRight: 25}}>
                        <Grid item xs={11} sm className={classes.home}>
                            <Box fontWeight="fontWeightMedium">
                                {match.homeTeam.name}
                            </Box>
                        </Grid>
                        <Grid item xs={1} sm className={classes.homeScore}>
                            {match.score.fullTime.homeTeam}
                        </Grid>
                        <Grid item sm className={classes.dash}>
                            -
                        </Grid>
                        <Grid item xs={1} sm className={classes.awayScore}>
                            {match.score.fullTime.awayTeam}
                        </Grid>
                        <Grid item xs={11} sm className={classes.away}>
                            <Box fontWeight="fontWeightMedium">
                                {match.awayTeam.name}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.date}>
                        <Box fontWeight='fontWeightLight'>
                            FT
                        </Box>
                    </Grid>
                </Grid>
            <Divider />
        </Box>
    </ThemeProvider>
    )
}

export default DoneFixture
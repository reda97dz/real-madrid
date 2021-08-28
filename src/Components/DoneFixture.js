import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'


const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 450,
          md: 600,
          lg: 900,
          xl: 1200
        }
    },
})

const useStyles = makeStyles((theme) => ({
    league : {
        order : 1,
        textAlign : 'left'
    },
    home : {
        order : 2,
        textAlign : 'right'
    },
    homeScore : {
        order : 3
    },
    dash : {
        order : 4,
        [theme.breakpoints.down('xs')]:{
        display: 'none'
        }
    },
    awayScore : {
        order : 5,
        [theme.breakpoints.down('xs')]:{
        order : 6
        }
    },
    away : {
        textAlign : 'left',
        order : 6,
        [theme.breakpoints.down('xs')]:{
        order : 5,
        textAlign : 'right',
        }
    },
    date : {
        order : 7
    },
}));

const DoneFixture = ({match}) => {
    const classes = useStyles()

    return(
        <ThemeProvider theme={theme}>
            <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2} md={2} lg={2} className={classes.league}>
                    <Box fontWeight='fontWeightRegular' fontSize={12}>
                        {match.competition.name}
                    </Box>
                </Grid>
                <Grid item xs={10} sm={3} md={3} lg={3} className={classes.home}>
                    <Box fontWeight="fontWeightMedium">
                        {match.homeTeam.name}
                    </Box>
                </Grid>
                <Grid item xs={2} sm={1} md={1} lg={1} className={classes.homeScore}>
                    {match.score.fullTime.homeTeam}
                </Grid>
                <Grid item xs={12} sm={1} md={1} lg={1} className={classes.dash}>
                    -
                </Grid>
                <Grid item xs={2} sm={1} md={1} lg={1} className={classes.awayScore}>
                    {match.score.fullTime.awayTeam}
                </Grid>
                <Grid item xs={10} sm={3} md={3} lg={3} className={classes.away}>
                    <Box fontWeight="fontWeightMedium">
                        {match.awayTeam.name}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={1} md={1} lg={1} className={classes.date}>
                    <Box fontWeight='fontWeightLight'>
                        FT
                    </Box>
                </Grid>
            </Grid>

            {/* <Grid container>
                <Grid items xs={1} md={2} lg={2} align='left'  className={classes.competition}>
                    <Box fontWeight='fontWeightRegular' fontSize={12}>
                        {match.competition.name}
                    </Box>
                </Grid>
                <Grid item xs container direction='row'>
                    <Grid item xs  container direction='row' alignItems='center'>
                        <Grid item xs align='right'>
                            <Box fontWeight="fontWeightMedium">
                            {match.homeTeam.name}
                            </Box>
                        </Grid>
                        <Grid item xs={1} align='center'>
                            {match.score.fullTime.homeTeam}
                        </Grid>
                        -
                        <Grid item xs={1} align='center'>
                            {match.score.fullTime.awayTeam}
                        </Grid>
                        <Grid item xs align='left'>
                            <Box fontWeight="fontWeightMedium">
                            {match.awayTeam.name}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} align='center'>
                        <Box fontWeight='fontWeightLight'>
                            FT
                        </Box>
                    </Grid>
                </Grid>
            </Grid> */}
            <Divider />
        </Box>
        </ThemeProvider>
    )
}

export default DoneFixture
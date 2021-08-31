import React from 'react'
import Games from './Games'
import LeagueStandings from './LeagueStandings'
// import gameService from './Services/games'
// import standingsService from './Services/standings'
// import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    league : {
        // maxHeight : '100vh',
        overflow : 'auto'
    }
}))


const MainContent = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} lg={6} align='center'>
                <Games />
            </Grid>
            <Grid item xs={12} lg={6} align='center' className={classes.league}>
                <LeagueStandings />
            </Grid>
        </Grid>
    )
}

export default MainContent
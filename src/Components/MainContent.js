import React from 'react'
import Games from './Games'
import LeagueStandings from './LeagueStandings'
// import gameService from './Services/games'
// import standingsService from './Services/standings'
// import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import { makeStyles, useTheme } from '@material-ui/core/styles'

const MainContent = () => {
    return (
        <Grid container >
            <Grid item xs={12} lg={6} align='center'>
                {/* <Games /> */}
            </Grid>
            <Grid item xs={12} lg={6} align='center'>
                <LeagueStandings />
            </Grid>
        </Grid>
    )
}

export default MainContent
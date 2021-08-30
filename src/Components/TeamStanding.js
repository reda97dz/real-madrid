import React from 'react'
import Grid from '@material-ui/core/Grid'

import { makeStyles} from '@material-ui/core/styles'


// const breakpoints = createTheme({
//     breakpoints: {
//       values: {
//         xs: 0,
//         sm: 570,
//         md: 960,
//         lg: 1280,
//         xl: 1920,
//       },
//     },
// })

const useStyles = makeStyles((theme) => ({
    thead : {
    }
}));


const TeamStanding = ({team}) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.tHead}>
            <Grid item xs>{team.position}</Grid>
            <Grid item xs></Grid>
            <Grid item xs={5} style={{textAlign: 'left'}}>{team.team.name}</Grid>
            <Grid item xs>{team.playedGames}</Grid>
            <Grid item xs>{team.won}</Grid>
            <Grid item xs>{team.draw}</Grid>
            <Grid item xs>{team.lost}</Grid>
            <Grid item xs>{team.goalDifference}</Grid>
            <Grid item xs>{team.points}</Grid>
        </Grid>
    )
}

export default TeamStanding
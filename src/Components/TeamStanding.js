import React from 'react'
import Grid from '@material-ui/core/Grid'

import { makeStyles} from '@material-ui/core/styles'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

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
    tName : {
        textAlign : 'left',
        minWidth : 170
    }
}));


const TeamStanding = ({team}) => {
    const classes = useStyles()
    return (

        <TableRow>
            <TableCell>{team.position}</TableCell>
            <TableCell></TableCell>
            <TableCell>{team.team.name}</TableCell>
            <TableCell>{team.playedGames}</TableCell>
            <TableCell>{team.won}</TableCell>
            <TableCell>{team.draw}</TableCell>
            <TableCell>{team.lost}</TableCell>
            <TableCell>{team.goalDifference}</TableCell>
            <TableCell>{team.points}</TableCell>
        </TableRow>

        // <Grid container>
        //     <Grid item xs style={{minWidth:30}}>{team.position}</Grid>
        //     <Grid item xs></Grid>
        //     <Grid item xs={5} className={classes.tName}>{team.team.name}</Grid>
        //     <Grid item xs>{team.playedGames}</Grid>
        //     <Grid item xs>{team.won}</Grid>
        //     <Grid item xs>{team.draw}</Grid>
        //     <Grid item xs>{team.lost}</Grid>
        //     <Grid item xs>{team.goalDifference}</Grid>
        //     <Grid item xs>{team.points}</Grid>
        // </Grid>
    )
}

export default TeamStanding
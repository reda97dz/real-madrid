import React from 'react'
import Grid from '@material-ui/core/Grid'

import { makeStyles , withStyles} from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

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

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    tName : {
        textAlign : 'left',
        minWidth : 170
    }
}));


const TeamStanding = ({team}) => {
    const classes = useStyles()
    return (

        <StyledTableRow>
            <StyledTableCell align='center'>{team.position}</StyledTableCell>
            <StyledTableCell align='left'>{team.team.name}</StyledTableCell>
            <StyledTableCell align='center'>{team.playedGames}</StyledTableCell>
            <Hidden xsDown>
                <StyledTableCell align='center'>{team.won}</StyledTableCell>
                <StyledTableCell align='center'>{team.draw}</StyledTableCell>
                <StyledTableCell align='center'>{team.lost}</StyledTableCell>    
            </Hidden>
            <StyledTableCell align='center'>{team.points}</StyledTableCell>
        </StyledTableRow>

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
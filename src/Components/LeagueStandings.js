import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import TeamStanding from './TeamStanding'
import { makeStyles } from '@material-ui/core/styles'
import standingService from '../Services/standings'
import Grid from '@material-ui/core/Grid'
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper : {
        maxWidth: 700,
        minWidth : 210
    },
    thead : {
    }
}));

const LeagueStandings = () => {
    const classes = useStyles()
    const [standing, setStanding] = useState([])

    const hook = () => {
        standingService.leagueStanding().then(table => setStanding(table.table))
    }
    console.log(standing)
    useEffect(hook, [])

    return (
        <Paper className={classes.paper} variant='outlined' square>
            STANDING
            <Grid container className={classes.tHead}>
                <Grid item xs>Pos</Grid>
                <Grid item xs></Grid>
                <Grid item xs={5} style={{textAlign: 'left'}}>Team</Grid>
                <Grid item xs>P</Grid>
                <Grid item xs>W</Grid>
                <Grid item xs>D</Grid>
                <Grid item xs>L</Grid>
                <Grid item xs>+/-</Grid>
                <Grid item xs>PTS</Grid>
            </Grid>
            {standing.map(team => <TeamStanding key={team.team.id} team={team} />)}
        </Paper>
    )
}

export default LeagueStandings
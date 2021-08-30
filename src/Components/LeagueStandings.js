import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import TeamStanding from './TeamStanding'
import { makeStyles } from '@material-ui/core/styles'
import standingService from '../Services/standings'
import Grid from '@material-ui/core/Grid'
import { Divider } from '@material-ui/core'


import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles((theme) => ({
    paper : {
        maxWidth: 700,
        minWidth : 210
    },
    table : {
        maxWidth: 690
    }
}));

const LeagueStandings = () => {
    const classes = useStyles()
    const [standing, setStanding] = useState([])

    const hook = () => {
        standingService.leagueStanding().then(table => setStanding(table.table))
    }
    useEffect(hook, [])

    return (
        <Paper className={classes.paper} variant='outlined' square>
            STANDING
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pos</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell>P</TableCell>
                            <TableCell>W</TableCell>
                            <TableCell>D</TableCell>
                            <TableCell>L</TableCell>
                            <TableCell>+/-</TableCell>
                            <TableCell>Pts</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {standing.map(team => <TeamStanding key={team.team.id} team={team} />)}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <Grid container className={classes.tHead}>
                <Grid item xs style={{minWidth:30}}>Pos</Grid>
                <Grid item xs></Grid>
                <Grid item xs={5} style={{textAlign: 'left', minWidth: 170}}>Team</Grid>
                <Grid item xs>P</Grid>
                <Grid item xs>W</Grid>
                <Grid item xs>D</Grid>
                <Grid item xs>L</Grid>
                <Grid item xs>+/-</Grid>
                <Grid item xs>PTS</Grid>
            </Grid>
            {standing.map(team => <TeamStanding key={team.team.id} team={team} />)} */}
        </Paper>
    )
}

export default LeagueStandings
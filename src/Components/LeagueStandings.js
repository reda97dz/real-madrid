import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import TeamStanding from './TeamStanding'
import { makeStyles , withStyles } from '@material-ui/core/styles'
import standingService from '../Services/standings'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

import { Box } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
    paper : {
        maxWidth: 700,
        minWidth : 210,
        padding: theme.spacing(2)
    },
    table : {
        maxWidth: 700
    }
}));

const LeagueStandings = () => {
    const classes = useStyles()
    const [standing, setStanding] = useState([])
    const [uclStanding, setUclStanding] = useState([])
    const [rowsToShow, setRowsToShow] = useState(5)

    const hook = () => {
        standingService.leagueStanding().then(table => setStanding(table.table))
        standingService.uclStanding().then(table => setUclStanding(table.table))
    }
    useEffect(hook, [])

    return (
        <Paper className={classes.paper} variant='outlined' square>

            <Typography variant='button' component='h2' style={{fontSize:18}}>
                Primera Division Standings
            </Typography>
            
            <TableContainer>
                <Table className={classes.table} size='small'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>Pos</StyledTableCell>
                            <StyledTableCell align='left'>Team</StyledTableCell>
                            <StyledTableCell align='center'>P</StyledTableCell>
                            <Hidden xsDown>
                                <StyledTableCell align='center'>W</StyledTableCell>
                                <StyledTableCell align='center'>D</StyledTableCell>
                                <StyledTableCell align='center'>L</StyledTableCell>
                            </Hidden>
                            <StyledTableCell align='center'>Pts</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {standing.slice(0,rowsToShow).map(team => <TeamStanding key={team.team.id} team={team} />)}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box textAlign='center'>
                <IconButton aria-label="show more" onClick={()=>{setRowsToShow(rowsToShow+5)}} >
                    <KeyboardArrowDownIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="show less" onClick={()=>{setRowsToShow(5)}} >
                    <KeyboardArrowUpIcon fontSize="inherit" />
                </IconButton>
            </Box>

            <Divider/>

            <Typography variant='button' component='h2' style={{fontSize:18}}>
                UCL Standings
            </Typography>
            <TableContainer>
                <Table className={classes.table} size='small'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>Pos</StyledTableCell>
                            <StyledTableCell align='left'>Team</StyledTableCell>
                            <StyledTableCell align='center'>P</StyledTableCell>
                            <Hidden xsDown>
                                <StyledTableCell align='center'>W</StyledTableCell>
                                <StyledTableCell align='center'>D</StyledTableCell>
                                <StyledTableCell align='center'>L</StyledTableCell>
                            </Hidden>
                            <StyledTableCell align='center'>Pts</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {uclStanding.map(team => <TeamStanding key={team.team.id} team={team} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default LeagueStandings
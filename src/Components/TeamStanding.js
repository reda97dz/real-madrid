import React from 'react'

import { withStyles} from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);



const TeamStanding = ({team}) => {
    return (

        <TableRow>
            <StyledTableCell align='center'>{team.position}</StyledTableCell>
            <StyledTableCell align='left'>{team.team.name}</StyledTableCell>
            <StyledTableCell align='center'>{team.playedGames}</StyledTableCell>
            <Hidden xsDown>
                <StyledTableCell align='center'>{team.won}</StyledTableCell>
                <StyledTableCell align='center'>{team.draw}</StyledTableCell>
                <StyledTableCell align='center'>{team.lost}</StyledTableCell>    
            </Hidden>
            <StyledTableCell align='center'>{team.points}</StyledTableCell>
        </TableRow>
    )
}

export default TeamStanding
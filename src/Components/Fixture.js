import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

const Fixture = ({match}) => {
  console.log(match)
    return(
      <Paper elevation={0}>
        <Grid align='center' alignItems='center'>
          {match.homeTeam.name} - {match.awayTeam.name}
        </Grid>
        <Grid align='center' alignItems='center'>
          {match.utcDate} - {match.competition.name}
        </Grid>
        <Divider />
      </Paper>
    )
}

export default Fixture
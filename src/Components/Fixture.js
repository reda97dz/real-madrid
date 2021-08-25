import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { Box, Typography } from '@material-ui/core'
import '@fontsource/roboto'

const Fixture = ({match}) => {
  const date = new Date(match.utcDate)
  const day = date.getDate()
  const month = date.getMonth()
  console.log(match)
    return(
      <Box p={2}>
        <Grid container>
          <Grid item xs={3} align='left'>
            <Box fontWeight="fontWeightLight">
                {match.competition.name}
            </Box>
          </Grid>
          <Grid item xs  container direction='row'>
            <Grid item xs  container direction='row' alignItems='center'>
              <Grid item xs align='right'>
                <Box fontWeight="fontWeightMedium">
                  {match.homeTeam.name}
                </Box>
              </Grid>
              <Grid item xs={1} align='center'>
                -
              </Grid>
              <Grid item xs align='left'>
                <Box fontWeight="fontWeightMedium">
                  {match.awayTeam.name}
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={1.5} aling='center'>
              {/* <Paper elevation={1} square> */}
              <Box fontWeight="fontWeightLight">
                {day}/{month}
            </Box>
              {/* </Paper> */}
            </Grid>
          </Grid>
            
        </Grid>
        <Divider />
      </Box>
    )
}

export default Fixture
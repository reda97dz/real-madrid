import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const DoneFixture = ({match}) => {

    return(
        <Box p={2}>
            {/* <Paper elevation={0} square>
            <Grid container align="center" alignItems="center">
                <Grid item xs align='center'>
                    <img src={homeTeam.crestUrl} className='crest' alt="crest" />
                </Grid>
                <Grid item xs>
                    {match.homeTeam.name}
                </Grid>
                <Grid item xs>
                    {match.score.fullTime.homeTeam}
                </Grid>
                -
                <Grid item xs>
                    {match.score.fullTime.awayTeam}
                </Grid>
                <Grid item xs>
                    {match.awayTeam.name}
                </Grid>
                <Grid item xs align='center'>
                    <img src={awayTeam.crestUrl} className='crest' alt="crest" />
                </Grid>
            </Grid>
            <Divider />
            </Paper> */}
            <Grid container>
                <Grid items xs={2} align='left'>
                    <Box fontWeight='fontWeightRegular' fontSize={12}>
                        {match.competition.name}
                    </Box>
                </Grid>
                <Grid item xs container direction='row'>
                    <Grid item xs  container direction='row' alignItems='center'>
                        <Grid item xs align='right'>
                            <Box fontWeight="fontWeightMedium">
                            {match.homeTeam.name}
                            </Box>
                        </Grid>
                        <Grid item xs={1} align='center'>
                            {match.score.fullTime.homeTeam}
                        </Grid>
                        -
                        <Grid item xs={1} align='center'>
                            {match.score.fullTime.awayTeam}
                        </Grid>
                        <Grid item xs align='left'>
                            <Box fontWeight="fontWeightMedium">
                            {match.awayTeam.name}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} align='center'>
                        <Box fontWeight='fontWeightLight'>
                            FT
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
        </Box>
        
    )
}

export default DoneFixture
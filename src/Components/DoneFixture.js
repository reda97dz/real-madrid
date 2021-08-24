import React, {useEffect, useState} from 'react'
import gameService from '../Services/games'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
// import Typography from '@material-ui/core/Typography'
// import ButtonBase from '@material-ui/core/ButtonBase'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      margin: 5,
    },
  }));


const DoneFixture = ({match}) => {
    console.log(match)
    const classes = useStyles()
    const [homeTeam, setHomeTeam] = useState({})
    const [awayTeam, setAwayTeam] = useState({})

    useEffect(() => {
        gameService.teamDetails(match.homeTeam.id).then(team => {
            setHomeTeam(team)
        })
        gameService.teamDetails(match.awayTeam.id).then(team => {
            setAwayTeam(team)
        })
    }, [])

    return(
        <Paper elevation={0} square>
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
        </Paper>
    )
}

export default DoneFixture
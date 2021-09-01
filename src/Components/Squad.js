// import ImageList from '@material-ui/core/ImageList'
// import ImageListItem from '@material-ui/core/ImageListItem'
// import ImageListItemBar from '@material-ui/core/ImageListItemBar'
// import ListSubheader from '@material-ui/core/ListSubheader'

import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import Players from './Players'
import squad from '../Services/squad'


const useStyles = makeStyles((theme) => ({
    paper : {
        maxWidth: 700,
        minWidth : 210,
        padding: theme.spacing(2)
    }
}));

const Squad = () => {
    const [playersList, setPlayersList] = useState([])

    const hook = () => {
        squad().then(players => setPlayersList(players))
        console.log('API Call')
    }
    useEffect(hook, [])
    const goalKeepers = playersList.filter(player => player.position==='Goalkeeper')
    const defenders = playersList.filter(player => player.position==='Defender')
    const midfielders = playersList.filter(player => player.position==='Midfielder')
    const forwards = playersList.filter(player => player.position==='Attacker')

    const classes = useStyles()

    return (
        <Grid container xs={12} justify='center'>
            <Paper variant='outlined' square component={Grid} item className={classes.paper}>
                <Typography variant='button' component='h2' style={{fontSize:18, textAlign:'center'}}>
                    Real Madrid Squad
                </Typography>

                <Grid container>
                    <Grid item container xs={12} sm direction='column'>
                        <Players title='Goalkeepers' playersList={goalKeepers} />
                        <Players title='Defenders' playersList={defenders} />
                    </Grid>
                    <Grid item container xs={12} sm direction='column'>
                        <Players title='Midfielders' playersList={midfielders} />
                        <Players title='Attackers' playersList={forwards} />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Squad
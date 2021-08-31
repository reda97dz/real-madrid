// import ImageList from '@material-ui/core/ImageList'
// import ImageListItem from '@material-ui/core/ImageListItem'
// import ImageListItemBar from '@material-ui/core/ImageListItemBar'
// import ListSubheader from '@material-ui/core/ListSubheader'

import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'

import squad from '../Services/squad'

const useStyles = makeStyles((theme) => ({
    paper : {
      maxWidth: 700
    }
}));

const Squad = () => {
    const [playersList, setPlayersList] = useState([])

    const hook = () => {
        squad().then(players => setPlayersList(players))
    }
    useEffect(hook, [])
    const goalKeepers = playersList.filter(player => player.position==='Goalkeeper')
    const defenders = playersList.filter(player => player.position==='Defender')
    const midfielders = playersList.filter(player => player.position==='Midfielder')
    const forwards = playersList.filter(player => player.position==='Attacker')

    const classes = useStyles()

    return (


        <Grid container spacing={1}>
            <Grid item container xs>
                <Paper variant='outlined' square className={classes.paper}>
                    <Typography variant='button' component='h2'>
                        Goal Keepers
                    </Typography>
                    <Grid container align='center'>
                        {/* Player 1 */}
                        <Grid item xs={12} container>
                            <Paper variant='outlined' square style={{backgroundColor:'red'}}>
                                <Grid item>
                                    Name
                                </Grid>
                                <Grid item>
                                    # Number
                                </Grid>
                            </Paper>
                        </Grid>
                        {/* Player 2 */}
                        <Grid  xs={12} container>
                            <Paper variant='outlined' square>
                                <Grid item>
                                    Name
                                </Grid>
                                <Grid item>
                                    # Number
                                </Grid>
                            </Paper>
                        </Grid>
                        {/* Player 3 */}
                        <Grid item xs={12} container>
                            <Paper variant='outlined' square>
                                <Grid item>
                                    Name
                                </Grid>
                                <Grid item>
                                    # Number
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    {/* {goalKeepers.map(player => 
                        <div>
                            {player.name}
                        </div>
                    )} */}
                </Paper>
            </Grid>
            <Grid></Grid>
            <Grid></Grid>
            <Grid></Grid>
        </Grid>

        // <div>
        //     Keepers
        //     {goalKeepers.map(player => <div>{player.name}</div> )}
        //     Defenders
        //     {defenders.map(player => <div>{player.name}</div>)}
        //     Midfielders
        //     {midfielders.map(player => <div>{player.name}</div>)}
        //     Forwards
        //     {forwards.map(player => <div>{player.name}</div>)}

        // </div>

    )
}

export default Squad
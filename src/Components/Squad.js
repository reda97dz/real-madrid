// import ImageList from '@material-ui/core/ImageList'
// import ImageListItem from '@material-ui/core/ImageListItem'
// import ImageListItemBar from '@material-ui/core/ImageListItemBar'
// import ListSubheader from '@material-ui/core/ListSubheader'

import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'

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
    }
    useEffect(hook, [])
    const goalKeepers = playersList.filter(player => player.position==='Goalkeeper')
    const defenders = playersList.filter(player => player.position==='Defender')
    const midfielders = playersList.filter(player => player.position==='Midfielder')
    const forwards = playersList.filter(player => player.position==='Attacker')

    const classes = useStyles()

    return (


        <Paper variant='outlined' square className={classes.paper}>
            <Typography variant='button' component='h2' style={{fontSize:18}}>
                Real Madrid Squad
            </Typography>

            <Grid container>
                <Grid item container xs={12} sm direction='column'>


                    <Grid item container direction='column'>
                        <Grid item>
                            <Paper style={{backgroundColor: 'black', color: 'white'}} square elevation={0}>
                                <Typography variant='button' component='h5'>Keepers</Typography>
                            </Paper>
                        </Grid>
                        <Paper item container xs component={Grid} variant='outlined' square>
                            <Grid item xs={12} sm={6} >
                                {goalKeepers.map(player => 
                                    <Card square container variant='outlined' component={Grid}>
                                        <Grid item xs={8}>{player.name}</Grid>
                                        <Grid item xs>{player.shirtNumber
                                        }</Grid>
                                    </Card>
                                )}
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item container direction='column'>
                        <Grid item>
                            <Paper style={{backgroundColor: 'black', color: 'white'}} square elevation={0}>
                                <Typography variant='button' component='h5'>Defenders</Typography>
                            </Paper>
                        </Grid>
                        <Paper item container xs component={Grid} variant='outlined' square>
                            <Grid item xs={12} sm={6} >
                                {defenders.map(player => 
                                    <Card square container variant='outlined' component={Grid}>
                                        <Grid item xs={8}>{player.name}</Grid>
                                        <Grid item xs>{player.shirtNumber
                                        }</Grid>
                                    </Card>
                                )}
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
                <Grid item container xs={12} sm direction='column'>
                    
                    <Grid item container direction='column'>
                        <Grid item>
                            <Paper style={{backgroundColor: 'black', color: 'white'}} square elevation={0}>
                                <Typography variant='button' component='h5'>Midfielders</Typography>
                            </Paper>
                        </Grid>
                        <Paper item container xs component={Grid} variant='outlined' square>
                            <Grid item xs={12} sm={6} >
                                {midfielders.map(player => 
                                    <Card square container variant='outlined' component={Grid}>
                                        <Grid item xs={8}>{player.name}</Grid>
                                        <Grid item xs>{player.shirtNumber
                                        }</Grid>
                                    </Card>
                                )}
                            </Grid>
                        </Paper>
                    </Grid>
                    
                    <Grid item container direction='column'>
                        <Grid item>
                            <Paper style={{backgroundColor: 'black', color: 'white'}} square elevation={0}>
                                <Typography variant='button' component='h5'>Attackers</Typography>
                            </Paper>
                        </Grid>
                        <Paper item container xs component={Grid} variant='outlined' square>
                            <Grid item xs={12} sm={6} >
                                {forwards.map(player => 
                                    <Card square container variant='outlined' component={Grid}>
                                        <Grid item xs={8}>{player.name}</Grid>
                                        <Grid item xs>{player.shirtNumber
                                        }</Grid>
                                    </Card>
                                )}
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
            
            
            
        </Paper>
        // {goalKeepers.map(player => 
        //         <div>
        //             {player.name}
        //         </div>
        // )}
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
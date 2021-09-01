import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    title : {
        backgroundColor: 'black',
        color: 'white',
        padding : theme.spacing(1),
        marginTop : theme.spacing(1)
    }
}));

const Players = ({title, playersList}) => {
    const classes = useStyles()

    return (
        <Grid item container direction='column'>
            <Grid item>
                <Paper className={classes.title} square elevation={0}>
                    <Typography variant='button' component='h5'>{title}</Typography>
                </Paper>
            </Grid>
            <Paper item container xs component={Grid} elevation={0} square >
                {playersList.map(player => 
                    <Card square item container xs={12} elevation={0} component={Grid}>
                        <CardContent component={Grid} container item>
                            <Grid item xs>    
                                <Typography component='h3' variant='button' >
                                    {player.name}
                                </Typography>
                                <Typography color='textSecondary'>
                                    {player.nationality}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} align='center' align='center'>
                                <Typography component='h1' >
                                    #{player.shirtNumber}
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                )}
            </Paper>
            <Divider />
        </Grid>
    )

}

export default Players
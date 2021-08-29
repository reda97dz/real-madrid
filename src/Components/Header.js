import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titlePaper: {
      backgroundColor: '#16150f80'
    }
}));

const Header = ({title}) => {
    const classes = useStyles()
    return (
        <Paper className={classes.titlePaper} variant='outlined' square>
            <Box p={2} color='#f0e1c5'>
            <Typography variant="h3" component="h2">
                {title}
            </Typography>
            </Box>
        </Paper>
    )
}

export default Header
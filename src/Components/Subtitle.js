import React from 'react'

import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'


const Subtitle = ({subtitle}) => {

    return(
        <Box align='center' m={1} color="#f2d59d">
            <Typography  gutterBottom>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Subtitle
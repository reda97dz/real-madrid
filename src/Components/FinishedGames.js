import React from 'react'
import DoneFixture from './DoneFixture'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/core'

const FinishedGames = ({gamesList}) => {
    console.log(gamesList[0])
    return (
        <Paper elevation={3}>
            <h1>Finished Games</h1>
            {gamesList.map(match => <DoneFixture key={match.id} match={match} />)}
        </Paper>
    )
}

export default FinishedGames
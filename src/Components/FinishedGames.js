import React from 'react'
import DoneFixture from './DoneFixture'

const FinishedGames = ({gamesList}) => {
    return (
        <div className='card'>
            <div>
                <h1>Finished Games</h1>
            </div>
            {gamesList.map(match => <DoneFixture key={match.id} match={match} />)}
        </div>
    )
}

export default FinishedGames
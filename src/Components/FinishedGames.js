import React from 'react'
import DoneFixture from './DoneFixture'

const FinishedGames = ({gamesList}) => {
    return (
        <div>
            <table>
                <tbody>
                    {gamesList.map(match => <DoneFixture key={match.id} match={match} />)}
                </tbody>
            </table>
        </div>
    )
}

export default FinishedGames
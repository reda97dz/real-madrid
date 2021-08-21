import React from 'react'

const DoneFixture = ({match}) => {
    return(
    <tr>
        <td>{match.homeTeam.name}</td>
        <td>{match.score.fullTime.homeTeam}</td>
        <td>-</td>
        <td>{match.score.fullTime.awayTeam}</td>
        <td>{match.awayTeam.name}</td>
    </tr>
    )
}

export default DoneFixture
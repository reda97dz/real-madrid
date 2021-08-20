import React from 'react'

const Fixture = ({match}) => {
    return(
      <tr>
        <td> {match.homeTeam.name} </td>
        <td> - </td>
        <td> {match.awayTeam.name} </td>
        <td> - </td>
        <td> {match.utcDate} </td>
        <td> - </td>
        <td> {match.competition.name} </td>
      </tr>
    )
}

export default Fixture
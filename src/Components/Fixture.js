import React from 'react'

const Fixture = ({match}) => {
    return(
      <div className='container'>
        {match.homeTeam.name} -
        {match.awayTeam.name} -
        {match.utcDate} -
        {match.competition.name}
      </div>
    )
}

export default Fixture
import React from 'react'
import Fixture from './Fixture'

const Games = ({gamesList}) => {
    return (
      <div className='card'>
        <div>
          <h1>Upcoming games</h1>
        </div>
          {gamesList.map(match => <Fixture key={match.id} match={match} />)}
      </div>
    )
}

export default Games
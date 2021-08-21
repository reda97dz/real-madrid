import React from 'react'
import Fixture from './Fixture'

const UpcomingGames = ({gamesList}) => {
    return (
      <div>
        <table>
          <tbody>
              {gamesList.map(match => <Fixture key={match.id} match={match} />)}
          </tbody>
        </table>
      </div>
    )
}

export default UpcomingGames
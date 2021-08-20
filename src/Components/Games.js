import React from 'react'
import Fixture from './Fixture'

const Games = ({gamesList}) => {
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

export default Games
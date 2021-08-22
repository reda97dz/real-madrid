import React from 'react'
import styled from 'styled-components'

const DoneFixture = ({match}) => {
    return(
        <div>
            {match.homeTeam.name}
            {match.score.fullTime.homeTeam} -
            {match.score.fullTime.awayTeam}
            {match.awayTeam.name}
        </div>
    )
}

export default DoneFixture
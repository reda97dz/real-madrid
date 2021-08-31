// import ImageList from '@material-ui/core/ImageList'
// import ImageListItem from '@material-ui/core/ImageListItem'
// import ImageListItemBar from '@material-ui/core/ImageListItemBar'
// import ListSubheader from '@material-ui/core/ListSubheader'

import React, {useState, useEffect} from 'react'

import squad from '../Services/squad'

const Squad = () => {
    const [playersList, setPlayersList] = useState([])

    const hook = () => {
        squad().then(players => setPlayersList(players))
    }
    useEffect(hook, [])
    const goalKeepers = playersList.filter(player => player.position==='Goalkeeper')
    const defenders = playersList.filter(player => player.position==='Defender')
    const midfielders = playersList.filter(player => player.position==='Midfielder')
    const forwards = playersList.filter(player => player.position==='Attacker')

    return (

        <div>
            Keepers
            {goalKeepers.map(player => <div>{player.name}</div> )}
            Defenders
            {defenders.map(player => <div>{player.name}</div>)}
            Midfielders
            {midfielders.map(player => <div>{player.name}</div>)}
            Forwards
            {forwards.map(player => <div>{player.name}</div>)}

        </div>

    )
}

export default Squad
import axios from 'axios'

const baseUrl = 'https://api.football-data.org/v2/teams/86/matches'

const upcomingGames = () => {
    const request = axios.get(baseUrl+'?status=SCHEDULED', {headers : {'X-Auth-Token' : '/'}})
    return request.then(response => response.data.matches)
}

const finishedGames = () => {
    const request = axios.get(baseUrl+'?status=FINISHED', {headers : {'X-Auth-Token' : '/'}})
    return request.then(response => response.data.matches)
}

const gameService = {upcomingGames, finishedGames}

export default gameService
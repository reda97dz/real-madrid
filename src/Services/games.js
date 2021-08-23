import axios from 'axios'

const baseUrl = 'https://api.football-data.org/v2/teams/'

const upcomingGames = () => {
    const request = axios.get(baseUrl+'86/matches?status=SCHEDULED', {headers : {'X-Auth-Token' : '3231994280e54acbb604868cca7988a1'}})
    return request.then(response => response.data.matches)
}

const finishedGames = () => {
    const request = axios.get(baseUrl+'86/matches?status=FINISHED', {headers : {'X-Auth-Token' : '3231994280e54acbb604868cca7988a1'}})
    return request.then(response => response.data.matches)
}

const teamDetails = (id) => {
    const request = axios.get(baseUrl+`/${id}`, {headers : {'X-Auth-Token' : '3231994280e54acbb604868cca7988a1'}})
    return request.then(response=> response.data)
}

const gameService = {upcomingGames, finishedGames, teamDetails}

export default gameService
import axios from 'axios'

const baseUrl = 'https://api.football-data.org/v2/teams/'

const upcomingGames = async () => {
    const request = axios.get(baseUrl+'86/matches?status=SCHEDULED', {headers : {'X-Auth-Token' : '3231994280e54acbb604868cca7988a1'}})
    const response = await request
    return response.data.matches
}

const finishedGames = async () => {
    const request = axios.get(baseUrl+'86/matches?status=FINISHED', {headers : {'X-Auth-Token' : '3231994280e54acbb604868cca7988a1'}})
    const response = await request
    return response.data.matches
}

const teamDetails = async (id) => {
    const request = axios.get(baseUrl+`/${id}`, {headers : {'X-Auth-Token' : '3231994280e54acbb604868cca7988a1'}})
    const response = await request
    return response.data
}

const gameService = {upcomingGames, finishedGames, teamDetails}

export default gameService
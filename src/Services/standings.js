import axios from 'axios'

const baseUrl = 'https://api.football-data.org/v2/competitions/'	

const leagueStanding = async () => {
    const request = axios.get(baseUrl+'2014/standings', {headers : {'X-Auth-Token' : '3231994280e54acbb604868cca7988a1'}})
    const response = await request
    return response.data.standings
}

const uclStanding = async () => {
    const request = axios.get(baseUrl+'2001/standings',  {headers : {'X-Auth-Token' : '3231994280e54acbb604868cca7988a1'}})
    const response = await request
    return response.data.stadings
}

const standingsService = {leagueStanding, uclStanding}

export default standingsService
import axios from 'axios'

const baseUrl = 'https://api.football-data.org/v2/teams/86'

const squad = async () => {
    const request = axios.get(baseUrl, {headers : {'X-Auth-Token' : '3231994280e54acbb604868cca7988a1'}})
    const response = await request
    return response.data.squad
}


export default squad
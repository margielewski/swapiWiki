import axios from 'axios'

const API_URL = 'https://swapi.dev/api/'

export const GETStarships = (postfix: string) => {
    return axios.get(`${API_URL}starships${postfix}`)
}
import axios from 'axios'

const API_URL = 'http://swapi.dev/api/'

export const GETPlanets = (postfix: string) => {
    return axios.get(`${API_URL}planets${postfix}`)
}
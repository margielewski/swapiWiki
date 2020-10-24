import axios from 'axios'

const API_URL = 'http://swapi.dev/api/'

export const GETCharacters = (postfix: string) => {
    return axios.get(`${API_URL}people${postfix}`)
}
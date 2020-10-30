import axios from 'axios'

import { IStarshipsResponse } from './../starships/starships.types';

const API_URL = 'https://swapi.dev/api/'

export const GETStarships = (postfix: string) => {
    return axios.get<IStarshipsResponse>(`${API_URL}starships${postfix}`)
}
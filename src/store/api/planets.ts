import axios from 'axios'

import { IPlanetsResponse } from './../planets/planets.types';

const API_URL = 'https://swapi.dev/api/'

export const GETPlanets = (postfix: string) => {
    return axios.get<IPlanetsResponse>(`${API_URL}planets${postfix}`)
}
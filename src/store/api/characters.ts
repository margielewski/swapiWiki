import axios from 'axios'

import { ICharactersResponse } from './../characters/characters.types';

const API_URL = 'https://swapi.dev/api/'

export const GETCharacters = (postfix: string) => {
    return axios.get<ICharactersResponse>(`${API_URL}people${postfix}`)
}
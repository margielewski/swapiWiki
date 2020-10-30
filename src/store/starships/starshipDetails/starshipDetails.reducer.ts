import {
    IStarshipDetailsState,
    GET_STARSHIP_DETAILS_REQUESTED,
    GET_STARSHIP_DETAILS_DONE,
    GET_STARSHIP_DETAILS_FAILED,
    GET_STARSHIP_FILMS_DETAILS_DONE,
    GET_STARSHIP_PILOTS_DETAILS_DONE,
    StarshipDetailsActions,
    IStarship,
} from '../starships.types';

import { ICharacter } from './../../characters/characters.types';
import { IFilm } from './../../../types/film';

const initialState: IStarshipDetailsState = {
    loading: false,
    data: {} as IStarship,
    error: '',
    films: [],
    pilots: [],
}

export default (state = initialState, action: StarshipDetailsActions): IStarshipDetailsState => {
    switch (action.type) {
        case GET_STARSHIP_DETAILS_REQUESTED:
            return {
                ...state,
                loading: true,
                films: [],
                pilots: []
            }

        case GET_STARSHIP_DETAILS_DONE:
            return {
                ...state,
                loading: false,
                data: action.payload.results[0],
                error: ''
            }

        case GET_STARSHIP_DETAILS_FAILED:
            return {
                loading: false,
                data: {} as IStarship,
                error: action.payload,
                films: [],
                pilots: [],
            }
        case GET_STARSHIP_FILMS_DETAILS_DONE:
            return {
                ...state,
                films: [...state.films, action.payload] as IFilm[],
                error: ''
            }
        case GET_STARSHIP_PILOTS_DETAILS_DONE:
            return {
                ...state,
                pilots: [...state.pilots, action.payload] as ICharacter[],
                error: ''
            }

        default:
            return state
    }
}

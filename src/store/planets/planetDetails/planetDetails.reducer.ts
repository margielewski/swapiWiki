import {
    IPlanetDetailsState,
    GET_PLANET_DETAILS_REQUESTED,
    GET_PLANET_DETAILS_DONE,
    GET_PLANET_DETAILS_FAILED,
    GET_PLANET_FILMS_DETAILS_DONE,
    GET_PLANET_RESIDENTS_DETAILS_DONE,
    PlanetDetailsActions,
    IPlanet,
} from '../planets.types';

import { IFilm } from '../../../types/film';
import { ICharacter } from '../../characters/characters.types';

const initialState: IPlanetDetailsState = {
    loading: false,
    data: {} as IPlanet,
    error: '',
    films: [],
    residents: []
}

export default (state = initialState, action: PlanetDetailsActions): IPlanetDetailsState => {
    switch (action.type) {
        case GET_PLANET_DETAILS_REQUESTED:
            return {
                ...state,
                loading: true,
                films: [],
                residents: []
            }

        case GET_PLANET_DETAILS_DONE:
            return {
                ...state,
                loading: false,
                data: action.payload.results[0],
                error: ''
            }

        case GET_PLANET_DETAILS_FAILED:
            return {
                loading: false,
                data: {} as IPlanet,
                error: action.payload,
                films: [],
                residents: []
            }
        case GET_PLANET_FILMS_DETAILS_DONE:
            return {
                ...state,
                loading: false,
                films: [...state.films, action.payload] as IFilm[],
                error: ''
            }
        case GET_PLANET_RESIDENTS_DETAILS_DONE:
            return {
                ...state,
                loading: false,
                residents: [...state.residents, action.payload] as ICharacter[],
                error: ''
            }
        default:
            return state
    }
}

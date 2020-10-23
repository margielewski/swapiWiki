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

const initialState: IPlanetDetailsState = {
    loading: false,
    data: <IPlanet>{},
    error: '',
    films: [],
    residents: []
}

export default (state = initialState, { type, payload }: PlanetDetailsActions): IPlanetDetailsState => {
    switch (type) {
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
                data: payload.results[0],
                error: ''
            }

        case GET_PLANET_DETAILS_FAILED:
            return {
                loading: false,
                data: <IPlanet>{},
                error: payload
            }
        case GET_PLANET_FILMS_DETAILS_DONE:
            return {
                ...state,
                loading: false,
                films: [...state.films, payload],
                error: ''
            }
        case GET_PLANET_RESIDENTS_DETAILS_DONE:
            return {
                ...state,
                loading: false,
                residents: [...state.residents, payload],
                error: ''
            }
        default:
            return state
    }
}

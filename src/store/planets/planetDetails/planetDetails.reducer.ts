import {
    IPlanetDetailsState,
    GET_PLANET_DETAILS_REQUESTED,
    GET_PLANET_DETAILS_DONE,
    GET_PLANET_DETAILS_FAILED,
    PlanetDetailsActions,
    IPlanet,
} from '../planets.types';

const initialState: IPlanetDetailsState = {
    loading: false,
    data: <IPlanet>{},
    error: '',
}

export default (state = initialState, { type, payload }: PlanetDetailsActions): IPlanetDetailsState => {
    switch (type) {
        case GET_PLANET_DETAILS_REQUESTED:
            return {
                ...state,
                loading: true,
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

        default:
            return state
    }
}

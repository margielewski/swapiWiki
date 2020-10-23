import {
    IPlanetsState,
    GET_PLANETS_REQUESTED,
    GET_PLANETS_DONE,
    GET_PLANETS_FAILED,
    PlanetsActions,
} from '../planets.types';

const initialState: IPlanetsState = {
    loading: false,
    data: [],
    error: '',
    next: '',
    previous: ''
}

export default (state = initialState, { type, payload }: PlanetsActions): IPlanetsState => {
    switch (type) {
        case GET_PLANETS_REQUESTED:
            return {
                ...state,
                loading: true,
                next: '',
                previous: ''
            }

        case GET_PLANETS_DONE:
            return {
                ...state,
                loading: false,
                data: payload.results,
                next: payload.next,
                previous: payload.previous,
                error: ''
            }

        case GET_PLANETS_FAILED:
            return {
                loading: false,
                data: [],
                next: '',
                previous: '',
                error: payload
            }


        default:
            return state
    }
}

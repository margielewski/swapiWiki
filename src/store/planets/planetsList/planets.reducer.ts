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

export default (state = initialState, action: PlanetsActions): IPlanetsState => {
    switch (action.type) {
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
                data: action.payload.results,
                next: action.payload.next,
                previous: action.payload.previous,
                error: ''
            }

        case GET_PLANETS_FAILED:
            return {
                loading: false,
                data: [],
                next: '',
                previous: '',
                error: action.payload
            }


        default:
            return state
    }
}

import * as types from './planets.types';

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {
        case types.GET_PLANETS_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case types.GET_PLANETS_DONE:
            return {
                ...state,
                loading: false,
                data: payload,
                error: ''
            }

        case types.GET_PLANETS_FAILED:
            return {
                loading: false,
                data: [],
                error: payload
            }


        default:
            return state
    }
}

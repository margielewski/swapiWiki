import {
    IStarshipsState,
    GET_STARSHIPS_REQUESTED,
    GET_STARSHIPS_DONE,
    GET_STARSHIPS_FAILED,
    StarshipsActions,
} from '../starships.types';

const initialState: IStarshipsState = {
    loading: false,
    data: [],
    error: '',
    next: '',
    previous: ''
}

export default (state = initialState, { type, payload }: StarshipsActions): IStarshipsState => {
    switch (type) {
        case GET_STARSHIPS_REQUESTED:
            return {
                ...state,
                loading: true,
                next: '',
                previous: ''
            }

        case GET_STARSHIPS_DONE:
            return {
                ...state,
                loading: false,
                data: payload.results,
                next: payload.next,
                previous: payload.previous,
                error: ''
            }

        case GET_STARSHIPS_FAILED:
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

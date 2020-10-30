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

export default (state = initialState, action: StarshipsActions): IStarshipsState => {
    switch (action.type) {
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
                data: action.payload.results,
                next: action.payload.next,
                previous: action.payload.previous,
                error: ''
            }

        case GET_STARSHIPS_FAILED:
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

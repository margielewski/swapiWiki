import {
    ICharactersState,
    GET_CHARACTERS_REQUESTED,
    GET_CHARACTERS_DONE,
    GET_CHARACTERS_FAILED,
    CharactersActions,
} from '../characters.types';

const initialState: ICharactersState = {
    loading: false,
    data: [],
    error: '',
    next: '',
    previous: ''
}

export default (state = initialState, action: CharactersActions): ICharactersState => {
    switch (action.type) {
        case GET_CHARACTERS_REQUESTED:
            return {
                ...state,
                loading: true,
                next: '',
                previous: ''
            }

        case GET_CHARACTERS_DONE:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                next: action.payload.next,
                previous: action.payload.previous,
                error: ''
            }

        case GET_CHARACTERS_FAILED:
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

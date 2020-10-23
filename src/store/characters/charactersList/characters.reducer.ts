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

export default (state = initialState, { type, payload }: CharactersActions): ICharactersState => {
    switch (type) {
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
                data: payload.results,
                next: payload.next,
                previous: payload.previous,
                error: ''
            }

        case GET_CHARACTERS_FAILED:
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

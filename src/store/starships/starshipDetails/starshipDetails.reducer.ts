import {
    IStarshipDetailsState,
    GET_STARSHIP_DETAILS_REQUESTED,
    GET_STARSHIP_DETAILS_DONE,
    GET_STARSHIP_DETAILS_FAILED,
    GET_STARSHIP_FILMS_DETAILS_DONE,
    GET_STARSHIP_PILOTS_DETAILS_DONE,
    StarshipDetailsActions,
    IStarship,
} from '../starships.types';

const initialState: IStarshipDetailsState = {
    loading: false,
    data: {} as IStarship,
    error: '',
    films: [],
    pilots: [],

}

export default (state = initialState, { type, payload }: StarshipDetailsActions): IStarshipDetailsState => {
    switch (type) {
        case GET_STARSHIP_DETAILS_REQUESTED:
            return {
                ...state,
                loading: true,
                films: [],
                pilots: []
            }

        case GET_STARSHIP_DETAILS_DONE:
            return {
                ...state,
                loading: false,
                data: payload.results[0],
                error: ''
            }

        case GET_STARSHIP_DETAILS_FAILED:
            return {
                loading: false,
                data: {} as IStarship,
                error: payload
            }
        case GET_STARSHIP_FILMS_DETAILS_DONE:
            return {
                ...state,
                films: [...state.films, payload],
                error: ''
            }
        case GET_STARSHIP_PILOTS_DETAILS_DONE:
            return {
                ...state,
                pilots: [...state.pilots, payload],
                error: ''
            }

        default:
            return state
    }
}

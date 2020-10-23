import {
    ICharacterDetailsState,
    GET_CHARACTER_DETAILS_REQUESTED,
    GET_CHARACTER_DETAILS_DONE,
    GET_CHARACTER_DETAILS_FAILED,
    GET_CHARACTER_FILMS_DETAILS_DONE,
    GET_CHARACTER_SPECIES_DETAILS_DONE,
    GET_CHARACTER_STARSHIPS_DETAILS_DONE,
    GET_CHARACTER_VEHICLES_DETAILS_DONE,
    CharacterDetailsActions,
    ICharacter,
} from '../characters.types';

const initialState: ICharacterDetailsState = {
    loading: false,
    data: {} as ICharacter,
    error: '',
    films: [],
    species: [],
    starships: [],
    vehicles: []
}

export default (state = initialState, { type, payload }: CharacterDetailsActions): ICharacterDetailsState => {
    switch (type) {
        case GET_CHARACTER_DETAILS_REQUESTED:
            return {
                ...state,
                loading: true,
                films: [],
                species: [],
                starships: [],
                vehicles: []

            }

        case GET_CHARACTER_DETAILS_DONE:
            return {
                ...state,
                loading: false,
                data: payload.results[0],
                error: ''
            }

        case GET_CHARACTER_DETAILS_FAILED:
            return {
                loading: false,
                data: {} as ICharacter,
                error: payload
            }
        case GET_CHARACTER_FILMS_DETAILS_DONE:
            return {
                ...state,
                films: [...state.films, payload],
                error: ''
            }
        case GET_CHARACTER_SPECIES_DETAILS_DONE:
            return {
                ...state,
                species: [...state.species, payload],
                error: ''
            }
        case GET_CHARACTER_STARSHIPS_DETAILS_DONE:
            return {
                ...state,
                starships: [...state.starships, payload],
                error: ''
            }
        case GET_CHARACTER_VEHICLES_DETAILS_DONE:
            return {
                ...state,
                vehicles: [...state.vehicles, payload],
                error: ''
            }
        default:
            return state
    }
}

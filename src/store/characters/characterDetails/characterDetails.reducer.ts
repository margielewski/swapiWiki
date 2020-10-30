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

import { IFilm } from './../../../types/film';
import { ISpecie } from '../../../types/specie';
import { IStarship } from '../../starships/starships.types';
import { IVehicle } from '../../../types/vehicle';

const initialState: ICharacterDetailsState = {
    loading: false,
    data: {} as ICharacter,
    error: '',
    films: [],
    species: [],
    starships: [],
    vehicles: []
}

export default (state = initialState, action: CharacterDetailsActions): ICharacterDetailsState => {
    switch (action.type) {
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
                data: action.payload.results[0],
                error: ''
            }

        case GET_CHARACTER_DETAILS_FAILED:
            return {
                loading: false,
                data: {} as ICharacter,
                error: action.payload,
                films: [],
                species: [],
                starships: [],
                vehicles: []
            }
        case GET_CHARACTER_FILMS_DETAILS_DONE:
            return {
                ...state,
                films: [...state.films, action.payload] as IFilm[],
                error: ''
            }
        case GET_CHARACTER_SPECIES_DETAILS_DONE:
            return {
                ...state,
                species: [...state.species, action.payload] as ISpecie[],
                error: ''
            }
        case GET_CHARACTER_STARSHIPS_DETAILS_DONE:
            return {
                ...state,
                starships: [...state.starships, action.payload] as IStarship[],
                error: ''
            }
        case GET_CHARACTER_VEHICLES_DETAILS_DONE:
            return {
                ...state,
                vehicles: [...state.vehicles, action.payload] as IVehicle[],
                error: ''
            }
        default:
            return state
    }
}

import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    GET_CHARACTER_DETAILS_REQUESTED,
    GET_CHARACTER_DETAILS_DONE,
    GET_CHARACTER_DETAILS_FAILED,
    GET_CHARACTER_FILMS_DETAILS_DONE,
    GET_CHARACTER_SPECIES_DETAILS_DONE,
    GET_CHARACTER_STARSHIPS_DETAILS_DONE,
    GET_CHARACTER_VEHICLES_DETAILS_DONE,
    CharacterDetailsActions,
    ICharactersResponse,
} from '../characters.types';

import { RootStore } from '../../store';

import { GETCharacters } from '../../api/characters'

import { IStarship } from '../../starships/starships.types';
import { IVehicle } from './../../../types/vehicle';
import { ISpecie } from './../../../types/specie';
import { IFilm } from './../../../types/film';
import { getDetails } from '../../helpers/getDetails';


export function getCharacterDetailsRequested(): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_DETAILS_REQUESTED
    };
}

export function getCharacterDetailsDone(data: ICharactersResponse): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_DETAILS_DONE,
        payload: data
    };
}

export function getCharacterDetailsFailed(error: string): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_DETAILS_FAILED,
        payload: error
    };
}

export function getCharacterFilmsDetailsDone(data: IFilm[]): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_FILMS_DETAILS_DONE,
        payload: data
    };
}

export function getSpeciesDetailsDone(data: ISpecie[]): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_SPECIES_DETAILS_DONE,
        payload: data
    };
}
export function getStarshipsDetailsDone(data: IStarship[]): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_STARSHIPS_DETAILS_DONE,
        payload: data
    };
}
export function getVehiclesDetailsDone(data: IVehicle[]): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_VEHICLES_DETAILS_DONE,
        payload: data
    };
}

export function getCharacterDetails(postfix = '') {
    return async (dispatch: ThunkDispatch<RootStore, void, Action>) => {
        dispatch(getCharacterDetailsRequested())

        try {
            const response = await GETCharacters(postfix)
            const { data } = response;

            if (!data.results.length) return dispatch(getCharacterDetailsFailed('not found'))

            const [{ films }] = data.results;

            films.forEach((film: string) => { dispatch(getDetails(film, getCharacterFilmsDetailsDone, getCharacterDetailsFailed)) })

            const [{ starships }] = data.results;
            starships.forEach((starship: string) => { dispatch(getDetails(starship, getStarshipsDetailsDone, getCharacterDetailsFailed)) })

            const [{ species }] = data.results;
            species.forEach((specie: string) => { dispatch(getDetails(specie, getSpeciesDetailsDone, getCharacterDetailsFailed)) })

            const [{ vehicles }] = data.results;
            vehicles.forEach((vehicle: string) => { dispatch(getDetails(vehicle, getVehiclesDetailsDone, getCharacterDetailsFailed)) })

            return dispatch(getCharacterDetailsDone(data))
        } catch (error) {
            const { message } = error;
            return dispatch(getCharacterDetailsFailed(message))
        }
    }
}

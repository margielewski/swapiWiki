import axios from 'axios';
import { Action, Dispatch } from 'redux';
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
        GETCharacters(postfix)
            .then(r => {
                const { data } = r;

                const [{ films }] = data.results;
                films.forEach((film: string) => { dispatch(getFilmsDetails(film)) })

                const [{ starships }] = data.results;
                starships.forEach((starship: string) => { dispatch(getStarshipsDetails(starship)) })

                const [{ species }] = data.results;
                species.forEach((specie: string) => { dispatch(getSpeciesDetails(specie)) })

                const [{ vehicles }] = data.results;
                vehicles.forEach((vehicle: string) => { dispatch(getVehiclesDetails(vehicle)) })

                dispatch(getCharacterDetailsDone(data))

            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getCharacterDetailsFailed(errorMsg))
            })
    }
}

function getFilmsDetails(url: string) {
    return (dispatch: Dispatch) => {
        axios.get(url)
            .then(r => {
                const data = r.data;
                dispatch(getCharacterFilmsDetailsDone(data))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getCharacterDetailsFailed(errorMsg))
            })
    }
}

function getStarshipsDetails(url: string) {
    return (dispatch: Dispatch) => {
        axios.get(url)
            .then(r => {
                const data = r.data;
                dispatch(getStarshipsDetailsDone(data))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getCharacterDetailsFailed(errorMsg))
            })
    }
}

function getVehiclesDetails(url: string) {
    return (dispatch: Dispatch) => {
        axios.get(url)
            .then(r => {
                const data = r.data;
                dispatch(getVehiclesDetailsDone(data))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getCharacterDetailsFailed(errorMsg))
            })
    }
}

function getSpeciesDetails(url: string) {
    return (dispatch: Dispatch) => {
        axios.get(url)
            .then(r => {
                const data = r.data;
                dispatch(getSpeciesDetailsDone(data))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getCharacterDetailsFailed(errorMsg))
            })
    }
}
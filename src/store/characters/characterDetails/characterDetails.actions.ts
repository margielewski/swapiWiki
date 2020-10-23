import { IVehiclesResponse } from './../../../types/vehicle';
import { ISpeciesResponse } from './../../../types/specie';
import { IFilmsResponse } from './../../../types/film';
import { Dispatch } from 'redux';
import axios from 'axios';

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

import { GETCharacters } from '../../api/characters'
import { IStarshipsResponse } from '../../starships/starships.types';

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

export function getCharacterFilmsDetailsDone(data: IFilmsResponse): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_FILMS_DETAILS_DONE,
        payload: data
    };
}

export function getSpeciesDetailsDone(data: ISpeciesResponse): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_SPECIES_DETAILS_DONE,
        payload: data
    };
}
export function getStarshipsDetailsDone(data: IStarshipsResponse): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_STARSHIPS_DETAILS_DONE,
        payload: data
    };
}
export function getVehiclesDetailsDone(data: IVehiclesResponse): CharacterDetailsActions {
    return {
        type: GET_CHARACTER_VEHICLES_DETAILS_DONE,
        payload: data
    };
}

export function getCharacterDetails(postfix = '') {
    return (dispatch: Dispatch) => {
        dispatch(getCharacterDetailsRequested())
        GETCharacters(postfix)
            .then(r => {
                const data = r.data;
                if (data.results && data.results.length !== 1) data.results = [];
                if (data.results[0] && data.results[0].films.length) {
                    const films = data.results[0].films;
                    films.forEach((film: string) => { dispatch<any>(getFilmsDetails(film)) })
                }
                if (data.results[0] && data.results[0].starships.length) {
                    const starships = data.results[0].starships;
                    starships.forEach((starship: string) => { dispatch<any>(getStarshipsDetails(starship)) })
                }
                if (data.results[0] && data.results[0].species.length) {
                    const species = data.results[0].species;
                    species.forEach((specie: string) => { dispatch<any>(getSpeciesDetails(specie)) })
                }
                if (data.results[0] && data.results[0].vehicles.length) {
                    const vehicles = data.results[0].vehicles;
                    vehicles.forEach((vehicle: string) => { dispatch<any>(getVehiclesDetails(vehicle)) })
                }
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
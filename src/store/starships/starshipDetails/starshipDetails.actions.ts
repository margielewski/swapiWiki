import { ICharactersResponse } from './../../characters/characters.types';
import { IFilmsResponse } from '../../../types/film';
import { Dispatch } from 'redux';
import axios from 'axios';

import {
    GET_STARSHIP_DETAILS_REQUESTED,
    GET_STARSHIP_DETAILS_DONE,
    GET_STARSHIP_DETAILS_FAILED,
    GET_STARSHIP_FILMS_DETAILS_DONE,
    GET_STARSHIP_PILOTS_DETAILS_DONE,

    StarshipDetailsActions,
    IStarshipsResponse,
} from '../starships.types';

import { GETStarships } from '../../api/starships'

export function getStarshipDetailsRequested(): StarshipDetailsActions {
    return {
        type: GET_STARSHIP_DETAILS_REQUESTED
    };
}

export function getStarshipDetailsDone(data: IStarshipsResponse): StarshipDetailsActions {
    return {
        type: GET_STARSHIP_DETAILS_DONE,
        payload: data
    };
}

export function getStarshipDetailsFailed(error: string): StarshipDetailsActions {
    return {
        type: GET_STARSHIP_DETAILS_FAILED,
        payload: error
    };
}

export function getStarshipFilmsDetailsDone(data: IFilmsResponse): StarshipDetailsActions {
    return {
        type: GET_STARSHIP_FILMS_DETAILS_DONE,
        payload: data
    };
}


export function getPilotsDetailsDone(data: ICharactersResponse): StarshipDetailsActions {
    return {
        type: GET_STARSHIP_PILOTS_DETAILS_DONE,
        payload: data
    };
}


export function getStarshipDetails(postfix = '') {
    return (dispatch: Dispatch) => {
        dispatch(getStarshipDetailsRequested())
        GETStarships(postfix)
            .then(r => {
                const { data } = r;

                const [{ films }] = data.results;
                films.forEach((film: string) => { dispatch<any>(getFilmsDetails(film)) })

                const [{ pilots }] = data.results;
                pilots.forEach((pilot: string) => { dispatch<any>(getPilotsDetails(pilot)) })

                dispatch(getStarshipDetailsDone(data))

            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getStarshipDetailsFailed(errorMsg))
            })
    }
}

function getFilmsDetails(url: string) {
    return (dispatch: Dispatch) => {
        axios.get(url)
            .then(r => {
                const data = r.data;
                dispatch(getStarshipFilmsDetailsDone(data))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getStarshipDetailsFailed(errorMsg))
            })
    }
}

function getPilotsDetails(url: string) {
    return (dispatch: Dispatch) => {
        axios.get(url)
            .then(r => {
                const data = r.data;
                dispatch(getPilotsDetailsDone(data))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getStarshipDetailsFailed(errorMsg))
            })
    }
}


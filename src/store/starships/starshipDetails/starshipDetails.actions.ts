import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import {
    GET_STARSHIP_DETAILS_REQUESTED,
    GET_STARSHIP_DETAILS_DONE,
    GET_STARSHIP_DETAILS_FAILED,
    GET_STARSHIP_FILMS_DETAILS_DONE,
    GET_STARSHIP_PILOTS_DETAILS_DONE,

    StarshipDetailsActions,
    IStarshipsResponse,
} from '../starships.types';

import { RootStore } from '../../store';

import { GETStarships } from '../../api/starships'

import { ICharacter } from './../../characters/characters.types';

import { IFilm } from '../../../types/film';
import { getDetails } from '../../helpers/getDetails';

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

export function getStarshipFilmsDetailsDone(data: IFilm[]): StarshipDetailsActions {
    return {
        type: GET_STARSHIP_FILMS_DETAILS_DONE,
        payload: data
    };
}


export function getPilotsDetailsDone(data: ICharacter[]): StarshipDetailsActions {
    return {
        type: GET_STARSHIP_PILOTS_DETAILS_DONE,
        payload: data
    };
}


export function getStarshipDetails(postfix = '') {
    return async (dispatch: ThunkDispatch<RootStore, void, Action>) => {
        dispatch(getStarshipDetailsRequested())

        try {
            const response = await GETStarships(postfix)
            const { data } = response;

            if (!data.results.length) return dispatch(getStarshipDetailsFailed('not found'))

            const [{ films }] = data.results;
            films.forEach((film: string) => { dispatch(getDetails(film, getStarshipFilmsDetailsDone, getStarshipDetailsFailed)) })

            const [{ pilots }] = data.results;
            pilots.forEach((pilot: string) => { dispatch(getDetails(pilot, getPilotsDetailsDone, getStarshipDetailsFailed)) })

            return dispatch(getStarshipDetailsDone(data))
        } catch (error) {
            const { message } = error;

            return dispatch(getStarshipDetailsFailed(message))
        }
    }
}



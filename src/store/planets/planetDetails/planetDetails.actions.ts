import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    GET_PLANET_DETAILS_REQUESTED,
    GET_PLANET_DETAILS_DONE,
    GET_PLANET_DETAILS_FAILED,
    GET_PLANET_FILMS_DETAILS_DONE,
    GET_PLANET_RESIDENTS_DETAILS_DONE,
    PlanetDetailsActions,
    IPlanetsResponse,
} from '../planets.types';

import { RootStore } from '../../store';

import { ICharacter } from './../../characters/characters.types';
import { IFilm } from './../../../types/film';

import { GETPlanets } from '../../api/planets'
import { getDetails } from '../../helpers/getDetails';

export function getPlanetDetailsRequested(): PlanetDetailsActions {
    return {
        type: GET_PLANET_DETAILS_REQUESTED
    };
}

export function getPlanetDetailsDone(data: IPlanetsResponse): PlanetDetailsActions {
    return {
        type: GET_PLANET_DETAILS_DONE,
        payload: data
    };
}

export function getPlanetDetailsFailed(error: string): PlanetDetailsActions {
    return {
        type: GET_PLANET_DETAILS_FAILED,
        payload: error
    };
}

export function getPlanetFilmsDetailsDone(data: IFilm[]): PlanetDetailsActions {
    return {
        type: GET_PLANET_FILMS_DETAILS_DONE,
        payload: data
    };
}

export function getResidentsDetailsDone(data: ICharacter[]): PlanetDetailsActions {
    return {
        type: GET_PLANET_RESIDENTS_DETAILS_DONE,
        payload: data
    };
}

export function getPlanetDetails(postfix = '') {
    return async (dispatch: ThunkDispatch<RootStore, void, Action>) => {
        dispatch(getPlanetDetailsRequested())

        try {
            const response = await GETPlanets(postfix)
            const { data } = response;

            const [{ films }] = data.results;
            films.forEach((film: string) => { dispatch(getDetails(film, getPlanetFilmsDetailsDone, getPlanetDetailsFailed)) })

            const [{ residents }] = data.results;
            residents.forEach((resident: string) => { dispatch(getDetails(resident, getResidentsDetailsDone, getPlanetDetailsFailed)) })

            return dispatch(getPlanetDetailsDone(data))
        } catch (error) {
            const { message } = error;

            return dispatch(getPlanetDetailsFailed(message))
        }

    }
}


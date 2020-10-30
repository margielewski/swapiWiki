import { ICharactersResponse } from './../../characters/characters.types';
import { IFilmsResponse } from './../../../types/film';
import { Dispatch } from 'redux';
import axios from 'axios';

import {
    GET_PLANET_DETAILS_REQUESTED,
    GET_PLANET_DETAILS_DONE,
    GET_PLANET_DETAILS_FAILED,
    GET_PLANET_FILMS_DETAILS_DONE,
    GET_PLANET_RESIDENTS_DETAILS_DONE,
    PlanetDetailsActions,
    IPlanetsResponse,
} from '../planets.types';

import { GETPlanets } from '../../api/planets'

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

export function getPlanetFilmsDetailsDone(data: IFilmsResponse): PlanetDetailsActions {
    return {
        type: GET_PLANET_FILMS_DETAILS_DONE,
        payload: data
    };
}

export function getResidentsDetailsDone(data: ICharactersResponse): PlanetDetailsActions {
    return {
        type: GET_PLANET_RESIDENTS_DETAILS_DONE,
        payload: data
    };
}

export function getPlanetDetails(postfix = '') {
    return (dispatch: Dispatch) => {
        dispatch(getPlanetDetailsRequested())
        GETPlanets(postfix)
            .then(r => {
                const { data } = r;


                const [{ films }] = data.results;
                films.forEach((film: string) => { dispatch<any>(getFilmsDetails(film)) })

                const [{ residents }] = data.results;
                residents.forEach((resident: string) => { dispatch<any>(getResidentsDetails(resident)) })

                dispatch(getPlanetDetailsDone(data))

            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getPlanetDetailsFailed(errorMsg))
            })
    }
}

function getFilmsDetails(url: string) {
    return (dispatch: Dispatch) => {
        axios.get(url)
            .then(r => {
                const data = r.data;
                dispatch(getPlanetFilmsDetailsDone(data))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getPlanetDetailsFailed(errorMsg))
            })
    }
}

function getResidentsDetails(url: string) {
    return (dispatch: Dispatch) => {
        axios.get(url)
            .then(r => {
                const data = r.data;
                dispatch(getResidentsDetailsDone(data))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getPlanetDetailsFailed(errorMsg))
            })
    }
}
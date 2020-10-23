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

export function getPlanetFilmsDetailsDone(data: any): PlanetDetailsActions {
    return {
        type: GET_PLANET_FILMS_DETAILS_DONE,
        payload: data
    };
}

export function getResidentsDetailsDone(data: any): PlanetDetailsActions {
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
                const data = r.data;
                if (data.results && data.results.length !== 1) data.results = [];
                if (data.results[0] && data.results[0].films.length) {
                    const films = data.results[0].films;
                    films.map((film: string) => { dispatch<any>(getFilmsDetails(film)) })
                }
                if (data.results[0] && data.results[0].residents.length) {
                    const residents = data.results[0].residents;
                    residents.map((resident: string) => { dispatch<any>(getResidentsDetails(resident)) })
                }
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
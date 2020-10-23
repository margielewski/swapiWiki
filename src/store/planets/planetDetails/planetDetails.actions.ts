import { Dispatch } from 'redux';
import {
    GET_PLANET_DETAILS_REQUESTED,
    GET_PLANET_DETAILS_DONE,
    GET_PLANET_DETAILS_FAILED,
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

export function getPlanetDetails(postfix = '') {
    return (dispatch: Dispatch) => {
        dispatch(getPlanetDetailsRequested())
        GETPlanets(postfix)
            .then(r => {
                const data = r.data;
                if (data.results && data.results.length === 1) dispatch(getPlanetDetailsDone(data))
                else data.results = [];
                dispatch(getPlanetDetailsDone(data))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getPlanetDetailsFailed(errorMsg))
            })
    }
}
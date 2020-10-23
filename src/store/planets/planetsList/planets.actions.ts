import { Dispatch } from 'redux';
import {
    PlanetsActions,
    IPlanetsResponse,
    GET_PLANETS_REQUESTED,
    GET_PLANETS_DONE,
    GET_PLANETS_FAILED,
} from '../planets.types';

import { GETPlanets } from '../../api/planets'

export function getPlanetsRequested(): PlanetsActions {
    return {
        type: GET_PLANETS_REQUESTED
    };
}

export function getPlanetsDone(data: IPlanetsResponse): PlanetsActions {
    return {
        type: GET_PLANETS_DONE,
        payload: data
    };
}

export function getPlanetsFailed(error: string): PlanetsActions {
    return {
        type: GET_PLANETS_FAILED,
        payload: error
    };
}

export function getPlanets(postfix = '') {
    return (dispatch: Dispatch) => {
        dispatch(getPlanetsRequested())
        GETPlanets(postfix)
            .then(r => {
                const planets = r.data;
                dispatch(getPlanetsDone(planets))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getPlanetsFailed(errorMsg))
            })
    }
}
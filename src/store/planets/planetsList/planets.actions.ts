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
    return async (dispatch: Dispatch) => {

        dispatch(getPlanetsRequested())

        try {
            const response = await GETPlanets(postfix)
            const { data } = response;
            return dispatch(getPlanetsDone(data))
        } catch (error) {
            const { message } = error;
            return dispatch(getPlanetsFailed(message))
        }
    }
}
import * as types from './planets.types';
import { GETPlanets } from '../api/planets'

export function getPlanetsRequested() {
    return {
        type: types.GET_PLANETS_REQUESTED
    };
}

export function getPlanetsDone(data: any) {
    return {
        type: types.GET_PLANETS_DONE,
        payload: data
    };
}

export function getPlanetsFailed(error: any) {
    return {
        type: types.GET_PLANETS_FAILED,
        payload: error
    };
}

export function getPlanets(postfix = '') {
    return (dispatch: any) => {
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
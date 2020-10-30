import { Dispatch } from 'redux';
import {
    StarshipsActions,
    IStarshipsResponse,
    GET_STARSHIPS_REQUESTED,
    GET_STARSHIPS_DONE,
    GET_STARSHIPS_FAILED,
} from '../starships.types';

import { GETStarships } from '../../api/starships'

export function getStarshipsRequested(): StarshipsActions {
    return {
        type: GET_STARSHIPS_REQUESTED
    };
}

export function getStarshipsDone(data: IStarshipsResponse): StarshipsActions {
    return {
        type: GET_STARSHIPS_DONE,
        payload: data
    };
}

export function getStarshipsFailed(error: string): StarshipsActions {
    return {
        type: GET_STARSHIPS_FAILED,
        payload: error
    };
}

export function getStarships(postfix = '') {
    return async (dispatch: Dispatch) => {
        dispatch(getStarshipsRequested())
        GETStarships(postfix)
        try {
            const response = await GETStarships(postfix)
            const { data } = response;

            return dispatch(getStarshipsDone(data))
        } catch (error) {
            const { message } = error;
            return dispatch(getStarshipsFailed(message))
        }
    }
}
import { Dispatch } from 'redux';
import {
    CharactersActions,
    ICharactersResponse,
    GET_CHARACTERS_REQUESTED,
    GET_CHARACTERS_DONE,
    GET_CHARACTERS_FAILED,
} from '../characters.types';

import { GETCharacters } from '../../api/characters'

export function getCharactersRequested(): CharactersActions {
    return {
        type: GET_CHARACTERS_REQUESTED
    };
}

export function getCharactersDone(data: ICharactersResponse): CharactersActions {
    return {
        type: GET_CHARACTERS_DONE,
        payload: data
    };
}

export function getCharactersFailed(error: string): CharactersActions {
    return {
        type: GET_CHARACTERS_FAILED,
        payload: error
    };
}

export function getCharacters(postfix = '') {
    return async (dispatch: Dispatch) => {
        dispatch(getCharactersRequested())

        try {
            const response = await GETCharacters(postfix)
            const { data } = response;

            return dispatch(getCharactersDone(data))
        } catch (error) {
            const { message } = error;

            return dispatch(getCharactersFailed(message))
        }

    }
}
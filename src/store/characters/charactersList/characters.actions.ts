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
    return (dispatch: Dispatch) => {
        dispatch(getCharactersRequested())
        GETCharacters(postfix)
            .then(r => {
                const characters = r.data;
                dispatch(getCharactersDone(characters))
            }).catch(err => {
                const errorMsg = err.message;
                dispatch(getCharactersFailed(errorMsg))
            })
    }
}
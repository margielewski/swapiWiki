import axios from 'axios';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootStore } from '../store';

import { StarshipDetailsActions } from './../starships/starships.types';
import { PlanetDetailsActions } from './../planets/planets.types';
import { CharacterDetailsActions } from './../characters/characters.types';

type ActionSuccessType<T> = (data: T) => CharacterDetailsActions | PlanetDetailsActions | StarshipDetailsActions

type ActionErrorType = (message: string) => CharacterDetailsActions | PlanetDetailsActions | StarshipDetailsActions

export function getDetails<T>(url: string, successAction: ActionSuccessType<T>, errorAction: ActionErrorType) {
    return async (dispatch: ThunkDispatch<RootStore, void, Action>) => {
        try {
            const response = await axios.get<T>(url)
            const { data } = response;

            return dispatch(successAction(data))
        } catch (error) {
            const { message } = error;
            return dispatch(errorAction(message))
        }
    }
}
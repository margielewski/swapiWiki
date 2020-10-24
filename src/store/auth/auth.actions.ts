import { AuthActions, LOG_IN, LOG_OUT } from './auth.types';

export function login(token: string): AuthActions {
    return {
        type: LOG_IN,
        payload: token
    };
}

export function logout(): AuthActions {
    return {
        type: LOG_OUT
    };
}



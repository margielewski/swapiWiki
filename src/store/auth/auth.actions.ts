import { AuthActions, LOG_IN, LOG_OUT, LOG_IN_ERROR, LOG_IN_SUCCESS, ICredentials } from './auth.types';

export function login(credentials: ICredentials): AuthActions {
    return {
        type: LOG_IN,
        payload: credentials
    };
}

export function logout(): AuthActions {
    return {
        type: LOG_OUT,
    };
}

export function loginSuccess(token: string): AuthActions {
    return {
        type: LOG_IN_SUCCESS,
        payload: token
    };
}

export function loginError(error: string): AuthActions {
    return {
        type: LOG_IN_ERROR,
        payload: error
    };
}



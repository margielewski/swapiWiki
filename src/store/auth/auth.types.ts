export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';


export interface ICredentials {
    email: string
    password: string
}
export interface IAuthState {
    loggedIn: boolean
    token: string
    error: string
}
interface ILogin {
    type: typeof LOG_IN
    payload?: ICredentials;
}

interface ILogout {
    type: typeof LOG_OUT
}

interface ILoginSuccess {
    type: typeof LOG_IN_SUCCESS
    payload: string;
}

interface ILoginError {
    type: typeof LOG_IN_ERROR
    payload: string;
}

export type AuthActions = ILogin | ILogout | ILoginError | ILoginSuccess
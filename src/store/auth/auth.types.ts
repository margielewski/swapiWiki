export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';



interface ILogin {
    type: typeof LOG_IN
    payload?: any;
}

interface ILogout {
    type: typeof LOG_OUT
    payload?: any;
}

export type AuthActions = ILogin | ILogout
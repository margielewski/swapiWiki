import { AuthActions, IAuthState } from "./auth.types";

let token = localStorage.getItem('token');

const defaultState: IAuthState = token ? { loggedIn: true, token, error: '' } : { loggedIn: false, token: '', error: '' };

export default (state = defaultState, action: AuthActions): IAuthState => {
    switch (action.type) {
        case "LOG_IN":
            return {
                loggedIn: false,
                token: '',
                error: ''
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                loggedIn: false,
                token: '',
                error: ''
            }
        case "LOG_IN_SUCCESS":
            localStorage.setItem("token", action.payload)
            return {
                loggedIn: true,
                token: action.payload,
                error: ''
            }
        case "LOG_IN_ERROR":
            return {
                loggedIn: false,
                token: '',
                error: action.payload
            }

        default: return state
    }
}
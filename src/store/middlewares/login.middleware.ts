import { Middleware } from "redux"
import { loginError, loginSuccess } from "../auth/auth.actions"

export const loginMiddleware: Middleware = store => next => action => {
    if (action.type !== "LOG_IN") {
        return next(action)
    }
    console.log(action)
    if (action.payload.email === 'test@test.pl' && action.payload.password === 'test123') {
        store.dispatch(loginSuccess('MYSUPERTOKEN'))

    } else
        store.dispatch(loginError('Invalid Credentials'))
}

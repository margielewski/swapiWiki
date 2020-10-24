let token = localStorage.getItem('token');

const defaultState = token ? { loggedIn: true, token } : {};

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case "LOG_IN":
            localStorage.setItem("token", action.payload)
            return {
                loggedIn: true,
                token: action.payload
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                loggedIn: false,
                token: {}
            }
        default: return state
    }
}
import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, auth, ...children }: any) {

    if (auth.loggedIn === true) {
        return <Route {...children} render={props => <Component {...props} />} />;
    }
    return <Redirect to="/login" />;
}

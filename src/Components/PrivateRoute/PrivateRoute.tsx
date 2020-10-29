import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, auth, ...rest }: any) {
    console.log(rest);
    if (auth.loggedIn === true) {
        return <Route {...rest} >
            {children}
        </Route>;
    }
    return <Redirect to="/login" />;
}

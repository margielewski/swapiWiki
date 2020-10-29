import React, { ReactNode } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { IAuthState } from '../../store/auth/auth.types';

interface IPrivateRoute extends RouteProps {
    children: ReactNode
    auth: IAuthState

}

export default function PrivateRoute({ children, auth, ...rest }: IPrivateRoute) {
    if (auth.loggedIn === true) {
        return <Route {...rest} >
            {children}
        </Route>;
    }
    return <Redirect to="/login" />;
}

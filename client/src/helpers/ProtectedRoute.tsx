import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { checkAuth } from './checkAuth';

export const ProtectedRoute = ({component: Node, ...rest}) => (
    <Route
        {...rest}
        render={props => checkAuth() ? <Node {...props} /> : <Redirect to={{pathname: '/login'}} />}
    />
);

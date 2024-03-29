import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hook/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { isAdmin, isLoading } = useAuth()

    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

function PrivateRoute({ component: Component, ...rest }) {

  const isAuthenticated = useAuth().state.isLogged

    return (
        <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
            <Component {...props} />
            ) : (
            <Redirect to="/login" />
            )
        }
        />
    );
}

export default PrivateRoute;
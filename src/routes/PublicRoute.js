
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import * as Actions from "../components/login/store/actions/";
import * as ActionsC from "../components/userapp/login/store/actions";
import jwt from "jsonwebtoken";
import store from "../store/index";
// store

function PublicRoute({ children, ...rest }) {

  if (
    localStorage.jwtToken &&
    jwt.decode(localStorage.jwtToken).role === "admin"
  ) {
    store.dispatch(Actions.setCurrentUser(jwt.decode(localStorage.jwtToken)));
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.jwtToken ? (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location },
              }}
            />
          ) : (
            // <Redirect
            //   to={{
            //     pathname: "/",
            //     state: { from: location }
            //   }}
            // />
            children
          )
        }
      />
    );
  }

  if (
    localStorage.jwtToken &&
    jwt.decode(localStorage.jwtToken).role === "manager"
  ) {
    // setAuthorizationToken(localStorage.jwtToken);

    // alert("in public route");
    store.dispatch(ActionsC.setCurrentUser(jwt.decode(localStorage.jwtToken)));
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.jwtToken ? (
            <Redirect
              to={{
                pathname: "/managerdashboard",
                state: { from: location },
              }}
            />
          ) : (
            // <Redirect
            //   to={{
            //     pathname: "/",
            //     state: { from: location }
            //   }}
            // />
            children
          )
        }
      />
    );
  }
  if (
    localStorage.jwtToken &&
    jwt.decode(localStorage.jwtToken).role === "mentor"
  ) {
    // setAuthorizationToken(localStorage.jwtToken);

    // alert("in public route");
    store.dispatch(ActionsC.setCurrentUser(jwt.decode(localStorage.jwtToken)));
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.jwtToken ? (
            <Redirect
              to={{
                pathname: "/mentordashboard",
                state: { from: location },
              }}
            />
          ) : (
            // <Redirect
            //   to={{
            //     pathname: "/",
            //     state: { from: location }
            //   }}
            // />
            children
          )
        }
      />
    );
  }

  if (
    localStorage.jwtToken &&
    (jwt.decode(localStorage.jwtToken).role === "work_supplier" || jwt.decode(localStorage.jwtToken).role === "school_supplier")
  ) {
    console.log("ok")
    store.dispatch(ActionsC.setCurrentUser(jwt.decode(localStorage.jwtToken)));
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.jwtToken ? (
            <Redirect
              to={{
                pathname: "/supplierdashboard",
                state: { from: location },
              }}
            />
          ) : (
            // <Redirect
            //   to={{
            //     pathname: "/",
            //     state: { from: location }
            //   }}
            // />
            children
          )
        }
      />
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.jwtToken ? (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        ) : (
          // <Redirect
          //   to={{
          //     pathname: "/",
          //     state: { from: location }
          //   }}
          // />
          children
        )
      }
    />
  );
}

export default PublicRoute;
// export default withReducer("AuthReducerPublic", reducer)(PublicRoute);

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Header from "../components/home/sub_components/Header";
import Footer from "../components/home/sub_components/Footer";
import jwt from "jsonwebtoken";
function PrivateRouteForAdminOnly({ children, ...rest }) {
  return (
    <div>
      <Header />
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.jwtToken && (jwt.decode(localStorage.jwtToken).role === "admin") ? (
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
      <Footer />
    </div>
  );
}


export default PrivateRouteForAdminOnly;
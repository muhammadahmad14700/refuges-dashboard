import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import jwt from "jsonwebtoken";
import Header from "../components/userapp/supplier/home/sub_components/Header";
import Footer from "../components/userapp/supplier/home/sub_components/Footer";
function PrivateRouteForManagerOnly({ children, ...rest }) {
  return (
    <div>
      <Header />
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.jwtToken && (jwt.decode(localStorage.jwtToken).role === "work_supplier" || jwt.decode(localStorage.jwtToken).role === "school_supplier") ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/userlogin",
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


export default PrivateRouteForManagerOnly;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import jwt from "jsonwebtoken";
import HeaderManager from "../components/userapp/manager/home/sub_components/Header";
import FooterManager from "../components/userapp/manager/home/sub_components/Footer";
import HeaderMentor from "../components/userapp/mentor/home/sub_components/Header";
import FooterMentor from "../components/userapp/mentor/home/sub_components/Footer";
import HeaderSupplier from "../components/userapp/supplier/home/sub_components/Header";
import FooterSupplier from "../components/userapp/supplier/home/sub_components/Footer";
function PrivateRouteForMultiple({ children, ...rest }) {
  return (
    <div>
      {localStorage.jwtToken && jwt.decode(localStorage.jwtToken).role === "manager" && (
        <HeaderManager />
      )}
      {localStorage.jwtToken && jwt.decode(localStorage.jwtToken).role === "mentor" && (
        <HeaderMentor />
      )}
      {(localStorage.jwtToken && jwt.decode(localStorage.jwtToken).role === "work_supplier" || localStorage.jwtToken && jwt.decode(localStorage.jwtToken).role === "school_supplier") && (
        <HeaderSupplier />
      )}
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.jwtToken && (jwt.decode(localStorage.jwtToken).role === "manager" || jwt.decode(localStorage.jwtToken).role === "mentor" || jwt.decode(localStorage.jwtToken).role === "work_supplier" || jwt.decode(localStorage.jwtToken).role === "school_supplier") ? (
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
      {localStorage.jwtToken && jwt.decode(localStorage.jwtToken).role === "manager" && (
        <FooterManager />
      )}
      {localStorage.jwtToken && jwt.decode(localStorage.jwtToken).role === "mentor" && (
        <FooterMentor />
      )}
      {(localStorage.jwtToken && jwt.decode(localStorage.jwtToken).role === "work_supplier" || localStorage.jwtToken && jwt.decode(localStorage.jwtToken).role === "school_supplier") && (
        <FooterSupplier />
      )}
    </div>
  );
}


export default PrivateRouteForMultiple;
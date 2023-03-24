import jwt from "jsonwebtoken";
import { request } from "graphql-request";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { GraphQLClient } from "graphql-request";
import client from "../../../../utils/client";

// ACTION NAMES
// ****************************** / /

//Verify Otp
export const VERIFY_OTP = "VERIFY_OTP";
export const VERIFY_OTP_IS_lOADING = "VERIFY_OTP_IS_lOADING";
export const VERIFY_OTP_FAILED = "VERIFY_OTP_FAILED";
export const RESET_VERIFY_OTP = "RESET_VERIFY_OTP";

//Resend Otp
export const RESEND_OTP = "RESEND_OTP";
export const RESEND_OTP_IS_lOADING = "RESEND_OTP_IS_lOADING";
export const RESEND_OTP_FAILED = "RESEND_OTP_FAILED";
export const RESET_RESEND_OTP = "RESET_RESEND_OTP";

//Athuenticate User
export const ATHUENTICATE_USER = "ATHUENTICATE_USER";
export const ATHUENTICATE_USER_IS_lOADING = "ATHUENTICATE_USER_IS_lOADING";
export const ATHUENTICATE_USER_FAILED = "ATHUENTICATE_USER_FAILED";
export const RESET_ATHUENTICATE_USER = "RESET_ATHUENTICATE_USER";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

//GET ALL Users
export const GET_ALL_USERS = "GET_ALL_USERS";
export const ALL_USERS_LOADING = "ALL_USERS_LOADING";
export const ALL_USERS_LOADING_FAILED = "ALL_USERS_LOADING_FAILED";

// HELPER ACTIONS CREATORS
//*************************************** */

//VERIFY OTP  ACTIONS

export const verifyOTPByAdminLoading = (ms) => ({
  type: VERIFY_OTP_IS_lOADING,
  payload: ms,
});

export const verifyOTPByAdminFailed = (ms) => ({
  type: VERIFY_OTP_FAILED,
  payload: ms,
});

export const resetverifyOTPByAdmin = (ms) => ({
  type: RESET_VERIFY_OTP,
  payload: ms,
});

//RESEND OTP  ACTIONS

export const resendOtpLoading = (ms) => ({
  type: RESEND_OTP_IS_lOADING,
  payload: ms,
});

export const resendOtpFailed = (ms) => ({
  type: RESEND_OTP_FAILED,
  payload: ms,
});

export const resetresendOtp = (ms) => ({
  type: RESET_RESEND_OTP,
  payload: ms,
});

//Get ALL LEADER  FAQS
export const allUsersLoading = (ms) => ({
  type: ALL_USERS_LOADING,
  payload: ms,
});

export const allUsersLoadingFailed = (ms) => ({
  type: ALL_USERS_LOADING_FAILED,
  payload: ms,
});

//Athuenticate User  ACTIONS

export const authentiacateUserLoading = (ms) => ({
  type: ATHUENTICATE_USER_IS_lOADING,
  payload: ms,
});

export const authentiacateUserFailed = (ms) => ({
  type: ATHUENTICATE_USER_FAILED,
  payload: ms,
});

export const resetAuthentiacateUser = (ms) => ({
  type: RESET_ATHUENTICATE_USER,
  payload: ms,
});
export function authenticateuser(data) {
  return (dispatch) => {
    dispatch(authentiacateUserLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation{
              requestOTPByAdmin(email: "${data.email}", password: "${data.password}")
              {
                token
              }
            }
          `,
      })
      .then((response) => {
        localStorage.setItem("tmpToken", response.data.requestOTPByAdmin.token);
        dispatch({
          type: ATHUENTICATE_USER,
          payload: response,
        });
      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors.length > 0) {
          dispatch(
            authentiacateUserFailed(
              err.graphQLErrors[0].message
            )
          );
          alert("auth failed");
        } else {
          dispatch(authentiacateUserFailed("something went wrong"));
          alert("error in auth failed");
        }
      });
  };
}

export function verifyOTPByAdmin(otpCode) {
  return (dispatch) => {
    dispatch(verifyOTPByAdminLoading(true));

    client
      .mutate({
        mutation: gql`

        mutation{
          verifyOTPByAdmin(token: "${localStorage.tmpToken}", otpCode: "${otpCode}"){
            token
          }
        }
          `,
      })
      .then((response) => {
        dispatch({
          type: VERIFY_OTP,
          payload: response,
        });
        const token = response.data.verifyOTPByAdmin.token;
        localStorage.setItem("jwtToken", token);
        dispatch(setCurrentUser(jwt.decode(token)));
      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors.length > 0) {
          dispatch(verifyOTPByAdminFailed(err.graphQLErrors[0].message));
        }
        else {
          dispatch(verifyOTPByAdminFailed("Something went wrong"));
        }

        alert("Match failed");
      });
  };
}

export function resendOtp(id) {

  return (dispatch) => {
    dispatch(resendOtpLoading(true));

    client
      .query({
        query: gql`

        {
          resendOTPByAdmin(id: "${id}")
        }
          `,
      })
      .then((response) => {
        dispatch({
          type: RESEND_OTP,
          payload: response,
        });
      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors.length > 0) {
          dispatch(resendOtpFailed(err.graphQLErrors[0].message));
        }
        else {
          dispatch(resendOtpFailed("Something went wrong"));
        }
      });
  };
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user: user,
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.clear();
    dispatch(setCurrentUser({}));
    window.location.reload();
  };
}

/// GET ALL leader faqs MAIN CREATOR
export function getAllUsers() {
  const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
  });

  const clienth = new ApolloClient({
    uri: "http://localhost:4000/"
  });

  const clientt = new GraphQLClient("http://localhost:4000/", {
    headers: {
      Authorization: "ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20=",
    },
  });

  const query = `mutation BookTrips {
    bookTrips(launchIds: [67, 68, 69]) {
      success
      message
      launches {
        id
      }
    }
  }`;
  const querya = `{
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }`;

  return (dispatch) => {
    dispatch(allUsersLoading(true));

    clienth
      .mutate({
        mutation: gql`
          mutation BookTrips {
            bookTrips(launchIds: [67, 68, 69]) {
              success
              message
              launches {
                id
              }
            }
          }
        `,
        context: {
          headers: {
            Authorization: "ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20=",
          },
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: response,
        });
      })
      .catch((err) => {
        dispatch(allUsersLoadingFailed(err));
      });

    client
      .query({
        query: gql`
          {
            rates(currency: "USD") {
              currency
            }
          }
        `,
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: response,
        });
      })
      .catch((err) => {
        dispatch(allUsersLoadingFailed(err));
      });

    request("https://api.graph.cool/simple/v1/movies", querya)
      .then((response) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: response,
        });
      })
      .catch((err) => {
        dispatch(allUsersLoadingFailed(err));
      });

    clientt
      .request(query)
      .then((response) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: response,
        });
      })
      .catch((err) => {
        dispatch(allUsersLoadingFailed(err));
      });
  };
}

export function handle(obj) {
  // alert("in action");
  return {
    type: "SET_DATA",
    payload: obj,
  };
}

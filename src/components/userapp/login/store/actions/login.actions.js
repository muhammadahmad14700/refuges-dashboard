import jwt from "jsonwebtoken";
import { gql } from "apollo-boost";
import client from "../../../../../utils/client"
const url = process.env.REACT_APP_URL;

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


// HELPER ACTIONS CREATORS
//*************************************** */

//VERIFY OTP  ACTIONS

export const verifyOtpLoading = (ms) => ({
  type: VERIFY_OTP_IS_lOADING,
  payload: ms,
});

export const verifyOtpFailed = (ms) => ({
  type: VERIFY_OTP_FAILED,
  payload: ms,
});

export const resetverifyOtp = (ms) => ({
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
          requestOTP(email: "${data.email}", password: "${data.password}"){
            token
          }
        }
          `,
      })
      .then((response) => {
        localStorage.setItem("tmpToken", response.data.requestOTP.token);
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
          dispatch(authentiacateUserFailed("Something went wrong"));
          alert("error in auth failed");
        }
      });
  };
}

export function verifyOtp(otpCode) {
  return (dispatch) => {
    dispatch(verifyOtpLoading(true));

    client
      .mutate({
        mutation: gql`

        mutation{
          verifyOTP(token: "${localStorage.tmpToken}", otpCode: "${otpCode}"){
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
        const token = response.data.verifyOTP.token;
        localStorage.setItem("jwtToken", token);
        dispatch(setCurrentUser(jwt.decode(token)));
      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors.length > 0) {
          dispatch(verifyOtpFailed(err.graphQLErrors[0].message));
        }
        else {
          dispatch(verifyOtpFailed("something went wrong"));
        }

        alert("Match failed");
      });
  };
}


export function resendOtp(id, userType) {
  return (dispatch) => {
    dispatch(resendOtpLoading(true));

    client
      .query({
        query: gql`

        {
          resendOTP(id: "${id}",userType: ${userType})
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
          dispatch(resendOtpFailed("something went wrong"));
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
    window.location.reload("/userlogin");
  };
}



export function handle(obj) {
  alert("in action");
  return {
    type: "SET_DATA",
    payload: obj,
  };
}

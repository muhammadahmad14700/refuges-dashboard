import client from "../../../../utils/client";
import { gql } from "apollo-boost";

// ACTION NAMES
// ****************************** / /

//RESET_ADMIN_PASSWORD
export const RESET_ADMIN_PASSWORD = "RESET_ADMIN_PASSWORD";
export const RESET_ADMIN_PASSWORD_IS_lOADING = "RESET_ADMIN_PASSWORD_IS_lOADING";
export const RESET_ADMIN_PASSWORD_FAILED = "RESET_ADMIN_PASSWORD_FAILED";
export const RESET_RESET_ADMIN_PASSWORD = "RESET_RESET_ADMIN_PASSWORD";

//REQUEST_RESET_ADMIN_PASSWORD
export const REQUEST_RESET_ADMIN_PASSWORD = "REQUEST_RESET_ADMIN_PASSWORD";
export const REQUEST_RESET_ADMIN_PASSWORD_IS_lOADING = "REQUEST_RESET_ADMIN_PASSWORD_IS_lOADING";
export const REQUEST_RESET_ADMIN_PASSWORD_FAILED = "REQUEST_RESET_ADMIN_PASSWORD_FAILED";
export const RESET_REQUEST_RESET_ADMIN_PASSWORD = "RESET_REQUEST_RESET_ADMIN_PASSWORD";

//REQUEST_VERIFY_ADMIN_PASSWORD
export const REQUEST_VERIFY_ADMIN_PASSWORD = "REQUEST_VERIFY_ADMIN_PASSWORD";
export const REQUEST_VERIFY_ADMIN_PASSWORD_IS_lOADING = "REQUEST_VERIFY_ADMIN_PASSWORD_IS_lOADING";
export const REQUEST_VERIFY_ADMIN_PASSWORD_FAILED = "REQUEST_VERIFY_ADMIN_PASSWORD_FAILED";
export const RESET_VERIFY_RESET_ADMIN_PASSWORD = "RESET_REQUEST_VERIFY_ADMIN_PASSWORD";


//Reset Admin Password  ACTIONS

export const resetAdminPasswordLoading = (ms) => ({
  type: RESET_ADMIN_PASSWORD_IS_lOADING,
  payload: ms,
});

export const resetAdminPasswordFailed = (ms) => ({
  type: RESET_ADMIN_PASSWORD_FAILED,
  payload: ms,
});

export const resetResetAdminPassword = (ms) => ({
  type: RESET_RESET_ADMIN_PASSWORD,
  payload: ms,
});


//Request Reset Admin Password  ACTIONS

export const requestResetAdminPasswordLoading = (ms) => ({
  type: REQUEST_RESET_ADMIN_PASSWORD_IS_lOADING,
  payload: ms,
});

export const requestResetAdminPasswordFailed = (ms) => ({
  type: REQUEST_RESET_ADMIN_PASSWORD_FAILED,
  payload: ms,
});

export const resetrequestResetAdminPassword = (ms) => ({
  type: RESET_REQUEST_RESET_ADMIN_PASSWORD,
  payload: ms,
});

//Request Verify Admin Password  ACTIONS

export const requestVerifyAdminPasswordLoading = (ms) => ({
  type: REQUEST_VERIFY_ADMIN_PASSWORD_IS_lOADING,
  payload: ms,
});

export const requestVerifyAdminPasswordFailed = (ms) => ({
  type: REQUEST_VERIFY_ADMIN_PASSWORD_FAILED,
  payload: ms,
});

export const resetVerifyResetAdminPassword = (ms) => ({
  type: RESET_VERIFY_RESET_ADMIN_PASSWORD,
  payload: ms,
});

// MAIN CREATORS
//********************** **************/
export function resetAdminPassword(token, password, confirmPassword) {

  return (dispatch) => {
    dispatch(resetAdminPasswordLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation{
            resetPasswordByAdmin(
              input: {
              resetPasswordToken:"${token}",
              newPassword: "${password}",
              confirmNewPassword: "${confirmPassword}"
            }
              )
          }
            `,
      })
      .then((response) => {

        dispatch({
          type: RESET_ADMIN_PASSWORD,
          payload: response,
        });

      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors.length > 0) {
          if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.code && err.graphQLErrors[0].extensions.code === 400 && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
            if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
              dispatch(
                resetAdminPasswordFailed(
                  err.graphQLErrors[0].extensions.errors[0].msg
                )
              );
            }
          }
          else {
            dispatch(
              resetAdminPasswordFailed(err.graphQLErrors[0].message));

          }


        }
        else {
          dispatch(
            resetAdminPasswordFailed("Something went wrong"));

        }
      });
  };
}

export function requestResetAdminPassword(email) {

  return (dispatch) => {
    dispatch(requestResetAdminPasswordLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation{
            requestResetPasswordByAdmin(
              email:"${email}"
              )
          }
            `,
      })
      .then((response) => {

        dispatch({
          type: REQUEST_RESET_ADMIN_PASSWORD,
          payload: response,
        });
      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors.length > 0) {
          dispatch(
            requestResetAdminPasswordFailed(err.graphQLErrors[0].message));
        }
        else {
          dispatch(
            requestResetAdminPasswordFailed(
              "Something went wrong"
            )
          );

        }
      });
  };
}

export function requestVerifyAdminPassword(token) {

  return (dispatch) => {
    dispatch(requestVerifyAdminPasswordLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation{
          verifyResetPasswordTokenByAdmin(resetPasswordToken: "${token}")
          {
            email
          }
        }
          `,
      })
      .then((response) => {
        dispatch({
          type: REQUEST_VERIFY_ADMIN_PASSWORD,
          payload: response,
        });

      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors.length > 0) {
          dispatch(
            requestVerifyAdminPasswordFailed(
              err.graphQLErrors[0].message
            )
          );

        }
        else {
          dispatch(
            requestVerifyAdminPasswordFailed(
              "Something went wrong"
            )
          );

        }
      });
  };
}


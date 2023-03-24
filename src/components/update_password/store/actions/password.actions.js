import client from "../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../login/store/actions/login.actions";

// ACTION NAMES
// ****************************** / /
//UPDATE_ADMIN_PASSWORD
export const UPDATE_ADMIN_PASSWORD = "UPDATE_ADMIN_PASSWORD";
export const UPDATE_ADMIN_PASSWORD_IS_lOADING = "UPDATE_ADMIN_PASSWORD_IS_lOADING";
export const UPDATE_ADMIN_PASSWORD_FAILED = "UPDATE_ADMIN_PASSWORD_FAILED";
export const RESET_UPDATE_ADMIN_PASSWORD = "RESET_UPDATE_ADMIN_PASSWORD";

//Update Admin Password  ACTIONS

export const updateAdminPasswordLoading = (ms) => ({
  type: UPDATE_ADMIN_PASSWORD_IS_lOADING,
  payload: ms,
});

export const updateAdminPasswordFailed = (ms) => ({
  type: UPDATE_ADMIN_PASSWORD_FAILED,
  payload: ms,
});

export const resetupdateAdminPassword = (ms) => ({
  type: RESET_UPDATE_ADMIN_PASSWORD,
  payload: ms,
});

// MAIN CREATORS
//********************** **************/

export function updateAdminPassword(data) {
  return (dispatch) => {
    dispatch(updateAdminPasswordLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation{
            updateAdminPassword(input:{
              currentPassword:"${data.old_password}",
              newPassword:"${data.password}",
              confirmNewPassword:"${data.confirm_password}"
             
            })
          }
            `,
      })
      .then((response) => {

        dispatch({
          type: UPDATE_ADMIN_PASSWORD,
          payload: response,
        });
      })
      .catch((err) => {
        if (err.networkError && err.networkError.result && err.networkError.result.errors && err.networkError.result.errors.length && err.networkError.result.errors[0] && err.networkError.result.errors[0].extensions && err.networkError.result.errors[0].extensions.code && err.networkError.result.errors[0].extensions.code === 401) {
          dispatch(logout());
        }
        else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.code && err.graphQLErrors[0].extensions.code === 400 && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
              if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
                dispatch(
                  updateAdminPasswordFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                updateAdminPasswordFailed(
                  err.graphQLErrors[0].message
                )
              );
            }
          }
          else {
            dispatch(
              updateAdminPasswordFailed(
                "Something went wrong"
              )
            );

          }
        }
      });
  };
}


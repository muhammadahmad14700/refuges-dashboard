import client from "../../../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../../login/store/actions/login.actions";
import uploadClient from "../../../../../../utils/uploadClient";

// ACTION NAMES
// ****************************** / /

// GET ADMIN_PROFILE
export const GET_ADMIN_PROFILE = "GET_ADMIN_PROFILE";
export const ADMIN_PROFILE_IS_LOADING = "ADMIN_PROFILE_IS_LOADING";
export const ADMIN_PROFILE_FAILED = "ADMIN_PROFILE_FAILED";

//UPDATE REFUGEE
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_PROFILE_IS_lOADING = "UPDATE_PROFILE_IS_lOADING";
export const UPDATE_PROFILE_FAILED = "UPDATE_PROFILE_FAILED";
export const RESET_UPDATE_PROFILE = "RESET_UPDATE_PROFILE";

//Update Refugee  ACTIONS

export const updateProfileLoading = (ms) => ({
  type: UPDATE_PROFILE_IS_lOADING,
  payload: ms,
});

export const updateProfileFailed = (ms) => ({
  type: UPDATE_PROFILE_FAILED,
  payload: ms,
});

export const resetupdateProfile = (ms) => ({
  type: RESET_UPDATE_PROFILE,
  payload: ms,
});
// HELPER ACTIONS CREATORS
//*************************************** */

// GET ALL Adminprofile HELPERS
export const AdminprofileIsLoading = (ms) => ({
  type: ADMIN_PROFILE_IS_LOADING,
  payload: ms,
});

export const AdminprofileFailed = (ms) => ({
  type: ADMIN_PROFILE_FAILED,
  payload: ms,
});


// MAIN CREATORS
//********************** **************/

export function handle(obj) {
  // alert("in action");
  return {
    type: "SET_DATA",
    payload: obj
  };
}

// GET AdminProfile  MAIN ACTION

export function getAdminProfile() {
  return (dispatch) => {
    dispatch(AdminprofileIsLoading(true));

    client
      .query({
        query: gql`
          {
            getMentorProfile {
              _id
              name
              email
              phoneNumber
              profileImageUrl
              municipality {
                _id
                name
                province
                logoUrl
                manager {
                  _id
                  name
                  email
                  phoneNumber
                }
              }
            }
          }
        `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_ADMIN_PROFILE,
          payload: response.data,
        });
      })

      .catch((err) => {
        if (err.networkError && err.networkError.result && err.networkError.result.errors && err.networkError.result.errors.length && err.networkError.result.errors[0] && err.networkError.result.errors[0].extensions && err.networkError.result.errors[0].extensions.code && err.networkError.result.errors[0].extensions.code === 401) {
          dispatch(logout());
        }
        else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            dispatch(
              AdminprofileFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              AdminprofileFailed(
                "Something went wrong"
              )
            );
          }
        }
      });
  };
}

export function updateProfile(data) {
  return (dispatch) => {
    dispatch(updateProfileLoading(true));

    uploadClient
      .mutate({
        mutation: gql`
          mutation(
            $name: String!
            $profileImage: Upload
          ) {
            updateProfile(
              input: {
                name: $name
                profileImage: $profileImage
              }
            )
          }
        `,
        variables: {
          name: data.first_name,
          profileImage: data.profile_image,
        },
      })
      .then((response) => {
        dispatch({
          type: UPDATE_PROFILE,
          payload: response,
        });
      })
      .catch((err) => {
        if (
          err.networkError &&
          err.networkError.result &&
          err.networkError.result.errors &&
          err.networkError.result.errors.length &&
          err.networkError.result.errors[0] &&
          err.networkError.result.errors[0].extensions &&
          err.networkError.result.errors[0].extensions.code &&
          err.networkError.result.errors[0].extensions.code ===
          401
        ) {
          dispatch(logout());
        } else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {
            if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.code && err.graphQLErrors[0].extensions.code === 400 && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
              if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
                dispatch(
                  updateProfileFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                updateProfileFailed(err.graphQLErrors[0].message)
              );
            }
          } else {
            updateProfileFailed("Something went wrong");
          }
        }
      });
  };
}

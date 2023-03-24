import client from "../../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../login/store/actions/login.actions";

// ACTION NAMES
// ****************************** / /

// GET ADMIN_PROFILE
export const GET_ADMIN_PROFILE = "GET_ADMIN_PROFILE";
export const ADMIN_PROFILE_IS_LOADING = "ADMIN_PROFILE_IS_LOADING";
export const ADMIN_PROFILE_FAILED = "ADMIN_PROFILE_FAILED";

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
            getProfile {
              _id
              name
              email
              phoneNumber
              profileImageUrl
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

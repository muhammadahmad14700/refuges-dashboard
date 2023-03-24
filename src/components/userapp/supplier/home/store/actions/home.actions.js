import client from "../../../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../../login/store/actions/login.actions";
// ACTION NAMES
// ****************************** / /

// GET ALL SEARCHED_REFUGEES
export const GET_ALL_SEARCHED_REFUGEES = "GET_ALL_SEARCHED_REFUGEES";
export const ALL_SEARCHED_REFUGEES_IS_LOADING =
  "ALL_SEARCHED_REFUGEES_IS_LOADING";
export const ALL_SEARCHED_REFUGEES_FAILED =
  "ALL_SEARCHED_REFUGEES_FAILED";
export const RESET_SEARCHED_REFUGEES = "RESET_SEARCHED_REFUGEES";


// HELPER ACTIONS CREATORS
//*************************************** */

// GET ALL SearchedRefugees HELPERS
export const allSearchedRefugeesIsLoading = (ms) => ({
  type: ALL_SEARCHED_REFUGEES_IS_LOADING,
  payload: ms,
});

export const allSearchedRefugeesFailed = (ms) => ({
  type: ALL_SEARCHED_REFUGEES_FAILED,
  payload: ms,
});

export const resetSearchedRefugees = (ms) => ({
  type: RESET_SEARCHED_REFUGEES,
  payload: ms,
});

// MAIN CREATORS
//********************** **************/


export function getAllSearchedRefugees(page, limit, search = '', filter = 'all', mentorId = '', supplierId = '', status = 'all', municipalityId = '') {
  return (dispatch) => {
    dispatch(allSearchedRefugeesIsLoading(true));

    client
      .query({
        query: gql`
          {
            searchAllRefugees(page: ${parseInt(page)}, limit: ${parseInt(limit)}, search: "${search}", filter:{mentorId: "${mentorId}", supplierId: "${supplierId}", assignType: "${filter}", status: "${status}", municipalityId: "${municipalityId}"}) {
                  totalDocs
                  limit
                  page
                  totalPages
                  hasNextPage
                  hasPrevPage
                  nextPage
                  prevPage
                  pagingCounter
                  docs{
                    id
                    bsn
    name
      email
      phoneNumber
    intakeDate
    isAssigned
    status
    isDeleted
    profileImageUrl
                      createdAt
                      mentor{
                        _id
                       name
                        email
                        phoneNumber
                      }
                    municipality{
                      _id
                     name
                      province
                      contactPerson {
                        name
                      }
                      manager{
                        _id
                     name
                      email
                      phoneNumber
                      }
                    }
                    suppliers{
                      school{
                        _id
                     name
                      email
                      phoneNumber
                      }
                      work{
                        _id
                     name
                      email
                      phoneNumber
                      }
                    }
                  }
              }
          }
        `,
        fetchPolicy: 'network-only'
      }

      )
      .then((response) => {
        dispatch({
          type: GET_ALL_SEARCHED_REFUGEES,
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
              allSearchedRefugeesFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              allSearchedRefugeesFailed(
                "Something went wrong"
              )
            );
          }
        }
      });
  };
}

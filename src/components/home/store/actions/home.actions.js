import client from "../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../login/store/actions/login.actions";
// ACTION NAMES
// ****************************** / /

//ADD NEW MUNICIPALITY
export const ADD_NEW_MUNICIPALITY = "ADD_NEW_MUNICIPALITY";
export const ADD_NEW_MUNICIPALITY_IS_lOADING =
  "ADD_NEW_MUNICIPALITY_IS_lOADING";
export const ADD_NEW_MUNICIPALITY_FAILED = "ADD_NEW_MUNICIPALITY_FAILED";
export const RESET_ADD_NEW_MUNICIPALITY = "RESET_ADD_NEW_MUNICIPALITY";

//Update MUNICIPALITY Contact Info
export const UPDATE_MUNICIPALITY_CONTACT_INFO = "UPDATE_MUNICIPALITY_CONTACT_INFO";
export const UPDATE_MUNICIPALITY_CONTACT_INFO_IS_lOADING =
  "UPDATE_MUNICIPALITY_CONTACT_INFO_IS_lOADING";
export const UPDATE_MUNICIPALITY_CONTACT_INFO_FAILED = "UPDATE_MUNICIPALITY_CONTACT_INFO_FAILED";
export const RESET_UPDATE_MUNICIPALITY_CONTACT_INFO = "RESET_UPDATE_MUNICIPALITY_CONTACT_INFO";

// GET ALL ASSIGNED_MUNICIPLITIES
export const GET_ALL_ASSIGNED_MUNICIPLITIES = "GET_ALL_ASSIGNED_MUNICIPLITIES";
export const ALL_ASSIGNED_MUNICIPLITIES_IS_LOADING =
  "ALL_ASSIGNED_MUNICIPLITIES_IS_LOADING";
export const ALL_ASSIGNED_MUNICIPLITIES_FAILED =
  "ALL_ASSIGNED_MUNICIPLITIES_FAILED";
export const RESET_ASSIGNED_MUNICIPALITY = "RESET_ASSIGNED_MUNICIPALITY";



// GET ALL MUNICIPLITIES
export const GET_ALL_MUNICIPLITIES = "GET_ALL_MUNICIPLITIES";
export const ALL_MUNICIPLITIES_IS_LOADING =
  "ALL_MUNICIPLITIES_IS_LOADING";
export const ALL_MUNICIPLITIES_FAILED =
  "ALL_MUNICIPLITIES_FAILED";

// GET ALL MUNICIPLITIES WITHOUT RULES
export const GET_ALL_MUNICIPLITIES_WITHOUT_RULES = "GET_ALL_MUNICIPLITIES_WITHOUT_RULES";
export const ALL_MUNICIPLITIES_WITHOUT_RULES_IS_LOADING =
  "ALL_MUNICIPLITIES_WITHOUT_RULES_IS_LOADING";
export const ALL_MUNICIPLITIES_WITHOUT_RULES_FAILED =
  "ALL_MUNICIPLITIES_WITHOUT_RULES_FAILED";

// HELPER ACTIONS CREATORS
//*************************************** */

//ADD NEW Municipality  ACTIONS

export const addNewMunicipalityLoading = (ms) => ({
  type: ADD_NEW_MUNICIPALITY_IS_lOADING,
  payload: ms,
});

export const addNewMunicipalityFailed = (ms) => ({
  type: ADD_NEW_MUNICIPALITY_FAILED,
  payload: ms,
});

export const resetAddNewMunicipality = (ms) => ({
  type: RESET_ADD_NEW_MUNICIPALITY,
  payload: ms,
});

//updateMunicipalityContactInfo  ACTIONS

export const updateMunicipalityContactInfoLoading = (ms) => ({
  type: UPDATE_MUNICIPALITY_CONTACT_INFO_IS_lOADING,
  payload: ms,
});

export const updateMunicipalityContactInfoFailed = (ms) => ({
  type: UPDATE_MUNICIPALITY_CONTACT_INFO_FAILED,
  payload: ms,
});

export const resetUpdateMunicipalityContactInfo = (ms) => ({
  type: RESET_UPDATE_MUNICIPALITY_CONTACT_INFO,
  payload: ms,
});

// GET ALL AssignedMunicipalities HELPERS
export const allAssignedMunicipalitiesIsLoading = (ms) => ({
  type: ALL_ASSIGNED_MUNICIPLITIES_IS_LOADING,
  payload: ms,
});

export const allAssignedMunicipalitiesFailed = (ms) => ({
  type: ALL_ASSIGNED_MUNICIPLITIES_FAILED,
  payload: ms,
});

export const resetAssignedMunicipality = (ms) => ({
  type: RESET_ASSIGNED_MUNICIPALITY,
  payload: ms,
});

// GET ALL Municipalities HELPERS
export const allMunicipalitiesIsLoading = (ms) => ({
  type: ALL_MUNICIPLITIES_IS_LOADING,
  payload: ms,
});

export const allMunicipalitiesFailed = (ms) => ({
  type: ALL_MUNICIPLITIES_FAILED,
  payload: ms,
});

// GET ALL Municipalities Without Rules HELPERS
export const allMunicipalitiesWithoutRulesIsLoading = (ms) => ({
  type: ALL_MUNICIPLITIES_WITHOUT_RULES_IS_LOADING,
  payload: ms,
});

export const allMunicipalitiesWithoutRulesFailed = (ms) => ({
  type: ALL_MUNICIPLITIES_WITHOUT_RULES_FAILED,
  payload: ms,
});

// MAIN CREATORS
//********************** **************/

export function addNewMunicipality(data) {

  return (dispatch) => {
    dispatch(addNewMunicipalityLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation{
            addMunicipality(input:{
              municipality:{
                name:"${data.municipality_name}",
                province:"${data.province}"
              },
              manager:{
                firstName:"${data.manager_first_name}",
                lastName:"${data.manager_last_name}",
                email:"${data.manager_email}",
                phoneNumber:"${data.manager_phone_no}"
              }
            })
          }
          `,
      })
      .then((response) => {

        dispatch({
          type: ADD_NEW_MUNICIPALITY,
          payload: response,
        });
      })
      .catch((err) => {
        if (err.networkError && err.networkError.result && err.networkError.result.errors && err.networkError.result.errors.length && err.networkError.result.errors[0] && err.networkError.result.errors[0].extensions && err.networkError.result.errors[0].extensions.code && err.networkError.result.errors[0].extensions.code === 401) {
          dispatch(logout());
        }
        else {
          if (err.graphQLErrors && err.graphQLErrors.length > 0) {

            dispatch(
              addNewMunicipalityFailed(JSON.stringify(err.graphQLErrors[0].message))
            );
          }
          else {

            dispatch(
              addNewMunicipalityFailed(JSON.stringify(err))
            );
          }
        }

      });
  };
}

export function updateMunicipalityContactInfo(data, mid) {

  return (dispatch) => {
    dispatch(updateMunicipalityContactInfoLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation{
          updateManager(input:{
                managerId: "${mid}"
                name:"${data.name}",
                email:"${data.email}",
                phoneNumber:"${data.phone_no}"
            })
          }
          `,
      })
      .then((response) => {

        dispatch({
          type: UPDATE_MUNICIPALITY_CONTACT_INFO,
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
                  updateMunicipalityContactInfoFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                updateMunicipalityContactInfoFailed(err.graphQLErrors[0].message));
            }
          }
          else {
            dispatch(
              updateMunicipalityContactInfoFailed("Something went wrong")
            );
          }
        }

      });
  };
}

// GET AllAssignedMunicipalities  MAIN ACTION

export function getAllAssignedMunicipalities(page, limit, filterByName = '', managerId = '') {
  return (dispatch) => {
    dispatch(allAssignedMunicipalitiesIsLoading(true));

    client
      .query({
        query: gql`
          {
            listAllMunicipalities(page: ${parseInt(page)}, limit: ${parseInt(limit)}, filter:{managerId: "${managerId}", name: "${filterByName}"}) {
              totalDocs
              limit
              page
              totalPages
              hasNextPage
              hasPrevPage
              nextPage
              prevPage
              pagingCounter
              docs {
                id
                name
                province
                poiLink
                logoUrl
                createdAt
                totalRefugees
                contactPerson {
                  name
                }
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
        fetchPolicy: 'network-only'
      }

      )
      .then((response) => {
        dispatch({
          type: GET_ALL_ASSIGNED_MUNICIPLITIES,
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
              allAssignedMunicipalitiesFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {

            dispatch(
              allAssignedMunicipalitiesFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}


// GET AllMunicipalities  MAIN ACTION

export function getAllMunicipalities(page, limit, filterByName = '', managerId = '') {
  return (dispatch) => {
    dispatch(allMunicipalitiesIsLoading(true));

    client
      .query({
        query: gql`
          {
            listAllMunicipalities(page: ${parseInt(page)}, limit: ${parseInt(limit)}, filter:{managerId: "${managerId}", name: "${filterByName}"}) {
              totalDocs
              limit
              page
              totalPages
              hasNextPage
              hasPrevPage
              nextPage
              prevPage
              pagingCounter
              docs {
                id
                name
                province
                manager {
                  name
                  email
                  phoneNumber
                }
              }
            }
          }
        `,
        fetchPolicy: 'network-only'
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_MUNICIPLITIES,
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
              allMunicipalitiesFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {

            dispatch(
              allMunicipalitiesFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

// GET AllMunicipalities Without Rules  MAIN ACTION

export function getAllMunicipalitiesWithoutRules() {
  return (dispatch) => {
    dispatch(allMunicipalitiesWithoutRulesIsLoading(true));

    client
      .query({
        query: gql`
          {
            listMunicipalitiesWithoutRules {
              municipalities {
                id
                name
                province
              }
            }
          }
        `,
        fetchPolicy: 'network-only'
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_MUNICIPLITIES_WITHOUT_RULES,
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
              allMunicipalitiesWithoutRulesFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {

            dispatch(
              allMunicipalitiesWithoutRulesFailed(
                "error in list or not found list"
              )
            );
          }
        }

      });
  };
}

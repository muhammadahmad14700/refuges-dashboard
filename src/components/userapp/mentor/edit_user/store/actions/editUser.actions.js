import client from "../../../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../../../login/store/actions/login.actions";
// ACTION NAMES
// GET ALL ASSIGNED_MENTORS
export const GET_ALL_ASSIGNED_MENTORS = "GET_ALL_ASSIGNED_MENTORS";
export const ALL_ASSIGNED_MENTORS_IS_LOADING =
  "ALL_ASSIGNED_MENTORS_IS_LOADING";
export const ALL_ASSIGNED_MENTORS_FAILED = "ALL_ASSIGNED_MENTORS_FAILED";
export const RESET_ASSIGNED_MENTORS = "RESET_ASSIGNED_MENTORS";
// GET ALL SUPPLIERS
export const GET_ALL_ASSIGNED_SUPPLIERS = "GET_ALL_ASSIGNED_SUPPLIERS";
export const ALL_ASSIGNED_SUPPLIERS_IS_LOADING =
  "ALL_ASSIGNED_SUPPLIERS_IS_LOADING";
export const ALL_ASSIGNED_SUPPLIERS_FAILED = "ALL_ASSIGNED_SUPPLIERS_FAILED";
export const RESET_ASSIGNED_SUPPLIERS = "RESET_ASSIGNED_SUPPLIERS";
// GET ALL REFUGES
export const GET_ALL_ASSIGNED_REFUGEES = "GET_ALL_ASSIGNED_REFUGEES";
export const ALL_ASSIGNED_REFUGEES_IS_LOADING =
  "ALL_ASSIGNED_REFUGEES_IS_LOADING";
export const ALL_ASSIGNED_REFUGEES_FAILED = "ALL_ASSIGNED_REFUGEES_FAILED";
export const RESET_ASSIGNED_REFUGEES = "RESET_ASSIGNED_REFUGEES";

// GET ALL ASSIGNED_MUNICIPLITIES
export const GET_ALL_ASSIGNED_MUNICIPLITIES = "GET_ALL_ASSIGNED_MUNICIPLITIES";
export const ALL_ASSIGNED_MUNICIPLITIES_IS_LOADING =
  "ALL_ASSIGNED_MUNICIPLITIES_IS_LOADING";
export const ALL_ASSIGNED_MUNICIPLITIES_FAILED =
  "ALL_ASSIGNED_MUNICIPLITIES_FAILED";
export const RESET_ASSIGNED_MUNICIPALITY = "RESET_ASSIGNED_MUNICIPALITY";

// GET ALL AssignedMentors HELPERS
export const allAssignedMentorsIsLoading = (ms) => ({
  type: ALL_ASSIGNED_MENTORS_IS_LOADING,
  payload: ms,
});

export const allAssignedMentorsFailed = (ms) => ({
  type: ALL_ASSIGNED_MENTORS_FAILED,
  payload: ms,
});

export const resetAllAssignedMentors = (ms) => ({
  type: RESET_ASSIGNED_MENTORS,
  payload: ms,
});

// GET ALL Suppliers HELPERS
export const allAssignedSuppliersIsLoading = (ms) => ({
  type: ALL_ASSIGNED_SUPPLIERS_IS_LOADING,
  payload: ms,
});

export const allAssignedSuppliersFailed = (ms) => ({
  type: ALL_ASSIGNED_SUPPLIERS_FAILED,
  payload: ms,
});
export const resetAllAssignedSuppliers = (ms) => ({
  type: RESET_ASSIGNED_SUPPLIERS,
  payload: ms,
});
// GET ALL Refuges HELPERS
export const allAssignedRefugeesIsLoading = (ms) => ({
  type: ALL_ASSIGNED_REFUGEES_IS_LOADING,
  payload: ms,
});

export const allAssignedRefugeesFailed = (ms) => ({
  type: ALL_ASSIGNED_REFUGEES_FAILED,
  payload: ms,
});

export const resetAllAssignedRefugees = (ms) => ({
  type: RESET_ASSIGNED_REFUGEES,
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

export function getAllAssignedMentors(
  page,
  limit,
  municipalityId = "",
  managerId = "",
  refugeeId = "",
  filterByEmail = ""
) {
  return (dispatch) => {
    dispatch(allAssignedMentorsIsLoading(true));

    client
      .query({
        query: gql`
           
            {
                listAssignedMentors(page: ${parseInt(page)}, limit: ${parseInt(
          limit
        )},filter:{municipalityId: "${municipalityId}", managerId: "${managerId}", refugeeId: "${refugeeId}", email: "${filterByEmail}"}){
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
                  municipality{
                    _id
                   name
                    province
                    poiLink
                    contactPerson{
                        name
                    }
                    manager{
                        _id
                        name
                        email
                        phoneNumber
                        profileImageUrl
                    }
                  }
                }
              }
            }
            `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_ASSIGNED_MENTORS,
          payload: response.data,
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
            dispatch(
              allAssignedMentorsFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(
              allAssignedMentorsFailed("error in list or not found list")
            );
          }
        }
      });
  };
}

// GET allAssignedSuppliers  MAIN ACTION

export function getAllAssignedSuppliers(
  page,
  limit,
  municipalityId = "",
  mentorId = "",
  refugeeId = "",
  email = "",
  managerId = ""
) {
  return (dispatch) => {
    dispatch(allAssignedSuppliersIsLoading(true));

    client
      .query({
        query: gql`
           
            {
              listAssignedSuppliers(page:${parseInt(page)}, limit:${parseInt(
          limit
        )}, filter:{municipalityId:"${municipalityId}", managerId:"${managerId}", mentorId:"${mentorId}" , refugeeId:"${refugeeId}", email: "${email}"}){
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
                  type
                  name
                  email
                  phoneNumber
                  contactPerson{
                    name
                  }
                  municipality{
                    _id
                   name
                    province
                    poiLink
                    contactPerson{
                        name
                    }
                    manager{
                        _id
                        name
                        email
                        phoneNumber
                        profileImageUrl
                    }
                  }
                  createdAt
                  totalRefugees
                  isAssigned
                }
              }
            }
            `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_ASSIGNED_SUPPLIERS,
          payload: response.data,
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
            dispatch(
              allAssignedSuppliersFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(
              allAssignedSuppliersFailed("error in list or not found list")
            );
          }
        }
      });
  };
}

// GET allAssignedRefugees  MAIN ACTION

export function getAllAssignedRefugees(
  page,
  limit,
  municipalityId = "",
  mentorId = "",
  supplierId = "",
  email = ""
) {
  return (dispatch) => {
    dispatch(allAssignedRefugeesIsLoading(true));

    client
      .query({
        query: gql`
          {
            listAssignedRefugees(page: ${parseInt(page)}, limit: ${parseInt(
          limit
        )},filter:{municipalityId:"${municipalityId}", mentorId:"${mentorId}", supplierId:"${supplierId}" , email: "${email}"}){
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
      createdAt
      isAssigned
      mentor{
        _id
       name
        email
        phoneNumber
        profileImageUrl
      }
      municipality{
        _id
       name
        province
        poiLink
        contactPerson{
            name
        }
        manager{
            _id
            name
            email
            phoneNumber
            profileImageUrl
        }
      }
      suppliers{
        school{
          _id
       name
        email
        phoneNumber
        profileImageUrl
        }
        work{
          _id
       name
        email
        phoneNumber
        profileImageUrl
        }
      }
      pipProgress{
        language
        placeOfResidence
        wellbeing
        socialContact
        work
        training
        contribution
        society
        selfSustainability
      }
              }
            }
          }
          `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_ASSIGNED_REFUGEES,
          payload: response.data,
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

            dispatch(
              allAssignedRefugeesFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
          }
        }
      });
  };
}

// GET AllAssignedMunicipalities  MAIN ACTION

export function getAllAssignedMunicipalities(
  page,
  limit,
  managerId = "",
  mentorId = "",
  supplierId = "",
  refugeeId = "",
  filterByName = ""
) {
  return (dispatch) => {
    dispatch(allAssignedMunicipalitiesIsLoading(true));

    client
      .query({
        query: gql`
            {
                listAssignedMunicipalities(page: ${parseInt(
          page
        )}, limit: ${parseInt(
          limit
        )}, filter:{managerId: "${managerId}", mentorId:"${mentorId}", refugeeId:"${refugeeId}", supplierId:"${supplierId}", name: "${filterByName}"}) {
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
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_ASSIGNED_MUNICIPLITIES,
          payload: response.data,
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
            dispatch(
              allAssignedMunicipalitiesFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(
              allAssignedMunicipalitiesFailed("error in list or not found list")
            );
          }
        }
      });
  };
}

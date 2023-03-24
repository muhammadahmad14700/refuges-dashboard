import client from "../../../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../../../login/store/actions/login.actions";
import uploadClient from "../../../../../../utils/uploadClient";
// ACTION NAMES
// ****************************** / /
//ADD NEW MUNICIPALITY
export const ADD_NEW_MUNICIPALITY = "ADD_NEW_MUNICIPALITY";
export const ADD_NEW_MUNICIPALITY_IS_lOADING =
  "ADD_NEW_MUNICIPALITY_IS_lOADING";
export const ADD_NEW_MUNICIPALITY_FAILED = "ADD_NEW_MUNICIPALITY_FAILED";
export const RESET_ADD_NEW_MUNICIPALITY = "RESET_ADD_NEW_MUNICIPALITY";

//UPDATE MUNICIPALITY
export const UPDATE_MUNICIPALITY = "UPDATE_MUNICIPALITY";
export const UPDATE_MUNICIPALITY_IS_lOADING =
  "UPDATE_MUNICIPALITY_IS_lOADING";
export const UPDATE_MUNICIPALITY_FAILED = "UPDATE_MUNICIPALITY_FAILED";
export const RESET_UPDATE_MUNICIPALITY = "RESET_UPDATE_MUNICIPALITY";

//ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY
export const ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY =
  "ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY";
export const ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY_IS_lOADING =
  "ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY_IS_lOADING";
export const ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY_FAILED =
  "ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY_FAILED";
export const RESET_ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY =
  "RESET_ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY";

//ASSIGN_UNASSIGN_ROLES_TO_REFUGEE
export const ASSIGN_UNASSIGN_ROLES_TO_REFUGEE =
  "ASSIGN_UNASSIGN_ROLES_TO_REFUGEE";
export const ASSIGN_UNASSIGN_ROLES_TO_REFUGEE_IS_lOADING =
  "ASSIGN_UNASSIGN_ROLES_TO_REFUGEE_IS_lOADING";
export const ASSIGN_UNASSIGN_ROLES_TO_REFUGEE_FAILED =
  "ASSIGN_UNASSIGN_ROLES_TO_REFUGEE_FAILED";
export const RESET_ASSIGN_UNASSIGN_ROLES_TO_REFUGEE =
  "RESET_ASSIGN_UNASSIGN_ROLES_TO_REFUGEE";

//ASSIGN_UNASSIGN_ROLES_TO_MENTOR
export const ASSIGN_UNASSIGN_ROLES_TO_MENTOR =
  "ASSIGN_UNASSIGN_ROLES_TO_MENTOR";
export const ASSIGN_UNASSIGN_ROLES_TO_MENTOR_IS_lOADING =
  "ASSIGN_UNASSIGN_ROLES_TO_MENTOR_IS_lOADING";
export const ASSIGN_UNASSIGN_ROLES_TO_MENTOR_FAILED =
  "ASSIGN_UNASSIGN_ROLES_TO_MENTOR_FAILED";
export const RESET_ASSIGN_UNASSIGN_ROLES_TO_MENTOR =
  "RESET_ASSIGN_UNASSIGN_ROLES_TO_MENTOR";

//ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER
export const ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER =
  "ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER";
export const ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER_IS_lOADING =
  "ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER_IS_lOADING";
export const ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER_FAILED =
  "ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER_FAILED";
export const RESET_ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER =
  "RESET_ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER";

//ADD NEW MENTOR
export const ADD_NEW_MENTOR = "ADD_NEW_MENTOR";
export const ADD_NEW_MENTOR_IS_lOADING = "ADD_NEW_MENTOR_IS_lOADING";
export const ADD_NEW_MENTOR_FAILED = "ADD_NEW_MENTOR_FAILED";
export const RESET_ADD_NEW_MENTOR = "RESET_ADD_NEW_MENTOR";

//UPDATE MENTOR
export const UPDATE_MENTOR = "UPDATE_MENTOR";
export const UPDATE_MENTOR_IS_lOADING = "UPDATE_MENTOR_IS_lOADING";
export const UPDATE_MENTOR_FAILED = "UPDATE_MENTOR_FAILED";
export const RESET_UPDATE_MENTOR = "RESET_UPDATE_MENTOR";

//ADD NEW SUPPLIER
export const ADD_NEW_SUPPLIER = "ADD_NEW_SUPPLIER";
export const ADD_NEW_SUPPLIER_IS_lOADING = "ADD_NEW_SUPPLIER_IS_lOADING";
export const ADD_NEW_SUPPLIER_FAILED = "ADD_NEW_SUPPLIER_FAILED";
export const RESET_ADD_NEW_SUPPLIER = "RESET_ADD_NEW_SUPPLIER";

//UPDATE SUPPLIER
export const UPDATE_SUPPLIER = "UPDATE_SUPPLIER";
export const UPDATE_SUPPLIER_IS_lOADING = "UPDATE_SUPPLIER_IS_lOADING";
export const UPDATE_SUPPLIER_FAILED = "UPDATE_SUPPLIER_FAILED";
export const RESET_UPDATE_SUPPLIER = "RESET_UPDATE_SUPPLIER";

//ADD NEW REFUGEE
export const ADD_NEW_REFUGEE = "ADD_NEW_REFUGEE";
export const ADD_NEW_REFUGEE_IS_lOADING = "ADD_NEW_REFUGEE_IS_lOADING";
export const ADD_NEW_REFUGEE_FAILED = "ADD_NEW_REFUGEE_FAILED";
export const RESET_ADD_NEW_REFUGEE = "RESET_ADD_NEW_REFUGEE";

//UPDATE REFUGEE
export const UPDATE_REFUGEE = "UPDATE_REFUGEE";
export const UPDATE_REFUGEE_IS_lOADING = "UPDATE_REFUGEE_IS_lOADING";
export const UPDATE_REFUGEE_FAILED = "UPDATE_REFUGEE_FAILED";
export const RESET_UPDATE_REFUGEE = "RESET_UPDATE_REFUGEE";

// GET Municipality Summary
export const GET_MUNICIPALITY_SUMMARY = "GET_MUNICIPALITY_SUMMARY";
export const MUNICIPALITY_SUMMARY_IS_LOADING = "MUNICIPALITY_SUMMARY_IS_LOADING";
export const MUNICIPALITY_SUMMARY_FAILED = "MUNICIPALITY_SUMMARY_FAILED";
export const RESET_MUNICIPALITY_SUMMARY = "RESET_MUNICIPALITY_SUMMARY";

// GET Mentor Summary
export const GET_MENTOR_SUMMARY = "GET_MENTOR_SUMMARY";
export const MENTOR_SUMMARY_IS_LOADING = "MENTOR_SUMMARY_IS_LOADING";
export const MENTOR_SUMMARY_FAILED = "MENTOR_SUMMARY_FAILED";
export const RESET_MENTOR_SUMMARY = "RESET_MENTOR_SUMMARY";

// GET Supplier Summary
export const GET_SUPPLIER_SUMMARY = "GET_SUPPLIER_SUMMARY";
export const SUPPLIER_SUMMARY_IS_LOADING = "SUPPLIER_SUMMARY_IS_LOADING";
export const SUPPLIER_SUMMARY_FAILED = "SUPPLIER_SUMMARY_FAILED";
export const RESET_SUPPLIER_SUMMARY = "RESET_SUPPLIER_SUMMARY";

// GET Refugee Summary
export const GET_REFUGEE_SUMMARY = "GET_REFUGEE_SUMMARY";
export const REFUGEE_SUMMARY_IS_LOADING = "REFUGEE_SUMMARY_IS_LOADING";
export const REFUGEE_SUMMARY_FAILED = "REFUGEE_SUMMARY_FAILED";
export const RESET_REFUGEE_SUMMARY = "RESET_REFUGEE_SUMMARY";

// SET CREATE USER STEPS
export const SET_CREATE_USER_STEPS = "SET_CREATE_USER_STEPS";
export const RESET_SET_CREATE_USER_STEPS = "RESET_SET_CREATE_USER_STEPS";

//HELPERS ACTIONS
export const resetSetCreateUserSteps = (ms) => ({
  type: RESET_SET_CREATE_USER_STEPS,
  payload: ms,
});

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

//Update Municipality  ACTIONS

export const updateMunicipalityLoading = (ms) => ({
  type: UPDATE_MUNICIPALITY_IS_lOADING,
  payload: ms,
});

export const updateMunicipalityFailed = (ms) => ({
  type: UPDATE_MUNICIPALITY_FAILED,
  payload: ms,
});

export const resetUpdateMunicipality = (ms) => ({
  type: RESET_UPDATE_MUNICIPALITY,
  payload: ms,
});

//ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY  ACTIONS

export const assignUnassignRolesToMunicipalityLoading = (ms) => ({
  type: ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY_IS_lOADING,
  payload: ms,
});

export const assignUnassignRolesToMunicipalityFailed = (ms) => ({
  type: ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY_FAILED,
  payload: ms,
});

export const resetAssignUnassignRolesToMunicipality = (ms) => ({
  type: RESET_ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY,
  payload: ms,
});

//ASSIGN_UNASSIGN_ROLES_TO_Refugee  ACTIONS

export const assignUnassignRolesToRefugeeLoading = (ms) => ({
  type: ASSIGN_UNASSIGN_ROLES_TO_REFUGEE_IS_lOADING,
  payload: ms,
});

export const assignUnassignRolesToRefugeeFailed = (ms) => ({
  type: ASSIGN_UNASSIGN_ROLES_TO_REFUGEE_FAILED,
  payload: ms,
});

export const resetAssignUnassignRolesToRefugee = (ms) => ({
  type: RESET_ASSIGN_UNASSIGN_ROLES_TO_REFUGEE,
  payload: ms,
});

//ASSIGN_UNASSIGN_ROLES_TO_MENTOR  ACTIONS

export const assignUnassignRolesToMentorLoading = (ms) => ({
  type: ASSIGN_UNASSIGN_ROLES_TO_MENTOR_IS_lOADING,
  payload: ms,
});

export const assignUnassignRolesToMentorFailed = (ms) => ({
  type: ASSIGN_UNASSIGN_ROLES_TO_MENTOR_FAILED,
  payload: ms,
});

export const resetAssignUnassignRolesToMentor = (ms) => ({
  type: RESET_ASSIGN_UNASSIGN_ROLES_TO_MENTOR,
  payload: ms,
});

//ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER  ACTIONS

export const assignUnassignRolesToSupplierLoading = (ms) => ({
  type: ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER_IS_lOADING,
  payload: ms,
});

export const assignUnassignRolesToSupplierFailed = (ms) => ({
  type: ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER_FAILED,
  payload: ms,
});

export const resetAssignUnassignRolesToSupplier = (ms) => ({
  type: RESET_ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER,
  payload: ms,
});

//ADD NEW Mentor  ACTIONS

export const addNewMentorLoading = (ms) => ({
  type: ADD_NEW_MENTOR_IS_lOADING,
  payload: ms,
});

export const addNewMentorFailed = (ms) => ({
  type: ADD_NEW_MENTOR_FAILED,
  payload: ms,
});

export const resetAddNewMentor = (ms) => ({
  type: RESET_ADD_NEW_MENTOR,
  payload: ms,
});

//Update Mentor  ACTIONS

export const updateMentorLoading = (ms) => ({
  type: UPDATE_MENTOR_IS_lOADING,
  payload: ms,
});

export const updateMentorFailed = (ms) => ({
  type: UPDATE_MENTOR_FAILED,
  payload: ms,
});

export const resetUpdateMentor = (ms) => ({
  type: RESET_UPDATE_MENTOR,
  payload: ms,
});

//ADD NEW Supplier  ACTIONS

export const addNewSupplierLoading = (ms) => ({
  type: ADD_NEW_SUPPLIER_IS_lOADING,
  payload: ms,
});

export const addNewSupplierFailed = (ms) => ({
  type: ADD_NEW_SUPPLIER_FAILED,
  payload: ms,
});

export const resetAddNewSupplier = (ms) => ({
  type: RESET_ADD_NEW_SUPPLIER,
  payload: ms,
});

//Update Supplier  ACTIONS

export const updateSupplierLoading = (ms) => ({
  type: UPDATE_SUPPLIER_IS_lOADING,
  payload: ms,
});

export const updateSupplierFailed = (ms) => ({
  type: UPDATE_SUPPLIER_FAILED,
  payload: ms,
});

export const resetUpdateSupplier = (ms) => ({
  type: RESET_UPDATE_SUPPLIER,
  payload: ms,
});

//ADD NEW Refugee  ACTIONS

export const addNewRefugeeLoading = (ms) => ({
  type: ADD_NEW_REFUGEE_IS_lOADING,
  payload: ms,
});

export const addNewRefugeeFailed = (ms) => ({
  type: ADD_NEW_REFUGEE_FAILED,
  payload: ms,
});

export const resetAddNewRefugee = (ms) => ({
  type: RESET_ADD_NEW_REFUGEE,
  payload: ms,
});

//Update Refugee  ACTIONS

export const updateRefugeeLoading = (ms) => ({
  type: UPDATE_REFUGEE_IS_lOADING,
  payload: ms,
});

export const updateRefugeeFailed = (ms) => ({
  type: UPDATE_REFUGEE_FAILED,
  payload: ms,
});

export const resetUpdateRefugee = (ms) => ({
  type: RESET_UPDATE_REFUGEE,
  payload: ms,
});

// GET Municipality Summary HELPERS
export const municipalitySummaryIsLoading = (ms) => ({
  type: MUNICIPALITY_SUMMARY_IS_LOADING,
  payload: ms,
});

export const municipalitySummaryFailed = (ms) => ({
  type: MUNICIPALITY_SUMMARY_FAILED,
  payload: ms,
});

export const resetMunicipalitySummary = (ms) => ({
  type: RESET_MUNICIPALITY_SUMMARY,
  payload: ms,
});

// GET Mentor Summary HELPERS
export const mentorSummaryIsLoading = (ms) => ({
  type: MENTOR_SUMMARY_IS_LOADING,
  payload: ms,
});

export const mentorSummaryFailed = (ms) => ({
  type: MENTOR_SUMMARY_FAILED,
  payload: ms,
});

export const resetMentorSummary = (ms) => ({
  type: RESET_MENTOR_SUMMARY,
  payload: ms,
});
// GET Supplier Summary HELPERS
export const supplierSummaryIsLoading = (ms) => ({
  type: SUPPLIER_SUMMARY_IS_LOADING,
  payload: ms,
});

export const supplierSummaryFailed = (ms) => ({
  type: SUPPLIER_SUMMARY_FAILED,
  payload: ms,
});

export const resetSupplierSummary = (ms) => ({
  type: RESET_SUPPLIER_SUMMARY,
  payload: ms,
});

// GET Refugee Summary HELPERS
export const refugeeSummaryIsLoading = (ms) => ({
  type: REFUGEE_SUMMARY_IS_LOADING,
  payload: ms,
});

export const refugeeSummaryFailed = (ms) => ({
  type: REFUGEE_SUMMARY_FAILED,
  payload: ms,
});

export const resetRefugeeSummary = (ms) => ({
  type: RESET_REFUGEE_SUMMARY,
  payload: ms,
});
//MAIN ACTIONS
export function setCreateUserSteps(steps) {
  return (dispatch) => {
    dispatch({
      type: SET_CREATE_USER_STEPS,
      payload: steps,
    });
  };
}

export function addNewMunicipality(data) {
  return (dispatch) => {
    dispatch(addNewMunicipalityLoading(true));

    uploadClient
      .mutate({
        mutation: gql`
          mutation(
            $municipalityName: String!
            $province: String!
            $poiLink: String!
            $logo: Upload
            $contactPersonName: String!
            $managerName: String!
            $managerEmail: String!
            $managerPhoneNumber: String!
          ) {
            addMunicipality(
              input: {
                municipality: {
                  name: $municipalityName
                  province: $province
                  poiLink: $poiLink
                  logo: $logo
                  contactPerson: { name: $contactPersonName }
                }
                manager: {
                  name: $managerName
                  email: $managerEmail
                  phoneNumber: $managerPhoneNumber
                }
              }
            ) {
              id
            }
          }
        `,
        variables: {
          municipalityName: data.municipality_name,
          province: data.province,
          poiLink: data.poi_url,
          logo: data.logo,
          contactPersonName: data.contact_person_name,
          managerName: data.manager_name,
          managerEmail: data.manager_email,
          managerPhoneNumber: data.manager_phone_no,
        },
      })
      .then((response) => {
        dispatch({
          type: ADD_NEW_MUNICIPALITY,
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
            dispatch(
              addNewMunicipalityFailed(
                JSON.stringify(err.graphQLErrors[0].message)
              )
            );
          } else {
            dispatch(addNewMunicipalityFailed("something went wrong"));
          }
        }
      });
  };
}

export function updateMunicipality(data, id, mid) {
  return (dispatch) => {
    dispatch(updateMunicipalityLoading(true));

    uploadClient
      .mutate({
        mutation: gql`
          mutation(
            $municipalityId: String!
            $managerId: String!
            $municipalityName: String!
            $province: String!
            $poiLink: String
            $logo: Upload
            $contactPersonName: String!
            $managerName: String!
            $managerEmail: String!
            $managerPhoneNumber: String!
          ) {
            updateMunicipality(
              input: {
                municipalityId: $municipalityId
                managerId: $managerId
                municipality: {
                  name: $municipalityName
                  province: $province
                  poiLink: $poiLink
                  logo: $logo
                  contactPerson: { name: $contactPersonName }
                }
                manager: {
                  name: $managerName
                  email: $managerEmail
                  phoneNumber: $managerPhoneNumber
                }
              }
            ) 
          }
        `,
        variables: {
          municipalityId: id,
          managerId: mid,
          municipalityName: data.municipality_name,
          province: data.province,
          poiLink: data.poi_url,
          logo: data.logo,
          contactPersonName: data.contact_person_name,
          managerName: data.manager_name,
          managerEmail: data.manager_email,
          managerPhoneNumber: data.manager_phone_no,
        },
      })
      .then((response) => {
        dispatch({
          type: UPDATE_MUNICIPALITY,
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
            dispatch(
              updateMunicipalityFailed(
                JSON.stringify(err.graphQLErrors[0].message)
              )
            );
          } else {
            dispatch(updateMunicipalityFailed("something went wrong"));
          }
        }
      });
  };
}

export function assignUnassignRolesToMunicipality(data) {
  return (dispatch) => {
    dispatch(assignUnassignRolesToMunicipalityLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation(
            $municipalityId: String!
            $amentorIds: [String!]
            $asupplierIds: [String!]
            $arefugeeIds: [String!]
          ) {
            assignRolesToMunicipality(
              input: {
                municipalityId: $municipalityId
                assigned: {
                  mentorIds: $amentorIds
                  supplierIds: $asupplierIds
                  refugeeIds: $arefugeeIds
                }
              }
            )
          }
        `,
        variables: {
          municipalityId: data.municipality_id,
          amentorIds: data.amentorIds,
          asupplierIds: data.asupplierIds,
          arefugeeIds: data.arefugeeIds
        },
      })
      .then((response) => {
        dispatch({
          type: ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY,
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
            dispatch(
              assignUnassignRolesToMunicipalityFailed(
                JSON.stringify(err.graphQLErrors[0].message)
              )
            );
          } else {
            dispatch(
              assignUnassignRolesToMunicipalityFailed(JSON.stringify(err))
            );
          }
        }
      });
  };
}

export function assignUnassignRolesToRefugee(data) {
  return (dispatch) => {
    dispatch(assignUnassignRolesToRefugeeLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation(
            $refugeeId: String!
            $amentorIds: String!
            $asupplierIds: [String!]
            $amunicipalityIds: String!
            $umentorIds: String!
            $usupplierIds: [String!]
            $umunicipalityIds: String!
          ) {
            assignUnassignRolesToRefugee(
              input: {
                refugeeId: $refugeeId
                assigned: {
                  municipalityId: $amunicipalityIds
                  supplierIds: $asupplierIds
                  mentorId: $amentorIds
                }
                unassigned: {
                  municipalityId: $umunicipalityIds
                  supplierIds: $usupplierIds
                  mentorId: $umentorIds
                }
              }
            )
          }
        `,
        variables: {
          refugeeId: data.refugee_id,
          amentorIds: data.amentorIds.length > 0 ? data.amentorIds[0] : "",
          asupplierIds: data.asupplierIds,
          amunicipalityIds:
            data.amunicipalityIds.length > 0 ? data.amunicipalityIds[0] : "",
          umentorIds: data.umentorIds.length > 0 ? data.umentorIds[0] : "",
          usupplierIds: data.usupplierIds,
          umunicipalityIds:
            data.umunicipalityIds.length > 0 ? data.amunicipalityIds[0] : "",
        },
      })
      .then((response) => {
        dispatch({
          type: ASSIGN_UNASSIGN_ROLES_TO_REFUGEE,
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
            dispatch(
              assignUnassignRolesToRefugeeFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(assignUnassignRolesToRefugeeFailed("something went wrong"));
          }
        }
      });
  };
}

export function assignUnassignRolesToMentor(data) {
  return (dispatch) => {
    dispatch(assignUnassignRolesToMentorLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation(
            $mentorId: String!
            $amunicipalityIds: String!
            $arefugeeIds: [String!]
            $umunicipalityIds: String!
            $urefugeeIds: [String!]
          ) {
            assignUnassignRolesToMentor(
              input: {
                mentorId: $mentorId
                assigned: {
                  municipalityId: $amunicipalityIds
                  refugeeIds: $arefugeeIds
                }
                unassigned: {
                  municipalityId: $umunicipalityIds
                  refugeeIds: $urefugeeIds
                }
              }
            )
          }
        `,
        variables: {
          mentorId: data.mentor_id,
          amunicipalityIds:
            data.amunicipalityIds.length > 0 ? data.amunicipalityIds[0] : "",
          arefugeeIds: data.arefugeeIds,
          umunicipalityIds:
            data.umunicipalityIds.length > 0 ? data.umunicipalityIds[0] : "",
          urefugeeIds: data.urefugeeIds,
        },
      })
      .then((response) => {
        dispatch({
          type: ASSIGN_UNASSIGN_ROLES_TO_MENTOR,
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
            dispatch(
              assignUnassignRolesToMentorFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(assignUnassignRolesToMentorFailed("something went wrong"));
          }
        }
      });
  };
}

export function assignUnassignRolesToSupplier(data) {
  return (dispatch) => {
    dispatch(assignUnassignRolesToSupplierLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation(
            $supplierId: String!
            $amunicipalityIds: String!
            $arefugeeIds: [String!]
            $umunicipalityIds: String!
            $urefugeeIds: [String!]
          ) {
            assignUnassignRolesToSupplier(
              input: {
                supplierId: $supplierId
                assigned: {
                  municipalityId: $amunicipalityIds
                  refugeeIds: $arefugeeIds
                }
                unassigned: {
                  municipalityId: $umunicipalityIds
                  refugeeIds: $urefugeeIds
                }
              }
            )
          }
        `,
        variables: {
          supplierId: data.supplier_id,
          amunicipalityIds:
            data.amunicipalityIds.length > 0 ? data.amunicipalityIds[0] : "",
          arefugeeIds: data.arefugeeIds,
          umunicipalityIds:
            data.umunicipalityIds.length > 0 ? data.umunicipalityIds[0] : "",
          urefugeeIds: data.urefugeeIds,
        },
      })
      .then((response) => {
        dispatch({
          type: ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER,
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
            dispatch(
              assignUnassignRolesToSupplierFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(assignUnassignRolesToSupplierFailed("Something went wrong"));
          }
        }
      });
  };
}

export function addNewMentor(data) {
  return (dispatch) => {
    dispatch(addNewMentorLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation(
            $bsn: String
            $name: String!
            $email: String!
            $phoneNumber: String!
          ) {
            addMentor(
              input: {
                bsn: $bsn
                name: $name
                email: $email
                phoneNumber: $phoneNumber
              }
            ) {
              id
            }
          }
        `,
        variables: {
          bsn: (data.mentor_bsn).toString(),
          name: data.mentor_name,
          email: data.mentor_email,
          phoneNumber: data.mentor_phone_no,
        },
      })
      .then((response) => {
        dispatch({
          type: ADD_NEW_MENTOR,
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
                  addNewMentorFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                addNewMentorFailed(err.graphQLErrors[0].message)
              );
            }
          } else {
            dispatch(
              addNewMentorFailed("something went wrong"));
          }
        }
      });
  };
}

export function updateMentor(data, id) {
  return (dispatch) => {
    dispatch(updateMentorLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation(
            $mentorId: String!
            $bsn: String
            $name: String!
            $email: String!
            $phoneNumber: String!
          ) {
            updateMentor(
              input: {
                mentorId: $mentorId
                bsn: $bsn
                name: $name
                email: $email
                phoneNumber: $phoneNumber
              }
            )
          }
        `,
        variables: {
          mentorId: id,
          bsn: (data.mentor_bsn).toString(),
          name: data.mentor_name,
          email: data.mentor_email,
          phoneNumber: data.mentor_phone_no,
        },
      })
      .then((response) => {
        dispatch({
          type: UPDATE_MENTOR,
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
                  updateMentorFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                updateMentorFailed(err.graphQLErrors[0].message)
              );
            }
          } else {
            dispatch(updateMentorFailed("something went wrong"));
          }
        }
      });
  };
}

export function addNewSupplier(data) {
  return (dispatch) => {
    dispatch(addNewSupplierLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation(
            $type: SupplierType!
            $name: String!
            $email: String!
            $phoneNumber: String!
            $contactPersonName: String!
          ) {
            addSupplier(
              input: {
                type: $type
                name: $name
                email: $email
                phoneNumber: $phoneNumber
                contactPerson: { name: $contactPersonName }
              }
            ) {
              id
            }
          }
        `,
        variables: {
          type: data.supplier_type,
          name: data.supplier_name,
          email: data.supplier_email,
          phoneNumber: data.supplier_phone_no,
          contactPersonName: data.supplier_contact_person,
        },
      })
      .then((response) => {
        dispatch({
          type: ADD_NEW_SUPPLIER,
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
                  addNewSupplierFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                addNewSupplierFailed(err.graphQLErrors[0].message)
              );
            }
          } else {
            dispatch(addNewSupplierFailed("something went wrong"));
          }
        }
      });
  };
}

export function updateSupplier(data, id) {
  return (dispatch) => {
    dispatch(updateSupplierLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation(
            $supplierId: String!
            $name: String!
            $email: String!
            $phoneNumber: String!
            $contactPersonName: String!
          ) {
            updateSupplier(
              input: {
                supplierId: $supplierId
                name: $name
                email: $email
                phoneNumber: $phoneNumber
                contactPerson: { name: $contactPersonName }
              }
            )
          }
        `,
        variables: {
          supplierId: id,
          name: data.supplier_name,
          email: data.supplier_email,
          phoneNumber: data.supplier_phone_no,
          contactPersonName: data.supplier_contact_person,
        },
      })
      .then((response) => {
        dispatch({
          type: UPDATE_SUPPLIER,
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
                  updateSupplierFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                updateSupplierFailed(err.graphQLErrors[0].message)
              );
            }
          } else {
            dispatch(updateSupplierFailed("something went wrong"));
          }
        }
      });
  };
}

export function addNewRefugee(data) {
  return (dispatch) => {
    dispatch(addNewRefugeeLoading(true));

    uploadClient
      .mutate({
        mutation: gql`
          mutation(
            $bsn: String!
            $name: String!
            $email: String!
            $phoneNumber: String!
            $intakeDate: String!
            $bredeIntakeFile: Upload!
            $profileImage: Upload!
          ) {
            addRefugee(
              input: {
                bsn: $bsn
                name: $name
                email: $email
                phoneNumber: $phoneNumber
                intakeDate: $intakeDate
                bredeIntakeFile: $bredeIntakeFile
                profileImage: $profileImage
              }
            ) {
              id
            }
          }
        `,
        variables: {
          bsn: (data.refugee_bsn).toString(),
          name: data.refugee_name,
          email: data.refugee_email,
          phoneNumber: data.refugee_phone_no,
          intakeDate: data.intake_date,
          bredeIntakeFile: data.file,
          profileImage: data.photo_id,
        },
      })
      .then((response) => {
        dispatch({
          type: ADD_NEW_REFUGEE,
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
                  addNewRefugeeFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                addNewRefugeeFailed(err.graphQLErrors[0].message)
              );
            }
          } else {
            dispatch(addNewRefugeeFailed("something went wrong"));
          }
        }
      });
  };
}

export function updateRefugee(data, id) {
  return (dispatch) => {
    dispatch(updateRefugeeLoading(true));

    uploadClient
      .mutate({
        mutation: gql`
          mutation(
            $refugeeId: String!
            $bsn: String!
            $name: String!
            $email: String!
            $phoneNumber: String!
            $profileImage: Upload
          ) {
            updateRefugee(
              input: {
                refugeeId: $refugeeId
                bsn: $bsn
                name: $name
                email: $email
                phoneNumber: $phoneNumber
                profileImage: $profileImage
              }
            )
          }
        `,
        variables: {
          refugeeId: id,
          bsn: (data.refugee_bsn).toString(),
          name: data.refugee_name,
          email: data.refugee_email,
          phoneNumber: data.refugee_phone_no,
          profileImage: data.photo_id,
        },
      })
      .then((response) => {
        dispatch({
          type: UPDATE_REFUGEE,
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
                  updateRefugeeFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                updateRefugeeFailed(err.graphQLErrors[0].message)
              );
            }
          } else {
            dispatch(updateRefugeeFailed("something went wrong"));
          }
        }
      });
  };
}

// GET getMunicipalitySummary  MAIN ACTION

export function getMunicipalitySummary(municipalityId) {
  return (dispatch) => {
    dispatch(municipalitySummaryIsLoading(true));

    client
      .query({
        query: gql`
          {
            getMunicipalitySummary(municipalityId: "${municipalityId}") {
              _id
              name
              province
              poiLink
              logoUrl
              manager {
                _id
                name
                email
                phoneNumber
              }
              contactPerson {
                name
              }
              totalMentors
              totalSuppliers
              totalRefugees
            }
          }
        `,
        fetchPolicy: 'network-only'
      })
      .then((response) => {
        dispatch({
          type: GET_MUNICIPALITY_SUMMARY,
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
              municipalitySummaryFailed(
                JSON.stringify(err.graphQLErrors[0].message)
              )
            );
          }
          else {
            dispatch(
              municipalitySummaryFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

// GET getMentorSummary  MAIN ACTION

export function getMentorSummary(mentorId) {
  return (dispatch) => {
    dispatch(mentorSummaryIsLoading(true));

    client
      .query({
        query: gql`
          {
            getMentorSummary(mentorId: "${mentorId}") {
              _id
              bsn
              name
              email
              phoneNumber
              profileImageUrl
              totalMunicipalities
              totalRefugees
            }
          }
        `,
        fetchPolicy: 'network-only'
      })
      .then((response) => {
        dispatch({
          type: GET_MENTOR_SUMMARY,
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
              mentorSummaryFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              mentorSummaryFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

// GET getSupplierSummary  MAIN ACTION

export function getSupplierSummary(supplierId) {
  return (dispatch) => {
    dispatch(supplierSummaryIsLoading(true));

    client
      .query({
        query: gql`
          {
            getSupplierSummary(supplierId: "${supplierId}") {
              _id
              type
              name
              email
              phoneNumber
              profileImageUrl
              contactPerson {
                name
              }
              totalMunicipalities
              totalRefugees
            }
          }
        `,
        fetchPolicy: 'network-only'
      })
      .then((response) => {
        dispatch({
          type: GET_SUPPLIER_SUMMARY,
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
              supplierSummaryFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              supplierSummaryFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

// GET getRefugeeSummary  MAIN ACTION

export function getRefugeeSummary(refugeeId) {
  return (dispatch) => {
    dispatch(refugeeSummaryIsLoading(true));

    client
      .query({
        query: gql`
          {
            getRefugeeSummary(refugeeId: "${refugeeId}") {
              _id
              bsn
              name
              email
              phoneNumber
              profileImageUrl
              municipality {
                _id
                name
                province
                poiLink
                contactPerson {
                  name
                }
                manager {
                  _id
                  name
                  email
                  phoneNumber
                  profileImageUrl
                }
              }
              totalMunicipalities
              totalMentors
              totalSuppliers
            }
          }
        `,
        fetchPolicy: 'network-only'
      })
      .then((response) => {
        dispatch({
          type: GET_REFUGEE_SUMMARY,
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
              refugeeSummaryFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {
            dispatch(
              refugeeSummaryFailed(
                "error in list or not found list"
              )
            );
          }
        }
      });
  };
}

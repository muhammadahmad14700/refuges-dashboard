import client from "../../../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../../login/store/actions/login.actions";

// ACTION NAMES
// ****************************** / /

//ADD NEW REFUGE
export const ADD_NEW_REFUGE = "ADD_NEW_REFUGE";
export const ADD_NEW_REFUGE_IS_lOADING = "ADD_NEW_REFUGE_IS_lOADING";
export const ADD_NEW_REFUGE_FAILED = "ADD_NEW_REFUGE_FAILED";
export const RESET_ADD_NEW_REFUGE = "RESET_ADD_NEW_REFUGE";

//ADD NEW EVENT
export const ADD_NEW_EVENT = "ADD_NEW_EVENT";
export const ADD_NEW_EVENT_IS_lOADING = "ADD_NEW_EVENT_IS_lOADING";
export const ADD_NEW_EVENT_FAILED = "ADD_NEW_EVENT_FAILED";
export const RESET_ADD_NEW_EVENT = "RESET_ADD_NEW_EVENT";

//DELETE EVENT
export const DELETE_EVENT = "DELETE_EVENT";
export const DELETE_EVENT_IS_lOADING = "DELETE_EVENT_IS_lOADING";
export const DELETE_EVENT_FAILED = "DELETE_EVENT_FAILED";
export const RESET_DELETE_EVENT = "RESET_DELETE_EVENT";

//EDIT EVENT
export const EDIT_EVENT = "EDIT_EVENT";
export const EDIT_EVENT_IS_lOADING = "EDIT_EVENT_IS_lOADING";
export const EDIT_EVENT_FAILED = "EDIT_EVENT_FAILED";
export const RESET_EDIT_EVENT = "RESET_EDIT_EVENT";

//ADD NEW RULES
export const ADD_NEW_RULES = "ADD_NEW_RULES";
export const ADD_NEW_RULES_IS_lOADING = "ADD_NEW_RULES_IS_lOADING";
export const ADD_NEW_RULES_FAILED = "ADD_NEW_RULES_FAILED";
export const RESET_ADD_NEW_RULES = "RESET_ADD_NEW_RULES";

//ADD NEW EXTRA_ATTRIBUTE
export const ADD_NEW_EXTRA_ATTRIBUTE = "ADD_NEW_EXTRA_ATTRIBUTE";
export const ADD_NEW_EXTRA_ATTRIBUTE_IS_lOADING =
  "ADD_NEW_EXTRA_ATTRIBUTE_IS_lOADING";
export const ADD_NEW_EXTRA_ATTRIBUTE_FAILED = "ADD_NEW_EXTRA_ATTRIBUTE_FAILED";
export const RESET_ADD_NEW_EXTRA_ATTRIBUTE = "RESET_ADD_NEW_EXTRA_ATTRIBUTE";

//ADD NEW REMARK
export const ADD_NEW_REMARK = "ADD_NEW_REMARK";
export const ADD_NEW_REMARK_IS_lOADING = "ADD_NEW_REMARK_IS_lOADING";
export const ADD_NEW_REMARK_FAILED = "ADD_NEW_REMARK_FAILED";
export const RESET_ADD_NEW_REMARK = "RESET_ADD_NEW_REMARK";

//Update EXTRA_ATTRIBUTE
export const UPDATE_EXTRA_ATTRIBUTE = "UPDATE_EXTRA_ATTRIBUTE";
export const UPDATE_EXTRA_ATTRIBUTE_IS_lOADING =
  "UPDATE_EXTRA_ATTRIBUTE_IS_lOADING";
export const UPDATE_EXTRA_ATTRIBUTE_FAILED = "UPDATE_EXTRA_ATTRIBUTE_FAILED";
export const RESET_UPDATE_EXTRA_ATTRIBUTE = "RESET_UPDATE_EXTRA_ATTRIBUTE";

//DELETE EXTRA_ATTRIBUTE
export const DELETE_EXTRA_ATTRIBUTE = "DELETE_EXTRA_ATTRIBUTE";
export const DELETE_EXTRA_ATTRIBUTE_IS_lOADING =
  "DELETE_EXTRA_ATTRIBUTE_IS_lOADING";
export const DELETE_EXTRA_ATTRIBUTE_FAILED = "DELETE_EXTRA_ATTRIBUTE_FAILED";
export const RESET_DELETE_EXTRA_ATTRIBUTE = "RESET_DELETE_EXTRA_ATTRIBUTE";

//ADD NEW PIP
export const ADD_NEW_PIP = "ADD_NEW_PIP";
export const ADD_NEW_PIP_IS_lOADING = "ADD_NEW_PIP_IS_lOADING";
export const ADD_NEW_PIP_FAILED = "ADD_NEW_PIP_FAILED";
export const RESET_ADD_NEW_PIP = "RESET_ADD_NEW_PIP";

//UPDATE PIP
export const UPDATE_PIP = "UPDATE_PIP";
export const UPDATE_PIP_IS_lOADING = "UPDATE_PIP_IS_lOADING";
export const UPDATE_PIP_FAILED = "UPDATE_PIP_FAILED";
export const RESET_UPDATE_PIP = "RESET_UPDATE_PIP";

//UPDATE PIP_PROGRESS
export const UPDATE_PIP_PROGRESS = "UPDATE_PIP_PROGRESS";
export const UPDATE_PIP_PROGRESS_IS_lOADING = "UPDATE_PIP_PROGRESS_IS_lOADING";
export const UPDATE_PIP_PROGRESS_FAILED = "UPDATE_PIP_PROGRESS_FAILED";
export const RESET_UPDATE_PIP_PROGRESS = "RESET_UPDATE_PIP_PROGRESS";

// GET ALL UNASSIGNED_REFUGES
export const GET_ALL_UNASSIGNED_REFUGES = "GET_ALL_UNASSIGNED_REFUGES";
export const ALL_UNASSIGNED_REFUGES_IS_LOADING =
  "ALL_UNASSIGNED_REFUGES_IS_LOADING";
export const ALL_UNASSIGNED_REFUGES_FAILED = "ALL_UNASSIGNED_REFUGES_FAILED";

// GET ALL ASSIGNED_REFUGES
export const GET_ALL_ASSIGNED_REFUGES = "GET_ALL_ASSIGNED_REFUGES";
export const ALL_ASSIGNED_REFUGES_IS_LOADING =
  "ALL_ASSIGNED_REFUGES_IS_LOADING";
export const ALL_ASSIGNED_REFUGES_FAILED = "ALL_ASSIGNED_REFUGES_FAILED";

// GET ALL REFUGES
export const GET_ALL_REFUGES = "GET_ALL_REFUGES";
export const ALL_REFUGES_IS_LOADING = "ALL_REFUGES_IS_LOADING";
export const ALL_REFUGES_FAILED = "ALL_REFUGES_FAILED";
// GET ALL NOTIFICATIONS
export const GET_ALL_NOTIFICATIONS = "GET_ALL_NOTIFICATIONS";
export const ALL_NOTIFICATIONS_IS_LOADING = "ALL_NOTIFICATIONS_IS_LOADING";
export const ALL_NOTIFICATIONS_FAILED = "ALL_NOTIFICATIONS_FAILED";
export const RESET_NOTIFICATIONS = "RESET_NOTIFICATIONS";

// GET ALL AGENDAS
export const GET_ALL_AGENDAS = "GET_ALL_AGENDAS";
export const ALL_AGENDAS_IS_LOADING = "ALL_AGENDAS_IS_LOADING";
export const ALL_AGENDAS_FAILED = "ALL_AGENDAS_FAILED";
export const RESET_ALL_AGENDAS = "RESET_ALL_AGENDAS";

// GET ALL PIPPLAN
export const GET_ALL_PIPPLAN = "GET_ALL_PIPPLAN";
export const ALL_PIPPLAN_IS_LOADING = "ALL_PIPPLAN_IS_LOADING";
export const ALL_PIPPLAN_FAILED = "ALL_PIPPLAN_FAILED";

// GET ALL PIPPLAN
export const GET_ALL_PIPPLAN_VERSIONS = "GET_ALL_PIPPLAN_VERSIONS";
export const ALL_PIPPLAN_VERSIONS_IS_LOADING =
  "ALL_PIPPLAN_VERSIONS_IS_LOADING";
export const ALL_PIPPLAN_VERSIONS_FAILED = "ALL_PIPPLAN_VERSIONS_FAILED";

// GET BREDEINTAKE
export const GET_BREDEINTAKE = "GET_BREDEINTAKE";
export const BREDEINTAKE_IS_LOADING = "BREDEINTAKE_IS_LOADING";
export const BREDEINTAKE_FAILED = "BREDEINTAKE_FAILED";

// GET PIPPROGRESS
export const GET_PIPPROGRESS = "GET_PIPPROGRESS";
export const PIPPROGRESS_IS_LOADING = "PIPPROGRESS_IS_LOADING";
export const PIPPROGRESS_FAILED = "PIPPROGRESS_FAILED";
export const RESET_GET_PIPPROGRESS = "RESET_GET_PIPPROGRESS";

// GET EXTRA_ATTRIBUTES
export const GET_EXTRA_ATTRIBUTES = "GET_EXTRA_ATTRIBUTES";
export const EXTRA_ATTRIBUTES_IS_LOADING = "EXTRA_ATTRIBUTES_IS_LOADING";
export const EXTRA_ATTRIBUTES_FAILED = "EXTRA_ATTRIBUTES_FAILED";

// GET REMARKS
export const GET_REMARKS = "GET_REMARKS";
export const REMARKS_IS_LOADING = "REMARKS_IS_LOADING";
export const REMARKS_FAILED = "REMARKS_FAILED";

//DELETE REMARK
export const DELETE_REMARK = "DELETE_REMARK";
export const DELETE_REMARK_IS_lOADING = "DELETE_REMARK_IS_lOADING";
export const DELETE_REMARK_FAILED = "DELETE_REMARK_FAILED";
export const RESET_REMARK = "RESET_REMARK";

// GET PIPPROGRESS STATS
export const GET_PIPPROGRESS_STATS = "GET_PIPPROGRESS_STATS";
export const PIPPROGRESS_STATS_IS_LOADING = "PIPPROGRESS_STATS_IS_LOADING";
export const PIPPROGRESS_STATS_FAILED = "PIPPROGRESS_STATS_FAILED";
export const RESET_GET_PIPPROGRESS_STATS = "RESET_GET_PIPPROGRESS_STATS";

// HELPER ACTIONS CREATORS
//*************************************** */

//ADD NEW Refuge  ACTIONS

export const addNewRefugeLoading = (ms) => ({
  type: ADD_NEW_REFUGE_IS_lOADING,
  payload: ms,
});

export const addNewRefugeFailed = (ms) => ({
  type: ADD_NEW_REFUGE_FAILED,
  payload: ms,
});

export const resetaddNewRefuge = (ms) => ({
  type: RESET_ADD_NEW_REFUGE,
  payload: ms,
});

//ADD NEW Event  ACTIONS

export const addNewEventLoading = (ms) => ({
  type: ADD_NEW_EVENT_IS_lOADING,
  payload: ms,
});

export const addNewEventFailed = (ms) => ({
  type: ADD_NEW_EVENT_FAILED,
  payload: ms,
});

export const resetaddNewEvent = (ms) => ({
  type: RESET_ADD_NEW_EVENT,
  payload: ms,
});

//DELETE Event  ACTIONS

export const deleteEventLoading = (ms) => ({
  type: DELETE_EVENT_IS_lOADING,
  payload: ms,
});

export const deleteEventFailed = (ms) => ({
  type: DELETE_EVENT_FAILED,
  payload: ms,
});

export const resetDeleteEvent = (ms) => ({
  type: RESET_DELETE_EVENT,
  payload: ms,
});

//Edit Event  ACTIONS

export const editEventLoading = (ms) => ({
  type: EDIT_EVENT_IS_lOADING,
  payload: ms,
});

export const editEventFailed = (ms) => ({
  type: EDIT_EVENT_FAILED,
  payload: ms,
});

export const resetEditEvent = (ms) => ({
  type: RESET_EDIT_EVENT,
  payload: ms,
});

//ADD NEW Rules  ACTIONS

export const addNewRulesLoading = (ms) => ({
  type: ADD_NEW_RULES_IS_lOADING,
  payload: ms,
});

export const addNewRulesFailed = (ms) => ({
  type: ADD_NEW_RULES_FAILED,
  payload: ms,
});

export const resetaddNewRules = (ms) => ({
  type: RESET_ADD_NEW_RULES,
  payload: ms,
});

//ADD NEW Extra attribute  ACTIONS

export const addNewExtraAttributeLoading = (ms) => ({
  type: ADD_NEW_EXTRA_ATTRIBUTE_IS_lOADING,
  payload: ms,
});

export const addNewExtraAttributeFailed = (ms) => ({
  type: ADD_NEW_EXTRA_ATTRIBUTE_FAILED,
  payload: ms,
});

export const resetaddNewExtraAttribute = (ms) => ({
  type: RESET_ADD_NEW_EXTRA_ATTRIBUTE,
  payload: ms,
});

//Update Extra attribute  ACTIONS

export const updateExtraAttributeLoading = (ms) => ({
  type: UPDATE_EXTRA_ATTRIBUTE_IS_lOADING,
  payload: ms,
});

export const updateExtraAttributeFailed = (ms) => ({
  type: UPDATE_EXTRA_ATTRIBUTE_FAILED,
  payload: ms,
});

export const resetupdateExtraAttribute = (ms) => ({
  type: RESET_UPDATE_EXTRA_ATTRIBUTE,
  payload: ms,
});

//delete Extra attribute  ACTIONS

export const deleteExtraAttributeLoading = (ms) => ({
  type: DELETE_EXTRA_ATTRIBUTE_IS_lOADING,
  payload: ms,
});

export const deleteExtraAttributeFailed = (ms) => ({
  type: DELETE_EXTRA_ATTRIBUTE_FAILED,
  payload: ms,
});

export const resetdeleteExtraAttribute = (ms) => ({
  type: RESET_DELETE_EXTRA_ATTRIBUTE,
  payload: ms,
});

//ADD NEW Remark  ACTIONS

export const addNewRemarkLoading = (ms) => ({
  type: ADD_NEW_REMARK_IS_lOADING,
  payload: ms,
});

export const addNewRemarkFailed = (ms) => ({
  type: ADD_NEW_REMARK_FAILED,
  payload: ms,
});

export const resetaddNewRemark = (ms) => ({
  type: RESET_ADD_NEW_REMARK,
  payload: ms,
});

//ADD NEW PIP  ACTIONS

export const addNewPipLoading = (ms) => ({
  type: ADD_NEW_PIP_IS_lOADING,
  payload: ms,
});

export const addNewPipFailed = (ms) => ({
  type: ADD_NEW_PIP_FAILED,
  payload: ms,
});

export const resetaddNewPip = (ms) => ({
  type: RESET_ADD_NEW_PIP,
  payload: ms,
});

//Update PIP  ACTIONS

export const updatePipLoading = (ms) => ({
  type: UPDATE_PIP_IS_lOADING,
  payload: ms,
});

export const updatePipFailed = (ms) => ({
  type: UPDATE_PIP_FAILED,
  payload: ms,
});

export const resetupdatePip = (ms) => ({
  type: RESET_UPDATE_PIP,
  payload: ms,
});

//Update PIP progress  ACTIONS

export const updatePipprogressLoading = (ms) => ({
  type: UPDATE_PIP_PROGRESS_IS_lOADING,
  payload: ms,
});

export const updatePipprogressFailed = (ms) => ({
  type: UPDATE_PIP_PROGRESS_FAILED,
  payload: ms,
});

export const resetupdatePipprogress = (ms) => ({
  type: RESET_UPDATE_PIP_PROGRESS,
  payload: ms,
});

// GET ALL UnAssignedRefuges HELPERS
export const AllUnAssignedRefugesIsLoading = (ms) => ({
  type: ALL_UNASSIGNED_REFUGES_IS_LOADING,
  payload: ms,
});

export const AllUnAssignedRefugesFailed = (ms) => ({
  type: ALL_UNASSIGNED_REFUGES_FAILED,
  payload: ms,
});

// GET ALL AssignedRefuges HELPERS
export const AllAssignedRefugesIsLoading = (ms) => ({
  type: ALL_ASSIGNED_REFUGES_IS_LOADING,
  payload: ms,
});

export const AllAssignedRefugesFailed = (ms) => ({
  type: ALL_ASSIGNED_REFUGES_FAILED,
  payload: ms,
});

// GET ALL Refuges HELPERS
export const AllRefugesIsLoading = (ms) => ({
  type: ALL_REFUGES_IS_LOADING,
  payload: ms,
});

export const AllRefugesFailed = (ms) => ({
  type: ALL_REFUGES_FAILED,
  payload: ms,
});
// GET ALL Notifications HELPERS
export const AllNotificationsIsLoading = (ms) => ({
  type: ALL_NOTIFICATIONS_IS_LOADING,
  payload: ms,
});

export const AllNotificationsFailed = (ms) => ({
  type: ALL_NOTIFICATIONS_FAILED,
  payload: ms,
});
export const resetNotifications = (ms) => ({
  type: RESET_NOTIFICATIONS,
  payload: ms,
});
// GET ALL Agendas HELPERS
export const AllAgendasIsLoading = (ms) => ({
  type: ALL_AGENDAS_IS_LOADING,
  payload: ms,
});

export const AllAgendasFailed = (ms) => ({
  type: ALL_AGENDAS_FAILED,
  payload: ms,
});

export const resetAllAgendas = (ms) => ({
  type: RESET_ALL_AGENDAS,
  payload: ms,
});

// GET ALL Pipplan HELPERS
export const AllPipplanIsLoading = (ms) => ({
  type: ALL_PIPPLAN_IS_LOADING,
  payload: ms,
});

export const AllPipplanFailed = (ms) => ({
  type: ALL_PIPPLAN_FAILED,
  payload: ms,
});

// GET ALL Pipplan Versions HELPERS
export const AllPipplanVersionsIsLoading = (ms) => ({
  type: ALL_PIPPLAN_VERSIONS_IS_LOADING,
  payload: ms,
});

export const AllPipplanVersionsFailed = (ms) => ({
  type: ALL_PIPPLAN_VERSIONS_FAILED,
  payload: ms,
});

// GET ALL BredeIntake HELPERS
export const BredeintakeIsLoading = (ms) => ({
  type: BREDEINTAKE_IS_LOADING,
  payload: ms,
});

export const BredeintakeFailed = (ms) => ({
  type: BREDEINTAKE_FAILED,
  payload: ms,
});

// GET Pipprogress HELPERS
export const PipprogressIsLoading = (ms) => ({
  type: PIPPROGRESS_IS_LOADING,
  payload: ms,
});

export const PipprogressFailed = (ms) => ({
  type: PIPPROGRESS_FAILED,
  payload: ms,
});
export const resetGetpipprogresss = (ms) => ({
  type: RESET_GET_PIPPROGRESS,
  payload: ms,
});

// GET Pipprogress Stats HELPERS
export const pipprogressStatsIsLoading = (ms) => ({
  type: PIPPROGRESS_STATS_IS_LOADING,
  payload: ms,
});
export const pipprogressStatsFailed = (ms) => ({
  type: PIPPROGRESS_STATS_FAILED,
  payload: ms,
});
export const resetGetPipprogresssStats = (ms) => ({
  type: RESET_GET_PIPPROGRESS_STATS,
  payload: ms,
});

// GET extraattribute HELPERS
export const ExtraattributesIsLoading = (ms) => ({
  type: EXTRA_ATTRIBUTES_IS_LOADING,
  payload: ms,
});

export const ExtraattributesFailed = (ms) => ({
  type: EXTRA_ATTRIBUTES_FAILED,
  payload: ms,
});

// GET remarks HELPERS
export const remarksIsLoading = (ms) => ({
  type: REMARKS_IS_LOADING,
  payload: ms,
});

export const remarksFailed = (ms) => ({
  type: REMARKS_FAILED,
  payload: ms,
});

//delete Remark  ACTIONS

export const deleteRemarkLoading = (ms) => ({
  type: DELETE_REMARK_IS_lOADING,
  payload: ms,
});

export const deleteRemarkFailed = (ms) => ({
  type: DELETE_REMARK_FAILED,
  payload: ms,
});

export const resetDeleteRemark = (ms) => ({
  type: RESET_REMARK,
  payload: ms,
});

// MAIN CREATORS
//********************** **************/

export function addNewRefuge(data) {
  let newData = new FormData();
  newData.append("firstName", data.first_name);
  newData.append("lastName", data.last_name);
  newData.append("email", data.email);
  newData.append("phoneNumber", data.phone_no);
  newData.append("intakeDate", data.intake_date);
  newData.append("file", data.file);
  return (dispatch) => {
    dispatch(addNewRefugeLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation{
              addRefugee(input:{
                firstName:"${data.first_name}",
                lastName:"${data.last_name}",
                email:"${data.email}",
                phoneNumber:"${data.phone_no}",
                intakeDate:"${data.intake_date}",
                file:"${newData.get("file")}"
              }
              )
            }
            `,
      })
      .then((response) => {
        dispatch({
          type: ADD_NEW_REFUGE,
          payload: response,
        });
      })
      .catch((err) => {
      });
  };
}

export function addNewEvent(data) {
  let b = [];
  data.bookedWith.forEach((elem) => {
    let c = Object.create(null);
    c.userId = elem.userId;
    c.role = elem.role;
    b.push(c);
  });
  let d = "[";
  b.forEach((elem) => {
    d += JSON.stringify(elem);
  });
  d += "]";
  d = d.replace(/"userId"/g, "userId");
  d = d.replace(/"role"/g, "role");
  return (dispatch) => {
    dispatch(addNewEventLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation{
            addEvent(input:{
                refugeeId: "${data.refugeeId}",
                title: "${data.title}",
                startDate: "${data.startDate}",
                endDate: "${data.endDate}",
                reminderBefore: ${parseInt(data.reminderBefore)},
                note: "${data.note}",
                bookedWith: ${d}
              }
              )
              {
                agenda {
                  _id
                  refugeeId
                  agendaDate
                  events {
                    _id
                    title
                    startDate
                    endDate
                    reminderBefore
                    notes {
                      userId
                      note
                      createdAt
                    }
                    bookedBy {
                      userId
                      role
                    }
                    bookedWith {
                      userId
                      role
                    }
                    createdAt
                    updatedAt
                  }
                }
              }
            }
            `,
      })
      .then((response) => {
        dispatch({
          type: ADD_NEW_EVENT,
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
                  addNewEventFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                addNewEventFailed(err.graphQLErrors[0].message)
              );
            }
          } else {
            dispatch(addNewEventFailed("Something went wrong check input fields"));
          }
        }
      });
  };
}

export function editEvent(data) {
  let b = [];
  data.bookedWith.forEach((elem) => {
    let c = Object.create(null);
    c.userId = elem.userId;
    c.role = elem.role;
    b.push(c);
  });
  let d = "[";
  b.forEach((elem) => {
    d += JSON.stringify(elem);
  });
  d += "]";
  d = d.replace(/"userId"/g, "userId");
  d = d.replace(/"role"/g, "role");
  return (dispatch) => {
    dispatch(editEventLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation{
            updateEvent(input:{
             agendaId: "${data.agendaId}",
             eventId: "${data.eventId}",
                title: "${data.title}",
                startDate: "${data.startDate}",
                endDate: "${data.endDate}",
                reminderBefore: ${parseInt(data.reminderBefore)},
                note: "${data.note}",
                bookedWith: ${d}
              }
              )
              {
                agenda {
                  _id
                  refugeeId
                  agendaDate
                  events {
                    _id
                    title
                    startDate
                    endDate
                    reminderBefore
                    notes {
                      userId
                      note
                      createdAt
                    }
                    bookedBy {
                      userId
                      role
                    }
                    bookedWith {
                      userId
                      role
                    }
                    createdAt
                    updatedAt
                  }
                }
              }
            }
            `,
      })
      .then((response) => {
        dispatch({
          type: EDIT_EVENT,
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
                  editEventFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                editEventFailed(err.graphQLErrors[0].message)
              );
            }
          } else {

            dispatch(editEventFailed("error in list or not found list"));
          }
        }
      });
  };
}

export function deleteEvent(agendaId, eventId) {
  return (dispatch) => {
    dispatch(deleteEventLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation{
            removeEvent(input:{
              agendaId: "${agendaId}",
              eventId: "${eventId}",
              }
              )
              {
                agenda {
                  _id
                  refugeeId
                  agendaDate
                  events {
                    _id
                    title
                    startDate
                    endDate
                    reminderBefore
                    notes {
                      userId
                      note
                      createdAt
                    }
                    bookedBy {
                      userId
                      role
                    }
                    bookedWith {
                      userId
                      role
                    }
                    createdAt
                    updatedAt
                  }
                }
              }
            }
            `,
      })
      .then((response) => {
        dispatch({
          type: DELETE_EVENT,
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
              deleteEventFailed(err.graphQLErrors[0].message)
            );
          } else {

            dispatch(deleteEventFailed("error in list or not found list"));
          }
        }
      });
  };
}

export function addNewRules(mid, rules) {
  return (dispatch) => {
    dispatch(addNewRulesLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation{
            addPIPProgressRules(input:{
              municipalityId:"${mid}",
              rules:"${rules}",
              
              }
              )
            }
            `,
      })
      .then((response) => {
        dispatch({
          type: ADD_NEW_RULES,
          payload: response,
        });
      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors[0].length > 0) {
          dispatch(
            addNewRulesFailed(JSON.stringify(err.graphQLErrors[0].message))
          );
        }
      });
  };
}

export function addNewExtraAttribute(id, extraAttribute) {
  return (dispatch) => {
    dispatch(addNewExtraAttributeLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation {
          addExtraAttribute (
            municipalityId:"${id}",
            extraAttribute:"${extraAttribute}"
          )
          }
            `,
      })
      .then((response) => {
        dispatch({
          type: ADD_NEW_EXTRA_ATTRIBUTE,
          payload: response,
        });
      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors[0].length > 0) {
          if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.code && err.graphQLErrors[0].extensions.code === 400 && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
            if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
              dispatch(
                addNewExtraAttributeFailed(
                  err.graphQLErrors[0].extensions.errors[0].msg
                )
              );
            }
          }
          else {
            dispatch(
              addNewExtraAttributeFailed(
                err.graphQLErrors[0].message
              )
            );
          }
        }
        else {
          dispatch(
            addNewExtraAttributeFailed(
              "Something went wrong"
            )
          );
        }
      });
  };
}

export function updateExtraAttribute(id, values) {
  return (dispatch) => {
    dispatch(updateExtraAttributeLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation {
          updateExtraAttribute (
            municipalityId:"${id}",
            oldExtraAttribute:"${values.old_extra_attribute}",
            newExtraAttribute:"${values.extra_attribute}"
          )
          }
            `,
      })
      .then((response) => {
        dispatch({
          type: UPDATE_EXTRA_ATTRIBUTE,
          payload: response,
        });

      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors[0].length > 0) {
          if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.code && err.graphQLErrors[0].extensions.code === 400 && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
            if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
              dispatch(
                updateExtraAttributeFailed(
                  err.graphQLErrors[0].extensions.errors[0].msg
                )
              );
            }
          }
          else {
            dispatch(
              updateExtraAttributeFailed(
                err.graphQLErrors[0].message
              )
            );
          }
        }
        else {
          dispatch(
            updateExtraAttributeFailed(
              "Something went wrong"
            )
          );
        }
      });
  };
}

export function deleteExtraAttribute(id, extraAttribute) {
  return (dispatch) => {
    dispatch(deleteExtraAttributeLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation {
          removeExtraAttribute (
            municipalityId:"${id}",
            extraAttribute:"${extraAttribute}"
          )
          }
            `,
      })
      .then((response) => {
        dispatch({
          type: DELETE_EXTRA_ATTRIBUTE,
          payload: response,
        });
      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors[0].length > 0) {
          dispatch(
            deleteExtraAttributeFailed(
              err.graphQLErrors[0].message
            )
          );
        }
        else {
          dispatch(
            deleteExtraAttributeFailed(
              "something went wrong"
            )
          );
        }
      });
  };
}

export function deleteRemark(id, remarkId) {
  return (dispatch) => {
    dispatch(deleteRemarkLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation {
          deleteRemark ( input: {
            refugeeId:"${id}",
            remarkId:"${remarkId}"
          })
            {
              remarks {
                _id,
                remark,
                date
              }
            }
          }
            `,
      })
      .then((response) => {
        dispatch({
          type: DELETE_REMARK,
          payload: response,
        });
      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors[0].length > 0) {
          dispatch(
            deleteRemarkFailed(err.graphQLErrors[0].message)
          );
        }
        else {
          dispatch(
            deleteRemarkFailed("something went wrong")
          );
        }
      });
  };
}

export function addNewRemark(id, data) {
  return (dispatch) => {
    dispatch(addNewRemarkLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation {
          addRemark(input: {
            refugeeId: "${id}",
            remark: "${data.remark}",
            date : "${data.date}"
          }){
            remarks {
            _id,
              remark,
              date
          }
          }
          }
            `,
      })
      .then((response) => {
        dispatch({
          type: ADD_NEW_REMARK,
          payload: response,
        });
      })
      .catch((err) => {
        if (err.graphQLErrors && err.graphQLErrors[0].length > 0) {
          if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.code && err.graphQLErrors[0].extensions.code === 400 && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
            if (err.graphQLErrors[0].extensions && err.graphQLErrors[0].extensions.errors && err.graphQLErrors[0].extensions.errors.length > 0) {
              dispatch(
                addNewRemarkFailed(
                  err.graphQLErrors[0].extensions.errors[0].msg
                )
              );
            }
          }
          else {
            dispatch(
              addNewRemarkFailed(err.graphQLErrors[0].message)
            );
          }
        }
        else {
          dispatch(
            addNewRemarkFailed("Something went wrong")
          );
        }
      });
  };
}

// GET AllUnAssignedRefuges  MAIN ACTION

export function getAllUnAssignedRefuges(page, limit, mid = "") {
  return (dispatch) => {
    dispatch(AllUnAssignedRefugesIsLoading(true));

    client
      .query({
        query: gql`
          {
            listUnAssignedRefugees(page: ${parseInt(page)}, limit: ${parseInt(
          limit
        )},filter:{mentorId: "${mid}"}){
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
      firstName
        lastName
        email
        phoneNumber
      intakeDate
      mentor{
        _id
       firstName
        lastName
        email
        phoneNumber
      }
              }
            }
          }
          `,
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_UNASSIGNED_REFUGES,
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
              AllUnAssignedRefugesFailed(
                JSON.stringify(err.graphQLErrors[0].message)
              )
            );
          } else {
            dispatch(
              AllUnAssignedRefugesFailed("error in list or not found list")
            );
          }
        }
      });
  };
}

// GET AllAssignedRefuges  MAIN ACTION

export function getAllAssignedRefuges(page, limit, mid = "") {
  return (dispatch) => {
    dispatch(AllAssignedRefugesIsLoading(true));

    client
      .query({
        query: gql`
        {
          listAllRefugees(page: ${parseInt(page)}, limit: ${parseInt(
          limit
        )},filter:{mentorId: "${mid}"}){
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
    name
      email
      phoneNumber
    intakeDate
    mentor{
      _id
     name
      email
      phoneNumber
    }
            }
          }
        }
        `,
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_ASSIGNED_REFUGES,
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
              AllAssignedRefugesFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(
              AllAssignedRefugesFailed("error in list or not found list")
            );
          }
        }
      });
  };
}

// GET AllPipplan  MAIN ACTION

export function getAllPipplan(pipPlanId) {
  return (dispatch) => {
    dispatch(AllPipplanIsLoading(true));

    client
      .query({
        query: gql`
        {
          getPIPPlan(pipPlanId: "${pipPlanId}"){
            pipPlan{
              date
              participantInfo{
                citizenServiceNumber
                clientNumber
                gender
                fullName
                address
                phoneNumber
                birthDate
                nationality
                maritalStatus
                languagesAtHome
              },
              projectDetails {
                projectName
                projectManager
                phoneNumber
                registrationDate
                intakeDate
                expectedStartDate
                expectedEndDate
              },
               projectPlanForProgress {
                offerRoutes {
                  literacyCourse
                  civicIntegrationCourse
                  stateExam
                },
                classroomHoursPerWeek
                selfStudyHoursPerWeek
                languageCoachHours
                motivationPathChoice
              },
                 projectPlanIntegration {
                offerRoutes {
                  developSpeakingSkills 
                  participationInSociety 
                  gettingToKnowEnvironment
                  developingTalentsWithInDutchSociety
                  additionalExercisesForIntegrationProgram
                  developForFutureEducation
                  developForFutureJob
                  other
                  otherField
                  
                },    
                  collaborationOrganizations {
                  stichtingWelKom
                  municipalityOfVenlo
                  informationAndAdvicePuntun
                  greenLightFoundation
                  housesOfTheDistrictOfVenlo
                  taalhuisVenlo
                  languageVolunteersVenlo
                  vwnVenlo
                  guildTraining
                  idwNetherlands
                  uafNetherlands
                  venloLibrary
                  ppdLimburg
                  springChildcare
                  primarySchoolsInMunicipalityOfVenlo
                  other
                  otherField
                }
        
            },
            volunteerWork {
              purposeOfRegistration
              talentParticipant
              participantPossibilities
              organization
              contact
              phoneNumber
              registrationDate
              startDate
            },
            evaluationConversationAndResults {
              date1,
              conversation1,
              date2,
              conversation2,
              date3,
              conversation3,
              date4,
              conversation4
            },
            projectPlanParticipationOrWork {
              offerRoutes {
                trialMonth,
                threeMonths,
                sixMonths,
                extensionSixMonths
              },
              workingHours,
              laborTraining {
                followWorkInstruction,
                giveReceiveFeedback,
                houseRules,
                dayRhythm,
                employeeSkills,
                jobInterviewSkills
              },
              intermediateObjectives {
                learningToWork
                learningToDealWithColleague
                toCommunicate
                apply
                createResume
              },
              finalObjectives{
                jobInterviewSkills
                employeeSkills
                trialPlacement
                regularJobWithTraining
                regularJob
                explanation
              }
            },

            }
          }
        }
        
      
        `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_PIPPLAN,
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
          if (err.graphQLErrors && err.graphQLErrors.length) {
            dispatch(
              AllPipplanFailed(err.graphQLErrors[0].message)
            );
          } else {
            dispatch(AllPipplanFailed("Something went wrong"));
          }
        }
      });
  };
}

// GET AllPipplanVersions  MAIN ACTION

export function getAllPipplanVersions(refugeeId, page, limit) {
  return (dispatch) => {
    dispatch(AllPipplanIsLoading(true));

    client
      .query({
        query: gql`
        {
          listAllPIPPlanVersions(refugeeId: "${refugeeId}", page: ${parseInt(
          page
        )}, limit: ${parseInt(limit)}) {
            docs{
              id
              version
              createdAt
            }
            totalDocs
            limit
            page
            totalPages
            hasNextPage
            nextPage
            hasPrevPage
            prevPage
            pagingCounter
          }
        }
        
      
        `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_PIPPLAN_VERSIONS,
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
          if (err.graphQLErrors && err.graphQLErrors.length) {
            dispatch(
              AllPipplanVersionsFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(AllPipplanVersionsFailed("Something went wrong"));
          }
        }
      });
  };
}

// GET AllRefuges  MAIN ACTION

export function getAllRefuges(page, limit, mid, search = '', nameSearch = '', role = '') {
  return (dispatch) => {
    dispatch(AllRefugesIsLoading(true));

    client
      .query({
        query: gql`
        {
          listAllRefugees(page: ${parseInt(page)}, limit: ${parseInt(
          limit
        )},filter:{municipalityId: "${mid}", email: "${search}"},search:{text: "${nameSearch}", role: "${role}"}){
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
    name
      email
      phoneNumber
      pipPlanSummary{
        latestVersion
        startDate
        endDate
      }
    intakeDate
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
          type: GET_ALL_REFUGES,
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
              AllRefugesFailed(err.graphQLErrors[0].message)
            );
          } else {
            dispatch(
              AllRefugesFailed("Something went wrong")
            );
          }
        }
      });
  };
}
// GET AllNotifications  MAIN ACTION

export function getAllNotifications(page, limit, rid) {
  return (dispatch) => {
    dispatch(AllNotificationsIsLoading(true));

    client
      .query({
        query: gql`
        {
          listAllNotifications(page: ${parseInt(page)}, limit: ${parseInt(
          limit
        )},filter:{refugeeId: "${rid}"}){
            totalDocs
            totalUnSeen
            limit
            page
            totalPages
            hasNextPage
            hasPrevPage
            nextPage
            prevPage
            pagingCounter
            docs{
              sender {
                userId
                role
              }
              receiver {
                userId
                role
              }
              entity
              entityType
              meta
              isSeen
              seenTime
              createdAt
            }
          }
        }
        `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_NOTIFICATIONS,
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
              AllNotificationsFailed(err.graphQLErrors[0].message)
            );
          } else {
            dispatch(
              AllNotificationsFailed("Something went wrong")
            );
          }
        }
      });
  };
}
// GET AllAgendas  MAIN ACTION

export function getAllAgendas(refugeeId, agendaStartDate, agendaEndDate) {
  return (dispatch) => {
    dispatch(AllAgendasIsLoading(true));

    client
      .query({
        query: gql`
        {
          listAllAgendas(refugeeId: "${refugeeId}", agendaStartDate: "${agendaStartDate}", agendaEndDate:"${agendaEndDate}"){
            
            agendas {
              _id
              refugeeId
              agendaDate
              events {
                _id
                title
                startDate
                endDate
                reminderBefore
                bookedWith{
                  userId
                  role
                }
                bookedBy{
                  userId
                  role
                }
                notes{
                  note
                  userId
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
          type: GET_ALL_AGENDAS,
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
              AllAgendasFailed(err.graphQLErrors[0].message)
            );
          } else {
            dispatch(
              AllAgendasFailed("Something went wrong")
            );
          }
        }
      });
  };
}

export function addNewPip(data) {
  return (dispatch) => {
    dispatch(addNewPipLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation {
          addPIPPlan ( input: {
            refugeeId: "${data.refugeeId}",
            pipPlan: {
              date: "${data.date}",
              participantInfo: {
                citizenServiceNumber: "${data.citizenServiceNumber}",
                clientNumber: "${data.clientNumber}",
                gender: "Male",
                fullName: "${data.fullName}",
                address: "${data.address}",
                phoneNumber: "${data.phoneNumber}",
                birthDate: "${data.birthDate}",
                nationality: "${data.nationality}",
                maritalStatus: "${data.maritalStatus}",
                languagesAtHome: "${data.languagesAtHome}"
              },
              projectDetails: {
                projectName: "${data.projectName}",
                projectManager: "${data.projectManager}",
                phoneNumber: "${data.projectManagerphoneNumber}",
                registrationDate: "${data.registrationDate}",
                intakeDate: "${data.intakeDate}",
                expectedStartDate: "${data.expectedStartDate}",
                expectedEndDate: "${data.expectedEndDate}"
              },
              projectPlanForProgress: {
                offerRoutes: {
                  literacyCourse: ${data.literacyCourse},
                  civicIntegrationCourse: ${data.civicIntegrationCourse},
                  stateExam: ${data.stateExam}
                },
                classroomHoursPerWeek: "${data.classroomHoursPerWeek}",
                selfStudyHoursPerWeek: "${data.selfStudyHoursPerWeek}",
                languageCoachHours: "${data.languageCoachHours}",
                motivationPathChoice: "${data.motivationPathChoice}"
              },
              projectPlanIntegration: {
                offerRoutes: {
                  developSpeakingSkills: ${data.developSpeakingSkills},
                  participationInSociety: ${data.participationInSociety},
                  gettingToKnowEnvironment: ${data.gettingToKnowEnvironment},
                  developingTalentsWithInDutchSociety: ${data.developingTalentsWithInDutchSociety},
                  additionalExercisesForIntegrationProgram: ${data.additionalExercisesForIntegrationProgram},
                  developForFutureEducation: ${data.developForFutureEducation},
                  developForFutureJob: ${data.developForFutureJob},
                  other: ${data.projectPlanIntegrationother},
                  otherField: "${data.projectPlanIntegrationotherField}"
                },
                collaborationOrganizations: {
                  stichtingWelKom: ${data.stichtingWelKom},
                  municipalityOfVenlo: ${data.municipalityOfVenlo},
                  informationAndAdvicePuntun: ${data.informationAndAdvicePuntun},
                  greenLightFoundation: ${data.greenLightFoundation},
                  housesOfTheDistrictOfVenlo: ${data.housesOfTheDistrictOfVenlo},
                  taalhuisVenlo: ${data.taalhuisVenlo},
                  languageVolunteersVenlo: ${data.languageVolunteersVenlo},
                  vwnVenlo: ${data.vwnVenlo},
                  guildTraining: ${data.guildTraining},
                  idwNetherlands: ${data.idwNetherlands},
                  uafNetherlands: ${data.uafNetherlands},
                  venloLibrary: ${data.venloLibrary},
                  ppdLimburg: ${data.ppdLimburg},
                  springChildcare: ${data.springChildcare},
                  primarySchoolsInMunicipalityOfVenlo: ${data.primarySchoolsInMunicipalityOfVenlo},
                  other: ${data.collaborationOrganizationsother},
                  otherField: "${data.collaborationOrganizationsotherField}"
                }
            },
            volunteerWork: {
              purposeOfRegistration: "${data.purposeOfRegistration}",
              talentParticipant: "${data.talentParticipant}",
              participantPossibilities: "${data.participantPossibilities}",
              organization: "${data.organization}",
              contact: "${data.contact}",
              phoneNumber: "${data.volunteerWorkphoneNumber}",
              registrationDate: "${data.volunteerWorkphoneregistrationDate}",
              startDate: "${data.startDate}"
            },
            evaluationConversationAndResults: {
              date1: "${data.date1}",
              conversation1: "${data.conversation1}",
              date2: "${data.date2}",
              conversation2: "${data.conversation2}",
              date3: "${data.date3}",
              conversation3: "${data.conversation3}",
              date4: "${data.date4}",
              conversation4: "${data.conversation4}"
            },
            projectPlanParticipationOrWork: {
              offerRoutes: {
                trialMonth: ${data.trialMonth},
                threeMonths: ${data.threeMonths},
                sixMonths: ${data.sixMonths},
                extensionSixMonths: ${data.extensionSixMonths}
              },
              workingHours: "${data.workingHours}",
              laborTraining: {
                followWorkInstruction: ${data.followWorkInstruction},
                giveReceiveFeedback: ${data.giveReceiveFeedback},
                houseRules: ${data.houseRules},
                dayRhythm: ${data.dayRhythm},
                employeeSkills: ${data.employeeSkills},
                jobInterviewSkills: ${data.jobInterviewSkills}
              },
              intermediateObjectives: {
                learningToWork: ${data.learningToWork},
                learningToDealWithColleague: ${data.learningToDealWithColleague},
                toCommunicate: ${data.toCommunicate},
                apply: ${data.apply},
                createResume: ${data.createResume}
              },
              finalObjectives: {
                jobInterviewSkills: ${data.jobInterviewSkills},
                employeeSkills: ${data.employeeSkills},
                trialPlacement: ${data.trialPlacement},
                regularJobWithTraining: ${data.regularJobWithTraining},
                regularJob: ${data.regularJob},
                explanation: "${data.explanation}"
              }
            },
            signatures: {
              municipalitySignatureDate: "${data.municipalitySignatureDate}",
              municipalitySignatureUrl: "${data.municipalitySignatureUrl}",
              counselorSignatureDate: "${data.counselorSignatureDate}",
              counselorSignatureUrl: "${data.counselorSignatureUrl}",
              participantSignatureDate: "${data.participantSignatureDate}",
              participantSignatureUrl: "${data.participantSignatureUrl}"
            }
          }
          }) 
          {
            pipPlan {
              date
            }
          }
        }
            `,
      })
      .then((response) => {
        dispatch({
          type: ADD_NEW_PIP,
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
                  addNewPipFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                addNewPipFailed(err.graphQLErrors[0].message)
              );
            }
          } else {
            dispatch(addNewPipFailed("Error in add New Pip"));
          }
        }
      });
  };
}

export function updatePip(data) {
  return (dispatch) => {
    dispatch(updatePipLoading(true));

    client
      .mutate({
        mutation: gql`
        mutation {
          addPIPPlan ( input: {
            refugeeId: "${data.refugeeId}",
            pipPlan: {
              date: "${data.date}",
              participantInfo: {
                citizenServiceNumber: "${data.citizenServiceNumber}",
                clientNumber: "${data.clientNumber}",
                gender: "Male",
                fullName: "${data.fullName}",
                address: "${data.address}",
                phoneNumber: "${data.phoneNumber}",
                birthDate: "${data.birthDate}",
                nationality: "${data.nationality}",
                maritalStatus: "${data.maritalStatus}",
                languagesAtHome: "${data.languagesAtHome}"
              },
              projectDetails: {
                projectName: "${data.projectName}",
                projectManager: "${data.projectManager}",
                phoneNumber: "${data.projectManagerphoneNumber}",
                registrationDate: "${data.registrationDate}",
                intakeDate: "${data.intakeDate}",
                expectedStartDate: "${data.expectedStartDate}",
                expectedEndDate: "${data.expectedEndDate}"
              },
              projectPlanForProgress: {
                offerRoutes: {
                  literacyCourse: ${data.literacyCourse},
                  civicIntegrationCourse: ${data.civicIntegrationCourse},
                  stateExam: ${data.stateExam}
                },
                classroomHoursPerWeek: "${data.classroomHoursPerWeek}",
                selfStudyHoursPerWeek: "${data.selfStudyHoursPerWeek}",
                languageCoachHours: "${data.languageCoachHours}",
                motivationPathChoice: "${data.motivationPathChoice}"
              },
              projectPlanIntegration: {
                offerRoutes: {
                  developSpeakingSkills: ${data.developSpeakingSkills},
                  participationInSociety: ${data.participationInSociety},
                  gettingToKnowEnvironment: ${data.gettingToKnowEnvironment},
                  developingTalentsWithInDutchSociety: ${data.developingTalentsWithInDutchSociety},
                  additionalExercisesForIntegrationProgram: ${data.additionalExercisesForIntegrationProgram},
                  developForFutureEducation: ${data.developForFutureEducation},
                  developForFutureJob: ${data.developForFutureJob},
                  other: ${data.projectPlanIntegrationother},
                  otherField: "${data.projectPlanIntegrationotherField}"
                },
                collaborationOrganizations: {
                  stichtingWelKom: ${data.stichtingWelKom},
                  municipalityOfVenlo: ${data.municipalityOfVenlo},
                  informationAndAdvicePuntun: ${data.informationAndAdvicePuntun},
                  greenLightFoundation: ${data.greenLightFoundation},
                  housesOfTheDistrictOfVenlo: ${data.housesOfTheDistrictOfVenlo},
                  taalhuisVenlo: ${data.taalhuisVenlo},
                  languageVolunteersVenlo: ${data.languageVolunteersVenlo},
                  vwnVenlo: ${data.vwnVenlo},
                  guildTraining: ${data.guildTraining},
                  idwNetherlands: ${data.idwNetherlands},
                  uafNetherlands: ${data.uafNetherlands},
                  venloLibrary: ${data.venloLibrary},
                  ppdLimburg: ${data.ppdLimburg},
                  springChildcare: ${data.springChildcare},
                  primarySchoolsInMunicipalityOfVenlo: ${data.primarySchoolsInMunicipalityOfVenlo},
                  other: ${data.collaborationOrganizationsother},
                  otherField: "${data.collaborationOrganizationsotherField}"
                }
            },
            volunteerWork: {
              purposeOfRegistration: "${data.purposeOfRegistration}",
              talentParticipant: "${data.talentParticipant}",
              participantPossibilities: "${data.participantPossibilities}",
              organization: "${data.organization}",
              contact: "${data.contact}",
              phoneNumber: "${data.volunteerWorkphoneNumber}",
              registrationDate: "${data.volunteerWorkphoneregistrationDate}",
              startDate: "${data.startDate}"
            },
            evaluationConversationAndResults: {
              date1: "${data.date1}",
              conversation1: "${data.conversation1}",
              date2: "${data.date2}",
              conversation2: "${data.conversation2}",
              date3: "${data.date3}",
              conversation3: "${data.conversation3}",
              date4: "${data.date4}",
              conversation4: "${data.conversation4}"
            },
            projectPlanParticipationOrWork: {
              offerRoutes: {
                trialMonth: ${data.trialMonth},
                threeMonths: ${data.threeMonths},
                sixMonths: ${data.sixMonths},
                extensionSixMonths: ${data.extensionSixMonths}
              },
              workingHours: "${data.workingHours}",
              laborTraining: {
                followWorkInstruction: ${data.followWorkInstruction},
                giveReceiveFeedback: ${data.giveReceiveFeedback},
                houseRules: ${data.houseRules},
                dayRhythm: ${data.dayRhythm},
                employeeSkills: ${data.employeeSkills},
                jobInterviewSkills: ${data.jobInterviewSkills}
              },
              intermediateObjectives: {
                learningToWork: ${data.learningToWork},
                learningToDealWithColleague: ${data.learningToDealWithColleague},
                toCommunicate: ${data.toCommunicate},
                apply: ${data.apply},
                createResume: ${data.createResume}
              },
              finalObjectives: {
                jobInterviewSkills: ${data.jobInterviewSkills},
                employeeSkills: ${data.employeeSkills},
                trialPlacement: ${data.trialPlacement},
                regularJobWithTraining: ${data.regularJobWithTraining},
                regularJob: ${data.regularJob},
                explanation: "${data.explanation}"
              }
            },
            signatures: {
              municipalitySignatureDate: "${data.municipalitySignatureDate}",
              municipalitySignatureUrl: "${data.municipalitySignatureUrl}",
              counselorSignatureDate: "${data.counselorSignatureDate}",
              counselorSignatureUrl: "${data.counselorSignatureUrl}",
              participantSignatureDate: "${data.participantSignatureDate}",
              participantSignatureUrl: "${data.participantSignatureUrl}"
            }
          }
          }) 
          {
            pipPlan {
              date
            }
          }
        }
            `,
      })
      .then((response) => {
        dispatch({
          type: UPDATE_PIP,
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
                  updatePipFailed(
                    err.graphQLErrors[0].extensions.errors[0].msg
                  )
                );
              }
            }
            else {
              dispatch(
                updatePipFailed(err.graphQLErrors[0].message)
              );
            }
          } else {

            dispatch(updatePipFailed("Error in Update Pip"));
          }
        }
      });
  };
}

export function updatePipprogress(rid, progress) {
  return (dispatch) => {
    dispatch(updatePipprogressLoading(true));

    client
      .mutate({
        mutation: gql`
          mutation{
            updatePIPProgress(input:{
              refugeeId: "${rid}",
   pipProgress: "${progress}"
             })
   {
    pipProgress
   }
            }
            `,
      })
      .then((response) => {
        dispatch({
          type: UPDATE_PIP_PROGRESS,
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
              updatePipprogressFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(updatePipprogressFailed("Something went wrong"));
          }
        }
      });
  };
}

// GET Bredeintake  MAIN ACTION

export function getBredeintake(refugeeId) {
  return (dispatch) => {
    dispatch(BredeintakeIsLoading(true));

    client
      .query({
        query: gql`
          {
            getBredeIntakeFile(refugeeId: "${refugeeId}") {
              bredeIntakeFileUrl
              intakeDate
            }
          }
        `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_BREDEINTAKE,
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
              BredeintakeFailed(err.graphQLErrors[0].message)
            );
          } else {

            dispatch(BredeintakeFailed("error in getting bredeintake"));
          }
        }
      });
  };
}

// GET Pipprogress  MAIN ACTION

export function getPipprogress(refugeeId) {
  return (dispatch) => {
    dispatch(PipprogressIsLoading(true));

    client
      .query({
        query: gql`
          {
            getPIPProgress(refugeeId: "${refugeeId}") {
              pipProgress
            }
          }
        `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        let string = response.data.getPIPProgress.pipProgress;
        string = string.replace(/'/g, '"');
        let data = JSON.parse(string);
        dispatch({
          type: GET_PIPPROGRESS,
          payload: data,
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
          if (err.graphQLErrors && err.graphQLErrors.length) {
            dispatch(
              PipprogressFailed(err.graphQLErrors[0].message)
            );
          } else {
            dispatch(PipprogressFailed("Something went wrong"));
          }
        }
      });
  };
}

// GET getPipprogressStats  MAIN ACTION

export function getPipprogressStats(municipalityId) {
  return (dispatch) => {
    dispatch(pipprogressStatsIsLoading(true));

    client
      .query({
        query: gql`
          {
            getMunicipalityPIPProgressStats(municipalityId: "${municipalityId}") {
              pipProgressStats {
                averageLanguage,
                averagePlaceOfResidence,
                averageWellbeing,
                averageSocialContact,
                averageWork,
                averageTraining,
                averageContribution,
                averageSocialContact,
                averageSociety,
                averageSelfSustainability,
                totalProgressPercent
              }
            }
          }
        `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_PIPPROGRESS_STATS,
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
        } else {
          if (err.graphQLErrors && err.graphQLErrors.length) {
            dispatch(
              pipprogressStatsFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(pipprogressStatsFailed("Some thing went wrong"));
          }
        }
      });
  };
}

// GET Extraattributes  MAIN ACTION

export function getExtraattributes(id) {
  return (dispatch) => {
    dispatch(ExtraattributesIsLoading(true));

    client
      .query({
        query: gql`
        {
          listExtraAttributes(municipalityId: "${id}"){
            extraAttributes
            
          }
        }
        `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_EXTRA_ATTRIBUTES,
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
          if (err.graphQLErrors && err.graphQLErrors.length) {
            dispatch(
              ExtraattributesFailed(
                err.graphQLErrors[0].message
              )
            );
          } else {
            dispatch(ExtraattributesFailed("Something went wrong"));
          }
        }
      });
  };
}

// GET Remarks  MAIN ACTION

export function getRemarks(id) {
  return (dispatch) => {
    dispatch(remarksIsLoading(true));

    client
      .query({
        query: gql`
        {
          getRemarks(refugeeId: "${id}"){
            remarks {
              _id,
              remark,
              date
            }
            
          }
        }
        `,
        fetchPolicy: "network-only",
      })
      .then((response) => {
        dispatch({
          type: GET_REMARKS,
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
          if (err.graphQLErrors && err.graphQLErrors.length) {
            dispatch(
              remarksFailed(err.graphQLErrors[0].message)
            );
          } else {
            dispatch(remarksFailed("Something went wrong"));
          }
        }
      });
  };
}

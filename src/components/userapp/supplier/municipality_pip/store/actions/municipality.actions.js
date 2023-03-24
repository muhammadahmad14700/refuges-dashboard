import jwt from "jsonwebtoken";
import client from "../../../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../../login/store/actions/login.actions";

// ACTION NAMES
// ****************************** / /

// GET ALL AGENDAS
export const GET_ALL_AGENDAS = "GET_ALL_AGENDAS";
export const ALL_AGENDAS_IS_LOADING = "ALL_AGENDAS_IS_LOADING";
export const ALL_AGENDAS_FAILED = "ALL_AGENDAS_FAILED";
export const RESET_ALL_AGENDAS = "RESET_ALL_AGENDAS";




// HELPER ACTIONS CREATORS
//*************************************** */


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


// MAIN CREATORS
//********************** **************/

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
            dispatch(AllAgendasFailed("Something went wrong"))
          }
        }
      });
  };
}
import client from "../../../../../utils/client";
import { gql } from "apollo-boost";
import { logout } from "../../../login/store/actions/login.actions";

// ACTION NAMES
// ****************************** / /

// GET CHAT_HISTORY
export const GET_CHAT_HISTORY = "GET_CHAT_HISTORY";
export const CHAT_HISTORY_IS_LOADING = "CHAT_HISTORY_IS_LOADING";
export const CHAT_HISTORY_FAILED = "CHAT_HISTORY_FAILED";
export const RESET_CHAT_HISTORY = "RESET_CHAT_HISTORY";

// HELPER ACTIONS CREATORS
//*************************************** */

// GET ALL ChatHistory HELPERS
export const ChatHistoryIsLoading = (ms) => ({
  type: CHAT_HISTORY_IS_LOADING,
  payload: ms,
});

export const ChatHistoryFailed = (ms) => ({
  type: CHAT_HISTORY_FAILED,
  payload: ms,
});

export const resetChatHistory = (ms) => ({
  type: RESET_CHAT_HISTORY,
  payload: ms,
});
// MAIN CREATORS
//********************** **************/

// GET ChatHistory  MAIN ACTION

export function getChatHistory(page, limit, first, second) {
  return (dispatch) => {
    dispatch(ChatHistoryIsLoading(true));

    client
      .query({
        query: gql`
          {
            getAllChatMessages(page: ${parseInt(page)}, limit: ${parseInt(limit)}, members: ["${first}", "${second}"]){
              docs {
                id
                room
                status
                senderId
                receiverId
                type
                body
                sentTime
                seenTime
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
          type: GET_CHAT_HISTORY,
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
              ChatHistoryFailed(
                err.graphQLErrors[0].message
              )
            );
          }
          else {

            dispatch(
              ChatHistoryFailed(
                "error in getting ChatHistoryFailed"
              )
            );
          }
        }
      });
  };
}

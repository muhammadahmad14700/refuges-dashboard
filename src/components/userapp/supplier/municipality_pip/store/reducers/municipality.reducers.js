import * as Actions from "../actions";



//ALL AllAgendas Reducer
export const AllAgendasReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_AGENDAS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_AGENDAS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_AGENDAS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_ALL_AGENDAS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: [],
        success: "",
      };
    default:
      return state;
  }
};
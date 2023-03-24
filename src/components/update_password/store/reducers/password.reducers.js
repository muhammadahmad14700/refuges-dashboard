import * as Actions from "../actions";

// ADD NEW Supplier REDUCER

export const updateAdminPasswordReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.UPDATE_ADMIN_PASSWORD:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.UPDATE_ADMIN_PASSWORD_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.UPDATE_ADMIN_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_UPDATE_ADMIN_PASSWORD:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: [],
        success: ""
      };
    default:
      return state;
  }
};

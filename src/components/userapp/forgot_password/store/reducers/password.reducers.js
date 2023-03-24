import * as Actions from "../actions";

// ADD NEW Supplier REDUCER

export const requestResetAdminPasswordReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.REQUEST_RESET_ADMIN_PASSWORD:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.REQUEST_RESET_ADMIN_PASSWORD_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.REQUEST_RESET_ADMIN_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_REQUEST_RESET_ADMIN_PASSWORD:
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

export const requestVerifyAdminPasswordReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.REQUEST_VERIFY_ADMIN_PASSWORD:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.REQUEST_VERIFY_ADMIN_PASSWORD_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.REQUEST_VERIFY_ADMIN_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_VERIFY_RESET_ADMIN_PASSWORD:
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

export const resetAdminPasswordReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.RESET_ADMIN_PASSWORD:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.RESET_ADMIN_PASSWORD_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.RESET_ADMIN_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_RESET_ADMIN_PASSWORD:
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

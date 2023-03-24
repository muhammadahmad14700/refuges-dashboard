import * as Actions from "../actions";
import isEmpty from "lodash/isEmpty";

const initialState = {
  isLoading: true,
  errMsg: null,
  data: [],
};

// AUTHENTICATE USER REDUCER

export const AuthenticateUserReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
    isAuthenticated: false,
    isOtpVerified: false,
    user: {},
  },
  action
) {
  switch (action.type) {
    case Actions.ATHUENTICATE_USER:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
        isAuthenticated: !isEmpty(action.payload),
        isOtpVerified: !isEmpty(action.user),
      };
    case Actions.SET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.user,
        user: action.user,
        success: true,
        isAuthenticated: !isEmpty(action.user),
        isOtpVerified: !isEmpty(action.user),
      };
    case Actions.ATHUENTICATE_USER_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
        isAuthenticated: false,
      };
    case Actions.ATHUENTICATE_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
        isAuthenticated: false,
      };
    case Actions.RESET_ATHUENTICATE_USER:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: [],
        success: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const HandleReducer = function (state = initialState, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export const AllUsersReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ALL_USERS:
      return { ...state, isLoading: false, errMsg: null, data: action.payload };
    case Actions.ALL_USERS_LOADING:
      return { ...state, isLoading: true, errMsg: null, data: [] };
    case Actions.ALL_USERS_LOADING_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload, data: [] };
    default:
      return state;
  }
};

export const verifyOTPByAdminReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.VERIFY_OTP:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.VERIFY_OTP_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.VERIFY_OTP_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_VERIFY_OTP:
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


export const ResendOtpReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: {},
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.RESEND_OTP:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.RESEND_OTP_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.RESEND_OTP_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_RESEND_OTP:
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

import * as Actions from "../actions";

const initialState = {
  isLoading: true,
  errMsg: null,
  data: "initial data"
};

export const HandleReducer = function (state = initialState, action) {
  //   alert("HandleReducer");

  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

//ALL AdminProfile Reducer
export const adminProfileReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ADMIN_PROFILE:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ADMIN_PROFILE_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ADMIN_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    default:
      return state;
  }
};

// UPDATE Refugee REDUCER

export const UpdateProfileReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.UPDATE_PROFILE:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.UPDATE_PROFILE_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.UPDATE_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_UPDATE_PROFILE:
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

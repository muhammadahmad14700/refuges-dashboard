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

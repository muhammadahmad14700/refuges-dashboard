import * as Actions from "../actions";
//ALL AllAssignedMentors Reducer
export const AllAssignedMentorsReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_ASSIGNED_MENTORS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_ASSIGNED_MENTORS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_ASSIGNED_MENTORS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_ASSIGNED_MENTORS:
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

//ALL AllAssignedSuppliers Reducer
export const AllAssignedSuppliersReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_ASSIGNED_SUPPLIERS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_ASSIGNED_SUPPLIERS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_ASSIGNED_SUPPLIERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_ASSIGNED_SUPPLIERS:
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
//ALL AllAssignedRefuges Reducer
export const AllAssignedRefugeesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_ASSIGNED_REFUGEES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_ASSIGNED_REFUGEES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_ASSIGNED_REFUGEES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_ASSIGNED_REFUGEES:
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

//ALL AllAssignedMunicipalities Reducer
export const AllAssignedMunicipalitiesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_ASSIGNED_MUNICIPLITIES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_ASSIGNED_MUNICIPLITIES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_ASSIGNED_MUNICIPLITIES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_ASSIGNED_MUNICIPALITY:
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

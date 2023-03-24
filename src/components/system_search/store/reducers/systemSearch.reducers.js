import * as Actions from "../actions";

//ALL allSearchedMunicipalities Reducer
export const allSearchedMunicipalitiesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_SEARCHED_MUNICIPLITIES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_SEARCHED_MUNICIPLITIES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_SEARCHED_MUNICIPLITIES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_SEARCHED_MUNICIPLITIES:
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

//ALL allMiniSearchedMunicipalities Reducer
export const allMiniSearchedMunicipalitiesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_MINI_SEARCHED_MUNICIPLITIES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_MINI_SEARCHED_MUNICIPLITIES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_MINI_SEARCHED_MUNICIPLITIES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_MINI_SEARCHED_MUNICIPLITIES:
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

//ALL allSearchedManagersReducer Reducer
export const allSearchedManagersReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_SEARCHED_MANAGERS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_SEARCHED_MANAGERS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_SEARCHED_MANAGERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_SEARCHED_MANAGERS:
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

//ALL allSearchedMentorsReducer Reducer
export const allSearchedMentorsReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_SEARCHED_MENTORS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_SEARCHED_MENTORS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_SEARCHED_MENTORS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_SEARCHED_MENTORS:
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

//ALL allMiniSearchedMentorsReducer Reducer
export const allMiniSearchedMentorsReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_MINI_SEARCHED_MENTORS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_MINI_SEARCHED_MENTORS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_MINI_SEARCHED_MENTORS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_MINI_SEARCHED_MENTORS:
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

//ALL allSearchedRefugeesReducer Reducer
export const allSearchedRefugeesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_SEARCHED_REFUGEES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_SEARCHED_REFUGEES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_SEARCHED_REFUGEES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_SEARCHED_REFUGEES:
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

//ALL allMiniSearchedRefugeesReducer Reducer
export const allMiniSearchedRefugeesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_MINI_SEARCHED_REFUGEES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_MINI_SEARCHED_REFUGEES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_MINI_SEARCHED_REFUGEES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_MINI_SEARCHED_REFUGEES:
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

//ALL allSearchedSuppliersReducer Reducer
export const allSearchedSuppliersReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_SEARCHED_SUPPLIERS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_SEARCHED_SUPPLIERS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_SEARCHED_SUPPLIERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_SEARCHED_SUPPLIERS:
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

//ALL allMiniSearchedSuppliersReducer Reducer
export const allMiniSearchedSuppliersReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_MINI_SEARCHED_SUPPLIERS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_MINI_SEARCHED_SUPPLIERS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_MINI_SEARCHED_SUPPLIERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_MINI_SEARCHED_SUPPLIERS:
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

// Delete Request REDUCER

export const deleteRequestReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.DELETE_REQUEST:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.DELETE_REQUEST_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.DELETE_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_DELETE_REQUEST:
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


export const blockRequestReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.BLOCK_REQUEST:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.BLOCK_REQUEST_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.BLOCK_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_BLOCK_REQUEST:
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

export const unblockRequestReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.UNBLOCK_REQUEST:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.UNBLOCK_REQUEST_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.UNBLOCK_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_UNBLOCK_REQUEST:
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
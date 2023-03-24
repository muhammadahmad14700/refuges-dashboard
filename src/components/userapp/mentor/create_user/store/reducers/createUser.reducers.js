import * as Actions from "../actions";

//ALL setCreateUserSteps Reducer
export const setCreateUserStepsReducer = function (
  state = {
    steps: []
  },
  action
) {
  switch (action.type) {
    case Actions.SET_CREATE_USER_STEPS:
      return {
        ...state,
        steps: action.payload
      };
    case Actions.RESET_SET_CREATE_USER_STEPS:
      return {
        ...state,
        steps: [],
      };
    default:
      return state;
  }
};
// ADD NEW Municipality REDUCER

export const AddNewMunicipalityReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ADD_NEW_MUNICIPALITY:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ADD_NEW_MUNICIPALITY_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ADD_NEW_MUNICIPALITY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ADD_NEW_MUNICIPALITY:
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

// Update Municipality REDUCER

export const UpdateMunicipalityReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.UPDATE_MUNICIPALITY:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.UPDATE_MUNICIPALITY_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.UPDATE_MUNICIPALITY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_UPDATE_MUNICIPALITY:
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

// ADD NEW Mentor REDUCER

export const AddNewMentorReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.ADD_NEW_MENTOR:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.ADD_NEW_MENTOR_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.ADD_NEW_MENTOR_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_ADD_NEW_MENTOR:
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

// UPdate Mentor REDUCER

export const UpdateMentorReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.UPDATE_MENTOR:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.UPDATE_MENTOR_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.UPDATE_MENTOR_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_UPDATE_MENTOR:
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
// ADD NEW Refugee REDUCER

export const AddNewRefugeeReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.ADD_NEW_REFUGEE:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.ADD_NEW_REFUGEE_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.ADD_NEW_REFUGEE_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_ADD_NEW_REFUGEE:
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

// UPDATE Refugee REDUCER

export const UpdateRefugeeReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.UPDATE_REFUGEE:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.UPDATE_REFUGEE_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.UPDATE_REFUGEE_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_UPDATE_REFUGEE:
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

// ADD NEW Supplier REDUCER

export const AddNewSupplierReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.ADD_NEW_SUPPLIER:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.ADD_NEW_SUPPLIER_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.ADD_NEW_SUPPLIER_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_ADD_NEW_SUPPLIER:
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

// Update Supplier REDUCER

export const UpdateSupplierReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: ""
  },
  action
) {
  switch (action.type) {
    case Actions.UPDATE_SUPPLIER:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true
      };
    case Actions.UPDATE_SUPPLIER_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false
      };
    case Actions.UPDATE_SUPPLIER_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed"
      };
    case Actions.RESET_UPDATE_SUPPLIER:
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

export const assignUnassignRolesToMunicipalityReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ASSIGN_UNASSIGN_ROLES_TO_MUNICIPALITY:
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

export const assignUnassignRolesToMentorReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_MENTOR:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_MENTOR_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_MENTOR_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ASSIGN_UNASSIGN_ROLES_TO_MENTOR:
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

export const assignUnassignRolesToSupplierReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ASSIGN_UNASSIGN_ROLES_TO_SUPPLIER:
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

export const assignUnassignRolesToRefugeeReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_REFUGEE:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_REFUGEE_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ASSIGN_UNASSIGN_ROLES_TO_REFUGEE_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ASSIGN_UNASSIGN_ROLES_TO_REFUGEE:
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

//getMunicipalitySummaryReducer
export const getMunicipalitySummaryReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_MUNICIPALITY_SUMMARY:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.MUNICIPALITY_SUMMARY_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.MUNICIPALITY_SUMMARY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_MUNICIPALITY_SUMMARY:
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

//getMentorSummaryReducer
export const getMentorSummaryReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_MENTOR_SUMMARY:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.MENTOR_SUMMARY_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.MENTOR_SUMMARY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_MENTOR_SUMMARY:
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

//getRefugeeSummaryReducer
export const getRefugeeSummaryReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_REFUGEE_SUMMARY:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.REFUGEE_SUMMARY_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.REFUGEE_SUMMARY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_REFUGEE_SUMMARY:
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

//getSupplierSummaryReducer
export const getSupplierSummaryReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_SUPPLIER_SUMMARY:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.SUPPLIER_SUMMARY_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.SUPPLIER_SUMMARY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_SUPPLIER_SUMMARY:
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
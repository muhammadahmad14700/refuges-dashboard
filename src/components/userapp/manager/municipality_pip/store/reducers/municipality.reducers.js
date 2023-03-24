import * as Actions from "../actions";

//ALL AllNotifications Reducer
export const AllNotificationsReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_NOTIFICATIONS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_NOTIFICATIONS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_NOTIFICATIONS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_NOTIFICATIONS:
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
export const AddNewRefugeReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ADD_NEW_REFUGE:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ADD_NEW_REFUGE_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ADD_NEW_REFUGE_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ADD_NEW_REFUGE:
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

// ADD NEW Rules REDUCER

export const AddNewRulesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ADD_NEW_RULES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ADD_NEW_RULES_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ADD_NEW_RULES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ADD_NEW_RULES:
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

// ADD NEW ExtraAttribute REDUCER

export const AddNewExtraAttributeReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ADD_NEW_EXTRA_ATTRIBUTE:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ADD_NEW_EXTRA_ATTRIBUTE_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ADD_NEW_EXTRA_ATTRIBUTE_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ADD_NEW_EXTRA_ATTRIBUTE:
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

// Update ExtraAttribute REDUCER

export const UpdateExtraAttributeReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.UPDATE_EXTRA_ATTRIBUTE:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.UPDATE_EXTRA_ATTRIBUTE_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.UPDATE_EXTRA_ATTRIBUTE_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_UPDATE_EXTRA_ATTRIBUTE:
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


// Delete ExtraAttribute REDUCER

export const DeleteExtraAttributeReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.DELETE_EXTRA_ATTRIBUTE:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.DELETE_EXTRA_ATTRIBUTE_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.DELETE_EXTRA_ATTRIBUTE_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_DELETE_EXTRA_ATTRIBUTE:
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

// ADD NEW Remark REDUCER

export const AddNewRemarkReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ADD_NEW_REMARK:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ADD_NEW_REMARK_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ADD_NEW_REMARK_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ADD_NEW_REMARK:
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

// ADD NEW Event REDUCER

export const AddNewEventReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ADD_NEW_EVENT:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ADD_NEW_EVENT_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ADD_NEW_EVENT_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ADD_NEW_EVENT:
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

// Delete Event REDUCER

export const deleteEventReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.DELETE_EVENT:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.DELETE_EVENT_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.DELETE_EVENT_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_DELETE_EVENT:
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

// Edit Event REDUCER

export const editEventReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.EDIT_EVENT:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.EDIT_EVENT_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.EDIT_EVENT_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_EDIT_EVENT:
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

//ALL AllUnAssignedRefuges Reducer
export const AllUnAssignedRefugesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_UNASSIGNED_REFUGES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_UNASSIGNED_REFUGES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_UNASSIGNED_REFUGES_FAILED:
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

//ALL AllAssignedRefuges Reducer
export const AllAssignedRefugesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_ASSIGNED_REFUGES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_ASSIGNED_REFUGES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_ASSIGNED_REFUGES_FAILED:
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

//ALL AllRefuges Reducer
export const AllRefugesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_REFUGES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_REFUGES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_REFUGES_FAILED:
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

//ALL AllPipplan Reducer
export const AllPipplanReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_PIPPLAN:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_PIPPLAN_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_PIPPLAN_FAILED:
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

//ALL AllPipplan Versions Reducer
export const AllPipplanVersionsReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_ALL_PIPPLAN_VERSIONS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ALL_PIPPLAN_VERSIONS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.ALL_PIPPLAN_VERSIONS_FAILED:
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

// ADD NEW Pip REDUCER

export const AddNewPipReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.ADD_NEW_PIP:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.ADD_NEW_PIP_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.ADD_NEW_PIP_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_ADD_NEW_PIP:
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

// UPDATE Pip REDUCER

export const UpdatePipReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.UPDATE_PIP:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.UPDATE_PIP_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.UPDATE_PIP_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_UPDATE_PIP:
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

// UPDATE Pipprogress REDUCER

export const UpdatePipprogressReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.UPDATE_PIP_PROGRESS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.UPDATE_PIP_PROGRESS_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.UPDATE_PIP_PROGRESS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_UPDATE_PIP_PROGRESS:
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


//ALL Bredeintake Reducer
export const BredeintakeReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_BREDEINTAKE:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.BREDEINTAKE_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.BREDEINTAKE_FAILED:
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


//PipprogressReducer Reducer
export const PipprogressReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_PIPPROGRESS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.PIPPROGRESS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.PIPPROGRESS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_GET_PIPPROGRESS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: undefined,
        success: "",
      };
    default:
      return state;
  }
};

//PipprogressStatsReducer Reducer
export const PipprogressStatsReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_PIPPROGRESS_STATS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.PIPPROGRESS_STATS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.PIPPROGRESS_STATS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: null,
        success: "failed",
      };
    case Actions.RESET_GET_PIPPROGRESS_STATS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: undefined,
        success: "",
      };
    default:
      return state;
  }
};


//Pipprogress Reducer
export const ExtraattributesReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_EXTRA_ATTRIBUTES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.EXTRA_ATTRIBUTES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.EXTRA_ATTRIBUTES_FAILED:
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

//remarks Reducer
export const getRemarksReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: null,
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.GET_REMARKS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.REMARKS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: null,
        success: false,
      };
    case Actions.REMARKS_FAILED:
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

// Delete Remark REDUCER

export const deleteRemarkReducer = function (
  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  },
  action
) {
  switch (action.type) {
    case Actions.DELETE_REMARK:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        data: action.payload,
        success: true,
      };
    case Actions.DELETE_REMARK_IS_lOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: null,
        data: [],
        success: false,
      };
    case Actions.DELETE_REMARK_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payload,
        data: [],
        success: "failed",
      };
    case Actions.RESET_REMARK:
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
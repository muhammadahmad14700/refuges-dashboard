import { combineReducers } from "redux";
import { requestResetAdminPasswordReducer, requestVerifyAdminPasswordReducer, resetAdminPasswordReducer } from "./password.reducers";

const reducer = combineReducers({
  requestResetAdminPasswordReducer,
  requestVerifyAdminPasswordReducer,
  resetAdminPasswordReducer
});

export default reducer;

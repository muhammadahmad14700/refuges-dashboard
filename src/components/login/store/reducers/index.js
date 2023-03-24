import { combineReducers } from "redux";
import {
  HandleReducer,
  AuthenticateUserReducer,
  AllUsersReducer,
  verifyOTPByAdminReducer,
  ResendOtpReducer
} from "./login.reducers";

const reducer = combineReducers({
  HandleReducer,
  AuthenticateUserReducer,
  AllUsersReducer,
  verifyOTPByAdminReducer,
  ResendOtpReducer
});

export default reducer;

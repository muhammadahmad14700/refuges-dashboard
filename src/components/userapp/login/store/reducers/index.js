import { combineReducers } from "redux";
import {
  HandleReducer,
  AuthenticateChildUserReducer,
  VerifyOtpReducer,
  ResendOtpReducer,
} from "./login.reducers";

const reducer = combineReducers({
  HandleReducer,
  AuthenticateChildUserReducer,

  VerifyOtpReducer,
  ResendOtpReducer,
});

export default reducer;

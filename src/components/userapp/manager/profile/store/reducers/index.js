import { combineReducers } from "redux";
import { HandleReducer, adminProfileReducer, UpdateProfileReducer } from "./profile.reducers";

const reducer = combineReducers({
  HandleReducer,
  adminProfileReducer,
  UpdateProfileReducer
});

export default reducer;

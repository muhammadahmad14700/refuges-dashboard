import { combineReducers } from "redux";
import { HandleReducer, UpdateProfileReducer, adminProfileReducer } from "./profile.reducers";

const reducer = combineReducers({
  HandleReducer,
  adminProfileReducer,
  UpdateProfileReducer
});

export default reducer;

import { combineReducers } from "redux";
import { HandleReducer,adminProfileReducer } from "./profile.reducers";

const reducer = combineReducers({
  HandleReducer,
  adminProfileReducer
});

export default reducer;

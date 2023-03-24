import { combineReducers } from "redux";
import { chatHistoryReducer } from "./chat.reducers";

const reducer = combineReducers({
  chatHistoryReducer
});

export default reducer;

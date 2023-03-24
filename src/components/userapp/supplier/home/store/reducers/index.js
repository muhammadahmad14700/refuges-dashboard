import { combineReducers } from "redux";
import {
  allSearchedRefugeesReducer
} from "./home.reducers";
import { adminProfileReducer } from "../../../profile/store/reducers/profile.reducers"
const reducer = combineReducers({
  adminProfileReducer,
  allSearchedRefugeesReducer
});

export default reducer;

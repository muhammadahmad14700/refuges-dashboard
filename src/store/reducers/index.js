import { combineReducers } from "redux";
// import {AuthenticateUserReducer} from "../../components/login/store/reducers/login.reducers";
import { AuthenticateChildUserReducer } from "../../components/userapp/login/store/reducers/login.reducers";

const createReducer = (asyncReducers) =>
  combineReducers({
    // AuthenticateUserReducer,
    AuthenticateChildUserReducer,
    ...asyncReducers,
  });

export default createReducer;

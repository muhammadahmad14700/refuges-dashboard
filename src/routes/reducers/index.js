import { combineReducers } from "redux";
import { AuthenticateChildUserReducer } from "../../components/userapp/login/store/reducers/login.reducers";
import { AuthenticateUserReducer } from "../../components/login/store/reducers/login.reducers";

const reducer = combineReducers({
  AuthenticateChildUserReducer,
  AuthenticateUserReducer,
});

export default reducer;

import { combineReducers } from "redux";
import { PipprogressStatsReducer } from "../../../municipality_pip/store/reducers/municipality.reducers";
import {
  AddNewMunicipalityReducer,
  AllAssignedMunicipalitiesReducer,
  updateMunicipalityContactInfoReducer
} from "./home.reducers";
import { adminProfileReducer } from "../../../profile/store/reducers/profile.reducers";

const reducer = combineReducers({
  AddNewMunicipalityReducer,
  AllAssignedMunicipalitiesReducer,
  PipprogressStatsReducer,
  updateMunicipalityContactInfoReducer,
  adminProfileReducer
});

export default reducer;

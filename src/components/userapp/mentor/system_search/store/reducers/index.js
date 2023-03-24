import { combineReducers } from "redux";
import { AllAssignedMunicipalitiesReducer } from "../../../home/store/reducers/home.reducers"
import { allMiniSearchedSuppliersReducer, blockRequestReducer, unblockRequestReducer, allSearchedSuppliersReducer, allSearchedMentorsReducer, allSearchedRefugeesReducer, deleteRequestReducer } from "./systemSearch.reducers"

const reducer = combineReducers({
  AllAssignedMunicipalitiesReducer,
  allSearchedMentorsReducer,
  allSearchedRefugeesReducer,
  allSearchedSuppliersReducer,
  deleteRequestReducer,
  blockRequestReducer,
  unblockRequestReducer,
  allMiniSearchedSuppliersReducer
});

export default reducer;
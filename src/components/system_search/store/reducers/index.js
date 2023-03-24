import { combineReducers } from "redux";
import { AllAssignedMunicipalitiesReducer } from "../../../home/store/reducers/home.reducers"
import { allMiniSearchedRefugeesReducer, allMiniSearchedSuppliersReducer, allMiniSearchedMentorsReducer, allMiniSearchedMunicipalitiesReducer, blockRequestReducer, unblockRequestReducer, allSearchedMunicipalitiesReducer, allSearchedSuppliersReducer, allSearchedManagersReducer, allSearchedMentorsReducer, allSearchedRefugeesReducer, deleteRequestReducer } from "./systemSearch.reducers"

const reducer = combineReducers({
  AllAssignedMunicipalitiesReducer,
  allSearchedMunicipalitiesReducer,
  allSearchedManagersReducer,
  allSearchedMentorsReducer,
  allSearchedRefugeesReducer,
  allSearchedSuppliersReducer,
  deleteRequestReducer,
  blockRequestReducer,
  unblockRequestReducer,
  allMiniSearchedMentorsReducer,
  allMiniSearchedMunicipalitiesReducer,
  allMiniSearchedSuppliersReducer,
  allMiniSearchedRefugeesReducer
});

export default reducer;
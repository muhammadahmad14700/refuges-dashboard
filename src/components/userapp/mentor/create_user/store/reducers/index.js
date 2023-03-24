import { combineReducers } from "redux";
import { UpdateMunicipalityReducer, UpdateMentorReducer, UpdateRefugeeReducer, UpdateSupplierReducer, getMentorSummaryReducer, getRefugeeSummaryReducer, getSupplierSummaryReducer, getMunicipalitySummaryReducer, setCreateUserStepsReducer, AddNewMunicipalityReducer, AddNewMentorReducer, assignUnassignRolesToMunicipalityReducer, assignUnassignRolesToMentorReducer, AddNewSupplierReducer, assignUnassignRolesToSupplierReducer, AddNewRefugeeReducer, assignUnassignRolesToRefugeeReducer } from "./createUser.reducers"
import { allMiniSearchedRefugeesReducer, allMiniSearchedSuppliersReducer, allSearchedMentorsReducer, allSearchedRefugeesReducer, allSearchedSuppliersReducer } from '../../../system_search/store/reducers/systemSearch.reducers';

const reducer = combineReducers({
    setCreateUserStepsReducer,
    allSearchedMentorsReducer,
    allSearchedRefugeesReducer,
    allSearchedSuppliersReducer,
    AddNewMunicipalityReducer,
    assignUnassignRolesToMunicipalityReducer,
    AddNewMentorReducer,
    assignUnassignRolesToMentorReducer,
    AddNewSupplierReducer,
    assignUnassignRolesToSupplierReducer,
    AddNewRefugeeReducer,
    assignUnassignRolesToRefugeeReducer,
    getMunicipalitySummaryReducer,
    getMentorSummaryReducer,
    getRefugeeSummaryReducer,
    getSupplierSummaryReducer,
    allMiniSearchedSuppliersReducer, allMiniSearchedRefugeesReducer,
    UpdateMunicipalityReducer, UpdateMentorReducer, UpdateRefugeeReducer, UpdateSupplierReducer,
});

export default reducer;
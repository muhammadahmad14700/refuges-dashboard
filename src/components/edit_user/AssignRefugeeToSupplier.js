import React from "react";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import RefugeesData from "./sub_components/AssignRefugeeToSupplierRefugeesData";
import AssignedRefugeesData from "./sub_components/AssignedRefugeeToSupplierRefugeesData";
import LeaveScreenDialog from "./sub_components/LeaveScreenDialog";
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../store/withReducer";
import * as Actions from "./store/actions";
const useStyles = makeStyles((theme) => ({
  backButton: {
    // margin: theme.spacing(1),
    fontSize: "16px",
    backgroundColor: "transparent",
    width: "140px",
    height: "40px",
    border: "1px solid white",
    opacity: 1,
    textTransform: "uppercase",
    fontFamily: "opensans-semibold",
  },
  con: {
    marginTop: "30px"
  },
  textFieldSearch: {
    width: "100%",
    margin: 0,
    height: "42px",
    backgroundColor: "#ffffff",
  },
  notchedOutline: {
    // borderWidth: "0px",
    borderColor: "black !important",
    borderRadius: "0px",
  },
  input1: {
    height: "21px",
    border: 0,
    '&::placeholder': {
      fontSize: '16px',
      color: "black",
      opacity: "1",
      fontFamily: "opensans-LightItalic"
    },
  },
  createButton: {
    fontSize: "16px",
    backgroundColor: "#454A92",
    height: "40px",
    opacity: 1,
    textTransform: "uppercase",
    fontFamily: "opensans-semibold",
    float: "right",
    borderRadius: "2px",
    paddingLeft: 20,
    paddingRight: 20,
    boxShadow: "none"
  }
}));

function AssignRefugeeToSupplier(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [bg, setBg] = React.useState("bgforform");
  const [searchText, setSearchText] = React.useState('');
  const [totalDocs, setTotalDocs] = React.useState(0);
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [assignedRefugeesState, setAssignedRefugeesState] = React.useState([]);
  const [selectedRefugees, setSelectedRefugees] = React.useState([]);
  const [selectedMunicipalities, setSelectedMunicipalities] = React.useState([]);
  const [unSelectedMunicipalities, setUnSelectedMunicipalities] = React.useState(
    []
  );
  const [unSelectedRefugees, setUnSelectedRefugees] = React.useState([]);
  const [leaveScreenDialogOpen, setLeaveScreenDialog] = React.useState(false);
  const [unAssignId, setUnAssignId] = React.useState(false);
  const [testCheck, setTestCheck] = React.useState(false);
  const [editCheck, setEditCheck] = React.useState(false);
  React.useEffect(() => {
    return () => {
      dispatch(Actions.resetAllAssignedRefugees(true));
      setAssignedRefugeesState([]);
    };
  }, []);
  const add_confirmation = useSelector(
    ({ AssignRefugeeToSupplierReducer }) => AssignRefugeeToSupplierReducer.assignUnassignRolesToSupplierReducer
  );
  React.useEffect(() => {
    dispatch(Actions.resetAllAssignedRefugees(true));
    dispatch(Actions.resetAssignUnassignRolesToSupplier(true));
    dispatch(
      Actions.getAllAssignedRefugees(
        page + 1,
        rowsPerPage,
        "",
        "",
        sessionStorage.getItem("user_id")
      )
    );
  }, []);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedMunicipalities")) {
      setSelectedMunicipalities(JSON.parse(sessionStorage.getItem("assignedMunicipalities")));
      setEditCheck(true);
    }
  }, [setSelectedMunicipalities]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedRefugees")) {
      setSelectedRefugees(JSON.parse(sessionStorage.getItem("assignedRefugees")));
      setEditCheck(true);
    }
  }, [setSelectedRefugees]);
  React.useEffect(() => {
    if (sessionStorage.getItem("unAssignedMunicipalities")) {
      setUnSelectedMunicipalities(JSON.parse(sessionStorage.getItem("unAssignedMunicipalities")));
      setEditCheck(true);
    }
  }, [setUnSelectedMunicipalities]);
  React.useEffect(() => {
    if (sessionStorage.getItem("unAssignedRefugees")) {
      setUnSelectedRefugees(JSON.parse(sessionStorage.getItem("unAssignedRefugees")));
      setTestCheck(true);
    }
  }, [setUnSelectedRefugees]);
  const fetchMoreData = () => {
    dispatch(
      Actions.getAllAssignedRefugees(
        page + 1,
        rowsPerPage,
        "",
        "",
        sessionStorage.getItem("user_id")
      ));
  }
  const handleChangeSearch = (value) => {
    setSearchText(value);
  };
  const assignedRefugees = useSelector(
    ({ AssignRefugeeToSupplierReducer }) =>
      AssignRefugeeToSupplierReducer.AllAssignedRefugeesReducer.data
  );
  const loading = useSelector(
    ({ AssignRefugeeToSupplierReducer }) =>
      AssignRefugeeToSupplierReducer.AllAssignedRefugeesReducer.isLoading
  );

  const errMsg = useSelector(
    ({ AssignRefugeeToSupplierReducer }) =>
      AssignRefugeeToSupplierReducer.AllAssignedRefugeesReducer.errMsg
  );
  React.useEffect(() => {
    let assignedMunicipalities = JSON.parse(sessionStorage.getItem("assignedMunicipalities"));
    if (assignedMunicipalities && assignedMunicipalities.length > 0) {
      let municipalities = JSON.parse(sessionStorage.getItem("assignedMunicipalities"));
      let municipalityId = municipalities[0].id
      if (municipalityId !== sessionStorage.getItem("alreadyAssignedMunicipality")) {
        setAssignedRefugeesState([]);
      }
    }
    else {
      if (sessionStorage.getItem("unAssignedRefugees")) {
        if (
          assignedRefugees &&
          assignedRefugees.listAssignedRefugees &&
          assignedRefugees.listAssignedRefugees.docs &&
          assignedRefugees.listAssignedRefugees.docs.length > 0
        ) {
          let newData = [];
          setPage(page + 1);
          setTotalDocs(assignedRefugees.listAssignedRefugees.totalDocs);
          setHasNextPage(assignedRefugees.listAssignedRefugees.hasNextPage);
          let refugeesObj = assignedRefugees.listAssignedRefugees;
          if (refugeesObj.docs !== null && refugeesObj.docs.length > 0) {
            if (unSelectedRefugees.length > 0) {
              let data = refugeesObj.docs.filter(i => !unSelectedRefugees.some(j => j.id === i.id));
              newData = [...newData, ...data];
              setAssignedRefugeesState(assignedRefugeesState => [...assignedRefugeesState, ...newData]);
            }
            else {

              setAssignedRefugeesState(assignedRefugeesState => [...assignedRefugeesState, ...assignedRefugees.listAssignedRefugees.docs]);

            }
          }
        }
      }
      else {



        if (
          assignedRefugees &&
          assignedRefugees.listAssignedRefugees &&
          assignedRefugees.listAssignedRefugees.docs &&
          assignedRefugees.listAssignedRefugees.docs.length > 0
        ) {
          let newData = [];
          setPage(page + 1);
          setTotalDocs(assignedRefugees.listAssignedRefugees.totalDocs);
          setHasNextPage(assignedRefugees.listAssignedRefugees.hasNextPage);
          let refugeesObj = assignedRefugees.listAssignedRefugees;
          if (refugeesObj.docs !== null && refugeesObj.docs.length > 0) {
            if (unSelectedRefugees.length > 0) {
              let data = refugeesObj.docs.filter(i => !unSelectedRefugees.some(j => j.id === i.id));
              newData = [...newData, ...data];
              setAssignedRefugeesState(assignedRefugeesState => [...assignedRefugeesState, ...newData]);
            }
            else {

              setAssignedRefugeesState(assignedRefugeesState => [...assignedRefugeesState, ...assignedRefugees.listAssignedRefugees.docs]);

            }
          }
        }
      }
    }

  }, [assignedRefugees]);
  const createRefugee = () => {
    let values = {
      supplier_id: sessionStorage.getItem("user_id"),
      amunicipalityIds: [],
      arefugeeIds: [],
      umunicipalityIds: [],
      urefugeeIds: []
    }
    if (selectedMunicipalities.length > 0) {
      for (let i = 0; i < selectedMunicipalities.length; i++) {
        const element = selectedMunicipalities[i];
        values.amunicipalityIds.push(element.id)
      }
    }
    if (selectedRefugees.length > 0) {
      for (let i = 0; i < selectedRefugees.length; i++) {
        const element = selectedRefugees[i];
        values.arefugeeIds.push(element.id)
      }
    }
    if (unSelectedMunicipalities.length > 0) {
      for (let i = 0; i < unSelectedMunicipalities.length; i++) {
        const element = unSelectedMunicipalities[i];
        values.umunicipalityIds.push(element.id)
      }
    }
    if (unSelectedRefugees.length > 0) {
      for (let i = 0; i < unSelectedRefugees.length; i++) {
        const element = unSelectedRefugees[i];
        values.urefugeeIds.push(element.id)
      }
    }
    dispatch(Actions.assignUnassignRolesToSupplier(values));
  };
  React.useEffect(() => {
    if (add_confirmation.data && add_confirmation.data.data && add_confirmation.data.data.assignUnassignRolesToSupplier) {
      sessionStorage.clear();
      sessionStorage.setItem("user_type", "refugee");
      setLeaveScreenDialog(false);
      dispatch(Actions.resetAssignUnassignRolesToSupplier(true));
      dispatch(Actions.resetAddNewSupplier(true));
      history.push({
        pathname: "/createUserByAdmin"
      });
    }
  }, [add_confirmation]);
  const unAssignRefugee = (data) => {
    setUnAssignId(true);
    setSelectedRefugees(selectedRefugees.filter(item => item.id !== data.id));
    setAssignedRefugeesState(assignedRefugeesState.filter(item => item.id !== data.id));
  };
  const unAssignRefugeeBackend = (data) => {
    setUnAssignId(true);
    setSelectedRefugees(selectedRefugees.filter(item => item.id !== data.id));
    setAssignedRefugeesState(assignedRefugeesState.filter(item => item.id !== data.id));
    setUnSelectedRefugees(() => [...unSelectedRefugees, data]);
  };
  const handleClickLeaveScreenDialogclose = () => {
    setLeaveScreenDialog(false);
  };
  const handleClickLeaveScreenDialogopen = () => {
    setLeaveScreenDialog(true);
  };
  const handleClearSearch = () => {
    setSearchText('');
  }
  return (
    <div className="main">
      {leaveScreenDialogOpen === true && (
        <LeaveScreenDialog
          status={leaveScreenDialogOpen}
          methodd={handleClickLeaveScreenDialogclose}
          role="Supplier"
          continueClick={createRefugee}
          loading={add_confirmation.isLoading}
          errMsg={add_confirmation.errMsg}
        />
      )}
      <div className={bg}>
        <Container fixed>
          <Grid container spacing={4} className={classes.con}>
            <Grid item md={7} sm={12} xs={12}>
              <div className="assign-mentor-to-municipality-left-grid-div">
                <div className="assign-mentor-to-municipality-left-grid-child-div">
                  <div className="assign-mentor-to-municipality-title-div">
                    <h3 className="assign-mentor-to-municipality-title">
                      {t("Choose Refugees from the list")}
                    </h3>
                  </div>
                  <Grid container spacing={4}>
                    <Grid item sm={8}>
                      <div className="assign-mentor-to-municipality-search-div">
                        <div className="assign-mentor-to-municipality-search-div-search-field-wrapper">
                          <TextField
                            id="search"
                            onChange={e => handleChangeSearch(e.target.value)}
                            value={searchText}
                            name="search"
                            className={classes.textFieldSearch}
                            type="text"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <ClearIcon
                                    style={{ fontSize: "24px", color: "black", cursor: "pointer" }}
                                    onClick={() => handleClearSearch()}
                                  />
                                </InputAdornment>
                              ),
                              classes: {
                                notchedOutline: classes.notchedOutline,
                                input: classes.input1,
                              },
                            }}
                            placeholder={t("Search by name or BSN number")}
                            margin="normal"
                            variant="outlined"
                            size="small"
                          />
                        </div>
                        <div className="assign-mentor-to-municipality-search-div-search-btn-wrapper">
                          <div style={{ width: "30px", height: "30px", margin: "0 auto", marginTop: "5px" }}>
                            <SearchIcon style={{ color: "white", fontSize: "30px", margin: "0 auto" }} />
                          </div>
                        </div>

                      </div>
                    </Grid>
                    <Grid item sm={4}>
                      <div className="assign-mentor-to-municipality-btn-div">
                        <Button
                          variant="contained"
                          className={classes.createButton}
                          color="primary"
                          onClick={() => handleClickLeaveScreenDialogopen()}
                        >
                          {t("Create New")}
                        </Button>
                      </div>
                    </Grid>
                  </Grid>

                </div>
                <RefugeesData
                  searchText={searchText}
                  selectedRefugees={selectedRefugees}
                  unSelectedRefugees={unSelectedRefugees}
                  setSelectedRefugees={setSelectedRefugees}
                  setUnSelectedRefugees={setUnSelectedRefugees}
                  setAssignedRefugeesState={setAssignedRefugeesState}
                  assignedRefugeesState={assignedRefugeesState}
                  unAssignId={unAssignId}
                  setUnAssignId={setUnAssignId}
                  editCheck={editCheck}
                  setEditCheck={setEditCheck}
                />
              </div>
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
              <div className="assign-mentor-to-municipality-right-grid-div">
                <div className="assign-mentor-to-municipality-left-grid-child-div">
                  <div className="assign-mentor-to-municipality-title-div">
                    <h3 className="assign-mentor-to-municipality-title">
                      {t("Supplier")}: {sessionStorage.getItem("entity_name")}
                    </h3>
                    <p className="assigned-mentors-to-municipality-total-text">
                      {t("Total Assigned Refugees")}: {selectedRefugees.length + totalDocs - unSelectedRefugees.length}
                    </p>
                  </div>
                </div>
                <AssignedRefugeesData
                  selectedRefugees={selectedRefugees}
                  unSelectedRefugees={unSelectedRefugees}
                  unAssignRefugee={unAssignRefugee}
                  unAssignRefugeeBackend={unAssignRefugeeBackend}
                  assignedRefugeesState={assignedRefugeesState}
                  totalDocs={totalDocs}
                  hasNextPage={hasNextPage}
                  fetchMoreData={fetchMoreData}
                />
              </div>

            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );

}
export default withReducer("AssignRefugeeToSupplierReducer", reducer)(AssignRefugeeToSupplier);
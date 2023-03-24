import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import SuppliersData from "./sub_components/AssignSupplierToMunicipalitySuppliersData";
import AssignedSuppliersData from "./sub_components/AssignedSupplierToMunicipalitySuppliersData";
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
    marginTop: "30px",
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
    "&::placeholder": {
      fontSize: "16px",
      color: "black",
      opacity: "1",
      fontFamily: "opensans-LightItalic",
    },
  },
  createButton: {
    fontSize: "16px",
    backgroundColor: "#454A92",
    // width: "203px",
    height: "40px",
    opacity: 1,
    textTransform: "uppercase",
    fontFamily: "opensans-semibold",
    float: "right",
    borderRadius: "2px",
    paddingLeft: 20,
    paddingRight: 20,
    boxShadow: "none"
  },
}));

function AssignSupplierToMunicipality(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [bg, setBg] = React.useState("bgforform");
  const [searchText, setSearchText] = React.useState("");
  const [totalDocs, setTotalDocs] = React.useState(0);
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [assignedSuppliersState, setAssignedSuppliersState] = React.useState([]);
  const [selectedRefugees, setSelectedRefugees] = React.useState([]);
  const [selectedMentors, setSelectedMentors] = React.useState([]);
  const [selectedSuppliers, setSelectedSuppliers] = React.useState([]);
  const [leaveScreenDialogOpen, setLeaveScreenDialog] = React.useState(false);
  const [unAssignId, setUnAssignId] = React.useState(false);
  const [editCheck, setEditCheck] = React.useState(false);
  React.useEffect(() => {
    return () => {
      dispatch(Actions.resetAllAssignedSuppliers(true));
      setAssignedSuppliersState([]);
    };
  }, []);
  const add_confirmation = useSelector(
    ({ AssignSupplierToMunicipalityReducer }) =>
      AssignSupplierToMunicipalityReducer.assignUnassignRolesToMunicipalityReducer
  );
  React.useEffect(() => {
    dispatch(Actions.resetAssignUnassignRolesToMunicipality(true));
    dispatch(
      Actions.getAllAssignedSuppliers(
        page + 1,
        rowsPerPage,
        sessionStorage.getItem("user_id")
      )
    );
  }, []);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedSuppliers")) {
      setSelectedSuppliers(
        JSON.parse(sessionStorage.getItem("assignedSuppliers"))
      );
      setEditCheck(true);
    }
  }, [setSelectedSuppliers]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedMentors")) {
      setSelectedMentors(JSON.parse(sessionStorage.getItem("assignedMentors")));
      setEditCheck(true);
    }
  }, [setSelectedMentors]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedRefugees")) {
      setSelectedRefugees(
        JSON.parse(sessionStorage.getItem("assignedRefugees"))
      );
    }
  }, [setSelectedRefugees]);
  const fetchMoreData = () => {
    dispatch(
      Actions.getAllAssignedSuppliers(
        page + 1,
        rowsPerPage,
        sessionStorage.getItem("user_id")
      ));
  }
  const assignedSuppliers = useSelector(
    ({ AssignSupplierToMunicipalityReducer }) =>
      AssignSupplierToMunicipalityReducer.AllAssignedSuppliersReducer.data
  );
  const loading = useSelector(
    ({ AssignSupplierToMunicipalityReducer }) =>
      AssignSupplierToMunicipalityReducer.AllAssignedSuppliersReducer.isLoading
  );

  const errMsg = useSelector(
    ({ AssignSupplierToMunicipalityReducer }) =>
      AssignSupplierToMunicipalityReducer.AllAssignedSuppliersReducer.errMsg
  );
  React.useEffect(() => {
    if (
      assignedSuppliers &&
      assignedSuppliers.listAssignedSuppliers &&
      assignedSuppliers.listAssignedSuppliers.docs &&
      assignedSuppliers.listAssignedSuppliers.docs.length > 0
    ) {
      setPage(page + 1);
      setTotalDocs(assignedSuppliers.listAssignedSuppliers.totalDocs);
      setHasNextPage(assignedSuppliers.listAssignedSuppliers.hasNextPage);
      setAssignedSuppliersState(assignedSuppliersState => [...assignedSuppliersState, ...assignedSuppliers.listAssignedSuppliers.docs]);
    }
  }, [assignedSuppliers]);
  const handleChangeSearch = (value) => {
    setSearchText(value);
  };
  const createSupplier = () => {
    let values = {
      municipality_id: sessionStorage.getItem("user_id"),
      amentorIds: [],
      asupplierIds: [],
      arefugeeIds: [],
      umentorIds: [],
      usupplierIds: [],
      urefugeeIds: [],
    };
    if (selectedMentors.length > 0) {
      for (let i = 0; i < selectedMentors.length; i++) {
        const element = selectedMentors[i];
        values.amentorIds.push(element.id);
      }
    }
    if (selectedSuppliers.length > 0) {
      for (let i = 0; i < selectedSuppliers.length; i++) {
        const element = selectedSuppliers[i];
        values.asupplierIds.push(element.id);
      }
    }
    if (selectedRefugees.length > 0) {
      for (let i = 0; i < selectedRefugees.length; i++) {
        const element = selectedRefugees[i];
        values.arefugeeIds.push(element.id);
      }
    }
    dispatch(Actions.assignUnassignRolesToMunicipality(values));
  };
  React.useEffect(() => {
    if (
      add_confirmation.data &&
      add_confirmation.data.data &&
      add_confirmation.data.data.assignRolesToMunicipality
    ) {
      sessionStorage.clear();
      sessionStorage.setItem("user_type", "supplier");
      setLeaveScreenDialog(false);
      dispatch(Actions.resetAssignUnassignRolesToMunicipality(true));
      dispatch(Actions.resetAddNewMunicipality(true));
      history.push({
        pathname: "/createUserByAdmin",
      });
    }
  }, [add_confirmation]);
  const unAssignSupplier = (data) => {
    setUnAssignId(true);
    setSelectedSuppliers(
      selectedSuppliers.filter((item) => item.id !== data.id)
    );
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
          role="Municipality"
          continueClick={createSupplier}
          loading={add_confirmation.isLoading}
          errMsg={add_confirmation.errMsg}
        />
      )}
      <div className={bg}>
        <Container fixed>
          <Grid container spacing={4} className={classes.con}>
            <Grid item sm={12} md={7} xs={12}>
              <div className="assign-mentor-to-municipality-left-grid-div">
                <div className="assign-mentor-to-municipality-left-grid-child-div">
                  <div className="assign-mentor-to-municipality-title-div">
                    <h3 className="assign-mentor-to-municipality-title">
                      {t("Choose Suppliers from the list")}
                    </h3>
                  </div>
                  <Grid container spacing={4}>
                    <Grid item sm={8}>
                      <div className="assign-mentor-to-municipality-search-div">
                        <div className="assign-mentor-to-municipality-search-div-search-field-wrapper">
                          <TextField
                            id="search"
                            onChange={(e) => handleChangeSearch(e.target.value)}
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
                            placeholder={t("Search by name or contact person")}
                            margin="normal"
                            variant="outlined"
                            size="small"
                          />
                        </div>
                        <div className="assign-mentor-to-municipality-search-div-search-btn-wrapper">
                          <div
                            style={{
                              width: "30px",
                              height: "30px",
                              margin: "0 auto",
                              marginTop: "5px",
                            }}
                          >
                            <SearchIcon
                              style={{
                                color: "white",
                                fontSize: "30px",
                                margin: "0 auto",
                              }}
                            />
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
                <SuppliersData
                  searchText={searchText}
                  selectedSuppliers={selectedSuppliers}
                  setSelectedSuppliers={setSelectedSuppliers}
                  unAssignId={unAssignId}
                  setUnAssignId={setUnAssignId}
                  editCheck={editCheck}
                  setEditCheck={setEditCheck}
                />
              </div>
            </Grid>
            <Grid item sm={12} md={5} xs={12}>
              <div className="assign-mentor-to-municipality-right-grid-div">
                <div className="assign-mentor-to-municipality-left-grid-child-div">
                  <div className="assign-mentor-to-municipality-title-div">
                    <h3 className="assign-mentor-to-municipality-title">
                      {t("Municipality")}: {sessionStorage.getItem("entity_name")}
                    </h3>
                    <p className="assigned-mentors-to-municipality-total-text">
                      {t("Total Assigned Suppliers")}: {selectedSuppliers.length + totalDocs}
                    </p>
                  </div>
                </div>
                <AssignedSuppliersData
                  selectedSuppliers={selectedSuppliers}
                  unAssignSupplier={unAssignSupplier}
                  assignedSuppliersState={assignedSuppliersState}
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
export default withReducer(
  "AssignSupplierToMunicipalityReducer",
  reducer
)(AssignSupplierToMunicipality);

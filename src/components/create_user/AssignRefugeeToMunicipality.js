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
import RefugeesData from "./sub_components/AssignRefugeeToMunicipalityRefugeesData";
import AssignedRefugeesData from "./sub_components/AssignedRefugeeToMunicipalityRefugeesData";
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

function AssignRefugeeToMunicipality(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [bg, setBg] = React.useState("bgforform");
  const [searchText, setSearchText] = React.useState("");
  const [selectedRefugees, setSelectedRefugees] = React.useState([]);
  const [selectedMentors, setSelectedMentors] = React.useState([]);
  const [selectedSuppliers, setSelectedSuppliers] = React.useState([]);
  const [leaveScreenDialogOpen, setLeaveScreenDialog] = React.useState(false);
  const [unAssignId, setUnAssignId] = React.useState(false);
  const [editCheck, setEditCheck] = React.useState(false);
  const add_confirmation = useSelector(
    ({ AssignRefugeeToMunicipalityReducer }) =>
      AssignRefugeeToMunicipalityReducer.assignUnassignRolesToMunicipalityReducer
  );
  React.useEffect(() => {
    dispatch(Actions.resetAssignUnassignRolesToMunicipality(true));
  }, []);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedRefugees")) {
      setSelectedRefugees(
        JSON.parse(sessionStorage.getItem("assignedRefugees"))
      );
      setEditCheck(true);
    }
  }, [setSelectedRefugees]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedMentors")) {
      setSelectedMentors(JSON.parse(sessionStorage.getItem("assignedMentors")));
      setEditCheck(true);
    }
  }, [setSelectedMentors]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedSuppliers")) {
      setSelectedSuppliers(
        JSON.parse(sessionStorage.getItem("assignedSuppliers"))
      );
    }
  }, [setSelectedSuppliers]);
  const handleChangeSearch = (value) => {
    setSearchText(value);
  };
  const createRefugee = () => {
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
      sessionStorage.setItem("user_type", "refugee");
      setLeaveScreenDialog(false);
      dispatch(Actions.resetAssignUnassignRolesToMunicipality(true));
      dispatch(Actions.resetAddNewMunicipality(true));
      history.push({
        pathname: "/createUserByAdmin",
      });
    }
  }, [add_confirmation]);
  const unAssignRefugee = (data) => {
    setUnAssignId(true);
    setSelectedRefugees(selectedRefugees.filter((item) => item.id !== data.id));
  };
  const clickBack = () => {
    history.goBack();
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
          continueClick={createRefugee}
          loading={add_confirmation.isLoading}
          errMsg={add_confirmation.errMsg}
        />
      )}
      <div className={bg}>
        <Container fixed>
          <div className="edit-municipality-back-btn-div">
            <Button
              variant="contained"
              className={classes.backButton}
              onClick={() => clickBack()}
              color="primary"
            >
              {t("Back")}
            </Button>
          </div>
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
                            placeholder={t("Search by name or BSN number")}
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
                <RefugeesData
                  searchText={searchText}
                  selectedRefugees={selectedRefugees}
                  setSelectedRefugees={setSelectedRefugees}
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
                      {t("Municipality")}: {sessionStorage.getItem("entity_name")}
                    </h3>
                    <p className="assigned-mentors-to-municipality-total-text">
                      {t("Total Assigned Refugees")}: {selectedRefugees.length}
                    </p>
                  </div>
                </div>
                <AssignedRefugeesData
                  selectedRefugees={selectedRefugees}
                  unAssignRefugee={unAssignRefugee}
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
  "AssignRefugeeToMunicipalityReducer",
  reducer
)(AssignRefugeeToMunicipality);

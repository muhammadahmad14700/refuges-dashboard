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
import MentorsData from "./sub_components/AssignMentorToRefugeeMentorsData";
import LeaveScreenDialog from "./sub_components/LeaveScreenDialog";
import AssignedMentorsData from "./sub_components/AssignedMentorToRefugeeMentorsData";
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

function AssignMentorToRefugee(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [bg, setBg] = React.useState("bgforform");
  const [searchText, setSearchText] = React.useState('');
  const [totalDocs, setTotalDocs] = React.useState(0);
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [assignedMentorsState, setAssignedMentorsState] = React.useState([]);
  const [selectedMentors, setSelectedMentors] = React.useState([]);
  const [selectedSuppliers, setSelectedSuppliers] = React.useState([]);
  const [selectedMunicipalities, setSelectedMunicipalities] = React.useState([]);
  const [unSelectedMunicipalities, setUnSelectedMunicipalities] = React.useState([]);
  const [unSelectedMentors, setUnSelectedMentors] = React.useState([]);
  const [unSelectedSuppliers, setUnSelectedSuppliers] = React.useState([]);
  const [leaveScreenDialogOpen, setLeaveScreenDialog] = React.useState(false);
  const [editCheck, setEditCheck] = React.useState(false);
  const [unAssignId, setUnAssignId] = React.useState(false);
  const add_confirmation = useSelector(
    ({ AssignMentorToRefugeeReducer }) => AssignMentorToRefugeeReducer.assignUnassignRolesToRefugeeReducer
  );
  React.useEffect(() => {
    dispatch(Actions.resetAllAssignedMentors(true));
    dispatch(Actions.resetAssignUnassignRolesToRefugee(true));
    dispatch(
      Actions.getAllAssignedMentors(
        page + 1,
        rowsPerPage,
        "",
        "",
        sessionStorage.getItem("user_id")
      ));
  }, []);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedMunicipalities")) {
      setSelectedMunicipalities(JSON.parse(sessionStorage.getItem("assignedMunicipalities")));
      setEditCheck(true);
    }
  }, [setSelectedMunicipalities]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedMentors")) {
      setSelectedMentors(JSON.parse(sessionStorage.getItem("assignedMentors")));
    }
  }, [setSelectedMentors]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedSuppliers")) {
      setSelectedSuppliers(JSON.parse(sessionStorage.getItem("assignedSuppliers")));
    }
  }, [setSelectedSuppliers]);
  React.useEffect(() => {
    if (sessionStorage.getItem("unAssignedMunicipalities")) {
      setUnSelectedMunicipalities(JSON.parse(sessionStorage.getItem("unAssignedMunicipalities")));
      setEditCheck(true);
    }
  }, [setUnSelectedMunicipalities]);
  React.useEffect(() => {
    if (sessionStorage.getItem("unAssignedMentors")) {
      setUnSelectedMentors(JSON.parse(sessionStorage.getItem("unAssignedMentors")));
      setEditCheck(true);
    }
  }, [setUnSelectedMentors]);
  React.useEffect(() => {
    if (sessionStorage.getItem("unAssignedSuppliers")) {
      setUnSelectedSuppliers(JSON.parse(sessionStorage.getItem("unAssignedSuppliers")));
      setEditCheck(true);
    }
  }, [setUnSelectedSuppliers]);
  const fetchMoreData = () => {
    dispatch(
      Actions.getAllAssignedMentors(
        page + 1,
        rowsPerPage,
        "",
        "",
        sessionStorage.getItem("user_id")
      ));
  }
  const assignedMentors = useSelector(
    ({ AssignMentorToRefugeeReducer }) =>
      AssignMentorToRefugeeReducer.AllAssignedMentorsReducer.data
  );
  const loading = useSelector(
    ({ AssignMentorToRefugeeReducer }) =>
      AssignMentorToRefugeeReducer.AllAssignedMentorsReducer.isLoading
  );

  const errMsg = useSelector(
    ({ AssignMentorToRefugeeReducer }) =>
      AssignMentorToRefugeeReducer.AllAssignedMentorsReducer.errMsg
  );
  React.useEffect(() => {
    let unAssignedMentorss = JSON.parse(sessionStorage.getItem("unAssignedMentors"));
    let assignedMunicipalities = JSON.parse(sessionStorage.getItem("assignedMunicipalities"));
    if (assignedMunicipalities && assignedMunicipalities.length > 0) {
      let municipalities = JSON.parse(sessionStorage.getItem("assignedMunicipalities"));
      let municipalityId = municipalities[0].id
      if (municipalityId !== sessionStorage.getItem("alreadyAssignedMunicipality")) {
        setAssignedMentorsState([]);
      }
    }
    else {
      if (unAssignedMentorss && unAssignedMentorss.length > 0) {
        let mun = JSON.parse(sessionStorage.getItem("unAssignedMentors"));
        for (let j = 0; j < mun.length; j++) {
          const selMunicipality = mun[j];
          setAssignedMentorsState(assignedMentorsState.filter(item => item.id !== selMunicipality.id));
          setTotalDocs(selectedMentors.length);
        }
      }
      else {
        if (
          assignedMentors &&
          assignedMentors.listAssignedMentors &&
          assignedMentors.listAssignedMentors.docs &&
          assignedMentors.listAssignedMentors.docs.length > 0
        ) {
          setPage(page + 1);
          setTotalDocs(assignedMentors.listAssignedMentors.totalDocs);
          setHasNextPage(assignedMentors.listAssignedMentors.hasNextPage);
          setAssignedMentorsState(assignedMentorsState => [...assignedMentorsState, ...assignedMentors.listAssignedMentors.docs]);
        }
      }
    }
  }, [assignedMentors]);
  const handleChangeSearch = (value) => {
    setSearchText(value);
  };
  const createMentor = () => {
    let values = {
      refugee_id: sessionStorage.getItem("user_id"),
      amunicipalityIds: [],
      amentorIds: [],
      asupplierIds: [],
      umunicipalityIds: [],
      umentorIds: [],
      usupplierIds: [],
    }
    if (selectedMunicipalities.length > 0) {
      for (let i = 0; i < selectedMunicipalities.length; i++) {
        const element = selectedMunicipalities[i];
        values.amunicipalityIds.push(element.id)
      }
    }
    if (selectedMentors.length > 0) {
      for (let i = 0; i < selectedMentors.length; i++) {
        const element = selectedMentors[i];
        values.amentorIds.push(element.id)
      }
    }
    if (selectedSuppliers.length > 0) {
      for (let i = 0; i < selectedSuppliers.length; i++) {
        const element = selectedSuppliers[i];
        values.asupplierIds.push(element.id)
      }
    }
    if (unSelectedMunicipalities.length > 0) {
      for (let i = 0; i < unSelectedMunicipalities.length; i++) {
        const element = unSelectedMunicipalities[i];
        values.umunicipalityIds.push(element.id)
      }
    }
    if (unSelectedMentors.length > 0) {
      for (let i = 0; i < unSelectedMentors.length; i++) {
        const element = unSelectedMentors[i];
        values.umentorIds.push(element.id)
      }
    }
    if (unSelectedSuppliers.length > 0) {
      for (let i = 0; i < unSelectedSuppliers.length; i++) {
        const element = unSelectedSuppliers[i];
        values.usupplierIds.push(element.id)
      }
    }
    dispatch(Actions.assignUnassignRolesToRefugee(values));
  };
  React.useEffect(() => {
    if (add_confirmation.data && add_confirmation.data.data && add_confirmation.data.data.assignUnassignRolesToRefugee) {
      sessionStorage.clear();
      sessionStorage.setItem("user_type", "mentor");
      setLeaveScreenDialog(false);
      dispatch(Actions.resetAddNewRefugee(true));
      dispatch(Actions.resetAssignUnassignRolesToRefugee(true));
      history.push({
        pathname: "/createUserByAdmin"
      });
    }
  }, [add_confirmation]);
  const unAssignMentor = (data) => {
    setUnAssignId(true);
    setSelectedMentors(selectedMentors.filter(item => item.id !== data.id));
    setAssignedMentorsState(assignedMentorsState.filter(item => item.id !== data.id));

  };
  const unAssignMentorBackend = (data) => {
    setUnAssignId(true);
    setSelectedMentors(selectedMentors.filter(item => item.id !== data.id));
    setAssignedMentorsState(assignedMentorsState.filter(item => item.id !== data.id));
    setUnSelectedMentors([data]);
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
          role="Refugee"
          continueClick={createMentor}
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
                      {t("Choose Mentors from the list")}
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
                <MentorsData
                  searchText={searchText}
                  selectedMentors={selectedMentors}
                  unSelectedMentors={unSelectedMentors}
                  setSelectedMentors={setSelectedMentors}
                  setUnSelectedMentors={setUnSelectedMentors}
                  assignedMentorsState={assignedMentorsState}
                  setAssignedMentorsState={setAssignedMentorsState}
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
                      {t("Refugee")}: {sessionStorage.getItem("entity_name")}
                    </h3>
                    <p className="assigned-mentors-to-municipality-total-text">
                      {t("Total Assigned Mentors")}: {(selectedMentors.length + totalDocs - unSelectedMentors.length > 1 ? "1" : selectedMentors.length + totalDocs - unSelectedMentors.length)}
                    </p>
                  </div>
                </div>
                <AssignedMentorsData
                  selectedMentors={selectedMentors}
                  unSelectedMentors={unSelectedMentors}
                  unAssignMentor={unAssignMentor}
                  unAssignMentorBackend={unAssignMentorBackend}
                  assignedMentorsState={assignedMentorsState}
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
export default withReducer("AssignMentorToRefugeeReducer", reducer)(AssignMentorToRefugee);
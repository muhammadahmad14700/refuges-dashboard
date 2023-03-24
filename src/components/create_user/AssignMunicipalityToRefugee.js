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
import MunicipalitiesData from "./sub_components/AssignMunicipalityToRefugeeMunicipalitiesData";
import AssignedMunicipalitiesData from "./sub_components/AssignedMunicipalityToRefugeeMunicipalitiesData";
import LimitWarningDialog from "./sub_components/LimitWarningDialog";
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
    boxShadow: "none",
  }
}));

function AssignMunicipalityToRefugee(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [bg, setBg] = React.useState("bgforform");
  const [searchText, setSearchText] = React.useState('');
  const [selectedMunicipalities, setSelectedMunicipalities] = React.useState([]);
  const [selectedMentors, setSelectedMentors] = React.useState([]);
  const [selectedSuppliers, setSelectedSuppliers] = React.useState([]);
  const [leaveScreenDialogOpen, setLeaveScreenDialog] = React.useState(false);
  const [warningOpen, setWarningOpen] = React.useState(false);
  const [unAssignId, setUnAssignId] = React.useState(false);
  const [editCheck, setEditCheck] = React.useState(false);
  React.useEffect(() => {
    dispatch(Actions.resetAssignUnassignRolesToRefugee(true));
  }, []);
  const add_confirmation = useSelector(
    ({ AssignMunicipalityToRefugeeReducer }) => AssignMunicipalityToRefugeeReducer.assignUnassignRolesToRefugeeReducer
  );
  const municipalitySummary = useSelector(
    ({ AssignMunicipalityToRefugeeReducer }) =>
      AssignMunicipalityToRefugeeReducer.getMunicipalitySummaryReducer.data
  );
  React.useEffect(() => {
    if (sessionStorage.getItem("mun_id")) {
      dispatch(Actions.getMunicipalitySummary(sessionStorage.getItem("mun_id")));
    }
  }, []);
  React.useEffect(() => {
    if (municipalitySummary && municipalitySummary.getMunicipalitySummary) {
      let newElement = {
        id: municipalitySummary.getMunicipalitySummary._id,
        name: municipalitySummary.getMunicipalitySummary.name,
        province: municipalitySummary.getMunicipalitySummary.province,
        contactPerson: municipalitySummary.getMunicipalitySummary.contactPerson,
      }
      setSelectedMunicipalities([newElement]);
      setEditCheck(true);
    }
  }, [municipalitySummary, setSelectedMunicipalities]);
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
  const handleChangeSearch = (value) => {
    setSearchText(value);
  };
  const createMunicipality = () => {
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
    dispatch(Actions.assignUnassignRolesToRefugee(values));
  };
  React.useEffect(() => {
    if (add_confirmation.data && add_confirmation.data.data && add_confirmation.data.data.assignUnassignRolesToRefugee) {
      sessionStorage.clear();
      sessionStorage.setItem("user_type", "municipality");
      setLeaveScreenDialog(false);
      dispatch(Actions.resetAddNewRefugee(true));
      dispatch(Actions.resetAssignUnassignRolesToRefugee(true));
      history.push({
        pathname: "/createUserByAdmin"
      });
    }
  }, [add_confirmation]);
  const unAssignMunicipality = (data) => {
    setUnAssignId(true);
    setSelectedMunicipalities(selectedMunicipalities.filter(item => item.id !== data.id));
  };
  const clickBack = () => {
    sessionStorage.setItem("user_type", "refugee");
    history.goBack();
  };
  const handleClickLeaveScreenDialogclose = () => {
    setLeaveScreenDialog(false);
  };
  const handleClickLeaveScreenDialogopen = () => {
    if (selectedMunicipalities.length === 0) {
      setWarningOpen(true);
    }
    else {
      setLeaveScreenDialog(true);
    }
  };
  const handleClickWarningDialogclose = () => {
    setWarningOpen(false);
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
          continueClick={createMunicipality}
          loading={add_confirmation.isLoading}
          errMsg={add_confirmation.errMsg}
        />
      )}
      {warningOpen === true && (
        <LimitWarningDialog
          status={warningOpen}
          methodd={handleClickWarningDialogclose}
          role="Municipality"
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
                      {t("Choose Municipalities from the list")}
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
                            placeholder={t("Search by land, name or contact person")}
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
                <MunicipalitiesData
                  searchText={searchText}
                  selectedMunicipalities={selectedMunicipalities}
                  setSelectedMunicipalities={setSelectedMunicipalities}
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
                      {t("Refugee")}: {sessionStorage.getItem("entity_name")}
                    </h3>
                    <p className="assigned-mentors-to-municipality-total-text">
                      {t("Total Assigned Municipalities")}: {selectedMunicipalities.length}
                    </p>
                  </div>
                </div>
                <AssignedMunicipalitiesData
                  selectedMunicipalities={selectedMunicipalities}
                  unAssignMunicipality={unAssignMunicipality}
                />
              </div>

            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );

}
export default withReducer("AssignMunicipalityToRefugeeReducer", reducer)(AssignMunicipalityToRefugee);
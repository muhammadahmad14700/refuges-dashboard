import React from "react";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import SuccessDialog from "./sub_components/AddMunicipalityDetailSuccessDialog";
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../../store/withReducer";
import * as Actions from "./store/actions";
import { useTranslation } from 'react-i18next';

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
  editButton: {
    fontSize: "16px",
    backgroundColor: "#454A92",
    width: "150px",
    height: "40px",
    opacity: 1,
    textTransform: "uppercase",
    fontFamily: "opensans-semibold",
    float: "right",
    borderRadius: "2px",
    marginLeft: "auto",
    marginTop: "50px",
    boxShadow: "none"
  },
  btnsCon: {
    marginTop: "20px"
  },
  button: {
    fontSize: "16px",
    backgroundColor: "transparent",
    width: "150px",
    height: "40px",
    border: "1px solid white",
    opacity: 1,
    textTransform: "uppercase",
    fontFamily: "opensans-semibold",
    float: "right",
    borderRadius: "2px"
  }
}));
function ViewEditMentorSummary(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [bg, setBg] = React.useState("bgforform");
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [selectedMunicipalities, setSelectedMunicipalities] = React.useState([]);
  const [selectedRefugees, setSelectedRefugees] = React.useState([]);
  const [unSelectedMunicipalities, setUnSelectedMunicipalities] = React.useState([]);
  const [unSelectedRefugees, setUnSelectedRefugees] = React.useState([]);
  const [totalMunicipalities, setTotalMunicipalities] = React.useState(0);
  const [totalRefugees, setTotalRefugees] = React.useState(0);
  const add_confirmation = useSelector(
    ({ ViewEditMentorSummaryReducer }) => ViewEditMentorSummaryReducer.assignUnassignRolesToMentorReducer
  );
  React.useEffect(() => {
    dispatch(Actions.resetAssignUnassignRolesToMentor(true));
    dispatch(Actions.getMentorSummary(sessionStorage.getItem("user_id")));
  }, []);
  const mentorSummary = useSelector(
    ({ ViewEditMentorSummaryReducer }) =>
      ViewEditMentorSummaryReducer.getMentorSummaryReducer.data
  );
  const loading = useSelector(
    ({ ViewEditMentorSummaryReducer }) =>
      ViewEditMentorSummaryReducer.getMentorSummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ ViewEditMentorSummaryReducer }) =>
      ViewEditMentorSummaryReducer.getMentorSummaryReducer.errMsg
  );
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedMunicipalities")) {
      setSelectedMunicipalities(JSON.parse(sessionStorage.getItem("assignedMunicipalities")));
    }
  }, [setSelectedMunicipalities]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedRefugees")) {
      setSelectedRefugees(JSON.parse(sessionStorage.getItem("assignedRefugees")));
    }
  }, [setSelectedRefugees]);
  React.useEffect(() => {
    if (sessionStorage.getItem("unAssignedMunicipalities")) {
      setUnSelectedMunicipalities(JSON.parse(sessionStorage.getItem("unAssignedMunicipalities")));
    }
  }, [setUnSelectedMunicipalities]);
  React.useEffect(() => {
    if (sessionStorage.getItem("unAssignedRefugees")) {
      setUnSelectedRefugees(JSON.parse(sessionStorage.getItem("unAssignedRefugees")));
    }
  }, [setUnSelectedRefugees]);
  const handleClickSuccessDialogclose = () => {
    setSuccessOpen(false);
  };
  const handleClickSuccessDialogopen = (data) => {
    setSuccessOpen(true);
  };
  const handleClickEdit = (path) => {
    dispatch(Actions.resetAllAssignedRefugees(true));
    history.push({
      pathname: path
    });
  }
  const handleClickEditUser = () => {
    sessionStorage.setItem("user_type", "mentor");
    history.push({
      pathname: "/editUserByManager"
    });
  }
  const handleClickSave = () => {
    let values = {
      mentor_id: sessionStorage.getItem("user_id"),
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
    dispatch(Actions.assignUnassignRolesToMentor(values));
  }
  React.useEffect(() => {
    if (add_confirmation.data && add_confirmation.data.data && add_confirmation.data.data.assignUnassignRolesToMentor) {
      sessionStorage.clear();
      dispatch(Actions.resetAddNewMentor(true));
      dispatch(Actions.resetAssignUnassignRolesToMentor(true));
      handleClickSuccessDialogopen();
    }
  }, [add_confirmation]);
  const handleNavigateToDashboard = () => {
    sessionStorage.clear();
    history.push("/managerdashboard");
  };
  React.useEffect(() => {
    if (mentorSummary && mentorSummary.getMentorSummary) {
      setTotalMunicipalities((selectedMunicipalities.length + mentorSummary.getMentorSummary.totalMunicipalities - unSelectedMunicipalities.length > 1 ? "1" : selectedMunicipalities.length + mentorSummary.getMentorSummary.totalMunicipalities - unSelectedMunicipalities.length));
      setTotalRefugees(mentorSummary.getMentorSummary.totalRefugees + selectedRefugees.length - unSelectedRefugees.length);
    }
  }, [mentorSummary]);
  return (
    <div className="main">
      {successOpen === true && (
        <SuccessDialog
          status={successOpen}
          methodd={handleClickSuccessDialogclose}
          role="Mentor"
        />
      )}
      <div className={bg}>
        <Container fixed>
          <div className="edit-municipality-back-btn-div">
          </div>
          <div className="edit-municipality-detail-view-div">
            <h3 className="edit-municipality-detail-view-title">
              {t("Mentor")}
            </h3>
            {mentorSummary && mentorSummary.getMentorSummary && (
              <Grid container spacing={2}>

                <Grid item sm={4}>

                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Name")}: </span> <span className="edit-municipality-detail-view-text">{mentorSummary && mentorSummary.getMentorSummary.name}</span></p>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("BSN")}: </span> <span className="edit-municipality-detail-view-text">{mentorSummary && mentorSummary.getMentorSummary.bsn}</span></p>

                </Grid>
                <Grid item sm={4}>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("E-mail")} </span> <span className="edit-municipality-detail-view-text">{mentorSummary && mentorSummary.getMentorSummary.email}</span></p>

                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Phone")}: </span> <span className="edit-municipality-detail-view-text">{mentorSummary && mentorSummary.getMentorSummary.phoneNumber}</span></p>
                </Grid>
              </Grid>
            )}
            <Grid container spacing={2}>
              <Button
                variant="contained"
                className={classes.editButton}
                onClick={() => handleClickEditUser()}
                color="primary"
              >
                {t("Edit")}
              </Button>
            </Grid>
          </div>
          <div className="edit-municipality-detail-view-div">

            <Grid container spacing={2}>

              <Grid item sm={7}>
                <table
                  className="summary-table-tag"
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "20px",
                    backgroundColor: "white",
                    marginBottom: "30px"
                  }}
                >

                  <tr>
                    <th style={{ width: "100px" }}>
                      {t("System User")}
                    </th>
                    <th style={{ textAlign: "center" }}>{t("Total Assigned")}</th>


                    <th>

                    </th>

                  </tr>
                  <tr>
                    <td>
                      {t("Refugees")}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {totalRefugees}
                    </td>
                    <td className="summary-table-tag-action-td"
                      onClick={() => handleClickEdit("/editAssignRefugeeToMentorByManager")}
                    >{t("View and Edit")}</td>
                  </tr>
                </table>

              </Grid>
              <Grid item sm={5}>

              </Grid>
              {add_confirmation.errMsg && (
                <Grid item sm={12} xs={12}>
                  <Alert severity="error">{t(add_confirmation.errMsg)}</Alert>
                </Grid>
              )}
              {add_confirmation.isLoading && (
                <Grid item sm={12} xs={12}>
                  Loading.......
                </Grid>
              )}
            </Grid>

          </div>
          <Grid container spacing={2} className={classes.btnsCon}>
            <Grid item sm={8} xs={12}>

            </Grid>
            <Grid item sm={2} xs={12}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => handleNavigateToDashboard()}
                color="primary"
              >
                {t("Cancel")}
              </Button>
            </Grid>
            <Grid item sm={2} xs={12}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => handleClickSave()}
                color="primary"
              >
                {t("Save")}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );

}
export default withReducer("ViewEditMentorSummaryReducer", reducer)(ViewEditMentorSummary);
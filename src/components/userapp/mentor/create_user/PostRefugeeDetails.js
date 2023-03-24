import React from "react";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Alert from "@material-ui/lab/Alert";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import SuccessDialog from "./sub_components/AddMunicipalityDetailSuccessDialog";
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../../store/withReducer";
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
function PostRefugeeDetails(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [bg, setBg] = React.useState("bgforform");
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [selectedSuppliers, setSelectedSuppliers] = React.useState([]);
  const [selectedMunicipalities, setSelectedMunicipalities] = React.useState([]);
  const [selectedMentors, setSelectedMentors] = React.useState([]);
  const add_confirmation = useSelector(
    ({ PostRefugeeDetailsReducer }) => PostRefugeeDetailsReducer.assignUnassignRolesToRefugeeReducer
  );
  React.useEffect(() => {
    dispatch(Actions.resetAssignUnassignRolesToRefugee(true));
    dispatch(Actions.getRefugeeSummary(sessionStorage.getItem("user_id")));
  }, []);
  const refugeeSummary = useSelector(
    ({ PostRefugeeDetailsReducer }) =>
      PostRefugeeDetailsReducer.getRefugeeSummaryReducer.data
  );
  const loading = useSelector(
    ({ PostRefugeeDetailsReducer }) =>
      PostRefugeeDetailsReducer.getRefugeeSummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ PostRefugeeDetailsReducer }) =>
      PostRefugeeDetailsReducer.getRefugeeSummaryReducer.errMsg
  );
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedMunicipalities")) {
      setSelectedMunicipalities(JSON.parse(sessionStorage.getItem("assignedMunicipalities")));
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
  const handleClickSuccessDialogclose = () => {
    setSuccessOpen(false);
  };
  const handleClickSuccessDialogopen = (data) => {
    setSuccessOpen(true);
  };
  const handleClickEdit = (path) => {
    // history.push({
    //   pathname: path
    // });
    window.location.replace(path);
  }
  const handleClickEditUser = () => {
    sessionStorage.setItem("user_type", "refugee");
    history.push({
      pathname: "/createUserByMentor"
    });
  }
  const handleClickSave = () => {
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
  }
  React.useEffect(() => {
    if (add_confirmation.data && add_confirmation.data.data && add_confirmation.data.data.assignUnassignRolesToRefugee) {

      sessionStorage.clear();
      dispatch(Actions.resetAddNewRefugee(true));
      dispatch(Actions.resetAssignUnassignRolesToRefugee(true));
      handleClickSuccessDialogopen();
    }
  }, [add_confirmation]);
  const handleNavigateToDashboard = () => {
    sessionStorage.clear();
    history.push("/mentordashboard");
  };
  return (
    <div className="main">
      {successOpen === true && (
        <SuccessDialog
          status={successOpen}
          methodd={handleClickSuccessDialogclose}
          role="Refugee"
        />
      )}
      <div className={bg}>
        <Container fixed>

          <div className="edit-municipality-detail-view-div">
            <h3 className="edit-municipality-detail-view-title">
              {t("Refugee")}
            </h3>
            {refugeeSummary && refugeeSummary.getRefugeeSummary && (
              <Grid container spacing={2}>

                <Grid item sm={3}>

                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Name")}: </span> <span className="edit-municipality-detail-view-text">{refugeeSummary.getRefugeeSummary.name}</span></p>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("BSN")}: </span> <span className="edit-municipality-detail-view-text">{refugeeSummary.getRefugeeSummary.bsn}</span></p>
                </Grid>
                <Grid item sm={3}>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Email")}: </span> <span className="edit-municipality-detail-view-text">{refugeeSummary.getRefugeeSummary.email}</span></p>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Phone")}: </span> <span className="edit-municipality-detail-view-text">{refugeeSummary.getRefugeeSummary.phoneNumber}</span></p>
                </Grid>
                <Grid item sm={6}>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("POI (DISK) Link")}: </span> <span className="edit-municipality-detail-view-text">{refugeeSummary.getRefugeeSummary.municipality ? <a target="_blank" href={refugeeSummary.getRefugeeSummary.municipality.poiLink}>{refugeeSummary.getRefugeeSummary.municipality.poiLink}</a> : "NA"}</span></p>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Brede Intake")}: </span> <span className="edit-municipality-detail-view-text">asd.pdf</span></p>

                  <div className="edit-municipality-detail-view-image-div">
                    <p className="edit-municipality-detail-view-logo-label">{t("Photo")}:&nbsp;</p>
                    <p className="edit-municipality-detail-view-logo-text">gw5448.jpg</p>
                    <div className="edit-municipality-detail-view-image-span">
                      <img alt="logo" className="edit-municipality-detail-view-image" src={refugeeSummary.getRefugeeSummary.profileImageUrl}></img>
                    </div>

                  </div>
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
                      {t("Suppliers")}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {selectedSuppliers.length}
                    </td>
                    <td
                      className="summary-table-tag-action-td"
                      onClick={() => handleClickEdit("/assignSupplierToRefugeeByMentor")}
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
export default withReducer("PostRefugeeDetailsReducer", reducer)(PostRefugeeDetails);
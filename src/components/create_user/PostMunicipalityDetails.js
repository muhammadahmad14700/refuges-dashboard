import React from "react";
import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import SuccessDialog from "./sub_components/AddMunicipalityDetailSuccessDialog";
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
    marginTop: "20px",
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
    borderRadius: "2px",
  },
}));
function PostMunicipalityDetails(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [bg, setBg] = React.useState("bgforform");
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [selectedRefugees, setSelectedRefugees] = React.useState([]);
  const [selectedMentors, setSelectedMentors] = React.useState([]);
  const [selectedSuppliers, setSelectedSuppliers] = React.useState([]);

  const add_confirmation = useSelector(
    ({ PostMunicipalityDetailsReducer }) =>
      PostMunicipalityDetailsReducer.assignUnassignRolesToMunicipalityReducer
  );
  React.useEffect(() => {
    dispatch(Actions.resetAssignUnassignRolesToMunicipality(true));
    dispatch(Actions.getMunicipalitySummary(sessionStorage.getItem("user_id")));
  }, []);
  const municipalitySummary = useSelector(
    ({ PostMunicipalityDetailsReducer }) =>
      PostMunicipalityDetailsReducer.getMunicipalitySummaryReducer.data
  );
  const loading = useSelector(
    ({ PostMunicipalityDetailsReducer }) =>
      PostMunicipalityDetailsReducer.getMunicipalitySummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ PostMunicipalityDetailsReducer }) =>
      PostMunicipalityDetailsReducer.getMunicipalitySummaryReducer.errMsg
  );
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedMentors")) {
      setSelectedMentors(JSON.parse(sessionStorage.getItem("assignedMentors")));
    }
  }, [setSelectedMentors]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedSuppliers")) {
      setSelectedSuppliers(
        JSON.parse(sessionStorage.getItem("assignedSuppliers"))
      );
    }
  }, [setSelectedSuppliers]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedRefugees")) {
      setSelectedRefugees(
        JSON.parse(sessionStorage.getItem("assignedRefugees"))
      );
    }
  }, [setSelectedRefugees]);

  const handleClickSuccessDialogclose = () => {
    setSuccessOpen(false);
  };
  const handleClickSuccessDialogopen = () => {
    setSuccessOpen(true);
  };
  const handleClickEdit = (path) => {
    history.push({
      pathname: path,
    });
  };
  const handleClickEditUser = () => {
    sessionStorage.setItem("user_type", "municipality");
    history.push({
      pathname: "/createUserByAdmin"
    });
  }
  const handleClickSave = () => {
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
      dispatch(Actions.resetAddNewMunicipality(true));
      dispatch(Actions.resetAssignUnassignRolesToMunicipality(true));
      handleClickSuccessDialogopen();
    }
  }, [add_confirmation]);
  const handleNavigateToDashboard = () => {
    sessionStorage.clear();
    history.push("/dashboard");
  };
  return (
    <div className="main">
      {successOpen === true && (
        <SuccessDialog
          status={successOpen}
          methodd={handleClickSuccessDialogclose}
          role="Municipality"
        />
      )}
      <div className={bg}>
        <Container fixed>
          <div className="edit-municipality-detail-view-div">
            <p className="edit-municipality-detail-view-title">
              {t("Municipality")}
            </p>
            {municipalitySummary && municipalitySummary.getMunicipalitySummary && (
              <Grid container spacing={2}>
                <Grid item sm={3}>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Name")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {municipalitySummary.getMunicipalitySummary.name}
                    </span>
                  </p>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Land")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {municipalitySummary.getMunicipalitySummary.province}
                    </span>
                  </p>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Manager")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {municipalitySummary.getMunicipalitySummary.manager.name}
                    </span>
                  </p>
                </Grid>
                <Grid item sm={3}>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Contact Person")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {
                        municipalitySummary.getMunicipalitySummary.contactPerson
                          .name
                      }
                    </span>
                  </p>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Email")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {municipalitySummary.getMunicipalitySummary.manager.email}
                    </span>
                  </p>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Phone")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {
                        municipalitySummary.getMunicipalitySummary.manager
                          .phoneNumber
                      }
                    </span>
                  </p>
                </Grid>
                <Grid item sm={6}>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("POI (DISK) Link")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {municipalitySummary.getMunicipalitySummary.poiLink ? <a target="_blank" href={municipalitySummary.getMunicipalitySummary.poiLink}>{municipalitySummary.getMunicipalitySummary.poiLink}</a> : "NA"}                    </span>

                  </p>

                  <div className="edit-municipality-detail-view-image-div">
                    <p className="edit-municipality-detail-view-logo-label">
                      {t("Logo")}:&nbsp;
                    </p>
                    <p className="edit-municipality-detail-view-logo-text">
                      gw5448.jpg
                    </p>
                    <div className="edit-municipality-detail-view-image-span">
                      <img
                        alt="logo"
                        className="edit-municipality-detail-view-image"
                        src={municipalitySummary.getMunicipalitySummary.logoUrl}
                      ></img>
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
                    marginBottom: "30px",
                  }}
                >
                  <tr>
                    <th style={{ width: "100px" }}>
                      {t("System User")}
                    </th>
                    <th style={{ textAlign: "center" }}>{t("Total Assigned")}</th>

                    <th></th>
                  </tr>
                  <tr>
                    <td>{t("Mentors")}</td>
                    <td style={{ textAlign: "center" }}>{selectedMentors.length}</td>
                    <td
                      className="summary-table-tag-action-td"
                      onClick={() =>
                        handleClickEdit("/assignMentorToMunicipality")
                      }
                    >
                      {t("View and Edit")}
                    </td>
                  </tr>
                  <tr>
                    <td>{t("Suppliers")}</td>
                    <td style={{ textAlign: "center" }}>{selectedSuppliers.length}</td>
                    <td
                      className="summary-table-tag-action-td"
                      onClick={() =>
                        handleClickEdit("/assignSupplierToMunicipality")
                      }
                    >
                      {t("View and Edit")}
                    </td>
                  </tr>
                  <tr>
                    <td>{t("Refugees")}</td>
                    <td style={{ textAlign: "center" }}>{selectedRefugees.length}</td>
                    <td
                      className="summary-table-tag-action-td"
                      onClick={() =>
                        handleClickEdit("/assignRefugeeToMunicipality")
                      }
                    >
                      {t("View and Edit")}
                    </td>
                  </tr>
                </table>
              </Grid>
              <Grid item sm={5}></Grid>
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
            <Grid item sm={8} xs={12}></Grid>
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
export default withReducer(
  "PostMunicipalityDetailsReducer",
  reducer
)(PostMunicipalityDetails);

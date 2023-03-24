import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
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
function ViewEditSupplierSummary(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [bg, setBg] = React.useState("bgforform");
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [selectedMunicipalities, setSelectedMunicipalities] = React.useState(
    []
  );
  const [selectedRefugees, setSelectedRefugees] = React.useState([]);
  const [totalMunicipalities, setTotalMunicipalities] = React.useState(0);
  const [unSelectedMunicipalities, setUnSelectedMunicipalities] = React.useState(
    []
  );
  const [unSelectedRefugees, setUnSelectedRefugees] = React.useState([]);
  const [totalRefugees, setTotalRefugees] = React.useState(0);
  const add_confirmation = useSelector(
    ({ ViewEditSupplierSummaryReducer }) =>
      ViewEditSupplierSummaryReducer.assignUnassignRolesToSupplierReducer
  );
  React.useEffect(() => {
    dispatch(Actions.resetAssignUnassignRolesToSupplier(true));
    dispatch(Actions.getSupplierSummary(sessionStorage.getItem("user_id")));
  }, []);
  const supplierSummary = useSelector(
    ({ ViewEditSupplierSummaryReducer }) =>
      ViewEditSupplierSummaryReducer.getSupplierSummaryReducer.data
  );
  const loading = useSelector(
    ({ ViewEditSupplierSummaryReducer }) =>
      ViewEditSupplierSummaryReducer.getSupplierSummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ ViewEditSupplierSummaryReducer }) =>
      ViewEditSupplierSummaryReducer.getSupplierSummaryReducer.errMsg
  );
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedMunicipalities")) {
      setSelectedMunicipalities(
        JSON.parse(sessionStorage.getItem("assignedMunicipalities"))
      );
    }
  }, [setSelectedMunicipalities]);
  React.useEffect(() => {
    if (sessionStorage.getItem("assignedRefugees")) {
      setSelectedRefugees(
        JSON.parse(sessionStorage.getItem("assignedRefugees"))
      );
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
      ;
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
  };
  const handleClickEditUser = () => {
    sessionStorage.setItem("user_type", "supplier");
    history.push({
      pathname: "/editUserByMentor"
    });
  }
  const handleClickSave = () => {
    let values = {
      supplier_id: sessionStorage.getItem("user_id"),
      amunicipalityIds: [],
      arefugeeIds: [],
      umunicipalityIds: [],
      urefugeeIds: [],
    };
    if (selectedMunicipalities.length > 0) {
      for (let i = 0; i < selectedMunicipalities.length; i++) {
        const element = selectedMunicipalities[i];
        values.amunicipalityIds.push(element.id);
      }
    }
    if (selectedRefugees.length > 0) {
      for (let i = 0; i < selectedRefugees.length; i++) {
        const element = selectedRefugees[i];
        values.arefugeeIds.push(element.id);
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
    if (
      add_confirmation.data &&
      add_confirmation.data.data &&
      add_confirmation.data.data.assignUnassignRolesToSupplier
    ) {
      sessionStorage.clear();
      dispatch(Actions.resetAssignUnassignRolesToSupplier(true));
      dispatch(Actions.resetAddNewSupplier(true));
      handleClickSuccessDialogopen();
    }
  }, [add_confirmation]);
  const handleNavigateToDashboard = () => {
    sessionStorage.clear();
    history.push("/mentordashboard");
  };
  React.useEffect(() => {
    if (supplierSummary && supplierSummary.getSupplierSummary) {
      setTotalMunicipalities((selectedMunicipalities.length + supplierSummary.getSupplierSummary.totalMunicipalities - unSelectedMunicipalities.length > 1 ? "1" : selectedMunicipalities.length + supplierSummary.getSupplierSummary.totalMunicipalities - unSelectedMunicipalities.length));
      setTotalRefugees(supplierSummary.getSupplierSummary.totalRefugees + selectedRefugees.length - unSelectedRefugees.length);
    }
  }, [supplierSummary]);
  return (
    <div className="main">
      {successOpen === true && (
        <SuccessDialog
          status={successOpen}
          methodd={handleClickSuccessDialogclose}
          role="Supplier"
        />
      )}
      <div className={bg}>
        <Container fixed>
          <div className="edit-municipality-back-btn-div">

          </div>
          <div className="edit-municipality-detail-view-div">
            <h3 className="edit-municipality-detail-view-title">{t("Supplier")}</h3>
            {supplierSummary && supplierSummary.getSupplierSummary && (
              <Grid container spacing={2}>
                <Grid item sm={4}>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Name")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {supplierSummary.getSupplierSummary.name}
                    </span>
                  </p>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Type")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {supplierSummary.getSupplierSummary.type}
                    </span>
                  </p>
                </Grid>
                <Grid item sm={4}>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Contact Person")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {supplierSummary.getSupplierSummary.contactPerson.name}
                    </span>
                  </p>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Email")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {supplierSummary.getSupplierSummary.email}
                    </span>
                  </p>
                  <p className="edit-municipality-detail-view-data">
                    <span className="edit-municipality-detail-view-label">
                      {t("Phone")}:{" "}
                    </span>{" "}
                    <span className="edit-municipality-detail-view-text">
                      {supplierSummary.getSupplierSummary.phoneNumber}
                    </span>
                  </p>
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
              <Grid item sm={8}>
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
                      onClick={() => handleClickEdit("/editAssignRefugeeToSupplierByMentor")}
                    >{t("View and Edit")}</td>
                  </tr>
                </table>

              </Grid>
              <Grid item sm={4}>

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
  "ViewEditSupplierSummaryReducer",
  reducer
)(ViewEditSupplierSummary);

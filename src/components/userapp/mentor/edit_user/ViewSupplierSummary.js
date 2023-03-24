import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
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
function ViewSupplierSummary(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [bg, setBg] = React.useState("bgforform");
  const [totalRefugees, setTotalRefugees] = React.useState(0);
  React.useEffect(() => {
    dispatch(Actions.getSupplierSummary(sessionStorage.getItem("user_id")));
  }, []);
  const supplierSummary = useSelector(
    ({ ViewSupplierSummaryReducer }) =>
      ViewSupplierSummaryReducer.getSupplierSummaryReducer.data
  );
  const loading = useSelector(
    ({ ViewSupplierSummaryReducer }) =>
      ViewSupplierSummaryReducer.getSupplierSummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ ViewSupplierSummaryReducer }) =>
      ViewSupplierSummaryReducer.getSupplierSummaryReducer.errMsg
  );
  const handleClickEdit = (path) => {
    history.push({
      pathname: path
    });
  };
  const handleClickBack = () => {
    sessionStorage.clear();
    history.push("/systemSearchByMentor");
  };
  React.useEffect(() => {
    if (supplierSummary && supplierSummary.getSupplierSummary) {
      setTotalRefugees(supplierSummary.getSupplierSummary.totalRefugees);
    }
  }, [supplierSummary]);
  return (
    <div className="main">
      <div className={bg}>
        <Container fixed>
          <div className="edit-municipality-back-btn-div">
            <Button
              variant="contained"
              className={classes.backButton}
              onClick={handleClickBack}
              color="primary"
            >
              {t("Back")}
            </Button>
          </div>
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
                      onClick={() => handleClickEdit("/viewAssignRefugeeToSupplierByMentor")}
                    >{t("View")}</td>
                  </tr>
                </table>

              </Grid>
              <Grid item sm={5}>

              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default withReducer(
  "ViewSupplierSummaryReducer",
  reducer
)(ViewSupplierSummary);

import React from "react";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
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
function ViewRefugeeSummary(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [bg, setBg] = React.useState("bgforform");
  const [totalSuppliers, setTotalSuppliers] = React.useState(0);
  React.useEffect(() => {
    dispatch(Actions.getRefugeeSummary(sessionStorage.getItem("user_id")));
  }, []);
  const refugeeSummary = useSelector(
    ({ ViewRefugeeSummaryReducer }) =>
      ViewRefugeeSummaryReducer.getRefugeeSummaryReducer.data
  );
  const loading = useSelector(
    ({ ViewRefugeeSummaryReducer }) =>
      ViewRefugeeSummaryReducer.getRefugeeSummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ ViewRefugeeSummaryReducer }) =>
      ViewRefugeeSummaryReducer.getRefugeeSummaryReducer.errMsg
  );
  const handleClickEdit = (path) => {
    history.push({
      pathname: path
    });
  }
  const handleClickBack = () => {
    sessionStorage.clear();
    history.push("/systemSearchByMentor");
  };
  React.useEffect(() => {
    if (refugeeSummary && refugeeSummary.getRefugeeSummary) {
      setTotalSuppliers(refugeeSummary.getRefugeeSummary.totalSuppliers);
    }
  }, [refugeeSummary]);
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
                      Suppliers
                 </td>
                    <td style={{ textAlign: "center" }}>
                      {totalSuppliers}
                    </td>
                    <td
                      className="summary-table-tag-action-td"
                      onClick={() => handleClickEdit("/viewAssignSupplierToRefugeeByMentor")}
                    >{t("View")}</td>
                  </tr>
                </table>

              </Grid>

              <Grid item xs={12}>

              </Grid>
            </Grid>

          </div>
        </Container>
      </div>
    </div>
  );

}
export default withReducer("ViewRefugeeSummaryReducer", reducer)(ViewRefugeeSummary);
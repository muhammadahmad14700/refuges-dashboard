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
function ViewMentorSummary(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [bg, setBg] = React.useState("bgforform");
  const [totalMunicipalities, setTotalMunicipalities] = React.useState(0);
  const [totalRefugees, setTotalRefugees] = React.useState(0);
  React.useEffect(() => {
    dispatch(Actions.getMentorSummary(sessionStorage.getItem("user_id")));
  }, []);
  const mentorSummary = useSelector(
    ({ ViewMentorSummaryReducer }) =>
      ViewMentorSummaryReducer.getMentorSummaryReducer.data
  );
  const loading = useSelector(
    ({ ViewMentorSummaryReducer }) =>
      ViewMentorSummaryReducer.getMentorSummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ ViewMentorSummaryReducer }) =>
      ViewMentorSummaryReducer.getMentorSummaryReducer.errMsg
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
    if (mentorSummary && mentorSummary.getMentorSummary) {
      setTotalMunicipalities(mentorSummary.getMentorSummary.totalMunicipalities);
      setTotalRefugees(mentorSummary.getMentorSummary.totalRefugees);
    }
  }, [mentorSummary]);
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
                      onClick={() => handleClickEdit("/viewAssignRefugeeToMentorByMentor")}
                    >{t("View")}</td>
                  </tr>
                </table>

              </Grid>
              <Grid item sm={4}>

              </Grid>
            </Grid>

          </div>
        </Container>
      </div>
    </div>
  );

}
export default withReducer("ViewMentorSummaryReducer", reducer)(ViewMentorSummary);
import React from "react";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
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
function ViewRefugeeSummary(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const classes = useStyles();
  const [bg, setBg] = React.useState("bgforform");
  const handleClickBack = () => {
    history.goBack();
  };
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
            {history.location.state && (
              <Grid container spacing={2}>

                <Grid item md={3} sm={12} xs={12}>

                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Name")}: </span> <span className="edit-municipality-detail-view-text">{history.location.state.name}</span></p>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("BSN")}: </span> <span className="edit-municipality-detail-view-text">{history.location.state.bsn}</span></p>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Municipality")}: </span> <span className="edit-municipality-detail-view-text">{history.location.state.municipality ? history.location.state.municipality.name : "NA"}</span></p>
                </Grid>

                <Grid item md={9} sm={12} xs={12}>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Email")}: </span> <span className="edit-municipality-detail-view-text">{history.location.state.email}</span></p>
                  <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Phone")}: </span> <span className="edit-municipality-detail-view-text">{history.location.state.phoneNumber}</span></p>
                  <div className="edit-municipality-detail-view-image-div">
                    <p className="edit-municipality-detail-view-logo-label">{t("Photo")}:&nbsp;</p>
                    <p className="edit-municipality-detail-view-logo-text">gw5448.jpg</p>
                    <div className="edit-municipality-detail-view-image-span">
                      <img alt="logo" className="edit-municipality-detail-view-image" src={history.location.state.profileImageUrl}></img>
                    </div>

                  </div>
                </Grid>
              </Grid>
            )}

          </div>
          <div className="edit-municipality-detail-view-div">


            <Grid container spacing={2}>

              <Grid item md={3} sm={6} xs={6}>
                <h3 className="edit-municipality-detail-view-title">
                  {t("Mentor")}
                </h3>
              </Grid>

              <Grid item md={9} sm={6} xs={6}>
                <h3 className="edit-municipality-detail-view-title">
                  {t("Municipality")}
                </h3>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <hr style={{ color: "black", backgroundColor: "black", width: "100%", height: "2px", borderWidth: "0px", marginTop: "-13px" }}></hr>
              </Grid>

              <Grid item md={3} sm={12} xs={12}>

                <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Name")}: </span> <span className="edit-municipality-detail-view-text">{history.location.state.mentor ? history.location.state.mentor.name : "NA"}</span></p>
                <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("E-mail")}: </span> <span className="edit-municipality-detail-view-text">{history.location.state.mentor ? history.location.state.mentor.email : "NA"}</span></p>
                <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Phone")}: </span> <span className="edit-municipality-detail-view-text">{history.location.state.mentor ? history.location.state.mentor.phoneNumber : "NA"}</span></p>
              </Grid>
              <Grid item md={9} sm={12} xs={12}>

                <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Contact Person")}: </span> <span className="edit-municipality-detail-view-text">{(history.location.state.municipality && history.location.state.municipality.contactPerson) ? history.location.state.municipality.contactPerson.name : "NA"}</span></p>
                <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("E-mail")}: </span> <span className="edit-municipality-detail-view-text">{(history.location.state.municipality && history.location.state.municipality.manager) ? history.location.state.municipality.manager.email : "NA"}</span></p>
                <p className="edit-municipality-detail-view-data"><span className="edit-municipality-detail-view-label">{t("Phone")}: </span> <span className="edit-municipality-detail-view-text">{(history.location.state.municipality && history.location.state.municipality.manager) ? history.location.state.municipality.manager.phoneNumber : "NA"}</span></p>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default ViewRefugeeSummary;
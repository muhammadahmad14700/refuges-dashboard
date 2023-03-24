
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import cloneDeep from 'lodash/cloneDeep';
import Alert from "@material-ui/lab/Alert";
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../store/withReducer";
import * as Actions from "../store/actions";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "black",
  },
  textField: {
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",
  },

});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


const useStyles = makeStyles((theme) => ({
  root1: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  rootStyle: {
    borderRadius: 15,
    backgroundColor: "white",
    paddingTop: "25px",
    paddinBottom: "25px",
    paddingLeft: "45px",
    paddingRight: "25px",
  },
  headingaddform: {
    color: "#8fcccd",
    fontSize: "14px",
    fontWeight: "bold",
    borderBottom: "1px solid #8fcccd",
    width: "270px",
    paddingBottom: "2px",
    [theme.breakpoints.down('sm')]: {
      width: "auto",
    },
  },
  headingaddform1: {
    color: "black",
    fontSize: "14px",
    fontWeight: "bold",
  },
  dividerColor: {
    marginTop: "45px",
    backgroundColor: "black",
  },
  textField: {
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",
  },
  textField1: {
    width: "15%",
    margin: 0,
    backgroundColor: "#daeff0",
  },
  input1: {
    height: "5px",
    border: 0,
  },
  notchedOutline: {
    borderWidth: "0px",
  },
  lable: {
    fontStyle: "italic",
    textAlign: "left",
  },
  cornerbtn: {
    textAlign: "right",
  },
  cornerbtn1: {
    margin: theme.spacing(1),
    fontSize: "13px",
    backgroundColor: "#454a92",
    width: "160px",
    opacity: 1,
  },
  cornerbtn11: {
    fontSize: "16px",
    backgroundColor: "#454a92",
    fontFamily: "opensans-semibold",
    opacity: 1,
    borderRadius: "2px",
    boxShadow: "none",
    marginTop: "20px"
  }
}));

function Progressmodal(props) {
  const classes = useStyles();
  const [frontendobj, setFrontendobj] = React.useState(undefined);
  const [t] = useTranslation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (props.data) {
      setFrontendobj(undefined);
      dispatch(Actions.getPipprogress(props.data.id));
    }
  }, [dispatch, props.data]);
  const handleClickSave = () => {
    let data = {};
    for (let [key] of Object.entries(frontendobj)) {
      if (frontendobj[key].type === "plain") {
        for (let [key1] of Object.entries(frontendobj[key])) {
          if (
            typeof frontendobj[key][key1] === "object" &&
            frontendobj[key][key1] !== null
          ) {
            if (frontendobj[key][key1]["selected"] === true) {
              if (data[key]) {
                data[key][key1] = 1;
              } else {
                data[key] = {};
                data[key][key1] = 1;
              }
            }
          }
        }
      }
      if (frontendobj[key].type === "section") {
        for (let [key1] of Object.entries(frontendobj[key])) {
          if (
            typeof frontendobj[key][key1] === "object" &&
            frontendobj[key][key1] !== null
          ) {
            for (let [key2] of Object.entries(frontendobj[key][key1])) {
              if (
                typeof frontendobj[key][key1][key2] === "object" &&
                frontendobj[key][key1][key2] !== null
              ) {
                if (frontendobj[key][key1][key2]["selected"] === true) {

                  if (data[key] && data[key][key1]) {
                    data[key][key1][key2] = 1;
                  }
                  else if (!data[key]) {
                    data[key] = {}
                    data[key][key1] = {};
                    data[key][key1][key2] = 1;
                  }
                  else if (data[key] && !data[key][key1]) {
                    data[key][key1] = {};
                    data[key][key1][key2] = 1;
                  }
                }
              }
            }
          }
        }
      }

    }
    let string = JSON.stringify(data);
    string = string.replace(/"/g, "'");
    dispatch(Actions.updatePipprogress(props.data.id, string));
  };

  const handleClickCat = (kone, ktwo, flag) => {
    if (flag === true) {

      let newObj = Object.assign({}, frontendobj);
      newObj[kone][ktwo].selected = false;

      setFrontendobj(newObj);
    } else {

      let newObj = Object.assign({}, frontendobj);
      newObj[kone][ktwo].selected = true;

      setFrontendobj(newObj);
    }
  };
  const handleClickCatSection = (kone, ktwo, kthree, flag) => {
    if (flag === true) {

      let newObj = Object.assign({}, frontendobj);
      newObj[kone][ktwo][kthree].selected = false;

      setFrontendobj(newObj);
    } else {

      let newObj = Object.assign({}, frontendobj);
      newObj[kone][ktwo][kthree].selected = true;

      setFrontendobj(newObj);
    }
  };
  const pipprogress_confirmation = useSelector(
    ({ ProgressmodalReducer }) => ProgressmodalReducer.PipprogressReducer.data
  );
  const loadingg = useSelector(
    ({ ProgressmodalReducer }) =>
      ProgressmodalReducer.PipprogressReducer.isLoading
  );

  const errMsg = useSelector(
    ({ ProgressmodalReducer }) => ProgressmodalReducer.PipprogressReducer.errMsg
  );
  const update_confirmation = useSelector(
    ({ ProgressmodalReducer }) => ProgressmodalReducer.UpdatePipprogressReducer
  );
  React.useEffect(() => {
    if (update_confirmation.data.data) {
      if (props.searchText) {
        dispatch(Actions.getAllRefuges(1, 10, props.mid, '', props.searchText, props.selectedRole.id));

      }
      else {
        dispatch(Actions.getAllRefuges(props.page + 1, 10, props.mid));

      }
      dispatch(Actions.getPipprogressStats(props.mid));

      alert("successfully updated progress");
    }
  }, [update_confirmation, dispatch, props.mid, props.page]);

  const handleClose = (status) => {
    setFrontendobj(undefined);
    dispatch(Actions.resetGetpipprogresss(true));
    dispatch(Actions.resetupdatePipprogress(true));
    props.methodd(false);

  };

  React.useEffect(() => {
    if (pipprogress_confirmation && !frontendobj) {
      setFrontendobj(cloneDeep(pipprogress_confirmation));
    }
  }, [pipprogress_confirmation, frontendobj]);
  return (
    <div>
      <Dialog
        classes={{
          paper: classes.rootStyle,
        }}
        onClose={() => handleClose(false)}
        aria-labelledby="customized-dialog-title"
        BackdropProps={{
          classes: {
            root: classes.root1,
          },
        }}
        open={props.status}
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => handleClose(false)}
        >
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform1}
          >
            {props.data
              ? props.data.name
              : "NA"}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform}
          >
            {t("Track progress")}
          </Typography>
        </DialogTitle>
        <DialogContent
        >
          <div>
            <div className="promodal-start-div">
              <div style={{ float: "left" }}>
                <p style={{ fontSize: "13px", fontStyle: "regular" }}>
                  {t("Start date")}
                </p>
                <p
                  style={{
                    backgroundColor: "#8fcccd",
                    marginTop: "-10px",
                    width: "fit-content",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  {(props.data && props.data.pipPlanSummary && props.data.pipPlanSummary.startDate) ? (new Date(props.data.pipPlanSummary.startDate)).toLocaleDateString() : "NA"}

                </p>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ fontSize: "13px", fontStyle: "regular" }}>
                  {t("Expected EndDate")}
                </p>
                <p
                  style={{
                    backgroundColor: "#8fcccd",
                    marginTop: "-10px",
                    width: "fit-content",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  {(props.data && props.data.pipPlanSummary && props.data.pipPlanSummary.endDate) ? (new Date(props.data.pipPlanSummary.endDate)).toLocaleDateString() : "NA"}
                </p>
              </div>
            </div>



            <p className="pro-para">
              {t("Do you want to make adjustments? For each part you can right click on the pin and adjust the part as desired")}
            </p>


            {pipprogress_confirmation && frontendobj &&
              Object.keys(frontendobj).map((key, index) => {
                return (
                  <div className="promodal-inside-divs">
                    <p className="promodal-inside-divs-heading">
                      #{index + 1} {key}
                    </p>
                    <div className="promodal-inside-div-wrapper">
                      {frontendobj[key].type === "plain" &&
                        Object.keys(frontendobj[key]).map((key2, index) => {
                          return (
                            key2 !== "currentProgressPercent" &&
                            key2 !== "type" && (
                              <div style={{ textAlign: "center" }}>


                                <div
                                  className={
                                    frontendobj[key][key2].selected
                                      ? "promodal-inside-div-subdivs"
                                      : "promodal-inside-div-subdivs-dis"
                                  }
                                  onClick={() =>
                                    handleClickCat(
                                      key,
                                      key2,
                                      frontendobj[key][key2].selected
                                    )
                                  }
                                >
                                  {key2}
                                </div>

                              </div>
                            )
                          );
                        })}
                    </div>
                    {frontendobj[key].type === "section" &&
                      Object.keys(frontendobj[key]).map((key2, index) => {
                        return (
                          key2 !== "currentProgressPercent" &&
                          key2 !== "type" && (
                            <div className="promodal-inside-div-wrapper-sec">

                              <p className="section-key-pipprogress-p">{key2}</p>
                              {Object.keys(frontendobj[key][key2]).map((key3, index) => {
                                return (
                                  <div style={{ textAlign: "center" }}>


                                    <div
                                      className={
                                        frontendobj[key][key2][key3].selected
                                          ? "promodal-inside-div-subdivs"
                                          : "promodal-inside-div-subdivs-dis"
                                      }
                                      onClick={() =>
                                        handleClickCatSection(
                                          key,
                                          key2,
                                          key3,
                                          frontendobj[key][key2][key3].selected
                                        )
                                      }
                                    >
                                      {key3}
                                    </div>

                                  </div>
                                );
                              })}
                            </div>
                          )
                        );
                      })}
                  </div>
                );
              })}

          </div>
          {errMsg && <p>{errMsg}</p>}
          {loadingg && <p>loading...</p>}
          {update_confirmation.errMsg && (
            <Grid item sm={12} xs={12}>
              <Alert severity="error">{t(update_confirmation.errMsg)}</Alert>
            </Grid>
          )}
          {update_confirmation.isLoading && (
            <Grid item sm={12} xs={12}>
              Loading.......
            </Grid>
          )}
          <Grid item sm={12} xs={12} className={classes.cornerbtn}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              className={classes.cornerbtn11}
              onClick={() => handleClickSave()}
            >
              {t("Save")}
            </Button>
          </Grid>
        </DialogContent>

      </Dialog>
    </div>
  );
}
export default withReducer("ProgressmodalReducer", reducer)(Progressmodal);

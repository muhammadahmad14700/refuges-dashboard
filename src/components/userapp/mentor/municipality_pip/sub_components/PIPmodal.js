import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Printmodal from "./Printmodal";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdfpipreport from "../Pdfpipreport";
import { useTranslation } from 'react-i18next';

// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../../../store/withReducer";
import * as Actions from "../store/actions";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "white",
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
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
    // backgroundColor: "transparent",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  rootStyle: {
    borderRadius: 15,
    backgroundColor: "#505398",
    padding: "15px",
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
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
  },
}));

function PIPmodal(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [printopen, setPrintopen] = React.useState(false);
  var history = useHistory();
  React.useEffect(() => {
    if (props.vData) {
      dispatch(Actions.getAllPipplan(props.vData.id));
    }
  }, [dispatch, props.vData]);

  const pip_confirmation = useSelector(
    ({ PIPmodalReducer }) => PIPmodalReducer.AllPipplanReducer.data
  );
  const loadingg = useSelector(
    ({ PIPmodalReducer }) => PIPmodalReducer.AllPipplanReducer.isLoading
  );

  // const errMsg = useSelector(
  //   ({ PIPmodalReducer }) => PIPmodalReducer.AllPipplanReducer.errMsg
  // );

  const Test = () => <i className="fa fa-file-text-o file-icon-BImodal"></i>;
  const handleClose = (status) => {
    props.methodd(false);
  };
  const Editpip = () => {
    history.push({
      pathname: "/editpipreportbymentor",
      state: props.data ? props.data : "",
      version: props.vData ? props.vData : "",
      mid: props.mid ? props.mid : "",
    });
  };
  const Addpip = () => {
    history.push({
      pathname: "/addpipreportbymentor",
      state: props.data ? props.data : "",
      mid: props.mid ? props.mid : "",
    });
  };
  const handleClickPrintopen = (id) => {
    setPrintopen(true);
  };
  return (
    <div>
      {printopen === true && (
        <Printmodal
          status={printopen}
          methodd={setPrintopen}
          data={pip_confirmation.getPIPPlan.pipPlan}
        />
      )}
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
        maxWidth="sm"
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
              ? props.data.id +
              " " +
              props.data.name
              : "NA"}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform}
          >
            {t("Plan Inburgering en Participatie (PIP)")}
          </Typography>
        </DialogTitle>
        <DialogContent
        >
          <div className="div-pipmodal">
            <div className="div-pipmodal-child1">

              {loadingg && <p>loading.......</p>}

              {!loadingg &&
                pip_confirmation &&
                pip_confirmation.getPIPPlan &&
                pip_confirmation.getPIPPlan.pipPlan && (
                  <p>
                    <PDFDownloadLink
                      document={
                        <Pdfpipreport
                          data={pip_confirmation.getPIPPlan.pipPlan}
                        />
                      }
                      fileName="PIPplan.pdf"
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : <Test />
                      }
                    </PDFDownloadLink>
                  </p>
                )}
              {pip_confirmation &&
                pip_confirmation.getPIPPlan &&
                pip_confirmation.getPIPPlan.pipPlan && (
                  <p>
                    <i
                      onClick={() => handleClickPrintopen("1")}
                      className="fa fa-print file-icon-BImodal"
                    ></i>
                  </p>
                )}

              {pip_confirmation &&
                pip_confirmation.getPIPPlan &&
                pip_confirmation.getPIPPlan.pipPlan && props.index === 1 && (
                  <p>
                    <i
                      className="fa fa-pencil file-icon-BImodal"
                      onClick={() => Editpip()}
                    ></i>
                  </p>
                )}

              {pip_confirmation &&
                pip_confirmation.getPIPPlan &&
                !pip_confirmation.getPIPPlan.pipPlan && (
                  <p>
                    <i
                      className="fa fa-plus-circle file-icon-BImodal"
                      onClick={() => Addpip()}
                    ></i>
                  </p>
                )}
            </div>
            <div className="div-pipmodal-child2">
              <div>
                <p style={{ fontSize: "14px", fontStyle: "regular" }}>
                  {t("Date of adoption")}*
                </p>
                <p
                  style={{
                    backgroundColor: "#8fcccd",
                    marginTop: "-10px",
                    width: "fit-content",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    float: "right",
                  }}
                >
                  {(props.data && props.data.pipPlanSummary && props.data.pipPlanSummary.endDate) ? (new Date(props.data.pipPlanSummary.endDate)).toLocaleDateString() : "NA"}
                </p>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "13px", fontStyle: "regular" }}>
            * {t("The PIP plan can be adjusted up to 12 months after the start of the process, after these 12 months the PIP plan is fixed and no changes can be applied")}.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withReducer("PIPmodalReducer", reducer)(PIPmodal);

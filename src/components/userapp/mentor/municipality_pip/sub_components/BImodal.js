import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
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

function BImodal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t] = useTranslation();
  React.useEffect(() => {
    if (props.data) {
      dispatch(Actions.getBredeintake(props.data.id));
    }
  }, [dispatch, props.data]);
  const brede_confirmation = useSelector(
    ({ BImodalReducer }) => BImodalReducer.BredeintakeReducer.data
  );
  const loadingg = useSelector(
    ({ BImodalReducer }) => BImodalReducer.BredeintakeReducer.isLoading
  );

  // const errMsg = useSelector(
  //   ({ BImodalReducer }) => BImodalReducer.BredeintakeReducer.errMsg
  // );

  const handleClose = (status) => {
    props.methodd(false);
  };

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
        maxWidth="xs"
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
            {t("Brede Intake")} (BI)
          </Typography>
        </DialogTitle>
        <DialogContent style={{ marginTop: "-30px" }}>
          <div className="div-bimodal">
            {loadingg && <p>loading.......</p>}
            {
              !loadingg &&
              brede_confirmation &&
              brede_confirmation.getBredeIntakeFile &&
              brede_confirmation.getBredeIntakeFile.bredeIntakeFileUrl && (
                <div>
                  <p>
                    <a
                      href={`${brede_confirmation.getBredeIntakeFile.bredeIntakeFileUrl}`}
                      target="popup"
                      type="application/pdf;"
                      download='some_pdf_name'

                    >


                      <i className="fa fa-file-text-o file-icon-BImodal"></i>

                    </a>

                  </p>

                  <p>
                    <a

                      target="popup"
                      onClick={() => {
                        window.open(brede_confirmation.getBredeIntakeFile.bredeIntakeFileUrl, "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")
                      }}
                    >
                      <i className="fa fa-print file-icon-BImodal"></i>
                    </a>
                  </p>
                </div>
              )}


          </div>

          <div className="BImodal-end-div">
            <div style={{ float: "left" }}>
              <p style={{ fontSize: "13px", fontStyle: "regular" }}>
                {t("Intake Date")}
              </p>
              <p
                style={{
                  backgroundColor: "#8fcccd",
                  marginTop: "-10px",
                  width: "fit-content",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                {(props.data && props.data.intakeDate) ? (new Date(props.data.intakeDate)).toLocaleDateString() : "NA"}
              </p>
            </div>
          </div>

        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withReducer("BImodalReducer", reducer)(BImodal);


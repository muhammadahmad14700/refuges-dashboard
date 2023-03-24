import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Pdfpipreport from "../Pdfpipreport";
import { PDFViewer } from "@react-pdf/renderer";

import { makeStyles } from "@material-ui/core/styles";

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
    padding: "25px",
  },
  headingaddform: {
    color: "#454a92",
    fontSize: "14px",
    fontWeight: "bold",
    borderBottom: "1px solid #454a92",
    width: "240px",
    paddingBottom: "2px",
  },
  headingaddform1: {
    color: "black",
    fontSize: "14px",
    fontWeight: "bold",
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  textField1: {
    // paddingTop: "20.5px",
    width: "15%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  textField3: {
    // paddingTop: "20.5px",
    width: "40%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  input1: {
    height: "5px",
    border: 0,
  },
  notchedOutline: {
    borderWidth: "0px",
    // borderColor: "yellow !important"
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
    // height: "45px",
    // border: "1px solid white",
    opacity: 1,
  },
  btnupload: {
    backgroundColor: "#454a92",
  },
  input: {
    display: "none",
  },
}));

export default function Printmodal(props) {
  const classes = useStyles();
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
        maxWidth="md"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => handleClose(false)}
        >
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform}
          >
            Print
          </Typography>
        </DialogTitle>
        <DialogContent
        >
          <Grid
            container
            spacing={2}
          >
            <PDFViewer width="100%" height={450}>
              <Pdfpipreport data={props.data} />
            </PDFViewer>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

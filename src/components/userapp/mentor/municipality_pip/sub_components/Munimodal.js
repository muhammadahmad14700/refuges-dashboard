import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
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
  },
  headingaddform1: {
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
  },
}));

export default function Munimodal(props) {
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
            {props.data ? props.data.firstName + props.data.lastName : "NA"}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform}
          >
            Mentor
          </Typography>
        </DialogTitle>
        <DialogContent style={{ marginTop: "-30px" }}>
          <div style={{ display: "flex", color: "white" }}>
            <p>
              <b>Mentor Id:</b>
            </p>
            <p style={{ marginLeft: "20px" }}>
              {(props.data && props.data.mentor) ? props.data.mentor._id : "NA"}
            </p>
          </div>
          <div style={{ display: "flex", color: "white" }}>
            <p>
              <b>Mentor Name:</b>
            </p>
            <p style={{ marginLeft: "20px" }}>
              {(props.data && props.data.mentor) ? props.data.mentor.firstName : "NA"}
            </p>
          </div>
          <div style={{ display: "flex", color: "white" }}>
            <p>
              <b>Mentor Email:</b>
            </p>
            <p style={{ marginLeft: "20px" }}>
              {(props.data && props.data.mentor) ? props.data.mentor.email : "NA"}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

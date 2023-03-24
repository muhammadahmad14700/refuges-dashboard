import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "white"
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0"

    // height:"2%px",
    // padding: 0
  }
});

const DialogTitle = withStyles(styles)(props => {
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

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const useStyles = makeStyles(theme => ({
  root1: {
    // backgroundColor: "transparent",
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  },
  rootStyle: {
    borderRadius: 15,
    backgroundColor: "#505398",
    padding: "15px"
  },
  headingaddform: {
    color: "#8fcccd",
    fontSize: "14px",
    fontWeight: "bold",
    borderBottom: "1px solid #8fcccd",
    width: "270px",
    paddingBottom: "2px"
  },
  headingaddform1: {
    color: "white",
    fontSize: "14px",
    fontWeight: "bold"
  }
}));

export default function Notimodal(props) {
  const classes = useStyles();

  console.log(props.status, "status");
  console.log(props, "props");
  const handleClose = status => {
    props.methodd(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog
        classes={{
          paper: classes.rootStyle
        }}
        //  style={{backgroundColor: 'white'}}
        //  overlayStyle={{backgroundColor: 'white'}}
        onClose={() => handleClose(false)}
        aria-labelledby="customized-dialog-title"
        BackdropProps={{
          classes: {
            root: classes.root1
          }
        }}
        open={props.status}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => handleClose(false)}
        //   style={{ backgroundColor: "#505398" }}
        >
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform1}
          >
            123456789 S.Janssen
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform}
          >
            Meldingen
          </Typography>
        </DialogTitle>
        <DialogContent
        // style={{ backgroundColor: "#505398" }}
        >
          <div className="div-notimodal">
            <div className="div-notimodal-child1">
              <p className="citemsf">
                <i
                  style={{
                    fontSize: "24px",
                    display: "inline-block",
                    color: "red"
                  }}
                  className="fa fa-envelope fa-bell-o"
                ></i>
                <span
                  style={{
                    marginLeft: "15px",
                    fontSize: "16px",
                    fontStyle: "italic"
                  }}
                >
                  Melding:&nbsp;
            </span>
                <span
                  style={{

                    fontSize: "16px",
                    fontWeight: "bold"
                  }}
                >
                  Agenda
            </span>
              </p>
            </div>
            <div className="div-notimodal-child2">

              <p style={{ fontStyle: "italic", fontSize: "16px" }}>01/02/2019</p>
            </div>
            <p
              style={{ fontSize: "16px", }}
            >
              Putton is defined but never used DialogActions'
          </p>
          </div>

          <div className="div-notimodal">
            <div className="div-notimodal-child1">
              <p className="citemsf">
                <i
                  style={{
                    fontSize: "24px",
                    display: "inline-block",
                    color: "red"
                  }}
                  className="fa fa-envelope fa-bell-o"
                ></i>
                <span
                  style={{
                    marginLeft: "15px",
                    fontSize: "16px",
                    fontStyle: "italic"
                  }}
                >
                  Melding:&nbsp;
            </span>
                <span
                  style={{

                    fontSize: "16px",
                    fontWeight: "bold"
                  }}
                >
                  Agenda
            </span>
              </p>
            </div>
            <div className="div-notimodal-child2">

              <p style={{ fontStyle: "italic", fontSize: "16px" }}>01/02/2019</p>
            </div>
            <p
              style={{ fontSize: "16px", }}
            >
              Putton is defined but never used DialogActions'
          </p>
          </div>



        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={() =>handleClose(false)} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

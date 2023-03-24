import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// store

import { useDispatch } from "react-redux";
import * as Actions from "../store/actions";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "98%",
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Otpmodalfinal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [OTP, setOTP] = React.useState("");
  const handleClose = (status) => {
    props.methodd();
  };
  const handleChange = (event) => setOTP(event.target.value);
  React.useEffect(() => {

    dispatch(Actions.resetAuthentiacateUser(true));
  }, []);
  return (
    <div>
      <Dialog
        open={props.status}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"OTP Verification"}
        </DialogTitle>
        <DialogContent>
          <div>
            <DialogContentText id="alert-dialog-slide-description">
              Enter 4-digit Verification Code Send to Your mobile number
            </DialogContentText>

            <TextField
              id="standard-name"
              label="Code"
              type="text"
              className={classes.textField}
              value={OTP}
              onChange={handleChange}
              margin="normal"
              maxLength="4"
            />
          </div>
          <div>
            <Button onClick={() => props.OTPresend()} color="primary">
              Resend OTP
            </Button>
          </div>

          {props.dataResend.data ? (
            <div className={classes.textField}>
              {" "}
              <Alert severity="success">Resend Successfully</Alert>
            </div>
          ) : null}
          {props.errMsgResend && (
            <div className={classes.textField}>
              {" "}
              <Alert severity="error">{t(props.errMsgResend)}</Alert>
            </div>
          )}
          {props.errMsg && (
            <div className={classes.textField}>
              {" "}
              <Alert severity="error">{t(props.errMsg)}</Alert>
            </div>
          )}
          <div>{props.isLoading ? <div>Verifyig...</div> : null}</div>
          <div>{props.isLoadingResend ? <div>Sending...</div> : null}</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Back
          </Button>
          <Button
            disabled={OTP.length === 4 ? false : true}
            onClick={() => props.OTPverification(OTP, props.number)}
            color="primary"
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

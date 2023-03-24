import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Countdown from 'react-countdown';
import OtpInput from 'react-otp-input';
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../store/actions";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "100%",
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  buttonResend: {
    fontFamily: "opensans-semibold",
    fontSize: "16px",
    paddingLeft: "0px"
  },
  button: {
    fontFamily: "opensans-semibold",
    fontSize: "16px",
  },
  buttonContinue: {
    fontFamily: "opensans-semibold",
    fontSize: "16px",
    marginLeft: "5px"
  },
  otpIn: {
    width: "70px",
    height: "105px",
    margin: "0 20px",
    fontSize: "70px",
    borderRadius: 4,
    border: "1px solid rgba(0,0,0,0.2)",
    color: "black",
    [theme.breakpoints.down('md')]: {
      width: "30px",
      height: "40px",
      margin: "0 10px",
      fontSize: "30px",
    },
  }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Title = ({ children }) => <div className="title-otp">{children}</div>;
const Description = ({ children }) => <div className="description-otp">{children}</div>;
function Completionist() {
  const [t] = useTranslation();
  return (
    <span className="otp-expired">{t("Resend OTP code is enabled")}</span>
  );
}

export default function Otpmodalfinal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [OTP, setOTP] = React.useState("");
  const [date, setDate] = React.useState("");
  const [key, setKey] = React.useState("");
  React.useEffect(() => {
    setDate(Date.now() + 59999);
    setKey("1");
  }, [])

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {

      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <>{t("Resend Code in")}:&nbsp; <span className="otp-expire-time">{minutes}m&nbsp;{seconds}s</span></>;
    }
  };
  const handleClose = (status) => {
    props.methodd();
  };
  const handleChange = (otp) => setOTP(otp);
  React.useEffect(() => {

    dispatch(Actions.resetAuthentiacateUser(true));
  }, []);
  React.useEffect(() => {
    if (props.dataResend.data && props.check) {
      setKey(1 + Math.random() * (100000 - 1));
      setDate(Date.now() + 59999);
      props.setResend(false);
    }
  }, [props.check, props.dataResend, props.dataResend.data])

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
          <Title>{t("OTP Verification")}</Title>
          <Description>{t("Enter the 4-digit verification code sent to your mobile number")}</Description>
        </DialogTitle>
        <DialogContent>

          <div style={{ width: "100%", textAlign: "center" }}>


            <OtpInput
              onChange={(otp) => handleChange(otp)}
              numInputs={4}
              value={OTP}
              inputStyle={classes.otpIn}
              containerStyle={{
                justifyContent: "center"
              }}
              shouldAutoFocus
            />
            <p className="otp-expire-text">
              <Countdown
                key={key}
                date={date}
                onComplete={() => {
                  props.setResend(true);
                }}

                renderer={renderer}
              />
            </p>

          </div>
          {props.dataResend.data ? (
            <div className={classes.textField}>
              {" "}
              <Alert severity="success">{t("Resend Successfully")}</Alert>
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
          <div style={{ height: "30px" }}>

          </div>
          <div style={{ width: "100%", display: "inline-block" }}>
            <div style={{ float: "left" }}>
              {props.resend === true && (
                <Button className={classes.buttonResend} onClick={() => props.OTPresend()} color="primary">
                  {t("Resend OTP")}
                </Button>
              )}

            </div>
            <div style={{ float: "right" }}>
              <Button className={classes.button} onClick={() => handleClose(false)} color="primary">
                {t("Back")}
              </Button>
              <Button
                disabled={OTP.length === 4 ? false : true}
                onClick={() => props.OTPverification(OTP, props.number)}
                color="primary"
                className={classes.buttonContinue}
              >

                {t("Continue")}
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  );
}

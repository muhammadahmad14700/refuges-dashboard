import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../../css/login.css";
import nl from "../../assets/images/nl.svg";
import en from "../../assets/images/en.svg";
import arb from "../../assets/images/arb.svg";
import fr from "../../assets/images/fr.svg";
import be from "../../assets/images/be.svg";
import logob from "../../assets/images/logob.png";
import Otpmodalfinal from "../login/sub_components/Otpmodalfinal";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import { useHistory } from "react-router-dom";
import withReducer from "../../store/withReducer";
import * as Actions from "./store/actions";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "white",
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: "white",
  },
  button: {
    margin: theme.spacing(1),
    fontSize: "15.6pt",
    fontFamily: "Calibri",
    backgroundColor: "#283583",
    width: "35%",
    height: "45px",
    border: "1px solid white",
    opacity: 1,
    color: "white",
    paddingTop: "10px",
    "&:hover": {
      background: "#222a5d",
    },
  },
  LoginPageHeading: {
    fontFamily: "opensans-semibold",
    fontSize: "48px",
    [theme.breakpoints.between('xs', 'md')]: {
      fontFamily: "opensans-semibold",
      fontSize: "30px",
    },
  },
}));

function LoginPage(props) {
  const classes = useStyles();
  var history = useHistory();
  const [t] = useTranslation();
  const [otpopen, setOtpopen] = React.useState(false);
  const [check, setCheck] = React.useState(false);
  const [flags, setFlags] = React.useState([
    { id: "en", url: en, label: "EN", selected: true },
    { id: "nl", url: nl, label: "NL", selected: false },
    { id: "arb", url: arb, label: "ARB", selected: false },
    { id: "fr", url: fr, label: "FR", selected: false },
    { id: "be", url: be, label: "BE", selected: false }
  ]);
  const [selectedFlag, setSelectedFlag] = React.useState({});
  const [resend, setResend] = React.useState(false);
  const handleOTPmodal = (s) => {
  };
  const handleClickOtpclose = () => {
    dispatch(Actions.setCurrentUser({}));
    setOtpopen(false);
  };
  const dispatch = useDispatch();

  const confirmation = useSelector(
    ({ AuthReducer }) => AuthReducer.AuthenticateUserReducer
  );
  const verifyOTPByAdminReducer = useSelector(
    ({ AuthReducer }) => AuthReducer.verifyOTPByAdminReducer
  );

  const ResendOtpReducer = useSelector(
    ({ AuthReducer }) => AuthReducer.ResendOtpReducer
  );


  React.useEffect(() => {
    if (confirmation.isAuthenticated) {
      setOtpopen(true);
    }
  }, [confirmation]);

  const OTPverification = (otp, num) => {
    dispatch(Actions.verifyOTPByAdmin(otp));
  };
  React.useEffect(() => {
    if (
      confirmation.isAuthenticated &&
      confirmation.isOtpVerified &&
      confirmation.user
    ) {
      // history.push({
      //   pathname: "/dashboard"
      // });
      window.location.reload("/dashboard");

    }
  }, [confirmation])
  const validationSchema = Yup.object({
    email: Yup.string().email().required(t("Email is required")),
    password: Yup.string().min(3).required(t("Password is required")),
    check: Yup.bool().required(t("Field must be checked")).oneOf([true], t("Field must be checked")),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      check: "",
    },
    validationSchema,
    onSubmit(values) {
      dispatch(Actions.authenticateuser(values));
    },
  });
  const OTPresend = () => {
    dispatch(Actions.resetAuthentiacateUser(true));
    dispatch(Actions.authenticateuser(values));
    setCheck(true);
  };
  const handleClickFlag = (flag, index) => {
    let newData = [...flags];
    for (let i = 0; i < newData.length; i++) {
      if (i === index) {
        newData[i].selected = true;
      } else {
        newData[i].selected = false;
      }
    }
    setFlags(newData);
    setSelectedFlag(flag);
  };
  React.useEffect(() => {
    if (selectedFlag && selectedFlag.id) {
      if (selectedFlag.id === 'en' || selectedFlag.id === 'nl') {
        i18n.changeLanguage(selectedFlag.id);
        localStorage.setItem("language", selectedFlag.id);
      }
    }
  }, [selectedFlag]);
  React.useEffect(() => {
    if (localStorage.getItem("language")) {
      let newData = [...flags];
      for (let i = 0; i < newData.length; i++) {
        const data = newData[i];
        if (data.id === localStorage.getItem("language")) {
          newData[i].selected = true;
        } else {
          newData[i].selected = false;
        }
      }
      setFlags(newData);
    }

  }, [])
  return (
    <div>
      {otpopen === true && (
        <Otpmodalfinal
          status={otpopen}
          methodd={handleClickOtpclose}
          number="+923034754096"
          handleOTPmodal={handleOTPmodal}
          OTPverification={OTPverification}
          OTPresend={OTPresend}
          isLoading={verifyOTPByAdminReducer.isLoading}
          errMsg={verifyOTPByAdminReducer.errMsg}
          isLoadingResend={confirmation.isLoading}
          errMsgResend={confirmation.errMsg}
          dataResend={confirmation.data}
          resend={resend}
          setResend={setResend}
          setCheck={setCheck}
          check={check}
        />
      )}
      <header className="headerl">
        <div>
          <img className="block-logob" src={logob} alt="logob"></img>
        </div>
      </header>
      <div className="parentdiv">
        <Container
          style={{
            backgroundColor: "transparent"
          }}
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Typography
              className={classes.LoginPageHeading}
              component="h4"
              variant="h4"
            >
              {t('ADMIN LOGIN')}
            </Typography>
            <Typography
              style={{ fontFamily: "opensans-semibold", fontSize: "22.4px" }}
              component="h5"
              variant="h5"
            >
              {t('Backoffice')}
            </Typography>
            <form
              onSubmit={handleSubmit}
              style={{ width: "100%", marginTop: "40px" }}
            >
              <ul className="f-list">
                {flags &&
                  flags.map((flag, index) => (
                    <li className="li" onClick={() => handleClickFlag(flag, index)}>
                      <img className={flag.selected ? "selected-flag" : "unselected-flag"} src={flag.url} alt="flag" />
                      <p className={flag.selected ? "selected-flag-label" : "unselected-flag-label"}>{flag.label}</p>
                    </li>
                  ))}

              </ul>

              <div className="form-inside-div">
                {confirmation.errMsg && (
                  <div className="input-container">
                    {" "}
                    <Alert style={{ width: "100%" }} severity="error">{t(confirmation.errMsg)}</Alert>
                  </div>
                )}
                <div className="input-container">
                  <input
                    className="input-field"
                    type="text"
                    placeholder={t("Email Address")}
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <i className="fa fa-user fa-2x icon"></i>
                </div>
                {errors.email ? errors.email : null}

                <div className="input-container">
                  <input
                    className="input-field"
                    type="password"
                    placeholder={t("Password")}
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <i className="fa fa-lock fa-2x icon"></i>
                </div>
                {errors.password ? errors.password : null}
                <div className="input-container">
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={values.check}
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "white" }}
                        inputStyle={{ color: "white" }}
                        style={{ color: "white" }}
                        name="check"
                        onChange={handleChange}
                      />
                    }
                    label={
                      <span
                        style={{ fontSize: "13.842pt", fontFamily: "Calibri" }}
                      >
                        {t("I accept the term of use")}
                      </span>
                    }
                  />
                </div>
                <div>{errors.check ? errors.check : null}</div>

                <Button
                  type="submit"
                  variant="contained"
                  className={classes.button}
                >
                  {t("LOGIN")}
                </Button>
                <Link className={classes.link} onClick={() => {
                  history.push({
                    pathname: "/requestResetPasswordForAdmin"
                  });
                }}>
                  <p
                    style={{
                      marginTop: "2px",
                      fontSize: "13pt",
                      fontFamily: "Calibri",
                    }}
                  >
                    {t("Forgot Password")} ?
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </Container>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default withReducer("AuthReducer", reducer)(LoginPage);

import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import logob from "../../assets/images/logob.png";
import emailIcon from "../../assets/images/email.svg";
import { useTranslation } from 'react-i18next';
// store
import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../store/withReducer";
import * as Actions from "./store/actions";
const useStyles = makeStyles((theme) => ({
  con: {
    padding: "0px",
    [theme.breakpoints.down('xs')]: {
      padding: "12px"
    },
  },
  conform: {
    padding: "30px",
    marginTop: "60px",
    backgroundColor: "white",
    borderRadius: "12px",
    webkitboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    mozboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    boxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    // zIndex: "100000",
  },

  heading: {
    color: "white",
    fontSize: "32pt",
    fontFamily: "opensans-semibold",
    // fontWeight: "500"
  },
  headingaddform: {
    color: "#000000",
    fontFamily: "opensans-regular",
    fontSize: "30px"
  },
  subheadingaddform: {
    fontFamily: "opensans-regular",
    fontSize: "18px",
    color: "#757575"
  },

  lable: {
    // fontStyle: "italic",
    textAlign: "left",
    lineHeight: "140%"
  },
  cornerbtn: {
    textAlign: "right",
    marginTop: "30px"
  },
  cornerbtn1: {
    margin: theme.spacing(1),
    marginRight: "0px",
    fontSize: "14px",
    backgroundColor: "#454a92",
    fontFamily: "opensans-semibold",
    // width: "170px",
    // height: "45px",
    // border: "1px solid white",
    opacity: 1,
  },

  button: {
    // margin: theme.spacing(1),
    fontSize: "14px",
    backgroundColor: "transparent",
    width: "100%",
    height: "38px",
    border: "1px solid white",
    opacity: 1,
    textTransform: "lowercase",
  },

  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  notchedOutline: {
    borderWidth: "0px",
    // borderColor: "yellow !important"
  },
  input1: {
    height: "5px",
    border: 0,
  },
  input: {
    display: "none",
  },
}));

function RequestResetPassword(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();

  const validationSchema = yup.object({
    email: yup.string().email().required(t("Email is required")),
  });
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      console.table(values, "values");
      dispatch(Actions.requestResetAdminPassword(values.email));
    },
  });
  const request_confirmation = useSelector(
    ({ RequestResetPasswordReducer }) => RequestResetPasswordReducer.requestResetAdminPasswordReducer
  );
  const handleNavigateToDashboard = () => {

    sessionStorage.clear();
    history.push("/");
  };
  return (
    <div>
      <header className="headerl">
        <div>
          <img className="block-logob" onClick={() => handleNavigateToDashboard()} src={logob} alt="logob"></img>
        </div>
      </header>
      <div className="parentdiv">

        <Container maxWidth="sm" className={classes.con}>
          <Grid container className={classes.conform} spacing={2}>
            <Grid item sm={12} xs={12}>
              <div>
                {(request_confirmation.data && request_confirmation.data.data && request_confirmation.data.data.requestResetPasswordByAdmin) ?
                  <>

                  </>
                  :
                  <>
                    <div>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.headingaddform}
                      >

                        {t("Reset Your Password")}
                      </Typography>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.subheadingaddform}
                      >
                        {t("Please enter your email address to reset your password")}
                      </Typography>
                    </div>
                  </>

                }

              </div>
            </Grid>
            <Grid item sm={12} xs={12}>
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  item
                  sm={12}
                  spacing={1}
                  style={{ marginTop: "20px" }}
                >
                  {request_confirmation.errMsg && (
                    <Grid item sm={12} xs={12}>
                      <Alert severity="error">{t(request_confirmation.errMsg)}</Alert>
                    </Grid>
                  )}
                  {request_confirmation.isLoading && (
                    <Grid item sm={12} xs={12}>
                      Loading.......
                    </Grid>
                  )}
                  {request_confirmation.data && request_confirmation.data.data && request_confirmation.data.data.requestResetPasswordByAdmin && (
                    <Grid item sm={12} xs={12}>
                      <div className="email-send-icon-div">
                        <img className="email-send-icon" src={emailIcon} alt="Email"></img>
                        <div className="email-send-icon-text">
                          {t("We sent a recovery link to you at")}
                          <p className="email-send-icon-text-p">{values.email}</p>


                        </div>
                      </div>
                    </Grid>
                  )}
                  {(request_confirmation.data && request_confirmation.data.data && request_confirmation.data.data.requestResetPasswordByAdmin) ?
                    null
                    :
                    <>
                      <Grid item sm={2} xs={4} className={classes.lable}>
                        {t("Email")}
                      </Grid>
                      <Grid item sm={10} xs={8}>
                        <TextField
                          id="email"
                          onChange={handleChange}
                          value={values.email}
                          name="email"
                          className={classes.textField}
                          type="email"
                          InputProps={{
                            classes: {
                              input: classes.input1,
                              notchedOutline: classes.notchedOutline,
                            },
                          }}
                          margin="normal"
                          variant="outlined"
                          size="small"
                          error={(errors.email && touched.email) ? true : false}
                        />
                        {errors.email && touched.email ? (
                          <p className="error-input">{errors.email}</p>
                        ) : (
                          false
                        )}
                      </Grid>






                      <Grid item xs={12} className={classes.cornerbtn}>

                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.cornerbtn1}
                        >
                          {t("Continue")}
                        </Button>
                      </Grid>
                    </>
                  }
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>

      </div>
      <div id="footer"></div>
    </div>
  );
}

export default withReducer("RequestResetPasswordReducer", reducer)(RequestResetPassword);

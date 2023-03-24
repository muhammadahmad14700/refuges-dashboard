import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as yup from "yup";
import logob from "../../../assets/images/logob.png";
import warning from "../../../assets/images/warning.svg";
import { useTranslation } from 'react-i18next';
// store
import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../store/withReducer";
import * as Actions from "./store/actions";
const useStyles = makeStyles((theme) => ({
  con: {
    padding: "0px"
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
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function ResetPassword(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();
  let query = useQuery();
  React.useEffect(() => {
    if (query.get("token")) {
      dispatch(Actions.requestVerifyAdminPassword(query.get("token")));
    }
  }, [query.get("token")]);
  const request_confirmation = useSelector(
    ({ ResetPasswordReducer }) => ResetPasswordReducer.requestVerifyAdminPasswordReducer.data
  );
  const errMsg = useSelector(
    ({ ResetPasswordReducer }) => ResetPasswordReducer.requestVerifyAdminPasswordReducer.errMsg
  );
  const loading = useSelector(
    ({ ResetPasswordReducer }) => ResetPasswordReducer.requestVerifyAdminPasswordReducer.isLoading
  );
  const reset_confirmation = useSelector(
    ({ ResetPasswordReducer }) => ResetPasswordReducer.resetAdminPasswordReducer
  );
  React.useEffect(() => {
    if (reset_confirmation.data && reset_confirmation.data.data && reset_confirmation.data.data.resetPasswordByAdmin) {
      alert(t("successfully reset password"));
      dispatch(Actions.resetResetAdminPassword(true));
      history.push("/");
    }
  }, [reset_confirmation, dispatch])

  const validationSchema = yup.object({
    password: yup.string().required(t('Password is required')).min(6, t('Must be greater then 6 characters')),
    confirm_password: yup.string().required(t('Confirm Password is required'))
      .oneOf([yup.ref('password'), null], t('New and Confirm Passwords must match'))
  });
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      email: (request_confirmation && request_confirmation.data && request_confirmation.data.verifyResetPasswordTokenByAdmin && request_confirmation.data.verifyResetPasswordTokenByAdmin.email) ? request_confirmation.data.verifyResetPasswordTokenByAdmin.email : "",
      password: "",
      confirm_password: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      dispatch(Actions.resetAdminPassword(query.get("token"), values.password, values.confirm_password));
    },
  });
  return (
    <div>
      <header className="headerl">
        <div>
          <img className="block-logob" src={logob} alt="logob"></img>
        </div>
      </header>
      <div className="parentdiv">
        {(request_confirmation && request_confirmation.data && request_confirmation.data.verifyResetPasswordTokenByAdmin && request_confirmation.data.verifyResetPasswordTokenByAdmin.email) ?
          <Container maxWidth="md" className={classes.con}>
            <Grid container className={classes.conform} spacing={2}>
              <Grid item sm={12} xs={12}>
                <div>

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
                      {t("Please Enter New Password and Confirm Password")}
                    </Typography>
                  </div>

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
                    {reset_confirmation.errMsg && (
                      <Grid item sm={12} xs={12}>
                        <Alert severity="error">{t(reset_confirmation.errMsg)}</Alert>
                      </Grid>
                    )}
                    {reset_confirmation.isLoading && (
                      <Grid item sm={12} xs={12}>
                        Loading.......
                      </Grid>
                    )}
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
                        disabled
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



                    <Grid item sm={2} xs={4} className={classes.lable}>
                      {t("New Password")}
                    </Grid>
                    <Grid item sm={10} xs={8}>
                      <TextField
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        className={classes.textField}
                        type="password"
                        InputProps={{
                          classes: {
                            input: classes.input1,
                            notchedOutline: classes.notchedOutline,
                          },
                        }}
                        margin="normal"
                        variant="outlined"
                        size="small"
                        error={errors.password ? true : false}
                      />
                      {errors.password && touched.password ? (
                        <p className="error-input">{errors.password}</p>
                      ) : (
                        false
                      )}
                    </Grid>

                    <Grid item sm={2} xs={4} className={classes.lable}>
                      {t("Confirm Password")}
                    </Grid>
                    <Grid item sm={10} xs={8}>
                      <TextField
                        id="confirm_password"
                        onChange={handleChange}
                        value={values.confirm_password}
                        name="confirm_password"
                        className={classes.textField}
                        type="password"
                        InputProps={{
                          classes: {
                            input: classes.input1,
                            notchedOutline: classes.notchedOutline,
                          },
                        }}
                        margin="normal"
                        variant="outlined"
                        size="small"
                        error={errors.confirm_password ? true : false}
                      />
                      {errors.confirm_password && touched.confirm_password ? (
                        <p className="error-input">{errors.confirm_password}</p>
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
                        {t("Reset Password")}
                      </Button>
                    </Grid>

                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Container>
          :
          <Container maxWidth="sm" className={classes.con}>
            <Grid container className={classes.conform} spacing={2}>

              <Grid item sm={12} xs={12}>
                <Grid
                  container
                  item
                  sm={12}
                  spacing={1}
                  style={{ marginTop: "20px" }}
                >
                  {errMsg && (
                    <Grid item sm={12} xs={12}>
                      <Alert severity="error">{t(errMsg)}</Alert>
                    </Grid>
                  )}
                  <Grid item sm={12} xs={12}>
                    <div className="email-send-icon-div">
                      <img className="email-send-icon" src={warning} alt="Email"></img>
                      <div className="email-send-icon-text">
                        {t("Something went wrong")}


                      </div>
                    </div>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Container>


        }
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default withReducer("ResetPasswordReducer", reducer)(ResetPassword);

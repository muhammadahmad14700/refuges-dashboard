import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import ClearIcon from '@material-ui/icons/Clear';
import { useFormik } from "formik"; import jwt from "jsonwebtoken";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import SuccessDialog from "../../shared/SuccessDialog";
import { useTranslation } from 'react-i18next';

// store
import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../store/withReducer";
import * as Actions from "./store/actions";
const useStyles = makeStyles((theme) => ({
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
  con: {
    marginTop: "30px"
  },
  crossIcon: {
    color: "black",
    fontSize: 23,
    float: "right",
    cursor: "pointer",
    marginTop: "12px"
  },
  roorCon: {
    maxWidth: "890px"
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
    padding: "0px !important",
    paddingLeft: "8px !important"
  },
  cornerbtn: {
    textAlign: "right",
  },
  cornerbtn1: {
    marginTop: "20px",
    fontSize: "16px",
    backgroundColor: "#454a92",
    fontFamily: "opensans-semibold",
    opacity: 1,
    height: "40px",
    borderRadius: "2px",
    minWidth: "150px",
    boxShadow: "none"
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
    width: "100%",
    margin: 0,
    backgroundColor: "#93C7D2",
  },
  notchedOutline: {
    borderWidth: "0px",
    // borderColor: "yellow !important"
  },
  input1: {
    height: "13px",
    minHeight: "13px",
    border: 0,
    fontSize: "16px",
    fontFamily: "opensans-Regular",
    '&::placeholder': {
      fontSize: '16px',
      color: "black",
      opacity: "1",
      fontFamily: "opensans-Regular",
      letterSpacing: "0px"
    },
  },
  input: {
    display: "none",
  },
}));

function UpdatePassword(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();
  const [successOpen, setSuccessOpen] = React.useState(false);

  const validationSchema = yup.object({
    password: yup.string().required(t('Password is required')).min(6, t('Must be greater then 6 characters')),
    confirm_password: yup.string().required(t('Confirm Password is required'))
      .oneOf([yup.ref('password'), null], t('New and Confirm Passwords must match')),
    old_password: yup.string().required().when("password", {
      is: value => value && value.length > 0,
      then: yup.string().required(
        t("Current password is required when setting new password")
      ),
      otherwise: yup.string()
    }),


  });
  const {
    handleSubmit,
    handleChange,
    resetForm,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      email: jwt.decode(localStorage.jwtToken).email ? jwt.decode(localStorage.jwtToken).email : "user@gmail.com",
      password: "",
      confirm_password: "",
      old_password: ""
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      dispatch(Actions.updateAdminPassword(values));
    },
  });
  const update_confirmation = useSelector(
    ({ UpdatePasswordReducer }) => UpdatePasswordReducer.updateAdminPasswordReducer
  );
  React.useEffect(() => {
    if (update_confirmation.data && update_confirmation.data.data && update_confirmation.data.data.updatePassword) {
      resetForm();
      dispatch(Actions.resetupdateAdminPassword(true));
      handleClickSuccessDialogopen();

    }
  }, [update_confirmation, dispatch, resetForm]);
  const handleNavigateToDashboard = () => {
    sessionStorage.clear();
    if (jwt.decode(localStorage.jwtToken).role === "manager") {
      history.push("/managerdashboard");

    }
    if (jwt.decode(localStorage.jwtToken).role === "mentor") {
      history.push("/mentordashboard");

    }
    if (jwt.decode(localStorage.jwtToken).role === "work_supplier" || jwt.decode(localStorage.jwtToken).role === "school_supplier") {
      history.push("/supplierdashboard");

    }
  };
  const logout = () => {
    sessionStorage.clear();
    dispatch(Actions.logout());
  };
  const handleClickSuccessDialogopen = () => {
    setSuccessOpen(true);
  };
  const handleClickSuccessDialogclose = () => {
    setSuccessOpen(false);
  };
  return (
    <div className="main">
      {successOpen === true && (
        <SuccessDialog
          status={successOpen}
          methodd={handleClickSuccessDialogclose}
          msg={t("Password Updated Successfully")}
          logout={logout}
        />
      )}
      <div className="bgforform">
        <Container maxWidth="md" className={classes.roorCon}>
          <div className="create-user-main-div">
            <div className="create-user-title-div">
              <p className="create-user-title">{t("Update Password")}</p>
              <ClearIcon className={classes.crossIcon} onClick={() => handleNavigateToDashboard()} />
            </div>
            <p className="create-user-required-text">{t("Please enter the required information")}</p>


            <form onSubmit={handleSubmit} id="form_test">
              <Grid
                container spacing={2} className={classes.con}

              >
                {update_confirmation.errMsg && (
                  <Grid item sm={12} xs={12}>
                    <Alert severity="error">{t(update_confirmation.errMsg)}</Alert>
                  </Grid>
                )}
                <Grid item sm={2} xs={4}>
                  <p className="create-user-label-text">{t("Email")}</p>
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
                    disabled
                  />
                </Grid>
                <Grid item sm={2} xs={4} className={classes.lable}>
                  <p className="create-user-label-text">{t("Current Password")}</p>
                </Grid>
                <Grid item sm={10} xs={8}>
                  <TextField
                    id="old_password"
                    onChange={handleChange}
                    value={values.old_password}
                    name="old_password"
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
                    error={errors.old_password ? true : false}
                  />
                  {errors.old_password && touched.old_password ? (
                    <p className="error-input">{errors.old_password}</p>
                  ) : (
                    false
                  )}
                </Grid>
                <Grid item sm={2} xs={4}>
                  <p className="create-user-label-text">{t("New Password")}</p>
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
                  <p className="create-user-label-text">{t("Confirm Password")}</p>
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



                <Grid item sm={12} xs={12} className={classes.cornerbtn}>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.cornerbtn1}
                  >
                    {t("Update")}
                  </Button>
                </Grid>

              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default withReducer("UpdatePasswordReducer", reducer)(UpdatePassword);

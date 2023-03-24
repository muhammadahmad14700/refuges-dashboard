import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import ClearIcon from '@material-ui/icons/Clear';
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import SuccessDialog from "../shared/SuccessDialog";

// store
import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../store/withReducer";
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
    fontSize: '16px',
    fontFamily: "opensans-regular",
    textAlign: "left",
    lineHeight: "140%"
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
  crossIcon: {
    color: "black",
    fontSize: 23,
    float: "right",
    cursor: "pointer",
    marginTop: "12px",
    [theme.breakpoints.down('xs')]: {
      marginTop: "-30px",
    },
  },
}));

function EditMunicipalityContact(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();
  const [successOpen, setSuccessOpen] = React.useState(false);
  const update_confirmation = useSelector(
    ({ EditMunicipalityContactReducer }) => EditMunicipalityContactReducer.updateMunicipalityContactInfoReducer
  );
  React.useEffect(() => {
    if (update_confirmation.data && update_confirmation.data.data) {
      dispatch(Actions.resetUpdateMunicipalityContactInfo(true));
      handleClickSuccessDialogopen();
    }
  }, [update_confirmation])

  const validationSchema = yup.object({
    name: yup.string().required(),
    phone_no: yup.number().required(),
    email: yup.string().email().required(),

  });
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      name: history.location.state.manager !== null ? history.location.state.manager.name : "",
      phone_no: history.location.state.manager !== null ? history.location.state.manager.phoneNumber : "",
      email: history.location.state.manager !== null ? history.location.state.manager.email : "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      dispatch(Actions.updateMunicipalityContactInfo(values, history.location.state.manager._id));
    },
  });
  const handleNavigateToDashboard = () => {
    sessionStorage.clear();
    history.push("/dashboard");
  };
  const handleClickSuccessDialogopen = () => {
    setSuccessOpen(true);
  };
  const handleClickSuccessDialogclose = () => {
    setSuccessOpen(false);
    sessionStorage.clear();
    history.push("/dashboard")
  };
  return (
    <div className="main">
      {successOpen === true && (
        <SuccessDialog
          status={successOpen}
          methodd={handleClickSuccessDialogclose}
          msg={"Contact Details Updated Successfully"}
        />
      )}
      <div className="bgforform">
        <Container maxWidth="md" className={classes.roorCon}>
          <div className="create-user-main-div">
            <div className="create-user-title-div">
              <p className="create-user-title">
                Edit Contact Details {'>'} {history.location.state ? history.location.state.name : ""}
              </p>
              <ClearIcon className={classes.crossIcon} onClick={() => handleNavigateToDashboard()} />
            </div>
            <p className="create-user-required-text">Please enter the required information</p>

            <form onSubmit={handleSubmit}>
              <Grid
                container
                spacing={2}
                className={classes.con}
              >
                {update_confirmation.errMsg && (
                  <Grid item sm={12} xs={12}>
                    <Alert severity="error">{t(update_confirmation.errMsg)}</Alert>
                  </Grid>
                )}
                {update_confirmation.isLoading && (
                  <Grid item sm={12} xs={12}>
                    Loading.......
                  </Grid>
                )}
                <Grid item sm={2} xs={4} className={classes.lable}>
                  Name
                </Grid>
                <Grid item sm={10} xs={8}>
                  <TextField
                    id="name"
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    className={classes.textField}
                    type="text"
                    InputProps={{
                      classes: {
                        input: classes.input1,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    margin="normal"
                    variant="outlined"
                    size="small"
                    error={errors.name ? true : false}
                  />
                  {errors.name && touched.name ? (
                    <p className="error-input">{errors.name}</p>
                  ) : (
                    false
                  )}
                </Grid>
                <Grid item sm={2} xs={4} className={classes.lable}>
                  Phone No.
                </Grid>
                <Grid item sm={10} xs={8}>
                  <TextField
                    id="phone_no"
                    onChange={handleChange}
                    value={values.phone_no}
                    name="phone_no"
                    className={classes.textField}
                    type="text"
                    InputProps={{
                      classes: {
                        input: classes.input1,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    margin="normal"
                    variant="outlined"
                    size="small"
                    error={errors.phone_no ? true : false}
                  />
                  {errors.phone_no && touched.phone_no ? (
                    <p className="error-input">{errors.phone_no}</p>
                  ) : (
                    false
                  )}
                </Grid>
                <Grid item sm={2} xs={4} className={classes.lable}>
                  Email
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
                    error={errors.email ? true : false}
                  />
                  {errors.email && touched.email ? (
                    <p className="error-input">{errors.email}</p>
                  ) : (
                    false
                  )}
                </Grid>

                <Grid item sm={12} xs={12} className={classes.cornerbtn}>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.cornerbtn1}
                  >
                    Continue
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

export default withReducer("EditMunicipalityContactReducer", reducer)(EditMunicipalityContact);

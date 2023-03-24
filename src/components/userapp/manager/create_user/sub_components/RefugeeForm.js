import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../../../store/withReducer";
import * as Actions from "../store/actions";
const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: 0,
    backgroundColor: "#93C7D2",


  },
  dateTextField: {
    margin: 0,
    backgroundColor: "#93C7D2",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
  },
  dateInput: {
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
      letterSpacing: "0px",
      textTransform: "capitalize"
    },
  },
  notchedOutline: {
    borderWidth: "0px"
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
      fontFamily: "opensans-LightItalic",
      letterSpacing: "0px"
    },
  },
  con: {
    marginTop: "30px"
  },
  btnupload: {
    backgroundColor: "#454a92",
    fontSize: '16px',
    fontFamily: "opensans-semibold",
    width: "150px",
    height: "40px",
    textTransform: "capitalize",
    boxShadow: "none"
  },
  input: {
    display: "none",
  },
  skipBtn: {
    backgroundColor: "#454a92",
    fontSize: '16px',
    fontFamily: "opensans-semibold",
    // width: "150px",
    height: "40px",
    float: "right",
    paddingLeft: "30px",
    paddingRight: "30px",
    '&$disabled': {
      background: 'rgba(69, 74, 146, 0.7)',
      color: "#ffffff",
    },
  },
  disabled: {},
  continueBtn: {
    backgroundColor: "#454a92",
    fontSize: '16px',
    fontFamily: "opensans-semibold",
    // width: "150px",
    height: "40px",
    float: "right",
  }
}));
let validationSchema = {};
const blockInvalidChar = e => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault();
function RefugeeForm(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  var history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [thumb, setThumb] = React.useState(undefined);
  const [loadingg, setLoadingg] = React.useState(false);
  const [thumbb, setThumbb] = React.useState(undefined);
  const [steps, setSteps] = React.useState([]);
  const [skip, setSkip] = React.useState(false);
  React.useEffect(() => {
    if (sessionStorage.getItem("steps")) {
      setSteps(JSON.parse(sessionStorage.getItem("steps")));
    }
  }, [sessionStorage.getItem("steps")]);
  React.useEffect(() => {
    dispatch(Actions.resetRefugeeSummary(true));
    dispatch(Actions.resetAddNewRefugee(true));
    dispatch(Actions.resetUpdateRefugee(true));
  }, []);
  React.useEffect(() => {
    if (sessionStorage.getItem("user_id")) {
      dispatch(Actions.getRefugeeSummary(sessionStorage.getItem("user_id")));
    }
  }, [sessionStorage.getItem("user_id")])
  const refugeeSummary = useSelector(
    ({ RefugeeFormReducer }) =>
      RefugeeFormReducer.getRefugeeSummaryReducer.data
  );
  const loadingRefugeeSummary = useSelector(
    ({ RefugeeFormReducer }) =>
      RefugeeFormReducer.getRefugeeSummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ RefugeeFormReducer }) =>
      RefugeeFormReducer.getRefugeeSummaryReducer.errMsg
  );
  const update_confirmation = useSelector(
    ({ RefugeeFormReducer }) => RefugeeFormReducer.UpdateRefugeeReducer
  );
  const add_confirmation = useSelector(
    ({ RefugeeFormReducer }) => RefugeeFormReducer.AddNewRefugeeReducer
  );
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
  const FILE_SIZE = 2048 * 1024;
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const BREDE_INTAKE_FILE_SIZE = 2048 * 1024;
  const BREDE_INTAKE_SUPPORTED_FORMATS = ["application/pdf"];
  React.useEffect(() => {
    if (sessionStorage.getItem("user_id")) {
      validationSchema = yup.object({
        refugee_bsn: yup.string().required(t("BSN is required")),
        refugee_name: yup.string().required(t("Name is required")).matches(/^[A-Za-z ]*$/, t('Please enter valid name'))
          .max(20, t("Name must be at most 20 characters")),
        refugee_email: yup.string().email().required(t("Email is Required")).max(30, t("Email must be at most 30 characters")),
        refugee_phone_no: yup.string().required(t("Phone Number is required")).matches(phoneRegExp, t('Phone Number is not valid')).min(10, t("to short"))
          .max(15, t("to long")),
        photo_id: yup
          .mixed()
          .test(
            "fileSize",
            t("Image too large, (Image size must be less than 2mb)"),
            (value) => !value || value.size <= FILE_SIZE
          )
          .test(
            "fileFormat",
            t("Unsupported Format"),
            (value) => !value || SUPPORTED_FORMATS.includes(value.type)
          )
      });
    }
    else {
      validationSchema = yup.object({
        refugee_bsn: yup.number().required(t("BSN is required")).test('len', t('Must be exactly 9 digits'), val => !val || (val && val.toString().length === 9)),
        refugee_name: yup.string().required(t("Name is required")).matches(/^[A-Za-z ]*$/, t('Please enter valid name'))
          .max(20, t("Name must be at most 20 characters")),
        refugee_email: yup.string().email().required(t("Email is Required")).max(30, t("Email must be at most 30 characters")),
        refugee_phone_no: yup.string().required(t("Phone Number is required")).matches(phoneRegExp, t('Phone Number is not valid')).min(10, t("to short"))
          .max(15, t("to long")),
        intake_date: yup.date().required(t("Intake Date is required")),
        photo_id: yup
          .mixed()
          .required(t("Logo is required"))
          .test(
            "fileSize",
            t("Image too large, (Image size must be less than 2mb)"),
            (value) => value && value.size <= FILE_SIZE
          )
          .test(
            "fileFormat",
            t("Unsupported Format"),
            (value) => value && SUPPORTED_FORMATS.includes(value.type)
          ),
        file: yup
          .mixed()
          .required(t("file is required"))
          .test(
            "fileSize",
            t("File size must be less than 2mb"),
            (value) => value && value.size <= BREDE_INTAKE_FILE_SIZE
          )
          .test(
            "fileFormat",
            t("Unsupported Format"),
            (value) => value && BREDE_INTAKE_SUPPORTED_FORMATS.includes(value.type)
          ),
      });
    }
  }, [])


  const {
    handleSubmit,
    handleChange,
    setFieldValue,

    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      refugee_bsn: (refugeeSummary && refugeeSummary.getRefugeeSummary) ? refugeeSummary.getRefugeeSummary.bsn : "",
      refugee_name: (refugeeSummary && refugeeSummary.getRefugeeSummary) ? refugeeSummary.getRefugeeSummary.name : "",
      refugee_email: (refugeeSummary && refugeeSummary.getRefugeeSummary) ? refugeeSummary.getRefugeeSummary.email : "",
      refugee_phone_no: (refugeeSummary && refugeeSummary.getRefugeeSummary) ? refugeeSummary.getRefugeeSummary.phoneNumber : "+31",
      intake_date: "",
      file: '',
      photo_id: '',
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      if (sessionStorage.getItem("user_id")) {
        dispatch(Actions.updateRefugee(values, sessionStorage.getItem("user_id")));
      }
      else {
        dispatch(Actions.addNewRefugee(values));
      }
    },
  });
  React.useEffect(() => {
    if (values.file) {
      setLoadingg(true);
      let reader = new FileReader();

      reader.onloadend = () => {
        setLoadingg(false);
        setThumbb(reader.result);
      };

      reader.readAsDataURL(values.file);
    }
  }, [values.file]);
  React.useEffect(() => {
    if (values.photo_id) {
      setLoading(true);
      let reader = new FileReader();

      reader.onloadend = () => {
        setLoading(false);
        setThumb(reader.result);
      };

      reader.readAsDataURL(values.photo_id);
    }
  }, [values.photo_id]);
  const skipClick = () => {
    setSkip(true);
    handleSubmit();


  };
  const assignClick = () => {
    setSkip(false);
    handleSubmit();
  };
  React.useEffect(() => {
    if (add_confirmation.data && add_confirmation.data.data && add_confirmation.data.data.addRefugee && !skip) {
      let finalSteps = steps;
      finalSteps.push(props.selectedUserType);
      dispatch(Actions.resetAddNewRefugee(true));
      sessionStorage.setItem("steps", JSON.stringify(finalSteps));
      sessionStorage.setItem("user_id", add_confirmation.data.data.addRefugee.id);
      sessionStorage.setItem("entity_name", values.refugee_name);
      history.push({
        pathname: "/assignMentorToRefugeeByManager"
      });
      // window.location.replace("/assignMentorToRefugeeByManager");
    }
    if (add_confirmation.data && add_confirmation.data.data && add_confirmation.data.data.addRefugee && skip) {
      let finalSteps = steps;
      finalSteps.push(props.selectedUserType);
      dispatch(Actions.resetAddNewRefugee(true));
      sessionStorage.setItem("steps", JSON.stringify(finalSteps));
      sessionStorage.setItem("user_id", add_confirmation.data.data.addRefugee.id);
      sessionStorage.setItem("entity_name", values.refugee_name);
      history.push({
        pathname: "/postRefugeeDetailsByManager"
      });
    }
  }, [add_confirmation, skip]);
  React.useEffect(() => {
    if (update_confirmation.data && update_confirmation.data.data && update_confirmation.data.data.updateRefugee && !skip) {
      sessionStorage.setItem("entity_name", values.refugee_name);
      dispatch(Actions.resetUpdateRefugee(true));
      history.push({
        pathname: "/assignMentorToRefugeeByManager"
      });
    }
    if (update_confirmation.data && update_confirmation.data.data && update_confirmation.data.data.updateRefugee && skip) {
      sessionStorage.setItem("entity_name", values.refugee_name);
      dispatch(Actions.resetUpdateRefugee(true));
      history.push({
        pathname: "/postRefugeeDetailsByManager"
      });
    }
  }, [update_confirmation, skip]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className={classes.con}>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("BSN")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="refugee_bsn"
              onChange={(event) => {
                var reg = /^0+/gi;
                if (event.target.value.match(reg)) {
                  values.refugee_bsn = values.refugee_bsn.replace(reg, '');
                }
                else {
                  setFieldValue("refugee_bsn", event.target.value);
                }

              }}
              value={values.refugee_bsn}
              name="refugee_bsn"
              className={classes.textField}
              type="number"
              InputProps={{
                inputProps: { min: 0, onKeyDown: blockInvalidChar },
                classes: {
                  input: classes.input1,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              margin="normal"
              variant="outlined"
              size="small"
              placeholder={t("Enter Refugee's BSN")}
              error={(errors.refugee_bsn && touched.refugee_bsn) ? true : false}
            />
            {errors.refugee_bsn && touched.refugee_bsn ? (
              <p className="error-input">{errors.refugee_bsn}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Name")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="refugee_name"
              onChange={handleChange}
              value={values.refugee_name}
              name="refugee_name"
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
              placeholder={t("Enter Refugee's Full Name")}
              error={(errors.refugee_name && touched.refugee_name) ? true : false}
            />
            {errors.refugee_name && touched.refugee_name ? (
              <p className="error-input">{errors.refugee_name}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Email")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="refugee_email"
              onChange={handleChange}
              value={values.refugee_email}
              name="refugee_email"
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
              placeholder={t("Enter Refugee's Email")}
              error={(errors.refugee_email && touched.refugee_email) ? true : false}
            />
            {errors.refugee_email && touched.refugee_email ? (
              <p className="error-input">{errors.refugee_email}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Telephone")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <PhoneInput
              country={'nl'}
              value={values.refugee_phone_no}
              onChange={phone => setFieldValue("refugee_phone_no", '+' + phone)}
              countryCodeEditable={true}
              id="refugee_phone_no"
              name='refugee_phone_no'
              excludeCountries={['bg']}
              inputProps={{
                name: 'refugee_phone_no',
                id: "refugee_phone_no",
                style: { backgroundColor: "#93C7D2", width: "100%", color: "black", border: "none", borderRadius: 0, fontFamily: "opensans-Regular", }
              }}
              buttonStyle={{
                backgroundColor: "transparent",
                border: "none",
                borderRadius: 0,
                // width: "100%"
              }}
            // dropdownStyle={{
            //      width : "100%"
            // }}
            />
            {errors.refugee_phone_no && touched.refugee_phone_no ? (
              <p className="error-input">{errors.refugee_phone_no}</p>
            ) : (
              false
            )}
          </Grid>

        </Grid>
        <Grid container spacing={2} className={classes.con}>
          {!sessionStorage.getItem("user_id") && (
            <>
              <Grid item sm={2} xs={4}>
                <p className="create-user-label-text">{t("Intake Date")}</p>
              </Grid>
              <Grid item sm={10} xs={8}>
                <TextField
                  id="intake_date"
                  onChange={handleChange}
                  value={values.intake_date}
                  name="intake_date"
                  className={classes.dateTextField}
                  type="date"
                  InputProps={{
                    classes: {
                      input: classes.dateInput,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  error={(errors.intake_date && touched.intake_date) ? true : false}
                />
                {errors.intake_date && touched.intake_date ? (
                  <p className="error-input">{errors.intake_date}</p>
                ) : (
                  false
                )}
              </Grid>

              <Grid item sm={2} xs={4}>
                <p className="create-user-label-text">{t("Upload Brede Intake")}</p>
              </Grid>
              <Grid item sm={3} xs={4}>
                <input
                  accept="application/pdf"
                  className={classes.input}
                  id="contained-button-file"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                  // value={values.logo}
                  name="file"
                  // multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btnupload}
                    size="small"
                    component="span"
                  >
                    {t("Choose File")}
                  </Button>
                </label>
                {errors.file && touched.file ? (
                  <p className="error-input">{errors.file}</p>
                ) : (
                  false
                )}
              </Grid>
              <Grid item sm={7} xs={12}>
                {thumbb && (
                  <p className="create-user-logo-name-text">
                    {values.file.name}
                  </p>
                )}
              </Grid>
            </>
          )}
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Upload Photo (ID)")}</p>
          </Grid>
          <Grid item sm={3} xs={4}>
            <input
              accept="image/*"
              className={classes.input}
              id="photo_id"
              onChange={(event) => {
                setFieldValue("photo_id", event.currentTarget.files[0]);
              }}
              // value={values.logo}
              name="photo_id"
              // multiple
              type="file"
            />
            <label htmlFor="photo_id">
              <Button
                variant="contained"
                color="primary"
                className={classes.btnupload}
                size="small"
                component="span"
              >
                {t("Upload Photo")}
              </Button>
            </label>
            {errors.photo_id && touched.photo_id ? (
              <p className="error-input">{errors.photo_id}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={7} xs={12}>
            {thumb && (
              <p className="create-user-logo-name-text">
                {values.photo_id.name}
              </p>
            )}
          </Grid>
          {add_confirmation.errMsg && (
            <Grid item sm={12} xs={12}>
              <Alert severity="error">{t(add_confirmation.errMsg)}</Alert>
            </Grid>
          )}
          {add_confirmation.isLoading && (
            <Grid item sm={12} xs={12}>
              Loading.......
            </Grid>
          )}
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
        </Grid>
        <div className="create-user-part2-div">
          <p className="create-user-part-text">{t("Part 2")}</p>
        </div>
        <div className="create-user-assign-user-div" onClick={() => assignClick()}>
          <div className="create-user-assign-user-text-div">
            <p className="create-user-assign-user-text">
              {t("Assign Mentor/Suppliers")}
            </p>
            <p className="create-user-assign-user-arrow">
              {'>>'}
            </p>
          </div>

          <div>
            <hr className="create-user-assign-user-hr">
            </hr>
          </div>

        </div>
        <div className="create-user-skip-div">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => skipClick()}
            classes={{
              root: classes.skipBtn,
              disabled: classes.disabled,
            }}
          >
            {t("Continue")}
          </Button>
        </div>
      </form>
    </div>
  );
}
export default withReducer("RefugeeFormReducer", reducer)(RefugeeForm);
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../store/withReducer";
import * as Actions from "../store/actions";
const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: 0,
    backgroundColor: "#93C7D2",


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
    boxShadow: "none"
  },
  continueBtn: {
    backgroundColor: "#454a92",
    fontSize: '16px',
    fontFamily: "opensans-semibold",
    // width: "150px",
    height: "40px",
    float: "right",
  }
}));
const blockInvalidChar = e => ['e', 'E', '+', '-', '.', '0'].includes(e.key) && e.preventDefault();
function MentorForm(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();
  const [skip, setSkip] = React.useState(false);
  React.useEffect(() => {
    dispatch(Actions.resetUpdateMentor(true));
    dispatch(Actions.getMentorSummary(sessionStorage.getItem("user_id")));
  }, []);
  const mentorSummary = useSelector(
    ({ MentorFormReducer }) =>
      MentorFormReducer.getMentorSummaryReducer.data
  );
  const loading = useSelector(
    ({ MentorFormReducer }) =>
      MentorFormReducer.getMentorSummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ MentorFormReducer }) =>
      MentorFormReducer.getMentorSummaryReducer.errMsg
  );
  const update_confirmation = useSelector(
    ({ MentorFormReducer }) => MentorFormReducer.UpdateMentorReducer
  );
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
  const validationSchema = yup.object({
    mentor_bsn: yup.number().test('len', t('Must be exactly 9 digits'), val => !val || (val && val.toString().length === 9)),
    mentor_name: yup
      .string()
      .required(t("Name is required"))
      .matches(/^[A-Za-z ]*$/, t('Please enter valid name'))
      .max(20, t("Name must be at most 20 characters")),
    mentor_email: yup.string().email().required(t("Email is required")).max(30, t("Email must be at most 30 characters")),
    mentor_phone_no: yup.string().required(t("Phone Number is required")).matches(phoneRegExp, t('Phone Number is not valid')).min(10, t("to short"))
      .max(15, t("to long")),
  });

  const {
    handleSubmit,
    handleChange,
    setFieldValue,

    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      mentor_bsn: (mentorSummary && mentorSummary.getMentorSummary) ? mentorSummary && mentorSummary.getMentorSummary.bsn : "",
      mentor_name: (mentorSummary && mentorSummary.getMentorSummary) ? mentorSummary && mentorSummary.getMentorSummary.name : "",
      mentor_email: (mentorSummary && mentorSummary.getMentorSummary) ? mentorSummary && mentorSummary.getMentorSummary.email : "",
      mentor_phone_no: (mentorSummary && mentorSummary.getMentorSummary) ? mentorSummary && mentorSummary.getMentorSummary.phoneNumber : "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      dispatch(Actions.updateMentor(values, sessionStorage.getItem("user_id")));
    },
  });
  const skipClick = () => {
    setSkip(true);
    handleSubmit();
  };
  const assignClick = () => {
    setSkip(false);
    handleSubmit();
  };
  React.useEffect(() => {

    if (update_confirmation.data && update_confirmation.data.data && update_confirmation.data.data.updateMentor && !skip) {
      sessionStorage.setItem("entity_name", values.mentor_name);
      dispatch(Actions.resetUpdateMentor(true));
      history.push({
        pathname: "/editAssignMunicipalityToMentor"
      });
    }
    if (update_confirmation.data && update_confirmation.data.data && update_confirmation.data.data.updateMentor && skip) {
      sessionStorage.setItem("entity_name", values.mentor_name);
      dispatch(Actions.resetUpdateMentor(true));
      history.push({
        pathname: "/viewEditMentorSummary"
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
              id="mentor_bsn"
              onChange={(event) => {
                var reg = /^0+/gi;
                if (event.target.value.match(reg)) {
                  values.mentor_bsn = values.mentor_bsn.replace(reg, '');
                }
                else {
                  setFieldValue("mentor_bsn", event.target.value);
                }

              }}
              value={values.mentor_bsn}
              name="mentor_bsn"
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
              placeholder={t("Enter Mentor’s BSN")}
              error={(errors.mentor_bsn && touched.mentor_bsn) ? true : false}
            />
            {errors.mentor_bsn && touched.mentor_bsn ? (
              <p className="error-input">{errors.mentor_bsn}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Name")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="mentor_name"
              onChange={handleChange}
              value={values.mentor_name}
              name="mentor_name"
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
              placeholder={t("Enter Mentor’s Name")}
              error={(errors.mentor_name && touched.mentor_name) ? true : false}
            />
            {errors.mentor_name && touched.mentor_name ? (
              <p className="error-input">{errors.mentor_name}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Email")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="mentor_email"
              onChange={handleChange}
              value={values.mentor_email}
              name="mentor_email"
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
              placeholder={t("Enter Mentor’s Email")}
              error={(errors.mentor_email && touched.mentor_email) ? true : false}
            />
            {errors.mentor_email && touched.mentor_email ? (
              <p className="error-input">{errors.mentor_email}</p>
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
              value={values.mentor_phone_no}
              onChange={phone => setFieldValue("mentor_phone_no", '+' + phone)}
              countryCodeEditable={true}
              id="mentor_phone_no"
              name='mentor_phone_no'
              excludeCountries={['bg']}
              inputProps={{
                name: 'mentor_phone_no',
                id: "mentor_phone_no",
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
            {errors.mentor_phone_no && touched.mentor_phone_no ? (
              <p className="error-input">{errors.mentor_phone_no}</p>
            ) : (
              false
            )}
          </Grid>
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
        <div className="create-user-assign-user-div"
          onClick={() => assignClick()}
        >
          <div className="create-user-assign-user-text-div">
            <p className="create-user-assign-user-text">
              {t("Assign Municipality/Refugees")}
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
            className={classes.skipBtn}
            size="small"
            // type="submit"
            onClick={() => skipClick()}
          >
            {t("Continue")}
          </Button>
        </div>
      </form>
    </div>
  );
}
export default withReducer("MentorFormReducer", reducer)(MentorForm);
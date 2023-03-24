import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import MenuItem from '@material-ui/core/MenuItem';
import countries from "../../../../utils/countries.json";
import languages from "../../../../utils/languages.json";
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../../store/withReducer";
import * as Actions from "./store/actions";
const useStyles = makeStyles((theme) => ({
  datelable: {
    color: "#253c8c",
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "500",
  },
  lable: {
    fontSize: "14px",
    textAlign: "left",
    color: "#253c8c",
    fontWeight: "500",
  },
  headinglable: {
    backgroundColor: "#253c8c",
    fontSize: "16px",
    color: "white",
    fontWeight: "bold",
    padding: "4px",
    marginTop: "20px",
    paddingLeft: "10px",
  },
  textFieldDate: {
    // paddingTop: "20.5px",
    width: "22%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  textFieldaftercheck: {
    // paddingTop: "20.5px",
    width: "80%",
    margin: 0,
    backgroundColor: "#daeff0",
    marginTop: "-10px",

    // height:"2%px",
    // padding: 0
  },
  textFieldm: {
    // paddingTop: "20.5px",
    width: "100%",
    height: "130px",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  textFieldmrest: {
    // paddingTop: "20.5px",
    width: "100%",
    height: "190px",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  textFieldmrestbig: {
    // paddingTop: "20.5px",
    width: "100%",
    height: "350px",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  input1: {
    height: "5px",
    border: 0,
  },
  input2: {
    height: "10px",
    minHeight: "10px",
    border: 0,
  },
  inputm: {
    height: "130px",
    border: 0,
  },
  inputmrest: {
    height: "190px",
    border: 0,
  },
  inputmrestbig: {
    height: "350px",
    border: 0,
  },
  notchedOutline: {
    borderWidth: "0px",

    // borderColor: "yellow !important"
  },
  notchedOutlinem: {
    borderWidth: "0px",
    height: "130px",
    // borderColor: "yellow !important"
  },
  notchedOutlinemrest: {
    borderWidth: "0px",
    height: "190px",
    // borderColor: "yellow !important"
  },
  notchedOutlinemrestbig: {
    borderWidth: "0px",
    height: "350px",
    // borderColor: "yellow !important"
  },
  cornerbtn1: {
    // margin: theme.spacing(1),
    fontSize: "13px",
    backgroundColor: "#454a92",
    width: "160px",
    // height: "45px",
    // border: "1px solid white",
    opacity: 1,
  },
}));
let gender = [
  {
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  },
  {
    value: "Other",
    label: "Other"
  },
];
let maritalStatus = [
  {
    value: "Single",
    label: "Single"
  },
  {
    value: "Engaged",
    label: "Engaged"
  },
  {
    value: "Married",
    label: "Married"
  },
  {
    value: "Widowed",
    label: "Widowed"
  },
  {
    value: "Divorced",
    label: "Divorced"
  },
];
function Addpipreport(props) {
  const classes = useStyles();
  var history = useHistory();
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [genderState, setGenderState] = React.useState(gender);
  const [maritalStatusState, setMaritalStatusState] = React.useState(maritalStatus);
  const [CountryState, setCountryState] = React.useState(countries);
  const [languageState, setLanguageState] = React.useState(languages);
  React.useEffect(() => {
    dispatch(
      Actions.resetaddNewPip(true)
    );
  }, [])
  React.useEffect(() => {
    if (
      !history.location.state ||
      !history.location.state.id ||
      history.location.state.id === ""
    ) {
      alert("You are not Allow to add pip report without Refugee Id");
      history.push("/mentordashboard");
    }
  }, [history]);

  const add_confirmation = useSelector(
    ({ AddpipreportReducer }) => AddpipreportReducer.AddNewPipReducer
  );
  React.useEffect(() => {
    if (add_confirmation.data.data) {
      alert("successfully Added PIP Report");
      dispatch(
        Actions.resetaddNewPip(true)
      );

      history.push({
        pathname: "/mentorMunicipalitypip",
        state: history.location.mid,
      });
    }
  }, [add_confirmation, history]);
  const {
    handleSubmit,
    handleChange,

    values,
  } = useFormik({
    initialValues: {
      refugeeId: history.location.state ? history.location.state.id : "",
      date: "",
      citizenServiceNumber: "",
      clientNumber: "",
      gender: "Male",
      fullName: history.location.state
        ? history.location.state.name
        : "",
      address: "",
      phoneNumber: history.location.state
        ? history.location.state.phoneNumber
        : "",
      birthDate: "",
      nationality: "Netherlands (the)",
      maritalStatus: "Single",
      languagesAtHome: "Dutch",
      projectName: "",
      projectManager: "",
      projectManagerphoneNumber: "",
      registrationDate: "",
      intakeDate: "",
      expectedStartDate: "",
      expectedEndDate: "",
      literacyCourse: false,
      civicIntegrationCourse: false,
      stateExam: false,
      classroomHoursPerWeek: "",
      selfStudyHoursPerWeek: "",
      languageCoachHours: "",
      motivationPathChoice: "",

      developSpeakingSkills: false,
      participationInSociety: false,
      gettingToKnowEnvironment: false,
      developingTalentsWithInDutchSociety: false,
      additionalExercisesForIntegrationProgram: false,
      developForFutureEducation: false,
      developForFutureJob: false,
      projectPlanIntegrationother: false,
      projectPlanIntegrationotherField: "",

      stichtingWelKom: false,
      municipalityOfVenlo: false,
      informationAndAdvicePuntun: false,
      greenLightFoundation: false,
      housesOfTheDistrictOfVenlo: false,
      taalhuisVenlo: false,
      languageVolunteersVenlo: false,
      vwnVenlo: false,
      guildTraining: false,
      idwNetherlands: false,
      uafNetherlands: false,
      venloLibrary: false,
      ppdLimburg: false,
      springChildcare: false,
      primarySchoolsInMunicipalityOfVenlo: false,
      collaborationOrganizationsother: false,
      collaborationOrganizationsotherField: "",

      purposeOfRegistration: "",
      talentParticipant: "",
      participantPossibilities: "",
      organization: "",
      contact: "",
      volunteerWorkphoneNumber: "",
      volunteerWorkphoneregistrationDate: "",
      startDate: "",

      date1: "",
      conversation1: "",
      date2: "",
      conversation2: "",
      date3: "",
      conversation3: "",
      date4: "",
      conversation4: "",

      trialMonth: false,
      threeMonths: false,
      sixMonths: false,
      extensionSixMonths: false,

      workingHours: "",

      followWorkInstruction: false,
      giveReceiveFeedback: false,
      houseRules: false,
      dayRhythm: false,
      employeeSkills: false,
      jobInterviewSkills: false,

      learningToWork: false,
      learningToDealWithColleague: false,
      toCommunicate: false,
      apply: false,
      createResume: false,

      jobInterviewSkills: false,
      employeeSkills: false,
      trialPlacement: false,
      regularJobWithTraining: false,
      regularJob: false,
      explanation: "",

      municipalitySignatureDate: "",
      municipalitySignatureUrl: "",
      counselorSignatureDate: "",
      counselorSignatureUrl: "",
      participantSignatureDate: "",
      participantSignatureUrl: "",
    },
    // validationSchema,
    onSubmit(values) {

      dispatch(Actions.addNewPip(values));
    },
  });
  return (
    <div style={{ paddingBottom: "115px" }}>
      <Container className="test" fixed>
        <div className="edit-pip-heading-div">
          <h1 className="edit-pip-heading">
            {t("ADD PLAN INTEGRATION AND PARTICIPATION (PIP) FOR")}{" "}
            {history.location.state ? history.location.state.name : ""}
          </h1>
        </div>
        <Container style={{ marginTop: "80px" }} maxWidth="md">
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={1}
            >
              <Grid item sm={1} xs={4} className={classes.datelable}>
                {t("DATE")}
              </Grid>
              <Grid item sm={11} xs={8}>
                <TextField
                  id="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  className={classes.textFieldDate}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <div className={classes.headinglable}>
                  {t("PARTICULARS INFORMATION")}
                </div>
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Citizen service number")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="citizenServiceNumber"
                  name="citizenServiceNumber"
                  value={values.citizenServiceNumber}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Client number")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="clientNumber"
                  name="clientNumber"
                  value={values.clientNumber}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                Sex
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="gender"
                  select
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input2,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                >
                  {genderState.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Initials and surname")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="fullName"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  className={classes.textField}
                  disabled
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Address")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Phone")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  className={classes.textField}
                  disabled
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Date of birth")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="birthDate"
                  name="birthDate"
                  value={values.birthDate}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Nationality")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="nationality"
                  select
                  name="nationality"
                  value={values.nationality}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input2,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                >
                  {CountryState.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Marital status")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="maritalStatus"
                  select
                  name="maritalStatus"
                  value={values.maritalStatus}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input2,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                >
                  {maritalStatusState.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Language ​​at home")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="languagesAtHome"
                  select
                  name="languagesAtHome"
                  value={values.languagesAtHome}
                  onChange={handleChange}
                  className={classes.textField}
                  // value={values.percentage}
                  // onChange={handleChange("percentage")}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input2,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                >
                  {languageState.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item sm={12} xs={12}>
                <div className={classes.headinglable}>{t("PROJECT DETAILS")}</div>
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Project name")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="projectName"
                  name="projectName"
                  value={values.projectName}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Project manager")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="projectManager"
                  name="projectManager"
                  value={values.projectManager}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("phone number")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="projectManagerphoneNumber"
                  name="projectManagerphoneNumber"
                  value={values.projectManagerphoneNumber}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Date of registration")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="registrationDate"
                  name="registrationDate"
                  value={values.registrationDate}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Date intake")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="intakeDate"
                  name="intakeDate"
                  value={values.intakeDate}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Expected start date")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="expectedStartDate"
                  name="expectedStartDate"
                  value={values.expectedStartDate}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Expected end date")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="expectedEndDate"
                  name="expectedEndDate"
                  value={values.expectedEndDate}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <div className={classes.headinglable}>
                  {t("PROJECT PLAN FOR PROGRESS")}
                </div>
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Offer routes")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="literacyCourse"
                        checked={values.literacyCourse}
                        onChange={handleChange}
                        name="literacyCourse"
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                      />
                    }
                    label={t("Literacy course")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="civicIntegrationCourse"
                        checked={values.civicIntegrationCourse}
                        onChange={handleChange}
                        name="civicIntegrationCourse"
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                      />
                    }
                    label={t("Civic integration course")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="stateExam"
                        checked={values.stateExam}
                        onChange={handleChange}
                        name="stateExam"
                      />
                    }
                    label={t("State exam NT2 I, NT2 II")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Classroom hours per week")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="classroomHoursPerWeek"
                  name="classroomHoursPerWeek"
                  value={values.classroomHoursPerWeek}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Hours of self-study per week")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="selfStudyHoursPerWeek"
                  name="selfStudyHoursPerWeek"
                  value={values.selfStudyHoursPerWeek}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Hours of language coach")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="languageCoachHours"
                  name="languageCoachHours"
                  value={values.languageCoachHours}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Motivation path choice")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="outlined-multiline-flexible"
                  name="motivationPathChoice"
                  value={values.motivationPathChoice}
                  onChange={handleChange}
                  type="text"
                  multiline
                  rowsMax="5"
                  className={classes.textFieldm}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutlinem,
                      input: classes.inputm,
                    },
                  }}
                  variant="outlined"
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <div className={classes.headinglable}>
                  {t("PROJECT PLAN INTEGRATION")}
                </div>
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Offer routes")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="developSpeakingSkills"
                        checked={values.developSpeakingSkills}
                        onChange={handleChange}
                        name="developSpeakingSkills"
                      />
                    }
                    label={t("Develop speaking skills")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="participationInSociety"
                        checked={values.participationInSociety}
                        onChange={handleChange}
                        name="participationInSociety"
                      />
                    }
                    label={t("Participation in society")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="gettingToKnowEnvironment"
                        checked={values.gettingToKnowEnvironment}
                        onChange={handleChange}
                        name="gettingToKnowEnvironment"
                      />
                    }
                    label={t("Getting to know the environment")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="developingTalentsWithInDutchSociety"
                        checked={values.developingTalentsWithInDutchSociety}
                        onChange={handleChange}
                        name="developingTalentsWithInDutchSociety"
                      />
                    }
                    label={t("Developing talents within Dutch society")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="additionalExercisesForIntegrationProgram"
                        checked={
                          values.additionalExercisesForIntegrationProgram
                        }
                        onChange={handleChange}
                        name="additionalExercisesForIntegrationProgram"
                      />
                    }
                    label={t("Additional exercises for the integration program")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="developForFutureEducation"
                        checked={values.developForFutureEducation}
                        onChange={handleChange}
                        name="developForFutureEducation"
                      />
                    }
                    label={t("Develop for a future education")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="developForFutureJob"
                        checked={values.developForFutureJob}
                        onChange={handleChange}
                        name="developForFutureJob"
                      />
                    }
                    label={t("Develop for a future job")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="projectPlanIntegrationother"
                        checked={values.projectPlanIntegrationother}
                        onChange={handleChange}
                        name="projectPlanIntegrationother"
                      />
                    }
                    label={t("Other") + ":"}
                    style={{ marginTop: "-20px" }}
                  />
                  <span>
                    <TextField
                      id="projectPlanIntegrationotherField"
                      name="projectPlanIntegrationotherField"
                      value={values.projectPlanIntegrationotherField}
                      onChange={handleChange}
                      className={classes.textFieldaftercheck}
                      type="text"
                      InputProps={{
                        classes: {
                          notchedOutline: classes.notchedOutline,
                          input: classes.input1,
                        },
                      }}
                      margin="normal"
                      variant="outlined"
                      size="small"
                    />
                  </span>
                </p>
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Collaboration organizations")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="stateExam"
                        checked={values.stateExam}
                        onChange={handleChange}
                        name="stateExam"
                      />
                    }
                    label={t("Develop speaking skills")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="stichtingWelKom"
                        checked={values.stichtingWelKom}
                        onChange={handleChange}
                        name="stichtingWelKom"
                      />
                    }
                    label={t("Stichting Wel.Kom")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="municipalityOfVenlo"
                        checked={values.municipalityOfVenlo}
                        onChange={handleChange}
                        name="municipalityOfVenlo"
                      />
                    }
                    label={t("Municipality of Venlo")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="informationAndAdvicePuntun"
                        checked={values.informationAndAdvicePuntun}
                        onChange={handleChange}
                        name="informationAndAdvicePuntun"
                      />
                    }
                    label={t("Information & Advice Puntun")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="greenLightFoundation"
                        checked={values.greenLightFoundation}
                        onChange={handleChange}
                        name="greenLightFoundation"
                      />
                    }
                    label={t("Green light foundation")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="housesOfTheDistrictOfVenlo"
                        checked={values.housesOfTheDistrictOfVenlo}
                        onChange={handleChange}
                        name="housesOfTheDistrictOfVenlo"
                      />
                    }
                    label={t("Houses of the District of Venlo")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="taalhuisVenlo"
                        checked={values.taalhuisVenlo}
                        onChange={handleChange}
                        name="taalhuisVenlo"
                      />
                    }
                    label={t("Taalhuis Venlo")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="languageVolunteersVenlo"
                        checked={values.languageVolunteersVenlo}
                        onChange={handleChange}
                        name="languageVolunteersVenlo"
                      />
                    }
                    label={t("Language volunteers Venlo")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="vwnVenlo"
                        checked={values.vwnVenlo}
                        onChange={handleChange}
                        name="vwnVenlo"
                      />
                    }
                    label={t("VWN Venlo")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="guildTraining"
                        checked={values.guildTraining}
                        onChange={handleChange}
                        name="guildTraining"
                      />
                    }
                    label={t("Guild training")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>

                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="idwNetherlands"
                        checked={values.idwNetherlands}
                        onChange={handleChange}
                        name="idwNetherlands"
                      />
                    }
                    label={t("IDW Netherlands")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="uafNetherlands"
                        checked={values.uafNetherlands}
                        onChange={handleChange}
                        name="uafNetherlands"
                      />
                    }
                    label={t("UAF Netherlands")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="venloLibrary"
                        checked={values.venloLibrary}
                        onChange={handleChange}
                        name="venloLibrary"
                      />
                    }
                    label={t("Venlo Library")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="ppdLimburg"
                        checked={values.ppdLimburg}
                        onChange={handleChange}
                        name="ppdLimburg"
                      />
                    }
                    label={t("PPD Limburg")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="springChildcare"
                        checked={values.springChildcare}
                        onChange={handleChange}
                        name="springChildcare"
                      />
                    }
                    label={t("Spring childcare")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="primarySchoolsInMunicipalityOfVenlo"
                        checked={values.primarySchoolsInMunicipalityOfVenlo}
                        onChange={handleChange}
                        name="primarySchoolsInMunicipalityOfVenlo"
                      />
                    }
                    label={t("Primary schools in the municipality of Venlo")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="collaborationOrganizationsother"
                        checked={values.collaborationOrganizationsother}
                        onChange={handleChange}
                        name="collaborationOrganizationsother"
                      />
                    }
                    label={t("Other") + ":"}
                    style={{ marginTop: "-20px" }}
                  />
                  <span>
                    <TextField
                      id="collaborationOrganizationsotherField"
                      name="collaborationOrganizationsotherField"
                      value={values.collaborationOrganizationsotherField}
                      onChange={handleChange}
                      className={classes.textFieldaftercheck}
                      type="text"
                      InputProps={{
                        classes: {
                          notchedOutline: classes.notchedOutline,
                          input: classes.input1,
                        },
                      }}
                      margin="normal"
                      variant="outlined"
                      size="small"
                    />
                  </span>
                </p>
              </Grid>

              <Grid item sm={12} xs={12}>
                <div className={classes.headinglable}>{t("VOLUNTEER WORK")}</div>
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Purpose of registration")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="purposeOfRegistration"
                  name="purposeOfRegistration"
                  value={values.purposeOfRegistration}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Talent participant")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="talentParticipant"
                  name="talentParticipant"
                  value={values.talentParticipant}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Participant possibilities")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="participantPossibilities"
                  name="participantPossibilities"
                  value={values.participantPossibilities}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Organization")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="organization"
                  name="organization"
                  value={values.organization}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Contact")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="contact"
                  name="contact"
                  value={values.contact}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("phone number")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="volunteerWorkphoneNumber"
                  name="volunteerWorkphoneNumber"
                  value={values.volunteerWorkphoneNumber}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Date of registration")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="volunteerWorkphoneregistrationDate"
                  name="volunteerWorkphoneregistrationDate"
                  value={values.volunteerWorkphoneregistrationDate}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Start date")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="startDate"
                  name="startDate"
                  value={values.startDate}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <div className={classes.headinglable}>
                  {t("EVALUATION CONVERSATIONS & RESULTS")}
                </div>
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Date")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="date1"
                  name="date1"
                  value={values.date1}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Conversation")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="outlined-multiline-flexible"
                  name="conversation1"
                  value={values.conversation1}
                  onChange={handleChange}
                  type="text"
                  multiline
                  rowsMax="8"
                  className={classes.textFieldmrest}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutlinemrest,
                      input: classes.inputmrest,
                    },
                  }}
                  variant="outlined"
                />
                <br />
                <br />
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Date")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="date2"
                  name="date2"
                  value={values.date2}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Conversation")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="outlined-multiline-flexible"
                  name="conversation2"
                  value={values.conversation2}
                  onChange={handleChange}
                  type="text"
                  multiline
                  rowsMax="8"
                  className={classes.textFieldmrest}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutlinemrest,
                      input: classes.inputmrest,
                    },
                  }}
                  variant="outlined"
                />
                <br />
                <br />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Date")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="date3"
                  name="date3"
                  value={values.date3}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Conversation")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="outlined-multiline-flexible"
                  name="conversation3"
                  value={values.conversation3}
                  onChange={handleChange}
                  type="text"
                  multiline
                  rowsMax="8"
                  className={classes.textFieldmrest}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutlinemrest,
                      input: classes.inputmrest,
                    },
                  }}
                  variant="outlined"
                />
                <br />
                <br />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Date")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="date4"
                  name="date4"
                  value={values.date4}
                  onChange={handleChange}
                  className={classes.textField}
                  type="date"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Conversation")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="outlined-multiline-flexible"
                  name="conversation4"
                  value={values.conversation4}
                  onChange={handleChange}
                  type="text"
                  multiline
                  rowsMax="8"
                  className={classes.textFieldmrest}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutlinemrest,
                      input: classes.inputmrest,
                    },
                  }}
                  variant="outlined"
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <div className={classes.headinglable}>
                  {t("PROJECT PLAN PARTICIPATION / WORK")}
                </div>
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Offer routes")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="trialMonth"
                        checked={values.trialMonth}
                        onChange={handleChange}
                        name="trialMonth"
                      />
                    }
                    label={t("Trial month")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="threeMonths"
                        checked={values.threeMonths}
                        onChange={handleChange}
                        name="threeMonths"
                      />
                    }
                    label={t("3 months")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="sixMonths"
                        checked={values.sixMonths}
                        onChange={handleChange}
                        name="sixMonths"
                      />
                    }
                    label={t("6 months")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>

                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="extensionSixMonths"
                        checked={values.extensionSixMonths}
                        onChange={handleChange}
                        name="extensionSixMonths"
                      />
                    }
                    label={t("Extension 6 months")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
              </Grid>
              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Working hours")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="workingHours"
                  name="workingHours"
                  value={values.workingHours}
                  onChange={handleChange}
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
                <br />
                <br />
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Labor training")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="followWorkInstruction"
                        checked={values.followWorkInstruction}
                        onChange={handleChange}
                        name="followWorkInstruction"
                      />
                    }
                    label={t("Follow work instructions")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="giveReceiveFeedback"
                        checked={values.giveReceiveFeedback}
                        onChange={handleChange}
                        name="giveReceiveFeedback"
                      />
                    }
                    label={t("Give / receive feedback")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="houseRules"
                        checked={values.houseRules}
                        onChange={handleChange}
                        name="houseRules"
                      />
                    }
                    label={t("House rules")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="dayRhythm"
                        checked={values.dayRhythm}
                        onChange={handleChange}
                        name="dayRhythm"
                      />
                    }
                    label={t("Day rhythm")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="employeeSkills"
                        checked={values.employeeSkills}
                        onChange={handleChange}
                        name="employeeSkills"
                      />
                    }
                    label={t("Employee skills")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>

                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="jobInterviewSkills"
                        checked={values.jobInterviewSkills}
                        onChange={handleChange}
                        name="jobInterviewSkills"
                      />
                    }
                    label={t("Job interview skills")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <br />
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Intermediate objectives")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="learningToWork"
                        checked={values.learningToWork}
                        onChange={handleChange}
                        name="learningToWork"
                      />
                    }
                    label={t("Learning to work")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="learningToDealWithColleague"
                        checked={values.learningToDealWithColleague}
                        onChange={handleChange}
                        name="learningToDealWithColleague"
                      />
                    }
                    label={t("Learning to deal with a colleague")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="toCommunicate"
                        checked={values.toCommunicate}
                        onChange={handleChange}
                        name="toCommunicate"
                      />
                    }
                    label={t("To communicate")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="apply"
                        checked={values.apply}
                        onChange={handleChange}
                        name="apply"
                      />
                    }
                    label={t("Apply")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="createResume"
                        checked={values.createResume}
                        onChange={handleChange}
                        name="createResume"
                      />
                    }
                    label={t("Create a resume")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>

                <br />
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Final objective")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <p style={{ margin: "0px", marginTop: "7px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="jobInterviewSkills"
                        checked={values.jobInterviewSkills}
                        onChange={handleChange}
                        name="jobInterviewSkills"
                      />
                    }
                    label={t("Job interview skills")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="employeeSkills"
                        checked={values.employeeSkills}
                        onChange={handleChange}
                        name="employeeSkills"
                      />
                    }
                    label={t("Employee skills")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="trialPlacement"
                        checked={values.trialPlacement}
                        onChange={handleChange}
                        name="trialPlacement"
                      />
                    }
                    label={t("Trial Placement")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="regularJobWithTraining"
                        checked={values.regularJobWithTraining}
                        onChange={handleChange}
                        name="regularJobWithTraining"
                      />
                    }
                    label={t("Regular job with training")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>
                <p style={{ margin: "0" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        labelStyle={{ color: "black" }}
                        iconStyle={{ fill: "black" }}
                        inputStyle={{ color: "black" }}
                        style={{ color: "black" }}
                        id="regularJob"
                        checked={values.regularJob}
                        onChange={handleChange}
                        name="regularJob"
                      />
                    }
                    label={t("Regular job")}
                    style={{ marginTop: "-20px" }}
                  />
                </p>

                <br />
              </Grid>

              <Grid item sm={3} xs={4} className={classes.lable}>
                {t("Explanation")}
              </Grid>
              <Grid item sm={9} xs={8}>
                <TextField
                  id="outlined-multiline-flexible"
                  name="explanation"
                  value={values.explanation}
                  onChange={handleChange}
                  type="text"
                  multiline
                  rowsMax="16"
                  className={classes.textFieldmrestbig}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutlinemrestbig,
                      input: classes.inputmrestbig,
                    },
                  }}
                  variant="outlined"
                />
                <br />
                <br />
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
              <Grid item sm={12} xs={12} style={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.cornerbtn1}
                >
                  {t("Add")}
                </Button>
                <br /> <br /> <br />
              </Grid>
            </Grid>
          </form>
        </Container>
      </Container>
    </div>
  );
}

export default withReducer("AddpipreportReducer", reducer)(Addpipreport);

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
  munGrid: {
    paddingTop: "0 !important",
    marginTop: "-2px"
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
function MunicipalityForm(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [thumb, setThumb] = React.useState(undefined);
  const [skip, setSkip] = React.useState(false);
  React.useEffect(() => {
    dispatch(Actions.resetUpdateMunicipality(true));
    dispatch(Actions.getMunicipalitySummary(sessionStorage.getItem("user_id")));
  }, []);
  const municipalitySummary = useSelector(
    ({ MunicipalityFormReducer }) =>
      MunicipalityFormReducer.getMunicipalitySummaryReducer.data
  );
  const municipalitySummaryLoading = useSelector(
    ({ MunicipalityFormReducer }) =>
      MunicipalityFormReducer.getMunicipalitySummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ MunicipalityFormReducer }) =>
      MunicipalityFormReducer.getMunicipalitySummaryReducer.errMsg
  );
  const update_confirmation = useSelector(
    ({ MunicipalityFormReducer }) => MunicipalityFormReducer.UpdateMunicipalityReducer
  );
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
  const FILE_SIZE = 160 * 1024;
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const validationSchema = yup.object({
    province: yup.string().required(t("Province is required")).max(20, t("Province must be at most 20 characters")),
    municipality_name: yup.string().required(t("Municipality Name is required")).max(20, t("Municipality Name must be at most 20 characters")),
    manager_name: yup.string().required(t("Manager Name is required")).matches(/^[A-Za-z ]*$/, t('Please enter valid name'))
      .max(20, t("Manager Name must be at most 20 characters")),
    manager_phone_no: yup.string().required(t("Manager Phone Number is required")).matches(phoneRegExp, t('Phone Number is not valid')).min(10, "to short")
      .max(15, "to long"),
    manager_email: yup.string().email().required(t("Email is Required")).max(30, t("Email must be at most 30 characters")),
    logo: yup
      .mixed()
      .test(
        "fileSize",
        t("Logo too large"),
        (value) => !value || value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        t("Unsupported Format"),
        (value) => !value || SUPPORTED_FORMATS.includes(value.type)
      ),
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
      province: (municipalitySummary && municipalitySummary.getMunicipalitySummary) ? municipalitySummary.getMunicipalitySummary.province : "",
      municipality_name: (municipalitySummary && municipalitySummary.getMunicipalitySummary) ? municipalitySummary.getMunicipalitySummary.name : "",
      manager_name: (municipalitySummary && municipalitySummary.getMunicipalitySummary && municipalitySummary.getMunicipalitySummary.manager) ? municipalitySummary.getMunicipalitySummary.manager.name : "",
      manager_phone_no: (municipalitySummary && municipalitySummary.getMunicipalitySummary && municipalitySummary.getMunicipalitySummary.manager) ? municipalitySummary.getMunicipalitySummary.manager.phoneNumber : "",
      manager_email: (municipalitySummary && municipalitySummary.getMunicipalitySummary && municipalitySummary.getMunicipalitySummary.manager) ? municipalitySummary.getMunicipalitySummary.manager.email : "",
      contact_person_name: (municipalitySummary && municipalitySummary.getMunicipalitySummary && municipalitySummary.getMunicipalitySummary.contactPerson) ? municipalitySummary.getMunicipalitySummary.contactPerson.name : "",
      poi_url: (municipalitySummary && municipalitySummary.getMunicipalitySummary) ? municipalitySummary.getMunicipalitySummary.poiLink : "",
      logo: '',
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      dispatch(Actions.updateMunicipality(values, sessionStorage.getItem("user_id"), municipalitySummary.getMunicipalitySummary.manager._id));
    },
  });
  React.useEffect(() => {
    if (values.logo) {
      setLoading(true);
      let reader = new FileReader();

      reader.onloadend = () => {
        setLoading(false);
        setThumb(reader.result);
      };

      reader.readAsDataURL(values.logo);
    }
  }, [values.logo]);
  const skipClick = () => {
    setSkip(true);
    handleSubmit();
  };
  const assignClick = () => {
    setSkip(false);
    handleSubmit();
  };
  React.useEffect(() => {
    if (update_confirmation.data && update_confirmation.data.data && update_confirmation.data.data.updateMunicipality && !skip) {
      sessionStorage.setItem("entity_name", values.municipality_name);
      dispatch(Actions.resetUpdateMunicipality(true));
      history.push({
        pathname: "/editAssignMentorToMunicipality"
      });
    }
    if (update_confirmation.data && update_confirmation.data.data && update_confirmation.data.data.updateMunicipality && skip) {
      sessionStorage.setItem("entity_name", values.municipality_name);
      dispatch(Actions.resetUpdateMunicipality(true));
      history.push({
        pathname: "/viewEditMunicipalitySummary"
      });
    }
  }, [update_confirmation, skip]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className={classes.con}>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Land")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="province"
              onChange={handleChange}
              value={values.province}
              name="province"
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
              placeholder={t("Enter Land")}
              error={(errors.province && touched.province) ? true : false}
            />
            {errors.province && touched.province ? (
              <p className="error-input">{errors.province}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Municipality Name")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="municipality_name"
              onChange={handleChange}
              value={values.municipality_name}
              name="municipality_name"
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
              placeholder={t("Enter Municipality’s Full Name")}
              error={(errors.municipality_name && touched.municipality_name) ? true : false}
            />
            {errors.municipality_name && touched.municipality_name ? (
              <p className="error-input">{errors.municipality_name}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={2} xs={4} className={classes.munGrid}>
            <p className="create-user-label-text">{t("Manager Name")}</p>
          </Grid>
          <Grid item sm={10} xs={8} className={classes.munGrid}>
            <TextField
              id="manager_name"
              onChange={handleChange}
              value={values.manager_name}
              name="manager_name"
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
              placeholder={t("Enter Manager’s Full Name")}
              error={(errors.manager_name && touched.manager_name) ? true : false}
            />
            {errors.manager_name && touched.manager_name ? (
              <p className="error-input">{errors.manager_name}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Email")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="manager_email"
              onChange={handleChange}
              value={values.manager_email}
              name="manager_email"
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
              placeholder={t("Enter Municipality’s Email")}
              error={(errors.manager_email && touched.manager_email) ? true : false}
            />
            {errors.manager_email && touched.manager_email ? (
              <p className="error-input">{errors.manager_email}</p>
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
              value={values.manager_phone_no}
              onChange={phone => setFieldValue("manager_phone_no", '+' + phone)}
              countryCodeEditable={true}
              id="manager_phone_no"
              name='manager_phone_no'
              excludeCountries={['bg']}
              inputProps={{
                name: 'manager_phone_no',
                id: "manager_phone_no",
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
            {errors.manager_phone_no && touched.manager_phone_no ? (
              <p className="error-input">{errors.manager_phone_no}</p>
            ) : (
              false
            )}
          </Grid>

        </Grid>
        <Grid container spacing={2} className={classes.con}>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Contact Person")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="contact_person_name"
              onChange={handleChange}
              value={values.contact_person_name}
              name="contact_person_name"
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
              placeholder={t("Enter Contact Person’s Full Name")}
              error={(errors.contact_person_name && touched.contact_person_name) ? true : false}
            />
            {errors.contact_person_name && touched.contact_person_name ? (
              <p className="error-input">{errors.contact_person_name}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("POI (DISK) Link")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="poi_url"
              onChange={handleChange}
              value={values.poi_url}
              name="poi_url"
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
              placeholder="http://"
              error={(errors.poi_url && touched.poi_url) ? true : false}
            />
            {errors.poi_url && touched.poi_url ? (
              <p className="error-input">{errors.poi_url}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Upload Logo")}</p>
          </Grid>
          <Grid item sm={3} xs={4}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              onChange={(event) => {
                setFieldValue("logo", event.currentTarget.files[0]);
              }}
              name="logo"
              multiple
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
            {errors.logo && touched.logo ? (
              <p className="error-input">{errors.logo}</p>
            ) : (
              false
            )}
          </Grid>
          <Grid item sm={7} xs={12}>
            {thumb && (
              <p className="create-user-logo-name-text">
                {values.logo.name}
              </p>
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
              {t("Assign Mentors/Suppliers/Refugees")}
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
            onClick={() => skipClick()}
          >
            {t("Continue")}
          </Button>
        </div>

      </form>
    </div>
  );
}
export default withReducer("MunicipalityFormReducer", reducer)(MunicipalityForm);
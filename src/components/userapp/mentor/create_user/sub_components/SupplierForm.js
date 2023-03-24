import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
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
  input2: {
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
function SupplierForm(props) {
  const [t] = useTranslation();
  let supplierType = [
    {
      value: "SCHOOL",
      label: t("School")
    },
    {
      value: "WORK",
      label: t("Work")
    },
  ];
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();
  const [supplierTypeState, setSupplierTypeState] = React.useState(supplierType);
  const [steps, setSteps] = React.useState([]);
  const [skip, setSkip] = React.useState(false);
  React.useEffect(() => {
    if (sessionStorage.getItem("steps")) {
      setSteps(JSON.parse(sessionStorage.getItem("steps")));
    }
  }, [sessionStorage.getItem("steps")]);
  React.useEffect(() => {
    dispatch(Actions.resetSupplierSummary(true));
    dispatch(Actions.resetUpdateSupplier(true));
    dispatch(Actions.resetAddNewSupplier(true));
  }, []);
  React.useEffect(() => {
    if (sessionStorage.getItem("user_id")) {
      dispatch(Actions.getSupplierSummary(sessionStorage.getItem("user_id")));
    }
  }, [sessionStorage.getItem("user_id")])
  const supplierSummary = useSelector(
    ({ SupplierFormReducer }) =>
      SupplierFormReducer.getSupplierSummaryReducer.data
  );
  const loading = useSelector(
    ({ SupplierFormReducer }) =>
      SupplierFormReducer.getSupplierSummaryReducer.isLoading
  );
  const errMsg = useSelector(
    ({ SupplierFormReducer }) =>
      SupplierFormReducer.getSupplierSummaryReducer.errMsg
  );
  const add_confirmation = useSelector(
    ({ SupplierFormReducer }) => SupplierFormReducer.AddNewSupplierReducer
  );
  const update_confirmation = useSelector(
    ({ SupplierFormReducer }) => SupplierFormReducer.UpdateSupplierReducer
  );
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
  const validationSchema = yup.object({
    supplier_name: yup.string().required(t("Name is required")).matches(/^[A-Za-z ]*$/, t('Please enter valid name'))
      .max(20, t("Name must be at most 20 characters")),
    supplier_email: yup.string().email().required(t("Email is Required")).max(30, t("Email must be at most 30 characters")),
    supplier_phone_no: yup.string().required(t("Phone Number is required")).matches(phoneRegExp, t('Phone Number is not valid')).min(10, t("to short"))
      .max(15, t("to long")),
    supplier_type: yup.string().required(t("Type is required")),
    supplier_contact_person: yup.string().required(t("Contact Person Name is required")).matches(/^[A-Za-z ]*$/, t('Please enter valid name'))
      .max(20, t("Contact Person Name must be at most 20 characters")),


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
      supplier_name: (supplierSummary && supplierSummary.getSupplierSummary) ? supplierSummary && supplierSummary.getSupplierSummary.name : "",
      supplier_email: (supplierSummary && supplierSummary.getSupplierSummary) ? supplierSummary && supplierSummary.getSupplierSummary.email : "",
      supplier_phone_no: (supplierSummary && supplierSummary.getSupplierSummary) ? supplierSummary && supplierSummary.getSupplierSummary.phoneNumber : "+31",
      supplier_type: (supplierSummary && supplierSummary.getSupplierSummary) ? supplierSummary && (supplierSummary.getSupplierSummary.type).toUpperCase() : "SCHOOL",
      supplier_contact_person: (supplierSummary && supplierSummary.getSupplierSummary && supplierSummary.getSupplierSummary.contactPerson) ? supplierSummary && supplierSummary.getSupplierSummary.contactPerson.name : "",


    },
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      if (sessionStorage.getItem("user_id")) {
        dispatch(Actions.updateSupplier(values, sessionStorage.getItem("user_id")));
      } else {
        dispatch(Actions.addNewSupplier(values));

      }
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
    if (add_confirmation.data && add_confirmation.data.data && add_confirmation.data.data.addSupplier && !skip) {
      let finalSteps = steps;
      finalSteps.push(props.selectedUserType);
      dispatch(Actions.resetAddNewSupplier(true));
      sessionStorage.setItem("steps", JSON.stringify(finalSteps));
      sessionStorage.setItem("user_id", add_confirmation.data.data.addSupplier.id);
      sessionStorage.setItem("entity_name", values.supplier_name);
      history.push({
        pathname: "/assignRefugeeToSupplierByMentor"
      });
    }
    if (add_confirmation.data && add_confirmation.data.data && add_confirmation.data.data.addSupplier && skip) {
      let finalSteps = steps;
      finalSteps.push(props.selectedUserType);
      dispatch(Actions.resetAddNewSupplier(true));
      sessionStorage.setItem("steps", JSON.stringify(finalSteps));
      sessionStorage.setItem("user_id", add_confirmation.data.data.addSupplier.id);
      sessionStorage.setItem("entity_name", values.supplier_name);
      history.push({
        pathname: "/postSupplierDetailsByMentor"
      });
    }
  }, [add_confirmation, skip]);
  React.useEffect(() => {
    if (update_confirmation.data && update_confirmation.data.data && update_confirmation.data.data.updateSupplier && !skip) {
      sessionStorage.setItem("entity_name", values.supplier_name);
      dispatch(Actions.resetUpdateSupplier(true));
      history.push({
        pathname: "/assignRefugeeToSupplierByMentor"
      });
    }
    if (update_confirmation.data && update_confirmation.data.data && update_confirmation.data.data.updateSupplier && skip) {
      sessionStorage.setItem("entity_name", values.supplier_name);
      dispatch(Actions.resetUpdateSupplier(true));
      history.push({
        pathname: "/postSupplierDetailsByMentor"
      });
    }
  }, [update_confirmation, skip]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className={classes.con}>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Name")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="supplier_name"
              onChange={handleChange}
              value={values.supplier_name}
              name="supplier_name"
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
              placeholder={t("Enter Supplier's Full Name")}
              error={(errors.supplier_name && touched.supplier_name) ? true : false}
            />
            {errors.supplier_name && touched.supplier_name ? (
              <p className="error-input">{errors.supplier_name}</p>
            ) : (
              false
            )}
          </Grid>

          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Email")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="supplier_email"
              onChange={handleChange}
              value={values.supplier_email}
              name="supplier_email"
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
              placeholder={t("Enter Supplier Email")}
              error={(errors.supplier_email && touched.supplier_email) ? true : false}
            />
            {errors.supplier_email && touched.supplier_email ? (
              <p className="error-input">{errors.supplier_email}</p>
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
              value={values.supplier_phone_no}
              onChange={phone => setFieldValue("supplier_phone_no", '+' + phone)}
              countryCodeEditable={true}
              id="supplier_phone_no"
              name='supplier_phone_no'
              excludeCountries={['bg']}
              inputProps={{
                name: 'supplier_phone_no',
                id: "supplier_phone_no",
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
            {errors.supplier_phone_no && touched.supplier_phone_no ? (
              <p className="error-input">{errors.supplier_phone_no}</p>
            ) : (
              false
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.con}>
          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Type")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="supplier_type"
              select
              onChange={handleChange}
              value={values.supplier_type}
              name="supplier_type"
              className={classes.textField}
              type="text"
              InputProps={{
                classes: {
                  input: classes.input2,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              margin="normal"
              variant="outlined"
              size="small"
            >
              {supplierTypeState.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item sm={2} xs={4}>
            <p className="create-user-label-text">{t("Contact Person")}</p>
          </Grid>
          <Grid item sm={10} xs={8}>
            <TextField
              id="supplier_contact_person"
              onChange={handleChange}
              value={values.supplier_contact_person}
              name="supplier_contact_person"
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
              placeholder={t("Enter Supplier’s Contact Person")}
              error={(errors.supplier_contact_person && touched.supplier_contact_person) ? true : false}
            />
            {errors.supplier_contact_person && touched.supplier_contact_person ? (
              <p className="error-input">{errors.supplier_contact_person}</p>
            ) : (
              false
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
        <div className="create-user-assign-user-div"
          onClick={() => assignClick()}>
          <div className="create-user-assign-user-text-div">
            <p className="create-user-assign-user-text">
              {t("Assign Refugees")}
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
export default withReducer("SupplierFormReducer", reducer)(SupplierForm);
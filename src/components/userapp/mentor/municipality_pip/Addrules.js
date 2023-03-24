import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, Field, FieldArray } from "formik";

// store
import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../../store/withReducer";
import * as Actions from "./store/actions";
const useStyles = makeStyles((theme) => ({
  conform: {
    padding: "30px",
    marginTop: "30px",
    backgroundColor: "white",
    borderRadius: "12px",
    webkitboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    mozboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    boxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    height: "auto",
    // overflowY: "scroll",
    // zIndex: "100000",
  },

  heading: {
    color: "white",
    fontSize: "32pt",
    fontFamily: "opensans-semibold",
    // fontWeight: "500"
  },
  headingaddform: {
    color: "#454a92",
    fontSize: "16px",
    fontWeight: "bold",
    borderBottom: "2px solid black",
    width: "220px",
    paddingBottom: "2px",
  },

  lable: {
    // fontStyle: "italic",
    textAlign: "left",
    marginTop: "5px",
    textTransform: "capitalize",
    paddingLeft: "9px !important"
  },
  lablem: {
    // fontStyle: "italic",
    textAlign: "left",
    marginTop: "8px"
  },
  formHeading: {
    // fontFamily: "opensans-bold",
    // fontStyle: "italic",
    // textAlign: "left",
    // fontSize: "18px",
    // fontWeight: "bold",
    // borderBottom: "4px solid #454a92",
    fontSize: "18px",
    fontFamily: "opensans-bold",
    color: "black",
    // paddingBottom: "5px",
    marginBottom: "15px",
    textTransform: "uppercase",
    // borderBottomWidth: "3px"

  },
  cornerbtn: {
    textAlign: "right",
  },
  cornerbtn1: {
    margin: theme.spacing(1),
    fontSize: "13px",
    backgroundColor: "#454a92",
    width: "160px",
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
  textFieldformik: {
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",
    border: "none",
    height: "23px",
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
  buttonmenu: {
    // margin: theme.spacing(1),
    // fontSize: "14px",
    backgroundColor: "#f4865c",
    // width: "100px",
    height: "26px",
    // opacity: 1,
    textTransform: "capitalize",
    marginLeft: "4px",
    marginTop: "4px",
    marginBottom: "4px"
    // padding: "1px",
    // marginRight: "30px",
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#f4865c",
    '&:hover': {
      backgroundColor: "#f4865c",
    },
  },
}))(Button);
// const data = {
//   language: { categories: [{categoryName: "A", value: 100}] },
//   placeOfResidence: { categories: [] },
//   wellbeing: { categories: [] },
//   socialContact: { categories: [] },
//   work: { categories: [] },
//   training: { categories: [] },
//   contribution: { categories: [] },
//   society: { categories: [] },
//   selfSustainability: { categories: [] },
//   municipality: undefined,
// };
function Addrules(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();
  // const [inputValue, setInputValue] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // const [data, setData] = React.useState({
  //   language: { categories: [{categoryName: "A", value: 100}] },
  //   placeOfResidence: { categories: [] },
  //   wellbeing: { categories: [] },
  //   socialContact: { categories: [] },
  //   work: { categories: [] },
  //   training: { categories: [] },
  //   contribution: { categories: [] },
  //   society: { categories: [] },
  //   selfSustainability: { categories: [] },
  //   municipality: undefined,
  // });
  const [data, setData] = React.useState({
    language: { categories: [] },
    placeOfResidence: { categories: [] },
    wellbeing: { categories: [] },
    socialContact: { categories: [] },
    work: { categories: [] },
    training: { categories: [] },
    contribution: { categories: [] },
    society: { categories: [] },
    selfSustainability: { categories: [] },
    municipality: undefined,
  });

  // React.useEffect(() => {
  //   dispatch(Actions.getAllMunicipalitiesWithoutRules());
  // }, [inputValue]);
  React.useEffect(() => {
    dispatch(Actions.getAllMunicipalitiesWithoutRules());
  }, []);
  const AllMunicipalities = useSelector(
    ({ Addrules }) => Addrules.AllMunicipalitiesWithoutRules.data
  );
  console.log(AllMunicipalities, "AllMunicipalities");
  const loading = useSelector(
    ({ Addrules }) => Addrules.AllMunicipalitiesWithoutRules.isLoading
  );
  console.log(loading, "i am loading from all getAllMunicipalitiesWithoutRules");

  // const errMsg = useSelector(
  //   ({ Addrules }) => Addrules.AllMunicipalitiesWithoutRules.errMsg
  // );

  const add_confirmation = useSelector(
    ({ Addrules }) => Addrules.AddNewRulesReducer
  );
  console.log(add_confirmation.errMsg, "errmsg");
  if (add_confirmation.data.data) {
    alert("successfully added Rules");
    dispatch(Actions.resetaddNewRules(true));
    history.push({
      pathname: "/dashboard",
      // search: '?query=abc',
      // state: data
    });
  }
  //   const validationSchema = yup.object({
  //     first_name: yup.string().required(),
  //     last_name: yup.string().required(),
  //     phone_no: yup.number().required(),

  //     email: yup.string().email().required(),
  //     municipality: yup.object().required()

  //   });
  //   const {
  //     handleSubmit,
  //     resetForm,
  //     setFieldValue,
  //     handleChange,
  //     values,
  //     errors,
  //   } = useFormik({
  //     initialValues: {
  //       first_name: "",
  //       last_name: "",
  //       phone_no: "",
  //       email: "",
  //       municipality: undefined,
  //     },
  //     validationSchema,
  //     // handleChange(values){
  //     //   console.table(values, "values");
  //     // },
  //     onSubmit(values) {
  //       console.table(values, "values");
  //     //   dispatch(Actions.addNewMentor(values));
  //     },
  //   });
  const validationSchema = yup.object().shape({
    language: yup.object().shape({
      categories: yup
        .array()
        .of(
          yup.object().shape({
            categoryName: yup.string().required("categoryName is required"),
            value: yup
              .number()
              .required("Value is required and must be a number"),
            // Rest of your amenities object properties
          })
        )
        .required("Language Must have One Category") // these constraints are shown if and only if inner constraints are satisfied
        .min(1, "Minimum of 1 categories"),
    }),
    placeOfResidence: yup.object().shape({
      categories: yup
        .array()
        .of(
          yup.object().shape({
            categoryName: yup.string().required("categoryName is required"),
            value: yup
              .number()
              .required("Value is required and must be a number"),
            // Rest of your amenities object properties
          })
        )
        .required("Place of Residence Must have One Category") // these constraints are shown if and only if inner constraints are satisfied
        .min(1, "Minimum of 1 categories"),
    }),
    wellbeing: yup.object().shape({
      categories: yup
        .array()
        .of(
          yup.object().shape({
            categoryName: yup.string().required("categoryName is required"),
            value: yup
              .number()
              .required("Value is required and must be a number"),
            // Rest of your amenities object properties
          })
        )
        .required("wellbeing Must have One Category") // these constraints are shown if and only if inner constraints are satisfied
        .min(1, "Minimum of 1 categories"),
    }),

    socialContact: yup.object().shape({
      categories: yup
        .array()
        .of(
          yup.object().shape({
            categoryName: yup.string().required("categoryName is required"),
            value: yup
              .number()
              .required("Value is required and must be a number"),
            // Rest of your amenities object properties
          })
        )
        .required("Social Contact Must have One Category") // these constraints are shown if and only if inner constraints are satisfied
        .min(1, "Minimum of 1 categories"),
    }),
    work: yup.object().shape({
      categories: yup
        .array()
        .of(
          yup.object().shape({
            categoryName: yup.string().required("categoryName is required"),
            value: yup
              .number()
              .required("Value is required and must be a number"),
            // Rest of your amenities object properties
          })
        )
        .required("Work Must have One Category") // these constraints are shown if and only if inner constraints are satisfied
        .min(1, "Minimum of 1 categories"),
    }),
    training: yup.object().shape({
      categories: yup
        .array()
        .of(
          yup.object().shape({
            categoryName: yup.string().required("categoryName is required"),
            value: yup
              .number()
              .required("Value is required and must be a number"),
            // Rest of your amenities object properties
          })
        )
        .required("Training Must have One Category") // these constraints are shown if and only if inner constraints are satisfied
        .min(1, "Minimum of 1 categories"),
    }),
    contribution: yup.object().shape({
      categories: yup
        .array()
        .of(
          yup.object().shape({
            categoryName: yup.string().required("categoryName is required"),
            value: yup
              .number()
              .required("Value is required and must be a number"),
            // Rest of your amenities object properties
          })
        )
        .required("Contribution Must have One Category") // these constraints are shown if and only if inner constraints are satisfied
        .min(1, "Minimum of 1 categories"),
    }),
    society: yup.object().shape({
      categories: yup
        .array()
        .of(
          yup.object().shape({
            categoryName: yup.string().required("categoryName is required"),
            value: yup
              .number()
              .required("Value is required and must be a number"),
            // Rest of your amenities object properties
          })
        )
        .required("Society Must have One Category") // these constraints are shown if and only if inner constraints are satisfied
        .min(1, "Minimum of 1 categories"),
    }),
    selfSustainability: yup.object().shape({
      categories: yup
        .array()
        .of(
          yup.object().shape({
            categoryName: yup.string().required("categoryName is required"),
            value: yup
              .number()
              .required("Value is required and must be a number"),
            // Rest of your amenities object properties
          })
        )
        .required("Self Sustainability Must have One Category") // these constraints are shown if and only if inner constraints are satisfied
        .min(1, "Minimum of 1 categories"),
    }),

    municipality: yup.object().required(),
  });
  return (
    <div className="main">
      <div className="bgforform">
        <Container fixed>
          <Grid container className={classes.conform} spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                className={classes.headingaddform}
              >
                + Add Rules
              </Typography>
            </Grid>

            <Formik
              initialValues={data}
              onSubmit={(values) => {
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                //   console.log(JSON.stringify(values));
                // }, 500);

                console.log(JSON.stringify(values), "values");
                if (
                  values.language.categories.length === 0 ||
                  values.placeOfResidence.categories.length === 0 ||
                  values.wellbeing.categories.length === 0 ||
                  values.socialContact.categories.length === 0 ||
                  values.work.categories.length === 0 ||
                  values.training.categories.length === 0 ||
                  values.contribution.categories.length === 0 ||
                  values.society.categories.length === 0 ||
                  values.selfSustainability.categories.length === 0
                ) {
                  alert("Add atleast one category in all sections");
                } else {
                  const obj = {
                    language: {},
                    placeOfResidence: {},
                    wellbeing: {},
                    socialContact: {},
                    work: {},
                    training: {},
                    contribution: {},
                    society: {},
                    selfSustainability: {},
                  };

                  for (let key in values) {
                    if (key === "municipality") {
                      // console.log(key, values[key]);
                      console.log("municipality find", values[key]);
                    } else {
                      values[key].categories.forEach(function (item, index) {
                        console.log(item, index);
                        console.log(key, "key in array loop");
                        obj[key][item.categoryName] = item.value;
                        // obj.language[ "ok" ] = 30;
                      });
                      console.log(key, values[key].categories);
                      // console.log("in else",values[key])
                      // console.log(obj,"rules")
                    }
                  }

                  // obj.language[ "ok" ] = 30;
                  // console.log(obj,"rules")
                  console.log(JSON.stringify(obj));
                  let string = JSON.stringify(obj);
                  string = string.replace(/"/g, "'");
                  console.log(string, "rules");
                  dispatch(Actions.addNewRules(values.municipality.id, string));
                }
              }}
              validationSchema={validationSchema}
              render={({ values, setFieldValue, errors, touched }) => (
                <Form>
                  <Grid
                    container
                    item
                    sm={12}
                    spacing={1}
                    style={{ marginTop: "25px" }}
                  >
                    {/* <Grid item sm={12} md={12} xs={12}>
                      <pre>{JSON.stringify(errors, null, 2)}</pre>
                    </Grid> */}

                    <Grid item sm={2} md={2} xs={4} className={classes.lablem}>
                      Select Municipality
                    </Grid>
                    <Grid item sm={10} md={10} xs={8}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={
                          AllMunicipalities &&
                            AllMunicipalities.listMunicipalitiesWithoutRules &&
                            AllMunicipalities.listMunicipalitiesWithoutRules.municipalities
                            ? AllMunicipalities.listMunicipalitiesWithoutRules.municipalities
                            : []
                        }
                        getOptionLabel={(option) =>
                          option.name + " " + option.id
                        }
                        style={{
                          width: "100%",
                          margin: 0,
                          backgroundColor: "#daeff0",
                          height: "5px",
                          border: 0,
                        }}
                        loading={loading}
                        // underlineShow={false}
                        onChange={(event, newValue) => {
                          console.log(newValue, "newValue");
                          setFieldValue("municipality", newValue);
                        }}
                        // inputValue={inputValue}
                        // onInputChange={(event, newInputValue) => {
                        //   console.log(newInputValue, "newInputValue");
                        //   setInputValue(newInputValue);
                        // }}
                        //  InputProps={{
                        //       classes: {
                        //         input: classes.input1,
                        //         notchedOutline: classes.notchedOutline,
                        //       },
                        //     }}

                        // id="municipality"
                        // onChange={handleChange}
                        // value={values.municipality}
                        name="municipality"
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            name="municipality"
                            InputProps={{
                              ...params.InputProps,
                              endAdornment: (
                                <React.Fragment>
                                  {loading ? (
                                    <CircularProgress
                                      color="inherit"
                                      size={20}
                                    />
                                  ) : null}
                                  {params.InputProps.endAdornment}
                                </React.Fragment>
                              ),
                            }}
                          // InputProps={{
                          //   ...params.InputProps,
                          //   input: classes.input1,
                          //   notchedOutline: classes.notchedOutline,
                          // }}
                          // InputProps={{
                          //   classes: {
                          //     // input: classes.input1,
                          //     // notchedOutline: classes.notchedOutline,
                          //   },
                          // }}
                          />
                        )}
                      />

                      <br></br>
                      <br></br>
                      {errors && errors.municipality && (
                        <p className="error-input">{errors.municipality}</p>
                      )}
                    </Grid>
                    <Grid item sm={12} md={12} xs={12}>
                      <div
                        style={{
                          width: "100%",
                          height: "20px",
                          marginBottom: "5px",
                          borderBottom: "1px solid black",
                        }}
                      ></div>
                    </Grid>

                    {errors &&
                      errors.language && touched.language &&
                      typeof errors.language.categories === "string" && (
                        <Grid item sm={12} xs={12} md={12}>
                          <Alert severity="error">
                            {errors.language.categories}
                          </Alert>
                        </Grid>
                      )}
                    <Grid item sm={12} md={12} xs={12}>
                      <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Grid
                            item
                            sm={12}
                            md={12}
                            xs={12}
                            className={classes.formHeading}
                          >
                            Language
                    </Grid>
                        </AccordionSummary>
                        <AccordionDetails>

                          <FieldArray
                            name="language.categories"
                            render={(arrayHelpers) => (
                              <div style={{ width: "100%" }}>
                                {values.language.categories &&
                                  values.language.categories.length > 0 ? (
                                  values.language.categories.map(
                                    (categorie, index) => (
                                      <div style={{ width: "100%" }} key={index}>
                                        <Grid container item sm={12} spacing={1}>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            Category Name
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`language.categories.[${index}].categoryName`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.language &&
                                              errors.language.categories &&
                                              errors.language.categories[index] &&
                                              errors.language.categories[index]
                                                .categoryName && (
                                                <p className="error-input">
                                                  {
                                                    errors.language.categories[index]
                                                      .categoryName
                                                  }
                                                </p>
                                              )}
                                          </Grid>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            value
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`language.categories.[${index}].value`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.language &&
                                              errors.language.categories &&
                                              errors.language.categories[index] &&
                                              errors.language.categories[index].value &&
                                              (
                                                <p className="error-input">
                                                  {errors.language.categories[index].value}
                                                </p>
                                              )}
                                          </Grid>

                                          <Grid item sm={12} md={12} xs={12}>
                                            <ColorButton
                                              variant="contained"
                                              type="button"
                                              size="small"
                                              color="Primary"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              } // remove a friend from the list
                                            >
                                              -
                                      </ColorButton>
                                            <Button
                                              variant="contained"
                                              type="button"
                                              color="primary"
                                              size="small"
                                              onClick={() =>
                                                arrayHelpers.insert(index, {
                                                  categoryName: "",
                                                  value: "",
                                                })
                                              } // insert an empty string at a position
                                            >
                                              +
                                      </Button>
                                          </Grid>
                                          <Grid item sm={12} md={12} xs={12}>
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "20px",
                                                marginBottom: "5px",
                                                borderBottom: "1px solid black",
                                              }}
                                            ></div>
                                          </Grid>
                                        </Grid>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <Grid item sm={12} md={12} xs={12}>
                                    {/* <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    categoryName: "",
                                    value: "",
                                  })
                                }
                              >
                                
                                Add a Category
                              </button> */}
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      className={classes.buttonmenu}
                                      startIcon={<AddBoxRoundedIcon />}
                                      onClick={() =>
                                        arrayHelpers.push({
                                          categoryName: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Category
            </Button>
                                  </Grid>
                                )}
                              </div>
                            )}
                          />
                        </AccordionDetails>
                      </Accordion>
                    </Grid>

                    {errors &&
                      errors.placeOfResidence && touched.placeOfResidence &&
                      typeof errors.placeOfResidence.categories ===
                      "string" && (
                        <Grid item sm={12} xs={12}>
                          <Alert severity="error">
                            {errors.placeOfResidence.categories}
                          </Alert>
                        </Grid>
                      )}
                    <Grid item sm={12} md={12} xs={12}>
                      <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Grid
                            item
                            sm={12}
                            md={12}
                            xs={12}
                            className={classes.formHeading}
                          >
                            Place Of Residence
                    </Grid>
                        </AccordionSummary>
                        <AccordionDetails>

                          <FieldArray
                            name="placeOfResidence.categories"
                            render={(arrayHelpers) => (
                              <div style={{ width: "100%" }}>
                                {values.placeOfResidence.categories &&
                                  values.placeOfResidence.categories.length > 0 ? (
                                  values.placeOfResidence.categories.map(
                                    (categorie, index) => (
                                      <div style={{ width: "100%" }} key={index}>
                                        <Grid container item sm={12} spacing={1}>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            Category Name
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`placeOfResidence.categories.[${index}].categoryName`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.placeOfResidence &&
                                              errors.placeOfResidence.categories &&
                                              errors.placeOfResidence.categories[
                                              index
                                              ] &&
                                              errors.placeOfResidence.categories[
                                                index
                                              ].categoryName && (
                                                <p className="error-input">
                                                  {
                                                    errors.placeOfResidence
                                                      .categories[index].categoryName
                                                  }
                                                </p>
                                              )}
                                          </Grid>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            value
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`placeOfResidence.categories.[${index}].value`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.placeOfResidence &&
                                              errors.placeOfResidence.categories &&
                                              errors.placeOfResidence.categories[
                                              index
                                              ] &&
                                              errors.placeOfResidence.categories[
                                                index
                                              ].value && (
                                                <p className="error-input">
                                                  {
                                                    errors.placeOfResidence
                                                      .categories[index].value
                                                  }
                                                </p>
                                              )}
                                          </Grid>

                                          <Grid item sm={12} md={12} xs={12}>
                                            {/* <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        } // remove a friend from the list
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(index, {
                                            categoryName: "",
                                            value: "",
                                          })
                                        } 
                                      >
                                        +
                                      </button> */}
                                            <ColorButton
                                              variant="contained"
                                              type="button"
                                              size="small"
                                              color="Primary"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              } // remove a friend from the list
                                            >
                                              -
                                      </ColorButton>
                                            <Button
                                              variant="contained"
                                              type="button"
                                              color="primary"
                                              size="small"
                                              onClick={() =>
                                                arrayHelpers.insert(index, {
                                                  categoryName: "",
                                                  value: "",
                                                })
                                              } // insert an empty string at a position
                                            >
                                              +
                                      </Button>
                                          </Grid>
                                          <Grid item sm={12} md={12} xs={12}>
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "20px",
                                                marginBottom: "5px",
                                                borderBottom: "1px solid black",
                                              }}
                                            ></div>
                                          </Grid>
                                        </Grid>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <Grid item sm={12} md={12} xs={12}>
                                    {/* <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    categoryName: "",
                                    value: "",
                                  })
                                }
                              >
                                Add a Category
                              </button> */}
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      className={classes.buttonmenu}
                                      startIcon={<AddBoxRoundedIcon />}
                                      onClick={() =>
                                        arrayHelpers.push({
                                          categoryName: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Category
            </Button>
                                  </Grid>
                                )}
                              </div>
                            )}
                          />
                        </AccordionDetails>
                      </Accordion>

                    </Grid>



                    {errors &&
                      errors.wellbeing && touched.wellbeing &&
                      typeof errors.wellbeing.categories === "string" && (
                        <Grid item sm={12} xs={12}>
                          <Alert severity="error">
                            {errors.wellbeing.categories}
                          </Alert>
                        </Grid>
                      )}
                    <Grid item sm={12} md={12} xs={12}>
                      <Accordion expanded={expanded === 'panel3'} onChange={handleChangeAccordion('panel3')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3bh-content"
                          id="panel3bh-header"
                        >
                          <Grid
                            item
                            sm={12}
                            md={12}
                            xs={12}
                            className={classes.formHeading}
                          >
                            Wellbeing
                    </Grid>
                        </AccordionSummary>
                        <AccordionDetails>

                          <FieldArray
                            name="wellbeing.categories"
                            render={(arrayHelpers) => (
                              <div style={{ width: "100%" }}>
                                {values.wellbeing.categories &&
                                  values.wellbeing.categories.length > 0 ? (
                                  values.wellbeing.categories.map(
                                    (categorie, index) => (
                                      <div style={{ width: "100%" }} key={index}>
                                        <Grid container item sm={12} spacing={1}>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            Category Name
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`wellbeing.categories.[${index}].categoryName`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.wellbeing &&
                                              errors.wellbeing.categories &&
                                              errors.wellbeing.categories[index] &&
                                              errors.wellbeing.categories[index]
                                                .categoryName && (
                                                <p className="error-input">
                                                  {
                                                    errors.wellbeing.categories[index]
                                                      .categoryName
                                                  }
                                                </p>
                                              )}
                                          </Grid>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            value
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`wellbeing.categories.[${index}].value`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.wellbeing &&
                                              errors.wellbeing.categories &&
                                              errors.wellbeing.categories[index] &&
                                              errors.wellbeing.categories[index]
                                                .value && (
                                                <p className="error-input">
                                                  {
                                                    errors.wellbeing.categories[index]
                                                      .value
                                                  }
                                                </p>
                                              )}
                                          </Grid>

                                          <Grid item sm={12} md={12} xs={12}>
                                            {/* <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        } // remove a friend from the list
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(index, {
                                            categoryName: "",
                                            value: "",
                                          })
                                        } // insert an empty string at a position
                                      >
                                        +
                                      </button> */}
                                            <ColorButton
                                              variant="contained"
                                              type="button"
                                              size="small"
                                              color="Primary"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              } // remove a friend from the list
                                            >
                                              -
                                      </ColorButton>
                                            <Button
                                              variant="contained"
                                              type="button"
                                              color="primary"
                                              size="small"
                                              onClick={() =>
                                                arrayHelpers.insert(index, {
                                                  categoryName: "",
                                                  value: "",
                                                })
                                              } // insert an empty string at a position
                                            >
                                              +
                                      </Button>
                                          </Grid>
                                          <Grid item sm={12} md={12} xs={12}>
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "20px",
                                                marginBottom: "5px",
                                                borderBottom: "1px solid black",
                                              }}
                                            ></div>
                                          </Grid>
                                        </Grid>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <Grid item sm={12} md={12} xs={12}>
                                    {/* <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    categoryName: "",
                                    value: "",
                                  })
                                }
                              >
                                
                                Add a Category
                              </button> */}
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      className={classes.buttonmenu}
                                      startIcon={<AddBoxRoundedIcon />}
                                      onClick={() =>
                                        arrayHelpers.push({
                                          categoryName: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Category
            </Button>
                                  </Grid>
                                )}
                              </div>
                            )}
                          />
                        </AccordionDetails>
                      </Accordion>

                    </Grid>

                    {errors &&
                      errors.socialContact && touched.socialContact &&
                      typeof errors.socialContact.categories === "string" && (
                        <Grid item sm={12} xs={12}>
                          <Alert severity="error">
                            {errors.socialContact.categories}
                          </Alert>
                        </Grid>
                      )}
                    <Grid item sm={12} md={12} xs={12}>
                      <Accordion expanded={expanded === 'panel4'} onChange={handleChangeAccordion('panel4')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel4bh-content"
                          id="panel4bh-header"
                        >
                          <Grid
                            item
                            sm={12}
                            md={12}
                            xs={12}
                            className={classes.formHeading}
                          >
                            Social Contact
                    </Grid>
                        </AccordionSummary>
                        <AccordionDetails>

                          <FieldArray
                            name="socialContact.categories"
                            render={(arrayHelpers) => (
                              <div style={{ width: "100%" }}>
                                {values.socialContact.categories &&
                                  values.socialContact.categories.length > 0 ? (
                                  values.socialContact.categories.map(
                                    (categorie, index) => (
                                      <div style={{ width: "100%" }} key={index}>
                                        <Grid container item sm={12} spacing={1}>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            Category Name
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`socialContact.categories.[${index}].categoryName`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.socialContact &&
                                              errors.socialContact.categories &&
                                              errors.socialContact.categories[
                                              index
                                              ] &&
                                              errors.socialContact.categories[index]
                                                .categoryName && (
                                                <p className="error-input">
                                                  {
                                                    errors.socialContact.categories[
                                                      index
                                                    ].categoryName
                                                  }
                                                </p>
                                              )}
                                          </Grid>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            value
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`socialContact.categories.[${index}].value`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.socialContact &&
                                              errors.socialContact.categories &&
                                              errors.socialContact.categories[
                                              index
                                              ] &&
                                              errors.socialContact.categories[index]
                                                .value && (
                                                <p className="error-input">
                                                  {
                                                    errors.socialContact.categories[
                                                      index
                                                    ].value
                                                  }
                                                </p>
                                              )}
                                          </Grid>

                                          <Grid item sm={12} md={12} xs={12}>
                                            {/* <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        } // remove a friend from the list
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(index, {
                                            categoryName: "",
                                            value: "",
                                          })
                                        } // insert an empty string at a position
                                      >
                                        +
                                      </button> */}
                                            <ColorButton
                                              variant="contained"
                                              type="button"
                                              size="small"
                                              color="Primary"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              } // remove a friend from the list
                                            >
                                              -
                                      </ColorButton>
                                            <Button
                                              variant="contained"
                                              type="button"
                                              color="primary"
                                              size="small"
                                              onClick={() =>
                                                arrayHelpers.insert(index, {
                                                  categoryName: "",
                                                  value: "",
                                                })
                                              } // insert an empty string at a position
                                            >
                                              +
                                      </Button>
                                          </Grid>
                                          <Grid item sm={12} md={12} xs={12}>
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "20px",
                                                marginBottom: "5px",
                                                borderBottom: "1px solid black",
                                              }}
                                            ></div>
                                          </Grid>
                                        </Grid>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <Grid item sm={12} md={12} xs={12}>
                                    {/* <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    categoryName: "",
                                    value: "",
                                  })
                                }
                              >
                                
                                Add a Category
                              </button> */}
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      className={classes.buttonmenu}
                                      startIcon={<AddBoxRoundedIcon />}
                                      onClick={() =>
                                        arrayHelpers.push({
                                          categoryName: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Category
            </Button>
                                  </Grid>
                                )}
                              </div>
                            )}
                          />
                        </AccordionDetails>
                      </Accordion>

                    </Grid>

                    {errors &&
                      errors.work && touched.work &&
                      typeof errors.work.categories === "string" && (
                        <Grid item sm={12} xs={12}>
                          <Alert severity="error">
                            {errors.work.categories}
                          </Alert>
                        </Grid>
                      )}
                    <Grid item sm={12} md={12} xs={12}>
                      <Accordion expanded={expanded === 'panel5'} onChange={handleChangeAccordion('panel5')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel5bh-content"
                          id="panel5bh-header"
                        >
                          <Grid
                            item
                            sm={12}
                            md={12}
                            xs={12}
                            className={classes.formHeading}
                          >
                            Work
                    </Grid>
                        </AccordionSummary>
                        <AccordionDetails>

                          <FieldArray
                            name="work.categories"
                            render={(arrayHelpers) => (
                              <div style={{ width: "100%" }}>
                                {values.work.categories &&
                                  values.work.categories.length > 0 ? (
                                  values.work.categories.map((categorie, index) => (
                                    <div style={{ width: "100%" }} key={index}>
                                      <Grid container item sm={12} spacing={1}>
                                        <Grid
                                          item
                                          sm={2}
                                          md={2}
                                          xs={4}
                                          className={classes.lable}
                                        >
                                          Category Name
                                  </Grid>
                                        <Grid item sm={10} md={10} xs={8}>
                                          <Field
                                            name={`work.categories.[${index}].categoryName`}
                                            className={classes.textFieldformik}
                                          />
                                          {errors.work &&
                                            errors.work.categories &&
                                            errors.work.categories[index] &&
                                            errors.work.categories[index]
                                              .categoryName && (
                                              <p className="error-input">
                                                {
                                                  errors.work.categories[index]
                                                    .categoryName
                                                }
                                              </p>
                                            )}
                                        </Grid>
                                        <Grid
                                          item
                                          sm={2}
                                          md={2}
                                          xs={4}
                                          className={classes.lable}
                                        >
                                          value
                                  </Grid>
                                        <Grid item sm={10} md={10} xs={8}>
                                          <Field
                                            name={`work.categories.[${index}].value`}
                                            className={classes.textFieldformik}
                                          />
                                          {errors.work &&
                                            errors.work.categories &&
                                            errors.work.categories[index] &&
                                            errors.work.categories[index].value && (
                                              <p className="error-input">
                                                {errors.work.categories[index].value}
                                              </p>
                                            )}
                                        </Grid>

                                        <Grid item sm={12} md={12} xs={12}>
                                          {/* <button
                                      type="button"
                                      onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                    >
                                      -
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        arrayHelpers.insert(index, {
                                          categoryName: "",
                                          value: "",
                                        })
                                      } // insert an empty string at a position
                                    >
                                      +
                                    </button> */}
                                          <ColorButton
                                            variant="contained"
                                            type="button"
                                            size="small"
                                            color="Primary"
                                            onClick={() =>
                                              arrayHelpers.remove(index)
                                            } // remove a friend from the list
                                          >
                                            -
                                      </ColorButton>
                                          <Button
                                            variant="contained"
                                            type="button"
                                            color="primary"
                                            size="small"
                                            onClick={() =>
                                              arrayHelpers.insert(index, {
                                                categoryName: "",
                                                value: "",
                                              })
                                            } // insert an empty string at a position
                                          >
                                            +
                                      </Button>
                                        </Grid>
                                        <Grid item sm={12} md={12} xs={12}>
                                          <div
                                            style={{
                                              width: "100%",
                                              height: "20px",
                                              marginBottom: "5px",
                                              borderBottom: "1px solid black",
                                            }}
                                          ></div>
                                        </Grid>
                                      </Grid>
                                    </div>
                                  ))
                                ) : (
                                  <Grid item sm={12} md={12} xs={12}>
                                    {/* <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    categoryName: "",
                                    value: "",
                                  })
                                }
                              >
                                
                                Add a Category
                              </button> */}
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      className={classes.buttonmenu}
                                      startIcon={<AddBoxRoundedIcon />}
                                      onClick={() =>
                                        arrayHelpers.push({
                                          categoryName: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Category
            </Button>
                                  </Grid>
                                )}
                              </div>
                            )}
                          />
                        </AccordionDetails>
                      </Accordion>

                    </Grid>

                    {errors &&
                      errors.training && touched.training &&
                      typeof errors.training.categories === "string" && (
                        <Grid item sm={12} xs={12}>
                          <Alert severity="error">
                            {errors.training.categories}
                          </Alert>
                        </Grid>
                      )}
                    <Grid item sm={12} md={12} xs={12}>
                      <Accordion expanded={expanded === 'panel6'} onChange={handleChangeAccordion('panel6')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel6bh-content"
                          id="panel6bh-header"
                        >
                          <Grid
                            item
                            sm={12}
                            md={12}
                            xs={12}
                            className={classes.formHeading}
                          >
                            Training
                    </Grid>
                        </AccordionSummary>
                        <AccordionDetails>

                          <FieldArray
                            name="training.categories"
                            render={(arrayHelpers) => (
                              <div style={{ width: "100%" }}>
                                {values.training.categories &&
                                  values.training.categories.length > 0 ? (
                                  values.training.categories.map(
                                    (categorie, index) => (
                                      <div style={{ width: "100%" }} key={index}>
                                        <Grid container item sm={12} spacing={1}>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            Category Name
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`training.categories.[${index}].categoryName`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.training &&
                                              errors.training.categories &&
                                              errors.training.categories[index] &&
                                              errors.training.categories[index]
                                                .categoryName && (
                                                <p className="error-input">
                                                  {
                                                    errors.training.categories[index]
                                                      .categoryName
                                                  }
                                                </p>
                                              )}
                                          </Grid>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            value
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`training.categories.[${index}].value`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.training &&
                                              errors.training.categories &&
                                              errors.training.categories[index] &&
                                              errors.training.categories[index]
                                                .value && (
                                                <p className="error-input">
                                                  {
                                                    errors.training.categories[index]
                                                      .value
                                                  }
                                                </p>
                                              )}
                                          </Grid>

                                          <Grid item sm={12} md={12} xs={12}>
                                            {/* <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        } // remove a friend from the list
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(index, {
                                            categoryName: "",
                                            value: "",
                                          })
                                        } // insert an empty string at a position
                                      >
                                        +
                                      </button> */}
                                            <ColorButton
                                              variant="contained"
                                              type="button"
                                              size="small"
                                              color="Primary"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              } // remove a friend from the list
                                            >
                                              -
                                      </ColorButton>
                                            <Button
                                              variant="contained"
                                              type="button"
                                              color="primary"
                                              size="small"
                                              onClick={() =>
                                                arrayHelpers.insert(index, {
                                                  categoryName: "",
                                                  value: "",
                                                })
                                              } // insert an empty string at a position
                                            >
                                              +
                                      </Button>
                                          </Grid>
                                          <Grid item sm={12} md={12} xs={12}>
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "20px",
                                                marginBottom: "5px",
                                                borderBottom: "1px solid black",
                                              }}
                                            ></div>
                                          </Grid>
                                        </Grid>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <Grid item sm={12} md={12} xs={12}>
                                    {/* <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    categoryName: "",
                                    value: "",
                                  })
                                }
                              >
                                
                                Add a Category
                              </button> */}
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      className={classes.buttonmenu}
                                      startIcon={<AddBoxRoundedIcon />}
                                      onClick={() =>
                                        arrayHelpers.push({
                                          categoryName: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Category
            </Button>
                                  </Grid>
                                )}
                              </div>
                            )}
                          />
                        </AccordionDetails>
                      </Accordion>

                    </Grid>


                    {errors &&
                      errors.contribution && touched.contribution &&
                      typeof errors.contribution.categories === "string" && (
                        <Grid item sm={12} xs={12}>
                          <Alert severity="error">
                            {errors.contribution.categories}
                          </Alert>
                        </Grid>
                      )}
                    <Grid item sm={12} md={12} xs={12}>
                      <Accordion expanded={expanded === 'panel7'} onChange={handleChangeAccordion('panel7')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel7bh-content"
                          id="panel7bh-header"
                        >
                          <Grid
                            item
                            sm={12}
                            md={12}
                            xs={12}
                            className={classes.formHeading}
                          >
                            Contribution
                    </Grid>
                        </AccordionSummary>
                        <AccordionDetails>

                          <FieldArray
                            name="contribution.categories"
                            render={(arrayHelpers) => (
                              <div style={{ width: "100%" }}>
                                {values.contribution.categories &&
                                  values.contribution.categories.length > 0 ? (
                                  values.contribution.categories.map(
                                    (categorie, index) => (
                                      <div style={{ width: "100%" }} key={index}>
                                        <Grid container item sm={12} spacing={1}>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            Category Name
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`contribution.categories.[${index}].categoryName`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.contribution &&
                                              errors.contribution.categories &&
                                              errors.contribution.categories[index] &&
                                              errors.contribution.categories[index]
                                                .categoryName && (
                                                <p className="error-input">
                                                  {
                                                    errors.contribution.categories[
                                                      index
                                                    ].categoryName
                                                  }
                                                </p>
                                              )}
                                          </Grid>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            value
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`contribution.categories.[${index}].value`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.contribution &&
                                              errors.contribution.categories &&
                                              errors.contribution.categories[index] &&
                                              errors.contribution.categories[index]
                                                .value && (
                                                <p className="error-input">
                                                  {
                                                    errors.contribution.categories[
                                                      index
                                                    ].value
                                                  }
                                                </p>
                                              )}
                                          </Grid>

                                          <Grid item sm={12} md={12} xs={12}>
                                            {/* <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        } // remove a friend from the list
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(index, {
                                            categoryName: "",
                                            value: "",
                                          })
                                        } // insert an empty string at a position
                                      >
                                        +
                                      </button> */}
                                            <ColorButton
                                              variant="contained"
                                              type="button"
                                              size="small"
                                              color="Primary"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              } // remove a friend from the list
                                            >
                                              -
                                      </ColorButton>
                                            <Button
                                              variant="contained"
                                              type="button"
                                              color="primary"
                                              size="small"
                                              onClick={() =>
                                                arrayHelpers.insert(index, {
                                                  categoryName: "",
                                                  value: "",
                                                })
                                              } // insert an empty string at a position
                                            >
                                              +
                                      </Button>
                                          </Grid>
                                          <Grid item sm={12} md={12} xs={12}>
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "20px",
                                                marginBottom: "5px",
                                                borderBottom: "1px solid black",
                                              }}
                                            ></div>
                                          </Grid>
                                        </Grid>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <Grid item sm={12} md={12} xs={12}>
                                    {/* <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    categoryName: "",
                                    value: "",
                                  })
                                }
                              >
                               
                                Add a Category
                              </button> */}
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      className={classes.buttonmenu}
                                      startIcon={<AddBoxRoundedIcon />}
                                      onClick={() =>
                                        arrayHelpers.push({
                                          categoryName: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Category
            </Button>
                                  </Grid>
                                )}
                              </div>
                            )}
                          />
                        </AccordionDetails>
                      </Accordion>

                    </Grid>

                    {errors &&
                      errors.society && touched.society &&
                      typeof errors.society.categories === "string" && (
                        <Grid item sm={12} xs={12}>
                          <Alert severity="error">
                            {errors.society.categories}
                          </Alert>
                        </Grid>
                      )}
                    <Grid item sm={12} md={12} xs={12}>
                      <Accordion expanded={expanded === 'panel8'} onChange={handleChangeAccordion('panel8')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel8bh-content"
                          id="panel8bh-header"
                        >
                          <Grid
                            item
                            sm={12}
                            md={12}
                            xs={12}
                            className={classes.formHeading}
                          >
                            Society
                    </Grid>
                        </AccordionSummary>
                        <AccordionDetails>

                          <FieldArray
                            name="society.categories"
                            render={(arrayHelpers) => (
                              <div style={{ width: "100%" }}>
                                {values.society.categories &&
                                  values.society.categories.length > 0 ? (
                                  values.society.categories.map(
                                    (categorie, index) => (
                                      <div style={{ width: "100%" }} key={index}>
                                        <Grid container item sm={12} spacing={1}>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            Category Name
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`society.categories.[${index}].categoryName`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.society &&
                                              errors.society.categories &&
                                              errors.society.categories[index] &&
                                              errors.society.categories[index]
                                                .categoryName && (
                                                <p className="error-input">
                                                  {
                                                    errors.society.categories[index]
                                                      .categoryName
                                                  }
                                                </p>
                                              )}
                                          </Grid>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            value
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`society.categories.[${index}].value`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.society &&
                                              errors.society.categories &&
                                              errors.society.categories[index] &&
                                              errors.society.categories[index]
                                                .value && (
                                                <p className="error-input">
                                                  {
                                                    errors.society.categories[index]
                                                      .value
                                                  }
                                                </p>
                                              )}
                                          </Grid>

                                          <Grid item sm={12} md={12} xs={12}>
                                            {/* <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        } // remove a friend from the list
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(index, {
                                            categoryName: "",
                                            value: "",
                                          })
                                        } // insert an empty string at a position
                                      >
                                        +
                                      </button> */}
                                            <ColorButton
                                              variant="contained"
                                              type="button"
                                              size="small"
                                              color="Primary"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              } // remove a friend from the list
                                            >
                                              -
                                      </ColorButton>
                                            <Button
                                              variant="contained"
                                              type="button"
                                              color="primary"
                                              size="small"
                                              onClick={() =>
                                                arrayHelpers.insert(index, {
                                                  categoryName: "",
                                                  value: "",
                                                })
                                              } // insert an empty string at a position
                                            >
                                              +
                                      </Button>
                                          </Grid>
                                          <Grid item sm={12} md={12} xs={12}>
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "20px",
                                                marginBottom: "5px",
                                                borderBottom: "1px solid black",
                                              }}
                                            ></div>
                                          </Grid>
                                        </Grid>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <Grid item sm={12} md={12} xs={12}>
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      className={classes.buttonmenu}
                                      startIcon={<AddBoxRoundedIcon />}
                                      onClick={() =>
                                        arrayHelpers.push({
                                          categoryName: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Category
            </Button>
                                  </Grid>
                                )}
                              </div>
                            )}
                          />
                        </AccordionDetails>
                      </Accordion>

                    </Grid>

                    {errors &&
                      errors.selfSustainability && touched.selfSustainability &&
                      typeof errors.selfSustainability.categories ===
                      "string" && (
                        <Grid item sm={12} xs={12}>
                          <Alert severity="error">
                            {errors.selfSustainability.categories}
                          </Alert>
                        </Grid>
                      )}
                    <Grid item sm={12} md={12} xs={12}>
                      <Accordion expanded={expanded === 'panel9'} onChange={handleChangeAccordion('panel9')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel9bh-content"
                          id="panel9bh-header"
                        >
                          <Grid
                            item
                            sm={12}
                            md={12}
                            xs={12}
                            className={classes.formHeading}
                          >
                            Self Sustainability
                    </Grid>
                        </AccordionSummary>
                        <AccordionDetails>


                          <FieldArray
                            name="selfSustainability.categories"
                            render={(arrayHelpers) => (
                              <div style={{ width: "100%" }}>
                                {values.selfSustainability.categories &&
                                  values.selfSustainability.categories.length > 0 ? (
                                  values.selfSustainability.categories.map(
                                    (categorie, index) => (
                                      <div style={{ width: "100%" }} key={index}>
                                        <Grid container item sm={12} spacing={1}>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            Category Name
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`selfSustainability.categories.[${index}].categoryName`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.selfSustainability &&
                                              errors.selfSustainability.categories &&
                                              errors.selfSustainability.categories[
                                              index
                                              ] &&
                                              errors.selfSustainability.categories[
                                                index
                                              ].categoryName && (
                                                <p className="error-input">
                                                  {
                                                    errors.selfSustainability.categories[index]
                                                      .categoryName
                                                  }
                                                </p>
                                              )}
                                          </Grid>
                                          <Grid
                                            item
                                            sm={2}
                                            md={2}
                                            xs={4}
                                            className={classes.lable}
                                          >
                                            value
                                    </Grid>
                                          <Grid item sm={10} md={10} xs={8}>
                                            <Field
                                              name={`selfSustainability.categories.[${index}].value`}
                                              className={classes.textFieldformik}
                                            />
                                            {errors.selfSustainability &&
                                              errors.selfSustainability.categories &&
                                              errors.selfSustainability.categories[
                                              index
                                              ] &&
                                              errors.selfSustainability.categories[
                                                index
                                              ].value && (
                                                <p className="error-input">
                                                  {
                                                    errors.selfSustainability.categories[index]
                                                      .value
                                                  }
                                                </p>
                                              )}
                                          </Grid>

                                          <Grid item sm={12} md={12} xs={12}>
                                            {/* <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        } // remove a friend from the list
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(index, {
                                            categoryName: "",
                                            value: "",
                                          })
                                        } // insert an empty string at a position
                                      >
                                        +
                                      </button> */}
                                            <ColorButton
                                              variant="contained"
                                              type="button"
                                              size="small"
                                              color="Primary"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              } // remove a friend from the list
                                            >
                                              -
                                      </ColorButton>
                                            <Button
                                              variant="contained"
                                              type="button"
                                              color="primary"
                                              size="small"
                                              onClick={() =>
                                                arrayHelpers.insert(index, {
                                                  categoryName: "",
                                                  value: "",
                                                })
                                              } // insert an empty string at a position
                                            >
                                              +
                                      </Button>
                                          </Grid>
                                          <Grid item sm={12} md={12} xs={12}>
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "20px",
                                                marginBottom: "5px",
                                                borderBottom: "1px solid black",
                                              }}
                                            ></div>
                                          </Grid>
                                        </Grid>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <Grid item sm={12} md={12} xs={12}>
                                    {/* <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    categoryName: "",
                                    value: "",
                                  })
                                }
                              >
                               
                                Add a Category
                              </button> */}
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      className={classes.buttonmenu}
                                      startIcon={<AddBoxRoundedIcon />}
                                      onClick={() =>
                                        arrayHelpers.push({
                                          categoryName: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Category
            </Button>
                                  </Grid>
                                )}
                              </div>
                            )}
                          />
                        </AccordionDetails>
                      </Accordion>

                    </Grid>


                    {add_confirmation.errMsg && (
                      <Grid item sm={12} xs={12}>
                        <Alert severity="error">{add_confirmation.errMsg}</Alert>
                      </Grid>
                    )}
                    {add_confirmation.isLoading && (
                      <Grid item sm={12} xs={12}>
                        Loading.......
                      </Grid>
                    )}
                    <Grid item sm={2} xs={4}></Grid>
                    <Grid item sm={10} xs={8}>
                      {/* {errors.municipality ? (
                    <p className="error-input">{JSON.stringify(errors.municipality)}</p>
                  ) : (
                    false
                  )} */}
                    </Grid>
                    <Grid item sm={12} xs={12} className={classes.cornerbtn}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.cornerbtn1}
                      >
                        Add Rules
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            />
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default withReducer("Addrules", reducer)(Addrules);

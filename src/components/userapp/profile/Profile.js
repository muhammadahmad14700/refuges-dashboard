import React, { useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import * as yup from "yup";
import profile_icon from "../../../assets/images/profile-icon-png.png"
import { useTranslation } from 'react-i18next';

// store
import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../store/withReducer";
import * as Actions from "./store/actions";
const { useMutation } = require("@apollo/react-hooks");
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
    lineHeight: "140%"
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
const MUTATION = gql`
  mutation(
    $profileImage: Upload!
    $firstName: String!
    $lastName: String!
  ) {
    updateProfile(
      input: {
        profileImage: $profileImage
        firstName: $firstName
        lastName: $lastName
      }
    )
    {
        _id
    }
  }
`;
function Profile(props) {
  const [t] = useTranslation();
  const onError = useCallback(() => console.log("Error callback fired!"), []);
  const [mutate, { loading, error, data }] = useMutation(MUTATION, { onError });
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();
  React.useEffect(() => {
    if (data) {
      dispatch(Actions.getAdminProfile());
      alert(t("Updated Successfully"));
    }
  }, [data, dispatch]);

  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(profile_icon);
  const [loadingi, setLoading] = React.useState(false);
  const FILE_SIZE = 2048000;
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  React.useEffect(() => {
    dispatch(Actions.getAdminProfile());
  }, [dispatch]);
  const profile_data = useSelector(
    ({ Profile }) => Profile.adminProfileReducer.data
  );
  const loadingg = useSelector(
    ({ Profile }) => Profile.adminProfileReducer.isLoading
  );

  const errMsg = useSelector(
    ({ Profile }) => Profile.adminProfileReducer.errMsg
  );
  React.useEffect(() => {
    if (profile_data && profile_data.getProfile && profile_data.getProfile.profileImageUrl) {
      setImagePreviewUrl(profile_data.getProfile.profileImageUrl);
    }
  }, [profile_data]);
  const validationSchema = yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    profile_image: yup
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
  const {
    handleSubmit,
    setFieldValue,
    handleChange,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      first_name: (profile_data && profile_data.getProfile && profile_data.getProfile.firstName) ? profile_data.getProfile.firstName : "",
      last_name: (profile_data && profile_data.getProfile && profile_data.getProfile.lastName) ? profile_data.getProfile.lastName : "",
      phone_no: (profile_data && profile_data.getProfile && profile_data.getProfile.phoneNumber) ? profile_data.getProfile.phoneNumber : "",
      email: (profile_data && profile_data.getProfile && profile_data.getProfile.email) ? profile_data.getProfile.email : "",
      profile_image: ""
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      try {
        mutate({
          variables: {
            profileImage: values.profile_image,
            firstName: values.first_name,
            lastName: values.last_name
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  });
  React.useEffect(() => {
    if (values.profile_image) {
      setLoading(true);
      let reader = new FileReader();

      reader.onloadend = () => {
        setLoading(false);
        setImagePreviewUrl(reader.result);
      };

      reader.readAsDataURL(values.profile_image);
    }
  }, [values.profile_image]);
  return (
    <div className="main">
      <div className="bgforform">
        <Container maxWidth="md">
          <Grid container className={classes.conform} spacing={3}>
            <Grid item sm={12} xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                className={classes.headingaddform}
              >
                + {t("Update Profile")}
              </Typography>
            </Grid>

            <form onSubmit={handleSubmit} id="form_test">
              <Grid
                container
                item
                sm={12}
                spacing={1}
                style={{ marginTop: "25px" }}
              >
                <Grid item sm={12}>
                  <div className="card">
                    <label htmlFor="photo-upload" className="custom-file-upload fas">
                      <div className="img-wrap img-upload" >
                        <img for="photo-upload" className="img-up" src={imagePreviewUrl} />
                      </div>
                      <input id="photo-upload" className="inputfile" type="file"
                        accept="image/*"
                        onChange={(event) => {
                          setFieldValue("profile_image", event.currentTarget.files[0]);
                        }}
                      />
                    </label>
                    {errors.profile_image && touched.profile_image ? (
                      <p className="error-input">{errors.profile_image}</p>
                    ) : (
                      false
                    )}
                  </div>
                </Grid>
                {loading && (
                  <Grid item sm={12} xs={12}>
                    Loading.......
                  </Grid>
                )}
                <Grid item sm={2} xs={4} className={classes.lable}>
                  {t("First Name")}
                </Grid>
                <Grid item sm={10} xs={8}>
                  <TextField
                    id="first_name"
                    onChange={handleChange}
                    value={values.first_name}
                    name="first_name"
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
                    error={errors.first_name ? true : false}
                  />
                  {errors.first_name && touched.first_name ? (
                    <p className="error-input">{errors.first_name}</p>
                  ) : (
                    false
                  )}
                </Grid>
                <Grid item sm={2} xs={4} className={classes.lable}>
                  {t("Last Name")}
                </Grid>
                <Grid item sm={10} xs={8}>
                  <TextField
                    id="last_name"
                    onChange={handleChange}
                    value={values.last_name}
                    name="last_name"
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
                    error={errors.last_name ? true : false}
                  />
                  {errors.last_name && touched.last_name ? (
                    <p className="error-input">{errors.last_name}</p>
                  ) : (
                    false
                  )}
                </Grid>
                <Grid item sm={2} xs={4} className={classes.lable}>
                  {t("Phone No")}.
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
                    disabled
                  />
                  {errors.phone_no && touched.phone_no ? (
                    <p className="error-input">{errors.phone_no}</p>
                  ) : (
                    false
                  )}
                </Grid>
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
                    error={errors.email ? true : false}
                    disabled
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
                    {t("Update Profile")}
                  </Button>
                </Grid>

              </Grid>
            </form>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default withReducer("Profile", reducer)(Profile);

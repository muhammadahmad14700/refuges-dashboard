import React, { useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import * as yup from "yup";
import profile_icon from "../../../../assets/images/profile-icon-png.png"
import SuccessDialog from "../../../shared/SuccessDialog";
import { useTranslation } from 'react-i18next';

// store
import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../../store/withReducer";
import * as Actions from "./store/actions";
import ClearIcon from '@material-ui/icons/Clear';
const { useMutation } = require("@apollo/react-hooks");
const useStyles = makeStyles((theme) => ({
  conform: {
    padding: "5px 30px 40px 30px",
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
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#93C7D2",

    // height:"2%px",
    // padding: 0
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
  }
`;
function Profile(props) {
  const [t] = useTranslation();
  const onError = useCallback(() => console.log("Error callback fired!"), []);
  const [mutate, { loading, error, data }] = useMutation(MUTATION, { onError });
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();
  const [successOpen, setSuccessOpen] = React.useState(false);
  React.useEffect(() => {
    dispatch(Actions.resetupdateProfile(true));
  }, []);
  const update_confirmation = useSelector(
    ({ Profile }) => Profile.UpdateProfileReducer
  );
  React.useEffect(() => {
    if (update_confirmation.data && update_confirmation.data.data && update_confirmation.data.data.updateProfile) {
      dispatch(Actions.resetupdateProfile(true));
      dispatch(Actions.getAdminProfile());
      handleClickSuccessDialogopen();
    }
  }, [update_confirmation]);
  React.useEffect(() => {
    if (data) {
      dispatch(Actions.getAdminProfile());
      alert(t("Updated Successfully"));
    }
  }, [data, dispatch]);

  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(profile_icon);
  const [image, setImage] = React.useState('');
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
    if (profile_data && profile_data.getManagerProfile && profile_data.getManagerProfile.profileImageUrl) {
      setImagePreviewUrl(profile_data.getManagerProfile.profileImageUrl);
    }
  }, [profile_data]);
  const validationSchema = yup.object({
    first_name: yup.string().required(),
    // last_name: yup.string().required(),
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
      first_name: (profile_data && profile_data.getManagerProfile && profile_data.getManagerProfile.name) ? profile_data.getManagerProfile.name : "",
      last_name: (profile_data && profile_data.getManagerProfile && profile_data.getManagerProfile.lastName) ? profile_data.getManagerProfile.lastName : "",
      phone_no: (profile_data && profile_data.getManagerProfile && profile_data.getManagerProfile.phoneNumber) ? profile_data.getManagerProfile.phoneNumber : "",
      email: (profile_data && profile_data.getManagerProfile && profile_data.getManagerProfile.email) ? profile_data.getManagerProfile.email : "",
      profile_image: ""
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      dispatch(Actions.updateProfile(values));
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
  const handleNavigateToDashboard = () => {
    sessionStorage.clear();
    history.push("/managerdashboard");
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
          msg={t("Profile Updated Successfully")}
        />
      )}
      <div className="bgforform">
        <Container maxWidth="md" className={classes.roorCon}>
          <div className="create-user-main-div">
            <div className="create-user-title-div">
              <p className="create-user-title">{t("Edit Profile Details")}</p>
              <ClearIcon className={classes.crossIcon} onClick={() => handleNavigateToDashboard()} />
            </div>
            <p className="create-user-required-text">{t("Please enter the required information")}</p>


            <form onSubmit={handleSubmit} id="form_test">
              <Grid
                container spacing={2} className={classes.con}
              >
                <Grid item sm={12} xs={12}>
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
                {update_confirmation.errMsg && (
                  <Grid item sm={12} xs={12}>
                    <Alert severity="error">{t(update_confirmation.errMsg)}</Alert>
                  </Grid>
                )}
                <Grid item sm={2} xs={4}>
                  <p className="create-user-label-text">{t("Name")}</p>

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
                <Grid item sm={2} xs={4}>
                  <p className="create-user-label-text">{t("Telephone")}</p>

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

export default withReducer("Profile", reducer)(Profile);

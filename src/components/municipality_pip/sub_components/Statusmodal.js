import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next';

import Alert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import * as yup from "yup";

// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../store/withReducer";
import * as Actions from "../store/actions";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "black",
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);



const useStyles = makeStyles((theme) => ({
  root1: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  rootStyle: {
    borderRadius: 15,
    backgroundColor: "white",
    padding: "35px",
  },
  headingaddform: {
    color: "black",
    fontFamily: "opensans-regular",
    fontSize: "10pt",
  },
  headingaddform1: {
    color: "black",
    fontFamily: "opensans-bold",
    fontSize: "11pt",
    borderBottom: "1px solid #8fcccd",
    width: "270px",
    paddingBottom: "2px",
    [theme.breakpoints.down('sm')]: {
      width: "auto",
    },
  },
  dividerColor: {
    marginTop: "45px",
    backgroundColor: "black",
  },
  textField: {
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",
  },
  textField1: {
    width: "15%",
    margin: 0,
    backgroundColor: "#daeff0",
  },
  input1: {
    height: "5px",
    border: 0,
  },
  notchedOutline: {
    borderWidth: "0px",
  },
  lable: {
    fontStyle: "italic",
    textAlign: "left",
  },
  cornerbtn: {
    textAlign: "right",
  },
  cornerbtn1: {
    margin: theme.spacing(1),

    backgroundColor: "#454a92",
    width: "160px",
    opacity: 1,
    fontFamily: "opensans-semibold",
    fontSize: "11pt",
    textTransform: "none",
  },
}));

function Statusmodal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [editclick, setEditclick] = React.useState(false);
  const [oldextraattribute, setOldextraattribute] = React.useState("");
  React.useEffect(() => {
    dispatch(Actions.getExtraattributes(props.mid));
  }, [dispatch]);
  const extraattributes_confirmation = useSelector(
    ({ Statusmodalreducer }) => Statusmodalreducer.ExtraattributesReducer.data
  );

  const loadingg = useSelector(
    ({ Statusmodalreducer }) =>
      Statusmodalreducer.ExtraattributesReducer.isLoading
  );

  // const errMsg = useSelector(
  //   ({ Statusmodalreducer }) => Statusmodalreducer.ExtraattributesReducer.errMsg
  // );
  const add_confirmation = useSelector(
    ({ Statusmodalreducer }) => Statusmodalreducer.AddNewExtraAttributeReducer
  );
  const update_confirmation = useSelector(
    ({ Statusmodalreducer }) => Statusmodalreducer.UpdateExtraAttributeReducer
  );
  const delete_confirmation = useSelector(
    ({ Statusmodalreducer }) => Statusmodalreducer.DeleteExtraAttributeReducer
  );
  const validationSchema = yup.object({
    extra_attribute: yup.string().required(),
    // old_extra_attribute: editclick ? yup.string().required() : null,
  });
  const {
    handleSubmit,
    resetForm,
    handleChange,
    values,
    errors,
  } = useFormik({
    initialValues: {
      extra_attribute: oldextraattribute ? oldextraattribute : "",
      old_extra_attribute: oldextraattribute ? oldextraattribute : "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit(values) {
      if (editclick && oldextraattribute) {
        dispatch(Actions.updateExtraAttribute(props.mid, values));
      } else {
        dispatch(Actions.addNewExtraAttribute(props.mid, values.extra_attribute));
      }
    },
  });
  React.useEffect(() => {
    if (add_confirmation.data.data) {
      resetForm();
      dispatch(Actions.resetaddNewExtraAttribute(true));
      dispatch(Actions.getExtraattributes(props.mid));
      alert("successfully added extra attribute");
    }
  }, [add_confirmation, resetForm, dispatch]);
  React.useEffect(() => {
    if (update_confirmation.data.data) {
      // resetForm();
      setEditclick(false);
      setOldextraattribute("");
      dispatch(Actions.resetupdateExtraAttribute(true));
      dispatch(Actions.getExtraattributes(props.mid));
      alert("successfully updated extra attribute");
    }
  }, [update_confirmation, dispatch]);
  React.useEffect(() => {
    if (delete_confirmation.data.data) {
      dispatch(Actions.resetdeleteExtraAttribute(true));
      dispatch(Actions.getExtraattributes(props.mid));
      alert("successfully deleted extra attribute");
    }
  }, [delete_confirmation, dispatch]);

  const handleClose = (status) => {
    props.methodd(false);
  };
  const handleClickEdit = (data) => {

    setEditclick(true);
    setOldextraattribute(data);
  };
  const handleClickDelete = (data) => {
    dispatch(Actions.deleteExtraAttribute(props.mid, data));
  };




  return (
    <div>
      <Dialog
        classes={{
          paper: classes.rootStyle,
        }}
        onClose={() => handleClose(false)}
        aria-labelledby="customized-dialog-title"
        BackdropProps={{
          classes: {
            root: classes.root1,
          },
        }}
        open={props.status}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => handleClose(false)}
        >
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform1}
          >
            {t("Free field")}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform}
          >
            {t("Extra for status holders in this common")}
          </Typography>
        </DialogTitle>
        <DialogContent
        >
          <Grid
            container
            spacing={0}
          >
            {extraattributes_confirmation &&
              extraattributes_confirmation.listExtraAttributes &&
              extraattributes_confirmation.listExtraAttributes
                .extraAttributes !== null &&
              extraattributes_confirmation.listExtraAttributes.extraAttributes.map(
                (doc) => (
                  <Grid item sm={12} xs={12}>
                    <p className="citemsfavmodal">
                      <span
                        style={{
                          fontFamily: "opensans-regular",
                          fontSize: "12pt",
                          marginRight: "15px",
                          color: "#f4865c",
                          border: "1px solid grey",
                          padding: "4px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          width: "90px",
                          display: "inline-block",
                          textAlign: "center",
                        }}
                      >
                        {doc}
                      </span>
                      <i
                        style={{
                          fontSize: "20px",
                          display: "inline-block",
                          color: "#D3D3D3",
                          cursor: "pointer",
                        }}
                        className="fa fa-pencil"
                        onClick={() => handleClickEdit(doc)}
                      ></i>
                      <i
                        style={{
                          fontSize: "20px",
                          display: "inline-block",
                          color: "#D3D3D3",
                          marginLeft: "10px",
                        }}
                        className="fa fa-times light1"
                        onClick={() => handleClickDelete(doc)}
                      ></i>
                    </p>
                  </Grid>
                )
              )}
          </Grid>
          <Divider classes={{ root: classes.dividerColor }} />
          <p className="add-persoon1">+ {t("Add")}</p>
          {editclick === false && (
            <form onSubmit={handleSubmit} id="form_test">
              <Grid
                container
                spacing={2}
              >
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
                <Grid item sm={12} xs={12}>
                  <TextField
                    id="extra_attribute"
                    onChange={handleChange}
                    value={values.extra_attribute}
                    name="extra_attribute"
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
                  {errors.extra_attribute ? (
                    <p className="error-input">{errors.extra_attribute}</p>
                  ) : (
                    false
                  )}
                </Grid>

                <Grid item sm={12} xs={12} className={classes.cornerbtn}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.cornerbtn1}
                  >
                    {t("Cancel")}
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.cornerbtn1}
                  >
                    {t("Add")}
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
          {editclick === true && (
            <form onSubmit={handleSubmit} id="form_test">
              <Grid
                container
                spacing={2}
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
                <Grid item sm={12} xs={12}>
                  <TextField
                    id="extra_attribute"
                    onChange={handleChange}
                    value={values.extra_attribute}
                    name="extra_attribute"
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
                  {errors.extra_attribute ? (
                    <p className="error-input">{errors.extra_attribute}</p>
                  ) : (
                    false
                  )}
                </Grid>

                <Grid item sm={12} xs={12} className={classes.cornerbtn}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.cornerbtn1}
                  >
                    {t("Cancel")}
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.cornerbtn1}
                  >
                    {t("Update")}
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withReducer("Statusmodalreducer", reducer)(Statusmodal);

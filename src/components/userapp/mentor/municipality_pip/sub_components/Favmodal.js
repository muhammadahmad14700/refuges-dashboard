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
import Divider from '@material-ui/core/Divider';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from 'react-i18next';

// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../../../store/withReducer";
import * as Actions from "../store/actions";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "black"
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0"

    // height:"2%px",
    // padding: 0
  },

});

const DialogTitle = withStyles(styles)(props => {
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

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);


const useStyles = makeStyles(theme => ({
  root1: {
    // backgroundColor: "transparent",
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  },
  rootStyle: {
    borderRadius: 15,
    backgroundColor: "white",
    padding: "25px"
  },
  headingaddform: {
    color: "#8fcccd",
    fontSize: "14px",
    fontWeight: "bold",
    borderBottom: "1px solid #8fcccd",
    width: "270px",
    paddingBottom: "2px",
    [theme.breakpoints.down('sm')]: {
      width: "auto",
    },
  },
  headingaddform1: {
    color: "black",
    fontSize: "14px",
    fontWeight: "bold"
  },
  dividerColor: {
    marginTop: "45px",
    backgroundColor: "black"
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0"

    // height:"2%px",
    // padding: 0
  },
  textField1: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0"

    // height:"2%px",
    // padding: 0
  },
  input1: {
    height: "5px",
    border: 0
  },
  notchedOutline: {
    borderWidth: "0px"
    // borderColor: "yellow !important"
  },
  lable: {
    fontStyle: "regular",
    textAlign: "left"
  },
  cornerbtn: {
    textAlign: "right"
  },
  cornerbtn1: {
    margin: theme.spacing(1),
    fontSize: "13px",
    backgroundColor: "#454a92",
    width: "160px",
    // height: "45px",
    // border: "1px solid white",
    opacity: 1
  },
}));

function Favmodal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t] = useTranslation();
  React.useEffect(() => {
    dispatch(Actions.getRemarks(props.data.id));
  }, [dispatch, props.data.id]);
  const add_confirmation = useSelector(
    ({ Favmodalreducer }) => Favmodalreducer.AddNewRemarkReducer
  );
  const delete_confirmation = useSelector(
    ({ Favmodalreducer }) => Favmodalreducer.deleteRemarkReducer
  );
  const remarks_confirmation = useSelector(
    ({ Favmodalreducer }) => Favmodalreducer.getRemarksReducer.data
  );

  const loading = useSelector(
    ({ Favmodalreducer }) =>
      Favmodalreducer.getRemarksReducer.isLoading
  );

  const errMsg = useSelector(
    ({ Favmodalreducer }) => Favmodalreducer.getRemarksReducer.errMsg
  );
  const handleClose = status => {
    props.methodd(false);
  };
  const validationSchema = yup.object({
    remark: yup.string().required(),
    date: yup.date().required()
  });
  const {
    handleSubmit,
    resetForm,
    handleChange,
    values,
    errors,
  } = useFormik({
    initialValues: {
      remark: "",
      date: ""
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit(values) {

      dispatch(Actions.addNewRemark(props.data.id, values));

    },
  });
  React.useEffect(() => {
    if (add_confirmation.data.data) {
      resetForm();
      dispatch(Actions.resetaddNewRemark(true));
      dispatch(Actions.getRemarks(props.data.id));
      alert("successfully added Compensation");
    }
  }, [add_confirmation, resetForm, dispatch]);
  React.useEffect(() => {
    if (delete_confirmation.data.data) {
      dispatch(Actions.resetDeleteRemark(true));
      dispatch(Actions.getRemarks(props.data.id));
      alert("successfully deleted Compensation");
    }
  }, [delete_confirmation, dispatch]);
  const handleClickCancel = () => {
    resetForm();
  };
  const handleClickDelete = (remarkId) => {
    dispatch(Actions.deleteRemark(props.data.id, remarkId));
  };
  return (
    <div>
      <Dialog
        classes={{
          paper: classes.rootStyle
        }}
        onClose={() => handleClose(false)}
        aria-labelledby="customized-dialog-title"
        BackdropProps={{
          classes: {
            root: classes.root1
          }
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
            {props.data.name}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform}
          >
            {t("Consideration")}
          </Typography>
        </DialogTitle>
        <DialogContent
        >
          <Grid container
            spacing={0}>
            {remarks_confirmation &&
              remarks_confirmation.getRemarks &&
              remarks_confirmation.getRemarks
                .remarks !== null &&
              remarks_confirmation.getRemarks.remarks.map(
                (doc, index) => (
                  <>
                    <Grid item sm={6} xs={6}>
                      <p className="citemsfavmodal">
                        <span style={{ color: "#f4865c" }}>
                          {index + 1}.
            </span>

                        <span
                          style={{

                            fontSize: "16px",
                            marginLeft: "15px",
                            color: "grey"

                          }}
                        >
                          {doc.remark}
                        </span>
                      </p>
                    </Grid>

                    <Grid item sm={6} xs={6} style={{ textAlign: "right" }}>
                      <p className="citemsfavmodal">
                        <span
                          style={{

                            fontSize: "16px",

                            color: "grey",
                            marginRight: "35px",

                          }}
                        >
                          {(new Date(doc.date)).toLocaleDateString()}
                        </span>

                        <i
                          style={{
                            fontSize: "18px",
                            display: "inline-block",
                            color: "grey",

                          }}
                          className="fa fa-times light1"
                          onClick={() => handleClickDelete(doc._id)}
                        ></i>


                      </p>
                    </Grid>
                  </>
                ))}


          </Grid>
          <Divider
            classes={{ root: classes.dividerColor }}
          />
          <p className="add-persoon1">
            + {t("Add consideration")}
          </p>
          <form onSubmit={handleSubmit} >
            <Grid container
              //  className={classes.conform}
              spacing={2}>
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
              <Grid item sm={2} xs={12} className={classes.lable}>
                {t("Compensation")}
              </Grid>
              <Grid item sm={10} xs={12}>
                <TextField
                  id="remark"
                  onChange={handleChange}
                  value={values.remark}
                  name="remark"
                  className={classes.textField}
                  type="text"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1
                    }
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
                {errors.remark ? (
                  <p className="error-input">{errors.remark}</p>
                ) : (
                  false
                )}
              </Grid>
              <Grid item sm={2} xs={12} className={classes.lable}>
                {t("Date")}
              </Grid>
              <Grid item sm={3} xs={12}>
                <TextField
                  id="date"
                  onChange={handleChange}
                  value={values.date}
                  name="date"
                  className={classes.textField1}
                  type="date"
                  InputProps={{
                    classes: {
                      input: classes.input1,
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
                {errors.date ? (
                  <p className="error-input">{errors.date}</p>
                ) : (
                  false
                )}
              </Grid>
              <Grid item sm={12} xs={12} className={classes.cornerbtn}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.cornerbtn1}
                  onClick={() => handleClickCancel()}
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withReducer("Favmodalreducer", reducer)(Favmodal);

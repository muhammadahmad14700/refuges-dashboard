import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import deleteIcon from '../../../../../assets/images/Delete_User_Icon.svg';
import SuccessDialog from "./SuccessDialog";
import { useTranslation } from 'react-i18next';

// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../../../store/withReducer";
import * as Actions from "../store/actions";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "100%",
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  buttonNo: {
    fontFamily: "opensans-semibold",
    fontSize: "16px",
    border: "2px solid #454A92",
    color: "#454A92",
    borderRadius: "2px",
    width: "150px",
    backgroundColor: "white",
    height: "40px",
    boxShadow: "none",
    "&:hover": {
      color: "white",
    },
  },
  buttonYes: {
    fontFamily: "opensans-semibold",
    fontSize: "16px",
    border: "2px solid #454A92",
    color: "white",
    borderRadius: "2px",
    width: "150px",
    backgroundColor: "#454A92",
    marginLeft: "30px",
    height: "40px",
    boxShadow: "none",
    [theme.breakpoints.down('sm')]: {
      marginLeft: "0px",
      marginTop: "10px"
    },
    // "&:hover": {
    //     color: "#454A92",
    //   },
  },
  buttonContinue: {
    fontFamily: "opensans-semibold",
    fontSize: "16px",
    marginLeft: "5px"
  }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function DeleteDialog(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const [successOpen, setSuccessOpen] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Actions.resetDeleteRequest(true));
  }, [])
  const handleClose = (status) => {
    props.methodd();
  };
  const handleClickYes = () => {
    dispatch(Actions.deleteRequest(props.data.id, props.userType));
  }
  const handleClickSuccessDialogopen = () => {
    setSuccessOpen(true);
  };
  const handleClickSuccessDialogclose = () => {
    setSuccessOpen(false);
  };
  const delete_confirmation = useSelector(
    ({ DeleteDialogReducer }) => DeleteDialogReducer.deleteRequestReducer
  );
  React.useEffect(() => {
    if (delete_confirmation.data && delete_confirmation.data.data && delete_confirmation.data.data.submitDeleteRequest) {
      dispatch(Actions.resetDeleteRequest(true));
      if (props.userType === "refugee") {
        dispatch(Actions.getAllSearchedRefugees(props.page + 1, props.rowsPerPage, props.searchText, props.confirmedFilter.id, "", "", props.confirmedStatus.id));
      }
      if (props.userType === "mentor") {
        dispatch(Actions.getAllSearchedMentors(props.page + 1, props.rowsPerPage, props.searchText, props.confirmedFilter.id, "", props.confirmedStatus.id));
      }
      if (props.userType === "supplier") {
        dispatch(Actions.getAllSearchedSuppliers(props.page + 1, props.rowsPerPage, props.searchText, props.confirmedFilter.id, props.confirmedSchoolType.id, "", props.confirmedStatus.id));
      }
      handleClickSuccessDialogopen();

    }
  }, [delete_confirmation])
  return (
    <div>
      {successOpen === true && (
        <SuccessDialog
          status={successOpen}
          methodd={handleClickSuccessDialogclose}
          close={props.methodd}
        />
      )}
      <Dialog
        open={props.status}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="alert-dialog-slide-title">

        </DialogTitle>
        <DialogContent>
          <div style={{ width: "100%", textAlign: "center" }}>

            <img
              src={deleteIcon}
              className="system-search-dialog-block-icon"
              alt="Smiley face"
            />
            <p className="system-search-dialog-block-p1">
              {t("You are about to delete this entity")} {props.data.name}
            </p>
            <p className="system-search-dialog-block-p2">
              {t("Are you sure you want to continue")}?
                  </p>
            <div style={{ width: "100%" }}>
              <Button className={classes.buttonNo} variant="contained" onClick={() => handleClose()} color="primary">
                {t("NO")}
              </Button>
              <Button className={classes.buttonYes} variant="contained" onClick={() => handleClickYes()} color="primary">
                {t("YES")}
              </Button>
            </div>

          </div>
          {delete_confirmation.errMsg && (
            <div className={classes.textField}>
              <Alert severity="error">{t(delete_confirmation.errMsg)}</Alert>
            </div>
          )}
          {delete_confirmation.isLoading && (
            <div className={classes.textField}>
              Loading.......
            </div>
          )}

          <div style={{ width: "100%", display: "inline-block" }}>
          </div>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  );
}
export default withReducer(
  "DeleteDialogReducer",
  reducer
)(DeleteDialog);
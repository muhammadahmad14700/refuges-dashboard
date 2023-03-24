import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import blockIcon from '../../../assets/images/restore_icon_popup.svg';
import { useTranslation } from 'react-i18next';

// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../store/withReducer";
import * as Actions from "../store/actions";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
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

function UnblockDialog(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Actions.resetUnblockRequest(true));
  }, [])
  const handleClose = (status) => {
    props.methodd();
  };
  const handleClickYes = () => {
    dispatch(Actions.unblockRequest(props.data.id, props.userType));
  }
  const unblock_confirmation = useSelector(
    ({ UnblockDialogReducer }) => UnblockDialogReducer.unblockRequestReducer
  );
  React.useEffect(() => {
    if (unblock_confirmation.data && unblock_confirmation.data.data && unblock_confirmation.data.data.unblockRole) {
      dispatch(Actions.resetUnblockRequest(true));

      if (props.userType === "refugee") {
        dispatch(Actions.getAllSearchedRefugees(props.page + 1, props.rowsPerPage, props.searchText, props.confirmedFilter.id, "", "", props.confirmedStatus.id));
      }
      if (props.userType === "manager") {
        dispatch(Actions.getAllSearchedManagers(props.page + 1, props.rowsPerPage, props.searchText, props.confirmedFilter.id, props.confirmedStatus.id));
      }
      if (props.userType === "mentor") {
        dispatch(Actions.getAllSearchedMentors(props.page + 1, props.rowsPerPage, props.searchText, props.confirmedFilter.id, "", props.confirmedStatus.id));
      }
      if (props.userType === "municipality") {
        dispatch(Actions.getAllSearchedMunicipalities(props.page + 1, props.rowsPerPage, props.searchText, props.confirmedFilter.id, "", "", "", props.confirmedStatus.id));
      }
      if (props.userType === "supplier") {
        dispatch(Actions.getAllSearchedSuppliers(props.page + 1, props.rowsPerPage, props.searchText, props.confirmedFilter.id, props.confirmedSchoolType.id, "", props.confirmedStatus.id));
      }
      props.methodd();

    }
  }, [unblock_confirmation])

  return (
    <div>
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
              src={blockIcon}
              className="system-search-dialog-block-icon"
              alt="Smiley face"
            />
            <p className="system-search-dialog-block-p1">
              {t("You are about to restore this entity")} {props.data.name}
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
          {unblock_confirmation.errMsg && (
            <div className={classes.textField}>
              <Alert severity="error">{t(unblock_confirmation.errMsg)}</Alert>
            </div>
          )}
          {unblock_confirmation.isLoading && (
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
  "UnblockDialogReducer",
  reducer
)(UnblockDialog);

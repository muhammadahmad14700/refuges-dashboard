import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useTranslation } from 'react-i18next';
import { makeStyles } from "@material-ui/core/styles";
import warningIcon from '../../../assets/images/warning.svg';
const useStyles = makeStyles((theme) => ({

  buttonYes: {
    fontFamily: "opensans-semibold",
    fontSize: "16px",
    border: "2px solid #454A92",
    color: "white",
    borderRadius: "2px",
    width: "150px",
    backgroundColor: "#454A92",
    height: "40px",
    marginBottom: "16px",
    boxShadow: "none"
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LimitWarningDialog(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const handleClickContinue = () => {
    props.methodd();
  }
  return (
    <div>
      <Dialog
        open={props.status}
        TransitionComponent={Transition}
        keepMounted
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
              src={warningIcon}
              className="system-search-dialog-block-icon"
              alt="Smiley face"
            />
            <p className="system-search-dialog-block-p1">
              {t("Warning")}
            </p>
            <p className="system-search-dialog-block-p2">
              {t("Please assign at least one")} {props.role}
            </p>
            <div style={{ width: "100%" }}>
              <Button className={classes.buttonYes} variant="contained" onClick={() => handleClickContinue()} color="primary">
                {t("CLOSE")}
              </Button>
            </div>

          </div>

        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  );
}
export default LimitWarningDialog;
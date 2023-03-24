import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Alert from "@material-ui/lab/Alert";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import warningIcon from '../../../../../assets/images/warning.svg';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme) => ({

    buttonYes: {
        fontFamily: "opensans-semibold",
        fontSize: "16px",
        border: "2px solid #454A92",
        color: "white",
        borderRadius: "2px",
        width: "150px",
        backgroundColor: "#454A92",
        marginLeft: "70px",
        height: "40px",
        marginBottom: "20px",
        boxShadow: "none"
    },
    buttonCancel: {
        fontFamily: "opensans-semibold",
        fontSize: "16px",
        border: "2px solid #454A92",
        color: "#454A92",
        borderRadius: "2px",
        width: "150px",
        backgroundColor: "white",
        height: "40px",
        marginBottom: "20px",
        boxShadow: "none",
        "&:hover": {
            color: "white",
            backgroundColor: "#454A92",
        },
    },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function LeaveScreenDialog(props) {
    const [t] = useTranslation();
    const classes = useStyles();
    const handleClickCancel = () => {
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
                            {t("You are about to leave this screen")}.
                  </p>
                        <p className="system-search-dialog-block-p2">
                            {t("The")} {props.role} {t("data is automatically saved")}.
                  </p>
                        <p className="system-search-dialog-block-p2">
                            {t("The account login details will be sent to the")} {props.role} {t("e-mail")}.
                  </p>
                        {props.errMsg && (
                            <Alert severity="error">{t(props.errMsg)}</Alert>
                        )}
                        {props.loading && (
                            <p>
                                Loading.......
                            </p>
                        )}
                        <div style={{ width: "100%" }}>
                            <Button className={classes.buttonCancel} variant="contained" onClick={() => handleClickCancel()} color="primary">
                                {t("CANCEL")}
                            </Button>
                            <Button className={classes.buttonYes} variant="contained" onClick={() => props.continueClick()} color="primary">
                                {t("CONTINUE")}
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
export default LeaveScreenDialog;
import React from "react";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ClearIcon from '@material-ui/icons/Clear';
import MenuItem from '@material-ui/core/MenuItem';
import MentorForm from "./sub_components/MentorForm";
import SupplierForm from "./sub_components/SupplierForm";
import RefugeeForm from "./sub_components/RefugeeForm";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// store

import { useDispatch } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../../store/withReducer";
const useStyles = makeStyles((theme) => ({
    contentBody: {
        maxWidth: '890px',
    },
    crossIcon: {
        color: "black",
        fontSize: 23,
        float: "right",
        cursor: "pointer",
        marginTop: "12px"
    },
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
        // minHeight: "13px",
        border: 0,
        fontSize: "16px",
        fontFamily: "opensans-Regular",
        // letterSpacing: "0px"
    },
}));

function EditUser(props) {
    const [t] = useTranslation();
    let userType = [
        {
            value: "mentor",
            label: t("Mentor")
        },
        {
            value: "supplier",
            label: t("Supplier")
        },
        {
            value: "refugee",
            label: t("Refugee")
        }
    ];
    const classes = useStyles();
    var history = useHistory();
    const [bg, setBg] = React.useState("bgforform");
    const [userTypeState, setUserTypeState] = React.useState(userType);
    const [selectedUserType, setSelectedUserType] = React.useState("mentor");
    const [disable, setDisable] = React.useState(false);
    React.useEffect(() => {
        if (sessionStorage.getItem("user_type")) {
            setSelectedUserType(sessionStorage.getItem("user_type"));
            setDisable(true);
        }
    }, [sessionStorage.getItem("user_type")]);
    const handleChangeRole = (event) => {
        setSelectedUserType(event.target.value);
    };
    const handleNavigateToDashboard = () => {
        sessionStorage.clear();
        history.push("/managerdashboard");
    };
    return (
        <div className="main">
            <div className={bg}>
                <Container className={classes.contentBody}>
                    <div className="create-user-main-div">
                        <div className="create-user-title-div">
                            <p className="create-user-title">{t("Create New User")}</p>
                            <ClearIcon className={classes.crossIcon} onClick={() => handleNavigateToDashboard()} />
                        </div>
                        <div className="create-user-part-div">
                            <p className="create-user-part-text">{t("Part 1")}</p>
                        </div>
                        <p className="create-user-required-text">{t("Please enter the required information")}</p>
                        <Grid container spacing={3}>
                            <Grid item sm={2} xs={4}>
                                <p className="create-user-label-text">{t("User Type")}</p>
                            </Grid>
                            <Grid item sm={10} xs={8}>
                                <TextField
                                    id="first_name"
                                    select
                                    onChange={handleChangeRole}
                                    value={selectedUserType}
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
                                    disabled={disable}
                                >
                                    {userTypeState.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                        {selectedUserType === "mentor" && (
                            <MentorForm
                                selectedUserType={selectedUserType}
                            />
                        )}
                        {selectedUserType === "supplier" && (
                            <SupplierForm
                                selectedUserType={selectedUserType}
                            />
                        )}
                        {selectedUserType === "refugee" && (
                            <RefugeeForm
                                selectedUserType={selectedUserType}
                            />
                        )}
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default withReducer("EditUserReducer", reducer)(EditUser);
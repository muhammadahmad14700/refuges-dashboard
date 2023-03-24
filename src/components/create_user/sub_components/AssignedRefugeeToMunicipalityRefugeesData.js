import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import checkIcon from '../../../assets/images/Tick_Mark_Icon.svg';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme) => ({
  filterButton: {
    fontSize: "14px",
    fontFamily: "opensans-semibold",
    backgroundColor: "#454A92",
    height: "35px",
    color: "white",
    width: "140px",
    borderRadius: "0px"
  },
  filterContinueButton: {
    fontSize: "14px",
    fontFamily: "opensans-semibold",
    backgroundColor: "#454A92",
    height: "35px",
    color: "white",
    width: "140px",
    borderRadius: "0px",
    float: "right",
    marginRight: "15px",
  },
  tablePagination: {

    overflow: "visible"
  },
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  dropdown: {
    position: "absolute",
    // width: "155px",
    top: 36,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "none",
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    height: "226px",
  },
  chkroot: {
    padding: 2
  },
  icon: {
    border: "1px solid #454A92",
    borderRadius: 0,
    width: "18px",
    height: "18px",

  },
  checkedIcon: {
    backgroundColor: '#ffffff',
    '&:before': {
      display: 'block',
      width: "18px",
      height: "18px",
      backgroundImage: `url(${checkIcon})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "14px 14px",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#ffffff',
    },
  },
  continueButton: {
    fontSize: "16px",
    backgroundColor: "#454A92",
    width: "150px",
    height: "40px",
    opacity: 1,
    textTransform: "uppercase",
    fontFamily: "opensans-semibold",
    float: "right",
    borderRadius: "2px",
    marginRight: "30px",
    boxShadow: "none"
  },
  cancelButton: {
    fontSize: "16px",
    backgroundColor: "white",
    width: "150px",
    height: "40px",
    opacity: 1,
    textTransform: "uppercase",
    fontFamily: "opensans-semibold",
    float: "right",
    borderRadius: "2px",
    marginRight: "30px",
    border: "1px solid #454A92",
    color: "#454A92",
    boxShadow: "none",
    "&:hover": {
      color: "#ffffff",
    },
  }
}));
function AssignedRefugeeToMunicipalityRefugeesData(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  var history = useHistory();
  const continueClick = () => {
    sessionStorage.setItem("assignedRefugees", JSON.stringify(props.selectedRefugees));
    history.push({
      pathname: "/postMunicipalityDetails"
    });
  };
  const cancelClick = () => {
    sessionStorage.clear();
    history.push("/dashboard");
  };
  return (
    <div className="assigned-data-parent">


      <div style={{ marginTop: "44px" }} className="edit-mun-table-div">
        <table
          className="system-search-table-tag"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            backgroundColor: "white",
          }}
        >

          <tr>
            <th>
              {t("BSN")}
            </th>
            <th>
              {t("Name")}
            </th>

            <th>

            </th>

          </tr>
          {props.selectedRefugees &&
            props.selectedRefugees.length > 0 &&
            props.selectedRefugees.map((doc, index) => (
              <tr>
                <td>
                  {doc.bsn}
                </td>
                <td>
                  {doc.name}
                </td>
                <td style={{ width: "130px" }}><ClearIcon onClick={() => { props.unAssignRefugee(doc) }} style={{ color: "454A92", fontSize: 20, cursor: "pointer" }} /></td>

              </tr>
            ))}
        </table>
      </div>
      <div className="assigned-mentor-to-municipality-btn-div">
        <Button
          variant="contained"
          className={classes.continueButton}
          onClick={() => continueClick()}
          color="primary"
        >
          {t("Continue")}
        </Button>
        <Button
          variant="contained"
          className={classes.cancelButton}
          onClick={() => cancelClick()}
          color="primary"
        >
          {t("Cancel")}
        </Button>

      </div>
    </div>
  );
}
export default AssignedRefugeeToMunicipalityRefugeesData;
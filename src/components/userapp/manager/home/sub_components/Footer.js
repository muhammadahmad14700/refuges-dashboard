import React from "react";

import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import logob from "../../../../../assets/images/logob.png";
import phoneIcon from "../../../../../assets/images/phone_icon.svg";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  con: {
    // backgroundColor: "red"
  }
}));
function Footer(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  var history = useHistory();

  const handleNavigateToDashboard = () => {
    sessionStorage.clear();
    history.push("/managerdashboard");
  };





  return (
    <footer id="footerhome">
      <Container fixed className={classes.con}>
        <img className="blockf-logob" onClick={() => handleNavigateToDashboard()} src={logob} alt="logob"></img>

        <div id="rightmenu">
          <p className="citemsf">
            <i
              style={{
                fontSize: "18px",
                display: "inline-block",
                color: "white"
              }}
              className="fa fa-envelope"
            ></i>
            <span
              style={{
                marginLeft: "6px",
                fontSize: "16px",
                fontWeight: "500"
              }}
            >
              {t("Mail")}
            </span>
            <p style={{ marginTop: "5px" }}>info@vluchtelingaanzet.com</p>
          </p>
        </div>

        <div id="rightmenusecond" >
          <p className="citemsf">
            <img
              src={phoneIcon}
              className="footer-phone-icon"
              alt="Smiley face"
            />
            <span
              style={{
                marginLeft: "6px",
                fontSize: "16px",
                fontWeight: "500"
              }}
            >
              {t("Telephone")}
            </span>
            <p style={{ marginTop: "5px" }}>+31 (0)43 352 3604</p>
          </p>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;

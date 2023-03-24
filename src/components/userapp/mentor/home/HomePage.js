import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Barchart from "./sub_components/Barchart";
import "../../../../css/home.css";
import graphb from "../../../../assets/images/graphb.svg";
import { useHistory } from "react-router-dom";
import graphIcon from "../../../../assets/images/graph_icon.svg";
import phoneIcon from "../../../../assets/images/phone_icon.svg";
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../../store/withReducer";
import * as Actions from "./store/actions";

const useStyles = makeStyles((theme) => ({
  con: {
    // paddingTop: "50px",
    // backgroundColor: "yellow"
  },
  paginationstyle: {
    // color: "white",
    "& > li > button": {
      color: "white"
    }
  },
  conform: {
    padding: "30px",
    marginTop: "3px",
    backgroundColor: "white",
    borderRadius: "12px",
    webkitboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    mozboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    boxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    // zIndex: "100000",
  },
  con1: {
    backgroundColor: "white",
    marginTop: "12px",
    textAlign: "center",
    marginLeft: "3px",
    borderRadius: "12px",
    height: "435px",
    [theme.breakpoints.down('sm')]: {
      overflowX: "scroll",
      overflowY: "hidden",
    },

    webkitboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    mozboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    boxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
  },
  con2: {
    backgroundColor: "white",
    marginTop: "12px",
    textAlign: "left",
    marginLeft: "3px",
    borderRadius: "14px",
    height: "210px",

    webkitboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    mozboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    boxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
  },
  heading: {
    color: "white",
    fontSize: "36pt",
    fontFamily: "opensans-semibold",
    [theme.breakpoints.down('lg')]: {
      fontSize: "26pt",
    },
    // fontWeight: "500"
  },
  headingaddform: {
    color: "#454a92",
    fontSize: "16px",
    fontWeight: "bold",
    borderBottom: "2px solid black",
    width: "220px",
    paddingBottom: "2px",
  },
  heading1: {
    color: "#454a92",
    fontFamily: "opensans-bold",
    fontSize: "12pt",
    // fontWeight: "bold",
    textAlign: "left",
  },
  subheading: {
    color: "white",
    fontSize: "16.8pt",
    fontFamily: "opensans-semibold",
    // fontSize: "18px",
    marginTop: "-10px",
    fontWeight: "500",
    [theme.breakpoints.down('lg')]: {
      fontSize: "12.8pt",
    },
  },
  subheading1: {
    color: "#454a92",
    // fontFamily: "opensans-italic",
    fontFamily: "opensans-italic",
    fontSize: "10pt",
    textAlign: "left",
    // fontStyle: "italic",
    // fontWeight: "normal",
    marginTop: "-5px",
  },
  lable: {
    // fontStyle: "italic",
    textAlign: "left",
  },
  cornerbtn: {
    textAlign: "right",
  },
  cornerbtn1: {
    margin: theme.spacing(1),
    fontSize: "13px",
    backgroundColor: "#454a92",
    width: "160px",
    // height: "45px",
    // border: "1px solid white",
    opacity: 1,
  },
  row1: {
    textAlign: "center",
    // marginTop:"40px"
  },
  btnrow1: {
    // textAlign: "center",
    marginTop: "13px",
    display: "flex"
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  papergraph: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "395px",
  },
  paper1: {
    cursor: "pointer",
    textAlign: "center",
    color: "white",
    backgroundColor: "#e84e0e",
    // padding: "10px 0",
    overflow: "hidden",
    height: "39px",
    maxHeight: "39px",
    minHeight: "39px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: "12pt",
    fontFamily: "opensans-semibold",
    [theme.breakpoints.down('lg')]: {
      fontSize: "9pt",
    },
  },
  paperico: {
    backgroundColor: "#72B0B4",
    height: "39px",
    maxHeight: "39px",
    minHeight: "39px",
    // width: "80%",
    // padding: "4px"
  },
  button: {
    // margin: theme.spacing(1),
    fontSize: "12pt",
    backgroundColor: "transparent",
    width: "100%",
    height: "38px",
    border: "1px solid white",
    opacity: 1,
    textTransform: "lowercase",
    fontFamily: "opensans-semibold",
  },
  buttonmenu: {
    // margin: theme.spacing(1),
    fontSize: "12px",
    backgroundColor: "transparent",
    width: "100%",
    height: "38px",
    border: "1px solid white",
    opacity: 1,
    textTransform: "lowercase",
    marginRight: "3px",
    padding: "1px"
  },
  btnupload: {
    backgroundColor: "#454a92",
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  notchedOutline: {
    borderWidth: "0px",
    // borderColor: "yellow !important"
  },
  input1: {
    height: "5px",
    border: 0,
  },
  input: {
    display: "none",
  },
  crossIcon: {
    color: "black",
    fontSize: 23,
  },
  crossIconBtn: {
    float: "right",
    marginTop: "-15px",
    marginRight: "-10px"
  },
  crossIconBtnGraph: {
    float: "right",
    marginTop: "-18px",
    marginRight: "-18px",
    [theme.breakpoints.down('sm')]: {
      position: "absolute"
    },
  },
  rowContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: "0 auto"
    },
  }
}));
function HomePage(props) {
  const classes = useStyles();
  const [t] = useTranslation();
  const [totalProgress, setTotalProgress] = React.useState(0);
  const [details, setDetails] = React.useState(undefined);
  const [contact, setContact] = React.useState(undefined);
  const [bg, setBg] = React.useState("bg");

  var history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Actions.getAdminProfile());

  }, [dispatch]);
  const profile_data = useSelector(
    ({ HomePageMentorReducer }) =>
      HomePageMentorReducer.adminProfileReducer.data
  );
  const loading = useSelector(
    ({ HomePageMentorReducer }) =>
      HomePageMentorReducer.adminProfileReducer.isLoading
  );
  const errMsg = useSelector(
    ({ HomePageMentorReducer }) =>
      HomePageMentorReducer.adminProfileReducer.errMsg
  );
  const handleClickOpen = (id) => {
    setDetails(id);

    setContact(undefined);
  };
  const handleClickOpenContact = (doc) => {
    setContact(doc);

    setDetails(undefined);
  };
  const handleClose = () => {
    setDetails(undefined);
    setContact(undefined);
  };
  const Openmunipage = (id) => {
    history.push({
      pathname: "/mentorMunicipalitypip",
      state: id,
    });
  };


  function GraphData() {
    if (details) {
      return (
        <React.Fragment>
          <Grid item sm={9} md={9} lg={9} xs={9}>
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
              <Typography
                variant="h5"
                gutterBottom
                className={classes.heading1}
              >
                {t("Statistics")}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.subheading1}
              >
                {details.name}
              </Typography>

              <Barchart data={details} setTotalProgress={setTotalProgress} />


            </div>
          </Grid>

          <Grid item sm={3} md={3} lg={3} xs={3}>
            <IconButton aria-label="cross" className={classes.crossIconBtnGraph} onClick={() => handleClose()}>
              <ClearIcon className={classes.crossIcon} />
            </IconButton>
            <div className="graph-total">
              <img
                className="graph-total-image"
                src={graphb}
                alt="grpahb"
              ></img>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "-55px",
                  marginLeft: "20px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    color: "#454a92",
                    fontFamily: "opensans-bold",
                    fontSize: "32pt",
                  }}
                >
                  {parseInt(totalProgress)}%
                </p>
                <p
                  style={{
                    margin: "0",
                    marginTop: "-5px",
                    color: "#454a92",
                    fontFamily: "opensans-bold",
                    fontSize: "10pt",
                  }}
                >
                  {t("Total progress")}
                </p>
                <p
                  style={{
                    margin: "0",
                    color: "#8fcccd",
                    fontFamily: "opensans-bold",
                    fontSize: "9pt",
                  }}
                >
                  {t("Self-Sustainability")}
                </p>
              </div>
            </div>

          </Grid>
        </React.Fragment>
      );
    }
    return null;
  }
  function ContactData() {
    if (contact) {
      return (
        <Grid container>
          <Grid item sm={11} xs={11}>
            <div style={{ marginTop: "5px", marginLeft: "10px" }}>
              <p className="citemshead">
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.heading1}
                >
                  {t("Contact Details")}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subheading1}
                >
                  {contact.name}
                </Typography>
              </p>
              <div>
                <p className="citems">
                  <i
                    style={{
                      fontSize: "24px",
                      display: "inline-block",
                      color: "#7ec9cf",
                    }}
                    className="fa fa-user"
                  ></i>
                  <span
                    style={{
                      marginLeft: "13px",
                      fontSize: "10pt",
                      fontFamily: "opensans-semibold",
                    }}
                  >
                    {contact.manager.name}
                  </span>
                </p>
                <p className="citems">
                  <i
                    style={{
                      fontSize: "24px",
                      display: "inline-block",
                      color: "#7ec9cf",
                    }}
                    className="fa fa-phone"
                  ></i>
                  <span
                    style={{
                      marginLeft: "13px",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    {contact.manager.phoneNumber}
                  </span>
                </p>
                <p className="citems">
                  <i
                    style={{
                      fontSize: "22px",
                      display: "inline-block",
                      color: "#7ec9cf",
                    }}
                    className="fa fa-envelope"
                  ></i>
                  <span
                    style={{
                      marginLeft: "13px",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    {contact.manager.email}
                  </span>
                </p>
              </div>
            </div>
          </Grid>

          <Grid item sm={1} xs={1}>
            <IconButton aria-label="cross" className={classes.crossIconBtn} onClick={() => handleClose()}>
              <ClearIcon className={classes.crossIcon} />
            </IconButton>
          </Grid>
        </Grid>
      );
    }
    return null;
  }

  function ContactCont() {
    if (contact) {
      return (
        <Grid
          container
          spacing={2}
          item
          lg={4}
          md={8}
          sm={12}
          xs={12}
          className={classes.con2}
        >
          <ContactData />
        </Grid>
      );
    }
    return null;
  }

  function RightCont() {
    if (details) {
      return (
        <Grid
          container
          spacing={2}
          item
          lg={8}
          md={12}
          sm={12}
          xs={12}
          className={classes.con1}
        >
          <GraphData />
        </Grid>
      );
    }
    return null;
  }
  function FormRowInside(props) {
    return (
      <React.Fragment>
        <Grid item sm={8} xs={8}>
          <Paper onClick={() => Openmunipage(props.doc._id)} className={classes.paper1}>
            {props.doc.name}
          </Paper>
        </Grid>
        <Grid item sm={2} xs={2}>
          <Paper className={classes.paperico}>
            <button className="btnico"
              onClick={() => handleClickOpen(props.doc)}
            >
              <img
                src={graphIcon}
                className="home-page-grid-icon"
                alt="Smiley face"
              />
            </button>
          </Paper>
        </Grid>
        <Grid item sm={2} xs={2}>
          <Paper className={classes.paperico}>
            <button className="btnico"
              onClick={() => handleClickOpenContact(props.doc)}
            >
              <img
                src={phoneIcon}
                className="home-page-grid-phone-icon"
                alt="Smiley face"
              />
            </button>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function TableRow() {

    return (
      <React.Fragment>
        <Grid container spacing={2} item sm={12} md={12} lg={4} xs={12} className={classes.rowContainer}>
          {profile_data && profile_data.getMentorProfile && !profile_data.getMentorProfile.municipality && (
            <Grid item sm={12} xs={12} >
              <p className="no-municipality-found">{t("There are no municipality available right now in the database")}.</p>
            </Grid>
          )}
          {(profile_data && profile_data.getMentorProfile && profile_data.getMentorProfile.municipality) && (
            <FormRowInside doc={profile_data.getMentorProfile.municipality} />
          )}


        </Grid>

        <RightCont />
        <ContactCont />
      </React.Fragment>
    );
  }

  function MainComponent() {
    return (
      <Container fixed className={classes.con}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={4} xs={12} spacing={3} className={classes.row1}>
          </Grid>
          <Grid item sm={12} md={12} xs={12} spacing={3} className={classes.row1}>
            <Typography variant="h4" gutterBottom className={classes.heading}>
              {t("DASHBOARD")}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.subheading}
            >
              {t("Welcome")} {(profile_data && profile_data.getMentorProfile && profile_data.getMentorProfile.name) ? profile_data.getMentorProfile.name : "Mentor"}
            </Typography>
          </Grid>
          <Grid container item sm={12} xs={12} spacing={3} className={classes.rowContainer}>
            <TableRow />
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <div className="main">
      <div className={bg}>
        <MainComponent />
      </div>
    </div>
  );
}

export default withReducer("HomePageMentorReducer", reducer)(HomePage);

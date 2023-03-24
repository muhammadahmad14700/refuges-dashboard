
import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import "../../../../css/home.css";
import RefugeesData from "./sub_components/RefugeesData";
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
    height: "410px",
    [theme.breakpoints.down('xs')]: {
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
    fontFamily: "opensans-regular",
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
    // borderWidth: "0px",
    borderColor: "black !important",
    borderRadius: "0px",
  },
  input1: {
    // height: "19px",
    border: 0,
    '&::placeholder': {
      fontSize: '16px',
      color: "black",
      opacity: "1",
      fontFamily: "opensans-LightItalic"
    },
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
    marginTop: "-18px",
    marginRight: "-18px"
  },
  textFieldSearch: {
    width: "100%",
    margin: 0,
    height: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  },
}));
function HomePage(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const [bg, setBg] = React.useState("bgforform");
  const [searchPlaceholder, setSearchPlaceholder] = React.useState(t('Search by name or BSN number'));
  const [searchText, setSearchText] = React.useState('');
  const dispatch = useDispatch();
  const profile_data = useSelector(
    ({ HomePageSupplierReducer }) =>
      HomePageSupplierReducer.adminProfileReducer.data
  );
  const loading = useSelector(
    ({ HomePageSupplierReducer }) =>
      HomePageSupplierReducer.adminProfileReducer.isLoading
  );

  const errMsg = useSelector(
    ({ HomePageSupplierReducer }) =>
      HomePageSupplierReducer.adminProfileReducer.errMsg
  );
  React.useEffect(() => {
    dispatch(Actions.getAdminProfile());

  }, []);
  const handleClearSearch = () => {
    setSearchText('');
  }
  const handleChangeSearch = (value) => {
    setSearchText(value);
  };
  return (
    <div className="main">
      <div className={bg}>
        <Container fixed className={classes.con}>
          <Grid container spacing={3}>
            <Grid item sm={12} md={4} xs={12} spacing={3} className={classes.row1}>
            </Grid>
            <Grid item sm={12} md={4} xs={12} spacing={3} className={classes.row1}>
              <Typography variant="h4" gutterBottom className={classes.heading}>
                {t("DASHBOARD")}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.subheading}
              >
                {t("Welcome")} {(profile_data && profile_data.getSupplierProfile && profile_data.getSupplierProfile.name) ? profile_data.getSupplierProfile.name : t("Supplier")}
              </Typography>
            </Grid>
            <Grid container item sm={12} xs={12} spacing={3}>
            </Grid>
          </Grid>
        </Container>
        <Container fixed>
          <div className="system-search-main-div" style={{ marginTop: "20px" }}>
            <div className="system-search-search-div" style={{ marginTop: "30px" }}>
              <div className="system-search-search-div-search-field-wrapper" style={{ marginLeft: "15px" }}>
                <TextField
                  id="search"
                  onChange={e => handleChangeSearch(e.target.value)}
                  value={searchText}
                  name="search"
                  className={classes.textFieldSearch}
                  type="text"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ClearIcon style={{ fontSize: "24px", color: "black", cursor: "pointer" }} onClick={() => handleClearSearch()} />
                      </InputAdornment>
                    ),
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  placeholder={searchPlaceholder}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="system-search-search-div-search-btn-wrapper">
                <div style={{ width: "30px", height: "30px", margin: "0 auto", marginTop: "5px" }}>
                  <SearchIcon style={{ color: "white", fontSize: "30px", margin: "0 auto" }} />
                </div>
              </div>

            </div>
            <RefugeesData searchText={searchText} />
          </div>
        </Container>

      </div>
    </div>
  );
}

export default withReducer("HomePageSupplierReducer", reducer)(HomePage);

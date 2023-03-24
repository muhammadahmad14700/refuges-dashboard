import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../../../../css/municipalitypip.css";
import BImodal from "../municipality_pip/sub_components/BImodal";
import Progressmodal from "../municipality_pip/sub_components/Progressmodal";
import Pipversionsmodal from "../municipality_pip/sub_components/Pipversionsmodal";
import Notimodal from "../municipality_pip/sub_components/Notimodal";
import Favmodal from "../municipality_pip/sub_components/Favmodal";
import Statusmodal from "../municipality_pip/sub_components/Statusmodal";
import Chatmodal from "../municipality_pip/sub_components/Chatmodal";
import Agendamodal from "../municipality_pip/sub_components/Agendamodal";
import graphb from "../../../../assets/images/graphb.svg";
import taal from "../../../../assets/images/taal.svg";
import woon from "../../../../assets/images/woon.svg";
import wel from "../../../../assets/images/wel.svg";
import soc from "../../../../assets/images/soc.svg";
import werk from "../../../../assets/images/werk.svg";
import bijs from "../../../../assets/images/bijs.svg";
import bij from "../../../../assets/images/bij.svg";
import maat from "../../../../assets/images/maat.svg";
import zelf from "../../../../assets/images/zelf.svg";
import noti from "../../../../assets/images/notification.svg";
import chat from "../../../../assets/images/chat.svg";
import calender from "../../../../assets/images/calender.svg";
import heart from "../../../../assets/images/heart.svg";
import Barchart from "./sub_components/Barchart";
import TablePagination from "@material-ui/core/TablePagination";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import ClearIcon from '@material-ui/icons/Clear';
import ListItem from '@material-ui/core/ListItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../../store/withReducer";
import * as Actions from "./store/actions";

const useStyles = makeStyles((theme) => ({
  con: {
    marginTop: "70px",
    // backgroundColor: "yellow",
    paddingBottom: "100px",
  },
  heading1: {
    color: "#454a92",
    fontFamily: "opensans-bold",
    fontSize: "14.4pt",
    fontWeight: "bold",
    textAlign: "left",
  },
  subheading1: {
    color: "#454a92",
    fontFamily: "opensans-semibold",
    fontSize: "11pt",
    textAlign: "left",
    // fontStyle: "italic",
    fontWeight: "500",
    marginTop: "-5px",
    paddingBottom: "20px",
  },
  conform: {
    // padding: "30px",
    // marginTop: "50px",
    backgroundColor: "white",
    borderRadius: "12px",
    height: "500px",
    width: "500px",

    // webkitboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    // mozboxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)",
    // boxShadow: "-2px 2px 11px -3px rgba(0,0,0,0.75)"
  },
  tablePagination: {

    overflow: "visible"
  },
  buttonmenu: {
    // margin: theme.spacing(1),
    fontSize: "14px",
    backgroundColor: "#f4865c",
    width: "100px",
    height: "32px",
    opacity: 1,
    textTransform: "lowercase",
    padding: "1px",
    marginLeft: "120px",
    marginTop: "10px",
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: "60px",
    },
    // marginRight: "30px",
  },
  con1: {
    minHeight: "400px",
    [theme.breakpoints.down('sm')]: {
      overflowX: "scroll",
      overflowY: "hidden",
    },
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dropdownButton: {
    // margin: theme.spacing(1),
    fontSize: "14px",
    fontFamily: "opensans-semibold",
    backgroundColor: "#454A92",
    width: "127px",
    height: "35px",
    opacity: 1,
    color: "white",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    textTransform: "capitalize"
    // paddingTop: "10px"
  },
  dropdown: {
    position: 'absolute',
    width: "127px",
    // top: 0,
    right: 0,
    // left: 0,
    zIndex: 1,
    // padding: theme.spacing(1),
    marginLeft: "15px",
    border: 'none',
    backgroundColor: "#E7E7E7",
    borderRadius: "0px 0px 5px 5px",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)"
  },
  textFieldSearch: {
    width: "100%",
    margin: 0,
    height: "35px",
    backgroundColor: "#ffffff",
    borderRadius: "0px",
  },
  notchedOutline: {
    // borderWidth: "0px",
    borderColor: "black !important",
    borderRadius: "0px",
    borderRight: 0,
  },
  input1: {
    height: "14px",
    border: 0,
    '&::placeholder': {
      fontSize: '16px',
      color: "black",
      opacity: "1",
      fontFamily: "opensans-LightItalic"
    },
  },
}));
function MunicipalityPipPage(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  let roles = [
    {
      id: "mentor",
      name: t("Mentor"),
      default: true
    },
    {
      id: "refugee",
      name: t("Refugee"),
      default: false
    }
  ];
  const [biopen, setBiopen] = React.useState(false);
  const [pipversionopen, setPipversionopen] = React.useState(false);
  const [notiopen, setNotiopen] = React.useState(false);
  const [favopen, setFavopen] = React.useState(false);
  const [progressopen, setProgressopen] = React.useState(false);
  const [statusopen, setStatusopen] = React.useState(false);
  const [chatopen, setChatopen] = React.useState(false);
  const [agendaopen, setAgendaopen] = React.useState(false);
  const [page, setPage] = React.useState(0); const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [pipdata, setPipdata] = React.useState(undefined);
  const [searchText, setSearchText] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [searchPlaceholder, setSearchPlaceholder] = React.useState(t('Search by name'));
  const [rolesState, setRolesState] = React.useState(roles);
  const [selectedRole, setSelectedRole] = React.useState({
    id: "refugee",
    name: t("Refugee"),
    default: true
  });
  var history = useHistory();
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(Actions.getAdminProfile());
    if (history.location.state) {
      dispatch(
        Actions.getAllRefuges(page + 1, rowsPerPage, history.location.state)
      );
      dispatch(Actions.getExtraattributes(history.location.state));

    } else {
      history.push('./mentordashboard');
    }
  }, [rowsPerPage, page, dispatch, history.location.state]);
  React.useEffect(() => {
    dispatch(
      Actions.getAllRefuges(1, 10, history.location.state, '', searchText, selectedRole.id)
    );
  }, [searchText, selectedRole]);
  React.useEffect(() => {
    if (history.location.state) {
      dispatch(Actions.getPipprogressStats(history.location.state));
    }
  }, [dispatch, history.location.state]);
  const pipprogress_stats_confirmation = useSelector(
    ({ MunicipalityPipPageReducer }) => MunicipalityPipPageReducer.PipprogressStatsReducer.data
  );

  const pipprogress_stats_loadingg = useSelector(
    ({ MunicipalityPipPageReducer }) =>
      MunicipalityPipPageReducer.PipprogressStatsReducer.isLoading
  );

  const pipprogress_stats_errMsgg = useSelector(
    ({ MunicipalityPipPageReducer }) => MunicipalityPipPageReducer.PipprogressStatsReducer.errMsg
  );

  const extraattributes_confirmation = useSelector(
    ({ MunicipalityPipPageReducer }) => MunicipalityPipPageReducer.ExtraattributesReducer.data
  );

  const loadingg = useSelector(
    ({ MunicipalityPipPageReducer }) =>
      MunicipalityPipPageReducer.ExtraattributesReducer.isLoading
  );

  // const errMsgg = useSelector(
  //   ({ MunicipalityPipPageReducer }) => MunicipalityPipPageReducer.ExtraattributesReducer.errMsg
  // );
  const AllRefuges = useSelector(
    ({ MunicipalityPipPageReducer }) =>
      MunicipalityPipPageReducer.AllRefugesReducer.data
  );
  const loading = useSelector(
    ({ MunicipalityPipPageReducer }) =>
      MunicipalityPipPageReducer.AllRefugesReducer.isLoading
  );

  const errMsg = useSelector(
    ({ MunicipalityPipPageReducer }) =>
      MunicipalityPipPageReducer.AllRefugesReducer.errMsg
  );
  const profile_data = useSelector(
    ({ MunicipalityPipPageReducer }) =>
      MunicipalityPipPageReducer.adminProfileReducer.data
  );
  const loading_p = useSelector(
    ({ MunicipalityPipPageReducer }) =>
      MunicipalityPipPageReducer.adminProfileReducer.isLoading
  );
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickBiopen = (data) => {
    setBiopen(true);
    setPipdata(data);
  };
  const handleClickProgressopen = (data) => {
    setProgressopen(true);
    setPipdata(data);
  };
  const handleClickPipVersionOpen = (data) => {
    setPipversionopen(true);
    setPipdata(data);
  };
  const handleClickNotiopen = (data) => {
    setNotiopen(true);
    setPipdata(data);
  };
  const handleClickFavopen = (data) => {
    setFavopen(true);
    setPipdata(data);
  };
  const handleClickPersoonopen = (id) => {
    sessionStorage.clear();
    sessionStorage.setItem("user_type", "refugee");
    history.push({
      pathname: "/createUserByMentor"
    });
  };

  const handleClickChatopen = (data) => {
    setChatopen(true);
    setPipdata(data);
  };
  const handleClickAgendaopen = (data) => {
    dispatch(Actions.resetAllAgendas(true));
    setAgendaopen(true);
    setPipdata(data);
  };
  const handleChangeSearch = (value) => {
    setSearchText(value);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleChangeRole = (role) => {
    setSelectedRole(role);
    setOpen(false);
  }
  const handleClearSearch = () => {
    setSearchText('');
  }
  return (
    <div className="main-con">
      {biopen === true && pipdata && (
        <BImodal status={biopen} methodd={setBiopen} data={pipdata} />
      )}
      {progressopen === true && pipdata && (
        <Progressmodal
          status={progressopen}
          methodd={setProgressopen}
          data={pipdata}
          mid={history.location.state ? history.location.state : ""}
          page={page}
          searchText={searchText}
          selectedRole={selectedRole}
        />
      )}
      {pipversionopen === true && pipdata && (
        <Pipversionsmodal status={pipversionopen} methodd={setPipversionopen} data={pipdata} mid={history.location.state ? history.location.state : ""} />
      )}
      {notiopen === true && pipdata && (<Notimodal status={notiopen} methodd={setNotiopen} data={pipdata} />)}

      {favopen === true && pipdata && (<Favmodal status={favopen} methodd={setFavopen} data={pipdata} />)}
      {statusopen === true && (
        <Statusmodal status={statusopen} methodd={setStatusopen} />
      )}
      {chatopen === true && pipdata && (
        <Chatmodal status={chatopen} methodd={setChatopen} data={pipdata} />
      )}
      {agendaopen === true && pipdata && (
        <Agendamodal status={agendaopen} methodd={setAgendaopen} data={pipdata} />
      )}
      <Container fixed className={classes.con}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            {profile_data && profile_data.getMentorProfile && profile_data.getMentorProfile.municipality && profile_data.getMentorProfile.municipality.logoUrl && (
              <div style={{ marginLeft: "-23px", marginBottom: "10px", height: "auto", maxHeight: "100px" }}>
                <img
                  src={profile_data.getMentorProfile.municipality.logoUrl}
                  className="mun-logo"
                  alt="Smiley face"
                  width="100px"
                  height="auto"
                />
                <div>
                </div>
              </div>

            )}
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className="system-search-search-div-mun-page">
              <div className="search-mun-page-divs-wrapper">
                <div className="system-search-search-div-search-field-wrapper-mun-page">
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
                          <ClearIcon style={{ fontSize: "18px", color: "black", cursor: "pointer" }} onClick={() => handleClearSearch()} />
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

                <div className="system-search-search-div-menu-wrapper-mun-page">
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <div className={classes.root}>
                      <Button variant="contained" onClick={handleClick} color="primary" endIcon={<ExpandMoreIcon style={{ fontSize: 22 }} />} className={classes.dropdownButton}>
                        {selectedRole.name}
                      </Button>
                      {open ? (
                        <div className={classes.dropdown}>
                          {rolesState.map((doc, firstIndex) => (
                            <ListItem button divider onClick={() => handleChangeRole(doc)}>
                              <ListItemText primary={<Typography type="body2" style={{
                                fontFamily: "opensans-semibold",
                                fontSize: "14px",
                              }}>{doc.name}</Typography>} />
                            </ListItem>
                          ))}

                        </div>
                      ) : null}
                    </div>
                  </ClickAwayListener>


                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div style={{ width: "100%", overflow: "auto", minHeight: "200px" }}>
          <table
            className="table-tag"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <tr>
              <th className="table-head"></th>
              <th className="table-head">
                <span className="first-span">BI</span>
              </th>
              <th className="table-head">
                <span className="first-span">PIP</span>
              </th>
              <th className="table-head">
                <div className="table-logo-div">
                  <img
                    src={taal}
                    className="table-logo"
                    alt="Smiley face"
                  />
                </div>
                <div className="span-div">
                  <span className="first-span">#1 </span>
                  <span className="second-span">{t("Language")}</span>
                </div>
              </th>
              <th className="table-head">
                <div className="table-logo-div">
                  <img
                    src={woon}
                    className="table-logo"
                    alt="Smiley face"
                  />
                </div>
                <div className="span-div">
                  <span className="first-span">#2 </span>
                  <span className="second-span">{t("Place Of Residence")}</span>
                </div>
              </th>
              <th className="table-head">
                <div className="table-logo-div">
                  <img
                    src={wel}
                    className="table-logo"
                    alt="Smiley face"
                  />
                </div>
                <div className="span-div">
                  <span className="first-span">#3 </span>
                  <span className="second-span">{t("Well Being")}</span>
                </div>
              </th>
              <th className="table-head">
                <div className="table-logo-div">
                  <img
                    src={soc}
                    className="table-logo"
                    alt="Smiley face"
                  />
                </div>
                <div className="span-div">
                  <span className="first-span">#4</span>
                  <span className="second-span">{t("Social Contact")}</span>
                </div>
              </th>
              <th className="table-head">
                <div className="table-logo-div">
                  <img
                    src={werk}
                    className="table-logo"
                    alt="Smiley face"
                  />
                </div>
                <div className="span-div">
                  <span className="first-span">#5 </span>
                  <span className="second-span">{t("Work")}</span>
                </div>
              </th>
              <th className="table-head">
                <div className="table-logo-div">
                  <img
                    src={bijs}
                    className="table-logo"
                    alt="Smiley face"
                  />
                </div>
                <div className="span-div">
                  <span className="first-span">#6 </span>
                  <span className="second-span">{t("Training")}</span>
                </div>
              </th>
              <th className="table-head">
                <div className="table-logo-div">
                  <img
                    src={bij}
                    className="table-logo"
                    alt="Smiley face"
                  />
                </div>
                <div className="span-div">
                  <span className="first-span">#7 </span>
                  <span className="second-span">{t("Contribution")}</span>
                </div>
              </th>
              <th className="table-head">
                <div className="table-logo-div">
                  <img
                    src={maat}
                    className="table-logo"
                    alt="Smiley face"
                  />
                </div>
                <div className="span-div">
                  <span className="first-span">#8 </span>
                  <span className="second-span">{t("municipality_page_society")}</span>
                </div>
              </th>
              <th className="table-head">
                <div className="table-logo-div">
                  <img
                    src={zelf}
                    className="table-logo"
                    alt="Smiley face"
                  />
                </div>
                <div className="span-div">
                  <span className="first-span" style={{ fontSize: "6.5pt" }}>
                    #9
                  </span>
                  <span className="second-span" style={{ fontSize: "6.7pt" }}>
                    {t("Self-Sustainability-municipality-page")}
                  </span>
                </div>
              </th>
              <th className="table-head"></th>
              <th className="table-head">
                <span className="second-span">{t("Chat")}</span>
              </th>
              <th className="table-head">
                <span className="second-span">{t("Agenda")}</span>
              </th>
              <th className="table-head">
                <span className="second-span">{t("Compensation")}</span>
              </th>
              <th className="table-head">
                <span className="second-span">{t("Expected EndDate")}</span>
              </th>
            </tr>
            {AllRefuges &&
              AllRefuges.listAllRefugees &&
              AllRefuges.listAllRefugees.docs !== null &&
              AllRefuges.listAllRefugees.docs.length > 0 &&
              AllRefuges.listAllRefugees.docs.map((doc) => (
                <tr key={doc.id}>
                  <td
                    className="table-row"
                    onClick={() => handleClickProgressopen(doc)}
                  >
                    {doc.name}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <i
                      className="fa fa-file-text-o file-icon"
                      onClick={() => handleClickBiopen(doc)}
                    ></i>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <i
                      className="fa fa-file-text-o file-icon"
                      onClick={() => handleClickPipVersionOpen(doc)}
                    ></i>
                  </td>

                  <td
                    className="table-row"
                    onClick={() => handleClickProgressopen(doc)}
                    style={{
                      background:
                        `linear-gradient(90deg, #53b780 ${doc.pipProgress.language}%, white 0%)`,
                    }}
                  >
                    {doc.pipProgress.language}{"%"}
                  </td>
                  <td
                    className="table-row"
                    onClick={() => handleClickProgressopen(doc)}
                    style={{
                      background:
                        `linear-gradient(90deg, #53b780 ${doc.pipProgress.placeOfResidence}%, white 0%)`,
                    }}
                  >
                    {doc.pipProgress.placeOfResidence}{"%"}
                  </td>
                  <td
                    className="table-row"
                    onClick={() => handleClickProgressopen(doc)}
                    style={{
                      background:
                        `linear-gradient(90deg, #53b780 ${doc.pipProgress.wellbeing}%, white 0%)`,
                    }}
                  >
                    {doc.pipProgress.wellbeing}{"%"}
                  </td>
                  <td
                    className="table-row"
                    onClick={() => handleClickProgressopen(doc)}
                    style={{
                      background:
                        `linear-gradient(90deg, #53b780 ${doc.pipProgress.socialContact}%, white 0%)`,
                    }}
                  >
                    {doc.pipProgress.socialContact}{"%"}
                  </td>
                  <td
                    className="table-row"
                    onClick={() => handleClickProgressopen(doc)}
                    style={{
                      background:
                        `linear-gradient(90deg, #53b780 ${doc.pipProgress.work}%, white 0%)`,
                    }}
                  >
                    {doc.pipProgress.work}{"%"}
                  </td>
                  <td
                    className="table-row"
                    onClick={() => handleClickProgressopen(doc)}
                    style={{
                      background:
                        `linear-gradient(90deg, #53b780 ${doc.pipProgress.training}%, white 0%)`,
                    }}
                  >
                    {doc.pipProgress.training}{"%"}
                  </td>
                  <td
                    className="table-row"
                    onClick={() => handleClickProgressopen(doc)}
                    style={{
                      background:
                        `linear-gradient(90deg, #53b780 ${doc.pipProgress.contribution}%, white 0%)`,
                    }}
                  >
                    {doc.pipProgress.contribution}{"%"}
                  </td>
                  <td
                    className="table-row"
                    onClick={() => handleClickProgressopen(doc)}
                    style={{
                      background:
                        `linear-gradient(90deg, #53b780 ${doc.pipProgress.society}%, white 0%)`,
                    }}
                  >
                    {doc.pipProgress.society}{"%"}
                  </td>
                  <td
                    className="table-row"
                    onClick={() => handleClickProgressopen(doc)}
                    style={{
                      background:
                        `linear-gradient(90deg, #53b780 ${doc.pipProgress.selfSustainability}%, white 0%)`,
                    }}
                  >
                    {doc.pipProgress.selfSustainability}{"%"}
                  </td>
                  <td className="table-row">
                    <img
                      src={noti}
                      className="table-icon"
                      alt="Smiley face"
                      onClick={() => handleClickNotiopen(doc)}
                    />

                  </td>
                  <td className="table-row">
                    <img
                      src={chat}
                      className="table-icon-chat"
                      alt="Smiley face"
                      onClick={() => handleClickChatopen(doc)}
                    />
                  </td>
                  <td className="table-row">
                    <img
                      src={calender}
                      className="table-icon-calender"
                      alt="Smiley face"
                      onClick={() => handleClickAgendaopen(doc)}
                    />
                  </td>
                  <td className="table-row">
                    <img
                      src={heart}
                      className="table-icon-heart"
                      alt="Smiley face"
                      onClick={() => handleClickFavopen(doc)}
                    />
                  </td>
                  <td className="table-row">{(doc.pipPlanSummary && doc.pipPlanSummary.endDate) ? (new Date(doc.pipPlanSummary.endDate)).toLocaleDateString() : "NA"}</td>
                </tr>
              ))}

          </table>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p
              className="add-persoon"
              onClick={() => handleClickPersoonopen("1")}
            >
              + {t("Add Refugee")}
            </p>
            <div style={{ float: "right" }}>
              <TablePagination
                colSpan={3}
                component="div"
                count={
                  AllRefuges && AllRefuges.listAllRefugees
                    ? AllRefuges.listAllRefugees.totalDocs
                    : 0
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                labelRowsPerPage={t('Rows per page')}
                classes={{
                  root: classes.tablePagination,
                }}
              />
            </div>
          </div>
        </div>

        <Grid
          container
          spacing={3}
        >
          <Grid item sm={12} xs={12}>
            <div className="voor-div">
              <Grid
                container
                spacing={3}
              >
                <Grid item sm={12} xs={12}>
                  <p
                    style={{ fontSize: "10pt", fontFamily: "opensans-regular" }}
                  >
                    {t("Extra for status holders in this common")}
                  </p>
                </Grid>

                {extraattributes_confirmation &&
                  extraattributes_confirmation.listExtraAttributes &&
                  extraattributes_confirmation.listExtraAttributes
                    .extraAttributes !== null &&
                  extraattributes_confirmation.listExtraAttributes.extraAttributes.map(
                    (doc) => (
                      <Grid item sm={2} xs={6}>
                        <div className="voor-div-child">{doc}</div>
                      </Grid>
                    ))}
              </Grid>
            </div>
          </Grid>

          <Grid item lg={1} md={12} sm={12} xs={12}></Grid>
          <Grid item lg={8} md={12} sm={12} xs={12} className={classes.con1}>
            <Typography variant="h5" gutterBottom className={classes.heading1}>
              {t("Statistics")}
            </Typography>
            {profile_data && profile_data.getMentorProfile && profile_data.getMentorProfile.municipality && profile_data.getMentorProfile.municipality.name && (
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.subheading1}
              >
                {profile_data.getMentorProfile.municipality.name}
              </Typography>
            )}
            {!pipprogress_stats_loadingg &&
              pipprogress_stats_confirmation &&
              pipprogress_stats_confirmation.getMunicipalityPIPProgressStats &&
              pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats && (
                <Barchart data={pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats} />
              )}

          </Grid>
          {!pipprogress_stats_loadingg &&
            pipprogress_stats_confirmation &&
            pipprogress_stats_confirmation.getMunicipalityPIPProgressStats &&
            pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats && (
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <div className="graph-total-mun">
                  <img
                    className="graph-total-image-mun"
                    src={graphb}
                    alt="grpahb"
                  ></img>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginTop: "-55px",
                      marginLeft: "-10px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0",
                        color: "#454a92",
                        fontFamily: "opensans-bold",
                        fontSize: "34pt",
                      }}
                    >
                      {parseInt(pipprogress_stats_confirmation.getMunicipalityPIPProgressStats.pipProgressStats.totalProgressPercent)}%
                </p>
                    <p
                      style={{
                        margin: "0",
                        marginTop: "-5px",
                        color: "#454a92",
                        fontFamily: "opensans-bold",
                        fontSize: "11pt",
                      }}
                    >
                      {t("Total progress")}
                    </p>
                    <p
                      style={{
                        margin: "0",
                        color: "#8fcccd",
                        fontFamily: "opensans-bold",
                        fontSize: "10pt",
                      }}
                    >
                      {t("Self-Sustainability-municipality-page")}
                    </p>
                  </div>
                </div>
              </Grid>
            )}
        </Grid>
      </Container>
    </div>
  );
}
export default withReducer(
  "MunicipalityPipPageReducer",
  reducer
)(MunicipalityPipPage);


import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import jwt from "jsonwebtoken";
import { makeStyles } from "@material-ui/core/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from 'react-i18next';

// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../store/withReducer";
import * as Actions from "../store/actions";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "black"
  },
  textField: {
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0"
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div style={{
        backgroundColor: "#ececec",
        // overflowY:"auto",
        height: "400px",
        borderRadius: "5px"
      }}>{children}</div>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root1: {
    // backgroundColor: "transparent",
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  },
  rootStyle: {
    borderRadius: 15,
    backgroundColor: "white",
    padding: "15px",
  },
  headingaddform: {
    color: "black",
    fontSize: "14px",
    fontWeight: "bold",
    borderBottom: "1px solid #8fcccd",
    width: "240px",
    paddingBottom: "2px",
    marginLeft: "10px",
    paddingRight: "110px",
    [theme.breakpoints.down('sm')]: {
      fontSize: "12px",
      width: "auto",
    },
  },
  headingaddform1: {
    color: "black",
    fontSize: "14px",
    fontWeight: "bold"
  },
  textField: {
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0"
  },
  textField1: {
    width: "15%",
    margin: 0,
    backgroundColor: "#daeff0"
  },
  textField3: {
    width: "40%",
    margin: 0,
    backgroundColor: "#daeff0"
  },
  input1: {
    height: "5px",
    border: 0
  },
  notchedOutline: {
    borderWidth: "0px"
  },
  lable: {
    fontStyle: "italic",
    textAlign: "left"
  },
  cornerbtn: {
    textAlign: "right"
  },
  cornerbtn1: {
    margin: theme.spacing(1),
    fontSize: "13px",
    backgroundColor: "#454a92",
    width: "160px",
    opacity: 1
  },
  btnupload: {
    backgroundColor: "#454a92"
  },
  input: {
    display: "none"
  },
  tabLabel: {
    fontSize: "11px",
    fontWeight: "600",
    textTransform: "none"
  },
  default_tabStyle: {
    backgroundColor: 'white',
    border: "2px solid #ececec",
    borderBottom: "none",
    borderRadius: "5px 5px 0px 0px",
    height: "30px",
    minHeight: "30px",
    minWidth: "130px",
    width: "130px",
    maxWidth: "130px",
    fontSize: "x-small",
    marginLeft: "10px",
    textTransform: "none"
  },

  active_tabStyle: {
    backgroundColor: '#ececec',
    borderRadius: "5px 5px 0px 0px",

    // marginRight:"10px",
    height: "30px",
    minHeight: "30px",
    width: "130px",
    minWidth: "130px",
    maxWidth: "130px",
    fontSize: "x-small",
    marginLeft: "10px",
    textTransform: "none"
  },
  send_btn: {
    float: "right"
  },
  head: {
    height: "fit-content", width: "fit-content", boxShadow: "none", backgroundColor: "white", color: "black",
    [theme.breakpoints.down('sm')]: {
      width: "auto"
    }
  }
}));

function Chatmodal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [totalDocs, setTotalDocs] = React.useState(0);
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [listMessagesState, setListMessagesState] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [value, setValue] = React.useState(0);
  const [t] = useTranslation();

  React.useEffect(() => {
    if (props.data && props.data.id && props.data.mentor && value === 0) {
      dispatch(Actions.getChatHistory(page + 1, rowsPerPage, props.data.id, props.data.mentor._id));
    }
    if (props.data && props.data.id && props.data.suppliers && props.data.suppliers.work && value === 1) {
      dispatch(Actions.getChatHistory(page + 1, rowsPerPage, props.data.id, props.data.suppliers.work._id));
    }
    if (props.data && props.data.id && props.data.suppliers && props.data.suppliers.school && value === 2) {
      dispatch(Actions.getChatHistory(page + 1, rowsPerPage, props.data.id, props.data.suppliers.school._id));
    }

  }, [dispatch, props, value])
  const msgs = useSelector(
    ({ Chatreducer }) =>
      Chatreducer.chatHistoryReducer.data
  );
  const loading = useSelector(
    ({ Chatreducer }) =>
      Chatreducer.chatHistoryReducer.isLoading
  );

  const errMsg = useSelector(
    ({ Chatreducer }) =>
      Chatreducer.chatHistoryReducer.errMsg
  );
  const fetchMoreData = () => {
    if (props.data && props.data.id && props.data.mentor && value === 0) {
      dispatch(Actions.getChatHistory(page + 1, rowsPerPage, props.data.id, props.data.mentor._id));
    }
    if (props.data && props.data.id && props.data.suppliers && props.data.suppliers.work && value === 1) {
      dispatch(Actions.getChatHistory(page + 1, rowsPerPage, props.data.id, props.data.suppliers.work._id));
    }
    if (props.data && props.data.id && props.data.suppliers && props.data.suppliers.school && value === 2) {
      dispatch(Actions.getChatHistory(page + 1, rowsPerPage, props.data.id, props.data.suppliers.school._id));
    }
  }
  React.useEffect(() => {
    if (
      msgs &&
      msgs.getAllChatMessages &&
      msgs.getAllChatMessages.docs &&
      msgs.getAllChatMessages.docs.length > 0
    ) {
      setPage(page + 1);
      setTotalDocs(msgs.getAllChatMessages.totalDocs);
      setHasNextPage(msgs.getAllChatMessages.hasNextPage);
      setListMessagesState(listMessagesState => [...listMessagesState, ...msgs.getAllChatMessages.docs]);
    }
  }, [msgs]);
  const handleChange = (event, newValue) => {
    setPage(0);
    setHasNextPage(false);
    setRowsPerPage(10);
    setTotalDocs(0);
    setListMessagesState([]);
    setValue(newValue);
  };



  const handleClose = status => {
    props.methodd(false);
  };
  React.useEffect(() => {
    return () => {
      dispatch(Actions.resetChatHistory(true));
      setPage(0);
      setHasNextPage(false);
      setRowsPerPage(10);
      setTotalDocs(0);
      setListMessagesState([]);
    };
  }, []);
  return (
    <div>

      <Dialog
        classes={{
          paper: classes.rootStyle
        }}
        onClose={() => handleClose(false)}
        aria-labelledby="customized-dialog-title"
        BackdropProps={{
          classes: {
            root: classes.root1
          }
        }}
        open={props.status}
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => handleClose(false)}
        >
          <p className="citemsf">
            <i className="fa fa-weixin" style={{ marginRight: "10px", color: "#8fcccd", fontSize: "28px", }}> </i>

            <span className={classes.headingaddform}>{props.data.name}</span>

          </p>
        </DialogTitle>
        <DialogContent
          style={{ overflowY: "hidden" }}
        >
          <div className="chat-div">
            <AppBar position="static" className={classes.head}>
              <Tabs TabIndicatorProps={{
                style: {
                  backgroundColor: "transparent",
                }
              }}
                style={{ minHeight: "0px" }}
                variant="scrollable"
                scrollButtons="auto"
                value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab
                  className={value === 0 ? classes.active_tabStyle : classes.default_tabStyle}
                  style={{ marginLeft: "50px" }}
                  label={<span className={classes.tabLabel}>{t("Mentor")}</span>} {...a11yProps(0)} />
                <Tab
                  className={value === 1 ? classes.active_tabStyle : classes.default_tabStyle}
                  label={<span className={classes.tabLabel}>{t("Work Supplier")}</span>} {...a11yProps(1)} />
                <Tab
                  className={value === 2 ? classes.active_tabStyle : classes.default_tabStyle}
                  label={<span className={classes.tabLabel}>{t("School Supplier")}</span>} {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              {props.data.mentor && (
                <div className="chat-tab-div">
                  <div className="msg-wrapper">
                    <InfiniteScroll
                      dataLength={listMessagesState ? listMessagesState.length : 0}
                      next={fetchMoreData}
                      hasMore={hasNextPage}
                      style={{ overflowX: "hidden" }}
                      loader={<h4>Loading...</h4>}
                      height={260}
                      endMessage={
                        <p style={{ textAlign: "center" }}>
                          <b></b>
                        </p>
                      }
                    >
                      {listMessagesState &&
                        listMessagesState.length > 0 &&
                        listMessagesState.map((msg) => (


                          (msg.type === "text") ? (<div className={(msg.senderId !== props.data.id) ? "chat-receiver sb12" : "chat-sender sb11"}>
                            <h5 className="msg-head">{(msg.senderId === props.data.id) ? "Refugee " + props.data.name : "Mentor " + props.data.mentor.name} {(new Date(msg.sentTime)).toLocaleString()}</h5>
                            <p className="msg-text">{msg.body}</p>
                            <div className={(msg.senderId !== props.data.id && msg.status === "seen") ? "seen-msg-div" : "seen-msg-div-none"}>
                              <span style={{ margin: "3px", float: "right", fontSize: "12px" }}>{(new Date(msg.sentTime)).toLocaleString()}</span>
                              <DoneAllIcon style={{ color: "#3f51b5", margin: 0, float: "right" }} />
                            </div>
                          </div>) : (msg.type === "location") ? (
                            <div className={(msg.senderId !== props.data.id) ? "chat-receiver-map-div" : "chat-sender-map-div"}>
                              <img src={`https://maps.googleapis.com/maps/api/staticmap?autoscale=1&size=300x250&maptype=terrian&visual_refresh=true&markers=icon:https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png%7C+${msg.body}&key=AIzaSyBMTDZk_CjaVVecOn26hTTmlFZJ1WTCVNA`} alt="Map" className={(msg.senderId === jwt.decode(localStorage.jwtToken).id) ? "chat-receiver-map" : "chat-sender-map"} />
                            </div>)
                            : (msg.type === "image") ? (
                              <div className={(msg.senderId !== props.data.id) ? "chat-receiver-map-div" : "chat-sender-map-div"}>
                                <img src={msg.body} alt="Image" className={(msg.senderId === jwt.decode(localStorage.jwtToken).id) ? "chat-receiver-map" : "chat-sender-map"} />
                              </div>)
                              : (null)
                        ))}
                    </InfiniteScroll>
                  </div>



                </div>
              )}
              {!props.data.mentor && (
                <div style={{ padding: "100px" }}>{t("Mentor is not assign to this refugee")}</div>
              )}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {props.data.suppliers && props.data.suppliers.work && (
                <div className="chat-tab-div">

                  <div className="msg-wrapper">
                    <InfiniteScroll
                      dataLength={listMessagesState ? listMessagesState.length : 0}
                      next={fetchMoreData}
                      hasMore={hasNextPage}
                      loader={<h4>Loading...</h4>}
                      height={260}
                      style={{ overflowX: "hidden" }}
                      endMessage={
                        <p style={{ textAlign: "center" }}>
                          <b></b>
                        </p>
                      }
                    >
                      {listMessagesState &&
                        listMessagesState.length > 0 &&
                        listMessagesState.map((msg) => (


                          (msg.type === "text") ? (<div className={(msg.senderId !== props.data.id) ? "chat-receiver sb12" : "chat-sender sb11"}>
                            <h5 className="msg-head">{(msg.senderId === props.data.id) ? "Refugee " + props.data.name : "Work Supplier " + props.data.suppliers.work.name} {(new Date(msg.sentTime)).toLocaleString()}</h5>
                            <p className="msg-text">{msg.body}</p>
                            <div className={(msg.senderId !== props.data.id && msg.status === "seen") ? "seen-msg-div" : "seen-msg-div-none"}>
                              <span style={{ margin: "3px", float: "right", fontSize: "12px" }}>{(new Date(msg.sentTime)).toLocaleString()}</span>
                              <DoneAllIcon style={{ color: "#3f51b5", margin: 0, float: "right" }} />
                            </div>
                          </div>) : (msg.type === "location") ? (
                            <div className={(msg.senderId !== props.data.id) ? "chat-receiver-map-div" : "chat-sender-map-div"}>
                              <img src={`https://maps.googleapis.com/maps/api/staticmap?autoscale=1&size=300x250&maptype=terrian&visual_refresh=true&markers=icon:https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png%7C+${msg.body}&key=AIzaSyBMTDZk_CjaVVecOn26hTTmlFZJ1WTCVNA`} alt="Map" className={(msg.senderId === jwt.decode(localStorage.jwtToken).id) ? "chat-receiver-map" : "chat-sender-map"} />
                            </div>)
                            : (msg.type === "image") ? (
                              <div className={(msg.senderId !== props.data.id) ? "chat-receiver-map-div" : "chat-sender-map-div"}>
                                <img src={msg.body} alt="Image" className={(msg.senderId === jwt.decode(localStorage.jwtToken).id) ? "chat-receiver-map" : "chat-sender-map"} />
                              </div>)
                              : (null)
                        ))}
                    </InfiniteScroll>
                  </div>


                </div>
              )}
              {!props.data.suppliers || !props.data.suppliers.work && (
                <div style={{ padding: "100px" }}>{t("Work Supplier is not assign to this refugee")}</div>
              )}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {props.data.suppliers && props.data.suppliers.school && (

                <div className="chat-tab-div">
                  <div className="msg-wrapper">
                    <InfiniteScroll
                      dataLength={listMessagesState ? listMessagesState.length : 0}
                      next={fetchMoreData}
                      hasMore={hasNextPage}
                      loader={<h4>Loading...</h4>}
                      height={260}
                      style={{ overflowX: "hidden" }}
                      endMessage={
                        <p style={{ textAlign: "center" }}>
                          <b></b>
                        </p>
                      }
                    >
                      {listMessagesState &&
                        listMessagesState.length > 0 &&
                        listMessagesState.map((msg) => (


                          (msg.type === "text") ? (<div className={(msg.senderId !== props.data.id) ? "chat-receiver sb12" : "chat-sender sb11"}>
                            <h5 className="msg-head">{(msg.senderId === props.data.id) ? "Refugee " + props.data.name : "School Supplier " + props.data.suppliers.school.name} {(new Date(msg.sentTime)).toLocaleString()}</h5>
                            <p className="msg-text">{msg.body}</p>
                            <div className={(msg.senderId !== props.data.id && msg.status === "seen") ? "seen-msg-div" : "seen-msg-div-none"}>
                              <span style={{ margin: "3px", float: "right", fontSize: "12px" }}>{(new Date(msg.sentTime)).toLocaleString()}</span>
                              <DoneAllIcon style={{ color: "#3f51b5", margin: 0, float: "right" }} />
                            </div>
                          </div>) : (msg.type === "location") ? (
                            <div className={(msg.senderId !== props.data.id) ? "chat-receiver-map-div" : "chat-sender-map-div"}>
                              <img src={`https://maps.googleapis.com/maps/api/staticmap?autoscale=1&size=300x250&maptype=terrian&visual_refresh=true&markers=icon:https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png%7C+${msg.body}&key=AIzaSyBMTDZk_CjaVVecOn26hTTmlFZJ1WTCVNA`} alt="Map" className={(msg.senderId === jwt.decode(localStorage.jwtToken).id) ? "chat-receiver-map" : "chat-sender-map"} />
                            </div>)
                            : (msg.type === "image") ? (
                              <div className={(msg.senderId !== props.data.id) ? "chat-receiver-map-div" : "chat-sender-map-div"}>
                                <img src={msg.body} alt="Image" className={(msg.senderId === jwt.decode(localStorage.jwtToken).id) ? "chat-receiver-map" : "chat-sender-map"} />
                              </div>)
                              : (null)
                        ))}
                    </InfiniteScroll>
                  </div>


                </div>
              )}
              {!props.data.suppliers || !props.data.suppliers.school && (
                <div style={{ padding: "100px" }}>{t("School Supplier is not assign to this refugee")}</div>
              )}
            </TabPanel>

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withReducer("Chatreducer", reducer)(Chatmodal);
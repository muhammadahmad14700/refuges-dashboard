
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
import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import jwt from "jsonwebtoken";
import { makeStyles } from "@material-ui/core/styles";
import io from "socket.io-client";
const ENDPOINT = "ws://35.233.45.129:5003";

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
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0"

    // height:"2%px",
    // padding: 0
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
    paddingRight: "110px"
  },
  headingaddform1: {
    color: "black",
    fontSize: "14px",
    fontWeight: "bold"
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0"

    // height:"2%px",
    // padding: 0
  },
  textField1: {
    // paddingTop: "20.5px",
    width: "15%",
    margin: 0,
    backgroundColor: "#daeff0"

    // height:"2%px",
    // padding: 0
  },
  textField3: {
    // paddingTop: "20.5px",
    width: "40%",
    margin: 0,
    backgroundColor: "#daeff0"

    // height:"2%px",
    // padding: 0
  },
  input1: {
    height: "5px",
    border: 0
  },
  notchedOutline: {
    borderWidth: "0px"
    // borderColor: "yellow !important"
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
    // height: "45px",
    // border: "1px solid white",
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
    //   border: "1px solid grey"
  },
  default_tabStyle: {
    // color: 'black',
    // fontSize:11,
    backgroundColor: 'white',
    border: "2px solid #ececec",
    borderBottom: "none",
    borderRadius: "5px 5px 0px 0px",
    // marginRight:"10px",
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
    // fontSize:11,
    // color: 'white',
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
  }
}));
let hasMoreState;
let pageState = 1;
let valueState = 0;
export default function Chatmodal(props) {
  const classes = useStyles();
  const [referenceNode, setReferenceNode] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [flag, setFlag] = React.useState(false);
  const [typing, setTyping] = React.useState(false);
  const [messages, setMessages] = React.useState([]); // Sent and received messages
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent
  const [room, setRoom] = React.useState('');
  const [length, setLength] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [messagesEnd, setMessagesEnd] = React.useState('');
  const [messagesTop, setMessagesTop] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(false);
  const socket = React.useRef();
  hasMoreState = hasMore;
  const handleChange = (event, newValue) => {
    valueState = newValue;
    setValue(newValue);
  };
  React.useEffect(() => {
    socket.current = io(ENDPOINT, {
      transports: ["websocket"],
      path: '/chat',
      query: {
        'token': localStorage.jwtToken
      }
    });
    socket.current.on('connect', () => {
      console.log("User Connected: ", socket.current.id);
      join();
    });
    socket.current.on('connect_error', (err) => {
      console.log("Connect error: ", err);
    });
    socket.current.on('connect_timeout', () => {
      console.log("Connect Timeout");
    });
    socket.current.on('reconnect', (attemptNumber) => {
      console.log("User Reconnected: ", attemptNumber);
    });
    socket.current.on('reconnect_error', (err) => {
      console.log("Reconnect error: ", err)
    });
    socket.current.on('reconnect_failed', () => {
      console.log("Reconnect Failed")
    });
    socket.current.on('disconnect', (reason) => {
      console.log("User Disconnected: ", reason);
    });
    socket.current.on('clientError', (data) => {
      console.error(data.msg);
    });
    socket.current.on('error', (err) => {
      console.log("Error: ", err);
    });
    socket.current.on('receiveMessage', (res) => {
      join();
    });
    socket.current.on('typing', () => {
      setTyping(true);
    });
    socket.current.on('stopTyping', () => {
      setTyping(false);
    });
    socket.current.on('seenMessages', (res) => {
      join();
    });

  }, []);
  React.useEffect(() => {
    if (newMessage === "") {
      socket.current.emit('stopTyping', {
        room: room
      });
    }
  }, [newMessage])
  React.useEffect(() => {
    valueState = value;
    join();
  }, [value]);

  function join() {
    socket.current.emit('join', {
      receiverId: props.data.id,
    }, (res) => {
      setMessages(res.messages.docs);
      setRoom(res.room);
      setHasMore(res.messages.hasNextPage);
      hasMoreState = res.messages.hasNextPage;
      setScrollTop(false);
      setLength(res.messages.totalDocs);
    });
  }
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
    socket.current.emit('typing', {
      room: room
    });
  };
  const handleFocus = (event) => {
    socket.current.emit('seenMessages', {
      room: room
    });
  };
  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) { //13 is the enter keycode
      //Do stuff in here
      event.preventDefault();
      handleSendMessage();
    }
  }
  const handleSendMessage = () => {
    socket.current.emit('sendMessage', {
      type: 'text',
      body: newMessage,
      room: room
    });
    join();
    setNewMessage("");
    setMessagesTop(false);
  };

  const scrollToBottom = () => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  };


  React.useEffect(() => {
    if (messagesEnd && !messagesTop) {
      scrollToBottom();
    }

  }, [scrollToBottom])

  React.useEffect(() => {
    if (flag && page && limit && hasMore && hasMoreState) {
      socket.current.emit('getAllChatMessages', {
        room: room,
        page: pageState,
        limit: limit
      }, (res) => {
        setMessagesTop(true);
        setHasMore(res.messages.hasNextPage);
        hasMoreState = res.messages.hasNextPage;
        setScrollTop(false);
        setLength(res.messages.totalDocs)
        const docs = res.messages.docs;
        setMessages(messages => docs.concat(messages))
        setFlag(false);
      });
    }

  }, [page, limit, flag, hasMore, hasMoreState, pageState])




  const handleClose = status => {
    setOpen(status);
    props.methodd(false);
  };
  const handleScroll = event => {
    var node = event.target;
    if (node.scrollTop === 0) {
      if (hasMoreState) {
        pageState = pageState + 1;
        setPage(page + 1);
        setScrollTop(true);
        setFlag(true);
        node.scrollTop = node.clientHeight;
      }

    }
  }
  const paneDidMount = (node) => {
    if (node) {
      node.addEventListener('scroll', handleScroll);
      setReferenceNode(node);
    }
  };
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
            <AppBar position="static" style={{ height: "fit-content", width: "fit-content", boxShadow: "none", backgroundColor: "white", color: "black" }}>
              <Tabs TabIndicatorProps={{
                style: {
                  backgroundColor: "transparent",
                }
              }}
                style={{ minHeight: "0px" }}

                value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab
                  className={value === 0 ? classes.active_tabStyle : classes.default_tabStyle}
                  style={{ marginLeft: "50px" }}
                  label={<span className={classes.tabLabel}>Mentor</span>} {...a11yProps(0)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>

              <div className="chat-tab-div">
                {(hasMore && scrollTop) ? <span className="typing">Loading...</span> : null}
                <div id="scrollableDiv" ref={paneDidMount} className="msg-wrapper">
                  {
                    messages &&
                    messages.map((msg) => (


                      (msg.type === "text") ? (<div className={(msg.senderId === jwt.decode(localStorage.jwtToken).id) ? "chat-receiver sb12" : "chat-sender sb11"}>
                        <h5 className="msg-head">{(msg.senderId === jwt.decode(localStorage.jwtToken).id) ? "Manager" : props.data.name} {(new Date(msg.sentTime)).toLocaleString()}</h5>
                        <p className="msg-text">{msg.body}</p>
                        <div className={(msg.senderId === jwt.decode(localStorage.jwtToken).id && msg.status === "seen") ? "seen-msg-div" : "seen-msg-div-none"}>
                          <span style={{ margin: "3px", float: "right", fontSize: "12px" }}>{(new Date(msg.sentTime)).toLocaleString()}</span>
                          <DoneAllIcon style={{ color: "#3f51b5", margin: 0, float: "right" }} />
                        </div>
                      </div>) : ((msg.type === "location") ? (
                        <div className={(msg.senderId === jwt.decode(localStorage.jwtToken).id) ? "chat-receiver-map-div" : "chat-sender-map-div"}>
                          <img src={`https://maps.googleapis.com/maps/api/staticmap?autoscale=1&size=300x250&maptype=terrian&visual_refresh=true&markers=icon:https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png%7C+${msg.body}&key=AIzaSyBMTDZk_CjaVVecOn26hTTmlFZJ1WTCVNA`} alt="Map" className={(msg.senderId === jwt.decode(localStorage.jwtToken).id) ? "chat-receiver-map" : "chat-sender-map"} />
                        </div>) : (null))
                    ))}
                  <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { setMessagesEnd(el) }}>
                  </div>
                </div>


                <div className="send-msg-wrapper">


                  <div className="input-msg-div">
                    <textarea className="input-msg-box"
                      rows="2" cols="50"
                      name="comment"
                      placeholder="Enter message here..."
                      value={newMessage}
                      onChange={handleNewMessageChange}
                      onClick={handleFocus}
                      onKeyPress={enterPressed}
                    />

                  </div>
                  <div className="send-btn-div">
                    <Button variant="contained" className={classes.send_btn} size="small" onClick={() => handleSendMessage()} color="primary" disabled={newMessage ? false : true} >
                      Send
</Button>
                  </div>
                </div>
                {typing ? <span className="typing">typing...</span> : null}

              </div>

            </TabPanel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
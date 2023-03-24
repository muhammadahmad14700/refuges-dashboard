import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from 'react-i18next';
import { roles } from '../../../utils/roles';

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
    color: "white"
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

const useStyles = makeStyles(theme => ({
  root1: {
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  },
  rootStyle: {
    borderRadius: 15,
    backgroundColor: "#505398",
    padding: "15px"
  },
  headingaddform: {
    color: "#8fcccd",
    fontSize: "14px",
    fontWeight: "bold",
    borderBottom: "1px solid #8fcccd",
    width: "270px",
    paddingBottom: "2px",
    [theme.breakpoints.down('sm')]: {
      width: "auto",
    },
  },
  headingaddform1: {
    color: "white",
    fontSize: "14px",
    fontWeight: "bold"
  }
}));
const notificationsData = {
  agenda_event: {
    key: "Agenda",
    added: {
      en: "New Agenda event is added by"
    },
    updated: {
      en: "Agenda event is updated by"
    },
    removed: {
      en: "Agenda event is removed by"
    }
  },
  pip_progress: {
    key: "Pip Progress",
    added: {
      en: "PipProgress is added by"
    },
    updated: {
      en: "PipProgress is updated by"
    },
    removed: {
      en: "PipProgress is removed by"
    }
  },
  pip_plan: {
    key: "Pip Plan",
    added: {
      en: "pipPlan is added by"
    },
    updated: {
      en: "pipPlan is updated by"
    },
    removed: {
      en: "pipPlan is removed by"
    },
    final_approval_date: {
      en: "final approval date is added by"
    }
  },
  chat_message: {
    key: "Chat Message",
    text: {
      en: "send a text message to"
    },
    image: {
      en: "send image to"
    },
    location: {
      en: "send location to"
    }
  }
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function Notimodal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [totalDocs, setTotalDocs] = React.useState(0);
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [listNotificationsState, setListNotificationsState] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleClose = status => {
    props.methodd(false);
  };
  React.useEffect(() => {
    return () => {
      dispatch(Actions.resetNotifications(true));
      setListNotificationsState([]);
    };
  }, []);
  React.useEffect(() => {
    if (props.data) {
      dispatch(Actions.getAllNotifications(page + 1, rowsPerPage, props.data.id));
    }
  }, [dispatch, props.data]);
  const notifications = useSelector(
    ({ Notimodalreducer }) => Notimodalreducer.AllNotificationsReducer.data
  );

  const loading = useSelector(
    ({ Notimodalreducer }) =>
      Notimodalreducer.AllNotificationsReducer.isLoading
  );

  const errMsg = useSelector(
    ({ Notimodalreducer }) => Notimodalreducer.AllNotificationsReducer.errMsg
  );
  const fetchMoreData = () => {
    dispatch(
      Actions.getAllNotifications(
        page + 1,
        rowsPerPage,
        props.data.id
      ));
  }
  React.useEffect(() => {
    if (
      notifications &&
      notifications.listAllNotifications &&
      notifications.listAllNotifications.docs &&
      notifications.listAllNotifications.docs.length > 0
    ) {
      setPage(page + 1);
      setTotalDocs(notifications.listAllNotifications.totalDocs);
      setHasNextPage(notifications.listAllNotifications.hasNextPage);
      setListNotificationsState(listNotificationsState => [...listNotificationsState, ...notifications.listAllNotifications.docs]);
    }
  }, [notifications]);
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
        maxWidth="sm"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => handleClose(false)}
        >
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform1}
          >
            {props.data.name}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform}
          >
            {t("Notifications")}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <InfiniteScroll
            dataLength={listNotificationsState ? listNotificationsState.length : 0}
            next={fetchMoreData}
            hasMore={hasNextPage}
            loader={<h4>Loading...</h4>}
            height={240}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b></b>
              </p>
            }
          >
            {listNotificationsState &&
              listNotificationsState.length > 0 &&
              listNotificationsState.map((doc, index) => (
                <div className="div-notimodal">
                  <div className="div-notimodal-child1">
                    <p className="citemsf">
                      <i
                        style={{
                          fontSize: "24px",
                          display: "inline-block",
                          color: "red"
                        }}
                        className="fa fa-envelope fa-bell-o"
                      ></i>
                      <span
                        style={{
                          marginLeft: "15px",
                          fontSize: "16px",
                          fontStyle: "italic"
                        }}
                      >
                        {t("Notification")}:&nbsp;
            </span>
                      <span
                        style={{

                          fontSize: "16px",
                          fontWeight: "bold"
                        }}
                      >
                        {notificationsData[doc.entity].key}
                      </span>
                    </p>
                  </div>
                  <div className="div-notimodal-child2">

                    <p style={{ fontStyle: "italic", fontSize: "16px" }}>{doc.createdAt ? (new Date(doc.createdAt)).toLocaleDateString() : "NA"}</p>
                  </div>
                  <p
                    style={{ fontSize: "16px", }}
                  >
                    {doc.entity === "chat_message" ? capitalizeFirstLetter(roles[doc.sender.role].title) + " " + notificationsData["chat_message"][doc.entityType]["en"] + " " + roles[doc.receiver.role].title : notificationsData[doc.entity][doc.entityType]["en"] + " " + roles[doc.sender.role].title}
                  </p>
                </div>
              ))}
          </InfiniteScroll>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withReducer("Notimodalreducer", reducer)(Notimodal);

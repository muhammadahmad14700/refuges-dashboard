import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PIPmodal from "./PIPmodal";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../../../store/withReducer";
import * as Actions from "../store/actions";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "black",
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
});

const DialogTitle = withStyles(styles)((props) => {
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

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


const useStyles = makeStyles((theme) => ({
  root1: {
    // backgroundColor: "transparent",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  rootStyle: {
    borderRadius: 15,
    backgroundColor: "white",
    paddingTop: "25px",
    paddinBottom: "25px",
    paddingLeft: "45px",
    paddingRight: "25px",
    [theme.breakpoints.down('sm')]: {
      paddingTop: "10px",
      paddinBottom: "10px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  headingaddform: {
    color: "#8fcccd",
    fontSize: "14px",
    fontWeight: "bold",
    borderBottom: "1px solid #8fcccd",
    width: "270px",
    paddingBottom: "2px",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
  },
  headingaddform1: {
    color: "black",
    fontSize: "14px",
    fontWeight: "bold",
  },
  dividerColor: {
    marginTop: "45px",
    backgroundColor: "black",
  },
  textField: {
    // paddingTop: "20.5px",
    width: "100%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  textField1: {
    // paddingTop: "20.5px",
    width: "15%",
    margin: 0,
    backgroundColor: "#daeff0",

    // height:"2%px",
    // padding: 0
  },
  input1: {
    height: "5px",
    border: 0,
  },
  notchedOutline: {
    borderWidth: "0px",
    // borderColor: "yellow !important"
  },
  lable: {
    fontStyle: "italic",
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
  table: {
    minWidth: 650,
  }
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#454a92",
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: "bold",
  }
}))(TableCell);
function Pipversionsmodal(props) {
  const classes = useStyles();
  const [t] = useTranslation();
  const [pipopen, setPipopen] = React.useState(false);
  const [index, setIndex] = React.useState('');
  const [versionId, setVersionId] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  var history = useHistory();
  React.useEffect(() => {
    if (props.data) {
      dispatch(Actions.getAllPipplanVersions(props.data.id, page + 1, rowsPerPage));
    }
  }, [dispatch, props.data, page, rowsPerPage]);

  const AllVersions = useSelector(
    ({ PipversionsmodalReducer }) =>
      PipversionsmodalReducer.AllPipplanVersionsReducer.data
  );
  const loading = useSelector(
    ({ PipversionsmodalReducer }) =>
      PipversionsmodalReducer.AllPipplanVersionsReducer.isLoading
  );

  const errMsg = useSelector(
    ({ PipversionsmodalReducer }) =>
      PipversionsmodalReducer.AllPipplanVersionsReducer.errMsg
  );






  const handleClickPipopen = (id, index) => {

    setPipopen(true);
    setVersionId(id);
    setIndex(index + 1);
  };

  const handleClose = (status) => {
    props.methodd(false);

  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };
  const Addpip = () => {
    history.push({
      pathname: "/addpipreportbymentor",
      state: props.data ? props.data : "",
      mid: props.mid ? props.mid : "",
    });
  };

  return (
    <div>
      {pipopen === true && versionId && props.data && index && (
        <PIPmodal index={index} status={pipopen} methodd={setPipopen} data={props.data} vData={versionId} mid={history.location.state ? history.location.state : ""} />
      )}
      <Dialog
        classes={{
          paper: classes.rootStyle,
        }}
        onClose={() => handleClose(false)}
        aria-labelledby="customized-dialog-title"
        BackdropProps={{
          classes: {
            root: classes.root1,
          },
        }}
        open={props.status}
        fullWidth={true}
        maxWidth="lg"
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
            {props.data
              ? props.data.id +
              " " +
              props.data.name
              : "NA"}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.headingaddform}
          >
            {t("Plan Inburgering en Participatie")} (PIP)
          </Typography>
        </DialogTitle>
        <DialogContent
        >
          <div style={{ width: "100%", height: "500px", textAlign: "center" }}>


            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className={classes.TableHead}>
                  <TableRow>
                    <StyledTableCell align="center">ID</StyledTableCell>
                    <StyledTableCell align="center">{t("Version")}</StyledTableCell>
                    <StyledTableCell align="center">{t("Created At")}</StyledTableCell>
                    <StyledTableCell align="center">{t("Actions")}</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {AllVersions &&
                    AllVersions.listAllPIPPlanVersions &&
                    AllVersions.listAllPIPPlanVersions.docs !== null &&
                    AllVersions.listAllPIPPlanVersions.docs.map((doc, index) => (
                      <TableRow key={doc.id}>
                        <TableCell align="center" component="th" scope="row">
                          {doc.id}
                        </TableCell>
                        <TableCell key={doc.id} align="center">{doc.version}</TableCell>
                        <TableCell key={doc.id} align="center">{(new Date(doc.createdAt)).toLocaleString()}</TableCell>
                        <TableCell key={doc.id} align="center">
                          <IconButton aria-label="delete" onClick={() => handleClickPipopen(doc, index)} >
                            <VisibilityOutlinedIcon color="primary" fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            {AllVersions && AllVersions.listAllPIPPlanVersions && AllVersions.listAllPIPPlanVersions.totalDocs === 0 && (
              <p>{t("No Data Found")}</p>
            )}
            {AllVersions && AllVersions.listAllPIPPlanVersions && AllVersions.listAllPIPPlanVersions.totalDocs === 0 && (
              <IconButton aria-label="delete" onClick={() => Addpip()} >
                <AddCircleOutlineIcon color="primary" fontSize="large" />
              </IconButton>
            )}

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={AllVersions && AllVersions.listAllPIPPlanVersions
                ? AllVersions.listAllPIPPlanVersions.totalDocs
                : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              labelRowsPerPage={t('Rows per page')}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withReducer("PipversionsmodalReducer", reducer)(Pipversionsmodal);

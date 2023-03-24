import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TablePagination from "@material-ui/core/TablePagination";
import { useHistory } from "react-router-dom";
import noti from "../../../../../assets/images/notification.svg";
import agendaIcon from "../../../../../assets/images/agenda_icon.svg";
import chatIcon from "../../../../../assets/images/chat_icon_purple.svg";
import Chatmodal from "../../municipality_pip/sub_components/Chatmodal";
import Agendamodal from "../../municipality_pip/sub_components/Agendamodal";
import viewIcon from "../../../../../assets/images/View_Account_Icon.svg";
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../../../store/withReducer";
import * as Actions from "../store/actions";
const useStyles = makeStyles((theme) => ({
  filterButton: {
    fontSize: "14px",
    fontFamily: "opensans-semibold",
    backgroundColor: "#454A92",
    height: "35px",
    color: "white",
    width: "140px",
    borderRadius: "0px",
    boxShadow: "none"
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
    boxShadow: "none"
  },
  tablePagination: {
    overflow: "visible",
  },
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  rootAction: {
    width: "50px",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    margin: "0 auto"
  },
  roott: {
    position: "relative",
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
    height: "252px",
    padding: "15px"
  },
  tableDataIcon: {
    textAlign: "center !important",
    paddingLeft: "0px !important",
    [theme.breakpoints.down('sm')]: {
      paddingLeft: "10px !important",
    }
  }
}));
function RefugeesData(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  var history = useHistory();
  const dispatch = useDispatch();
  const [pipdata, setPipdata] = React.useState(undefined);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [chatopen, setChatopen] = React.useState(false);
  const [opent, setOpent] = React.useState("");
  const [agendaopen, setAgendaopen] = React.useState(false);
  const handleTooltipClose = () => {
    setOpent("");
  };

  const handleTooltipOpen = (id) => {
    setOpent(id);
  };
  React.useEffect(() => {
    if (props.searchText) {
      dispatch(
        Actions.getAllSearchedRefugees(
          0 + 1,
          rowsPerPage,
          props.searchText,
          'all',
          '',
          '',
          'all'
        )
      );
    } else {
      dispatch(
        Actions.getAllSearchedRefugees(
          page + 1,
          rowsPerPage,
          props.searchText,
          'all',
          '',
          '',
          'all'
        )
      );
    }

  }, [rowsPerPage, page, props.searchText, dispatch]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const viewEditSummary = (data) => {
    history.push({
      pathname: "/viewRefugeeSummaryBySupplier",
      state: data
    });
  };
  const SearchedRefugees = useSelector(
    ({ RefugeesDataReducer }) =>
      RefugeesDataReducer.allSearchedRefugeesReducer.data
  );
  const loading = useSelector(
    ({ RefugeesDataReducer }) =>
      RefugeesDataReducer.allSearchedRefugeesReducer.isLoading
  );

  const errMsg = useSelector(
    ({ RefugeesDataReducer }) =>
      RefugeesDataReducer.allSearchedRefugeesReducer.errMsg
  );
  const handleClickChatopen = (data) => {
    setChatopen(true);
    setPipdata(data);
  };
  const handleClickAgendaopen = (data) => {
    dispatch(Actions.resetAllAgendas(true));
    setAgendaopen(true);
    setPipdata(data);
  };
  return (
    <div>
      {chatopen === true && pipdata && (
        <Chatmodal status={chatopen} methodd={setChatopen} data={pipdata} />
      )}
      {agendaopen === true && pipdata && (
        <Agendamodal status={agendaopen} methodd={setAgendaopen} data={pipdata} />
      )}
      <div className="system-search-filter-div">
        <div className="system-search-filter-total-div">
          {t("Total Refugees")}:{" "}
          {SearchedRefugees &&
            SearchedRefugees.searchAllRefugees &&
            SearchedRefugees.searchAllRefugees.totalDocs
            ? SearchedRefugees.searchAllRefugees.totalDocs
            : "0"}
        </div>
      </div>
      <div className="system-search-table-div">
        <table
          className="system-search-table-tag"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            backgroundColor: "white",
          }}
        >
          <tr onClick={() => handleTooltipClose()}>
            <th>{t("BSN")}</th>
            <th>{t("Refugee Name")}</th>

            <th>{t("Municipality")}</th>
            <th>{t("Mentor")}</th>
            <th className={classes.tableDataIcon}>{t("Notifications")}</th>
            <th className={classes.tableDataIcon}>{t("Chat")}</th>
            <th className={classes.tableDataIcon}>{t("Agenda")}</th>
            <th className={classes.tableDataIcon}>{t("Actions")}</th>
          </tr>
          {SearchedRefugees &&
            SearchedRefugees.searchAllRefugees &&
            SearchedRefugees.searchAllRefugees.docs !== null &&
            SearchedRefugees.searchAllRefugees.docs.map((doc) => (
              <tr>
                <td onClick={() => handleTooltipClose()}>{doc.bsn}</td>
                <td onClick={() => handleTooltipClose()}>{doc.name}</td>

                <td>
                  {doc.municipality ? (
                    doc.municipality.name
                  ) : (
                    <span className="unassigned-td">{t("Unassigned")}</span>
                  )}
                </td>
                <td onClick={() => handleTooltipClose()}>
                  {doc.mentor ? (
                    doc.mentor.name
                  ) : (
                    <span className="unassigned-td">{t("Unassigned")}</span>
                  )}
                </td>
                <td className={classes.tableDataIcon} onClick={() => handleTooltipClose()}>
                  <img
                    src={noti}
                    className="table-icon"
                    alt="Smiley face"
                    style={{ width: "20px" }}
                  />
                </td>
                <td className={classes.tableDataIcon} onClick={() => handleTooltipClose()}>
                  <img
                    src={chatIcon}
                    className="table-icon"
                    alt="Smiley face"
                    style={{ width: "26px" }}
                    onClick={() => handleClickChatopen(doc)}
                  />
                </td>
                <td className={classes.tableDataIcon} onClick={() => handleTooltipClose()}>
                  <img
                    src={agendaIcon}
                    className="table-icon"
                    alt="Smiley face"
                    style={{ width: "18px" }}
                    onClick={() => handleClickAgendaopen(doc)}
                  />
                </td>
                <td style={{ textAlign: "center", paddingLeft: "0px" }}>
                  <div className={classes.rootAction}>
                    <MoreHorizIcon onClick={() => handleTooltipOpen(doc.id)} style={{ color: "454A92", fontSize: 20, cursor: "pointer" }} />
                    {opent === doc.id ? (
                      <div className="dropdownActionViewSupplierDashboard">
                        <div className="tooltip-triangle"></div>

                        <div className="system-search-table-actions-view-icon-div">
                          <img
                            src={viewIcon}
                            className="system-search-table-icon"
                            alt="Smiley face"
                            onClick={() => viewEditSummary(doc)}
                          />
                        </div>
                      </div>

                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
        </table>
      </div>
      <div className="system-search-pagination-div">
        <TablePagination
          colSpan={3}
          component="div"
          count={
            SearchedRefugees && SearchedRefugees.searchAllRefugees
              ? SearchedRefugees.searchAllRefugees.totalDocs
              : 0
          }
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          labelRowsPerPage={t('Rows per page')}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          classes={{
            root: classes.tablePagination,
          }}
        />
      </div>
    </div>
  );
}
export default withReducer("RefugeesDataReducer", reducer)(RefugeesData);

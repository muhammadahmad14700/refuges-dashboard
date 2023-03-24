import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TablePagination from "@material-ui/core/TablePagination";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Tooltip from '@material-ui/core/Tooltip';
import blockIcon from '../../../../../assets/images/Block_User_Icon.svg'
import delIcon from '../../../../../assets/images/Delete_Icon.svg'
import restoreIcon from '../../../../../assets/images/restore_icon.svg'
import editIcon from '../../../../../assets/images/Update_Information_Icon.svg'
import viewIcon from "../../../../../assets/images/View_Account_Icon.svg";
import BlockDialog from "./BlockDialog";
import { useHistory } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";
import UnblockDialog from "./UnblockDialog";
import useStylesBootstrap from "../../../../../css/mui-custom-styles";
import { useTranslation } from 'react-i18next';
import { Truncate, TruncateEmail } from "../../../../../utils/functions"
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

    overflow: "visible"
  },
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  rootAction: {
    width: "120px",
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
    padding: "15px",
  },
  dropdownAction: {
    position: "absolute",
    zIndex: 1,
    border: "none",
    backgroundColor: "#454A92",
    borderRadius: "5px",
    color: "white",
    display: "flex"
  },

}));

function SuppliersData(props) {
  const [t] = useTranslation();
  let statuses = [
    {
      id: "blocked",
      name: t("Inactive"),
    },
    {
      id: "active",
      name: t("Active"),
    },
    {
      id: "all",
      name: t("All"),
    },
  ];
  let filters = [
    {
      id: "assigned",
      name: t("Assigned"),
    },
    {
      id: "unassigned",
      name: t("Unassigned"),
    },
    {
      id: "all",
      name: t("All"),
    },
  ];
  let schoolTypes = [

    {
      id: "school",
      name: t("School"),
    },
    {
      id: "work",
      name: t("Work"),
    },
    {
      id: "all",
      name: t("All"),
    },
  ];
  const classes = useStyles();
  const classess = useStylesBootstrap();
  var history = useHistory();
  const dispatch = useDispatch();
  const [unblockOpen, setUnblockOpen] = React.useState(false);
  const [blockOpen, setBlockOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState({
    id: "all",
    name: t("All"),
  });
  const [schoolTypesState, setSchoolTypes] = React.useState(schoolTypes);
  const [selectedSchoolType, setSelectedSchoolType] = React.useState({
    id: "all",
    name: t("All"),
  });
  const [confirmedFilter, setConfirmedFilter] = React.useState({
    id: "all",
    name: t("All"),
  });
  const [confirmedSchoolType, setConfirmedSchoolType] = React.useState({
    id: "all",
    name: t("All"),
  });
  const [statusesState, setStatusesState] = React.useState(statuses);
  const [selectedStatus, setSelectedStatus] = React.useState({
    id: "all",
    name: t("All"),
  });
  const [confirmedStatus, setConfirmedStatus] = React.useState({
    id: "all",
    name: t("All"),
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [opent, setOpent] = React.useState('');
  const [selectedData, setSelectedData] = React.useState('');
  const handleTooltipClose = () => {
    setOpent('');
  };

  const handleTooltipOpen = (id) => {
    setOpent(id);
  };
  const handleClick = () => {
    setOpen((prev) => !prev);
    handleTooltipClose();
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    if (props.searchText) {
      dispatch(Actions.getAllSearchedSuppliers(0 + 1, rowsPerPage, props.searchText, confirmedFilter.id, confirmedSchoolType.id, '', confirmedStatus.id));
    } else {
      dispatch(Actions.getAllSearchedSuppliers(page + 1, rowsPerPage, props.searchText, confirmedFilter.id, confirmedSchoolType.id, '', confirmedStatus.id));

    }
  }, [rowsPerPage, page, confirmedFilter, confirmedStatus.id, confirmedSchoolType, props.searchText, dispatch])
  const handleClickFilterContinue = () => {
    setPage(0);
    setRowsPerPage(10);
    setConfirmedFilter(selectedFilter);
    setConfirmedSchoolType(selectedSchoolType);
    setConfirmedStatus(selectedStatus);
    setOpen((prev) => !prev);

  };
  const handleChangeStatus = (status) => {
    setSelectedStatus(status);
  };
  const handleChangeSchoolFilter = (type) => {
    setSelectedSchoolType(type);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const viewEditSummary = (data) => {
    sessionStorage.setItem("user_id", data.id);
    sessionStorage.setItem("entity_name", data.name);
    history.push({
      pathname: "/viewEditSupplierSummaryByMentor"
    });
  };
  const viewSummary = (data) => {
    sessionStorage.setItem("user_id", data.id);
    sessionStorage.setItem("entity_name", data.name);
    history.push({
      pathname: "/viewSupplierSummaryByMentor"
    });
  };
  const SearchedSuppliers = useSelector(
    ({ SuppliersDataReducer }) =>
      SuppliersDataReducer.allSearchedSuppliersReducer.data
  );
  const loading = useSelector(
    ({ SuppliersDataReducer }) =>
      SuppliersDataReducer.allSearchedSuppliersReducer.isLoading
  );
  const errMsg = useSelector(
    ({ SuppliersDataReducer }) =>
      SuppliersDataReducer.allSearchedSuppliersReducer.errMsg
  );
  const handleClickBlockDialogclose = () => {
    setBlockOpen(false);
    setSelectedData('');
  };
  const handleClickBlockDialogopen = (data) => {
    setBlockOpen(true);
    setSelectedData(data);
  };
  const handleClickUnblockDialogclose = () => {
    setUnblockOpen(false);
    setSelectedData('');
  };
  const handleClickUnblockDialogopen = (data) => {
    setUnblockOpen(true);
    setSelectedData(data);
  };
  const handleClickDeleteDialogclose = () => {
    setDeleteOpen(false);
    setSelectedData('');
  };
  const handleClickDeleteDialogopen = (data) => {
    setDeleteOpen(true);
    setSelectedData(data);
  };
  return (
    <div>
      {unblockOpen === true && selectedData && (
        <UnblockDialog
          status={unblockOpen}
          methodd={handleClickUnblockDialogclose}
          data={selectedData}
          userType="supplier"
          page={page}
          rowsPerPage={rowsPerPage}
          searchText={props.searchText}
          confirmedFilter={confirmedFilter}
          confirmedSchoolType={confirmedSchoolType}
          confirmedStatus={confirmedStatus}
        />
      )}
      {blockOpen === true && selectedData && (
        <BlockDialog
          status={blockOpen}
          methodd={handleClickBlockDialogclose}
          data={selectedData}
          userType="supplier"
          page={page}
          rowsPerPage={rowsPerPage}
          searchText={props.searchText}
          confirmedFilter={confirmedFilter}
          confirmedSchoolType={confirmedSchoolType}
          confirmedStatus={confirmedStatus}
        />
      )}
      {deleteOpen === true && selectedData && (
        <DeleteDialog
          status={deleteOpen}
          methodd={handleClickDeleteDialogclose}
          data={selectedData}
          userType="supplier"
          page={page}
          rowsPerPage={rowsPerPage}
          searchText={props.searchText}
          confirmedFilter={confirmedFilter}
          confirmedSchoolType={confirmedSchoolType}
          confirmedStatus={confirmedStatus}
        />
      )}
      <div className="system-search-filter-div">
        <div className="system-search-filter-total-div">
          {t("Total Suppliers")}: {(SearchedSuppliers &&
            SearchedSuppliers.searchAllSuppliers &&
            SearchedSuppliers.searchAllSuppliers.totalDocs) ? SearchedSuppliers.searchAllSuppliers.totalDocs : "0"}
        </div>
        <div className="system-search-filter-school-button-div">
          {confirmedStatus.id !== "all" && (
            <div className="system-search-filter-school-confirmed-div">
              {confirmedStatus.name}
            </div>
          )}
          {confirmedSchoolType.id !== "all" && (
            <div className="system-search-filter-school-confirmed-div">
              {confirmedSchoolType.name}
            </div>
          )}
          <div className="system-search-filter-ClickAwayListener-div">
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className={classes.root}>
                <Button
                  variant="contained"
                  className={classes.filterButton}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color="primary"
                  startIcon={<FilterListIcon style={{ fontSize: 20 }} />}
                >
                  {t("Filter")}
                </Button>
                {open ? (
                  <div className={classes.dropdown}>
                    <p className="system-search-filter-title">{t("Select Options")}</p>
                    <div className="filter-parent-div">
                      <p className="filter-label">{t("Type")}</p>
                      <div className="system-search-filter-options-div">
                        {schoolTypesState.map((doc, firstIndex) => (
                          <div
                            className={
                              doc.id === selectedSchoolType.id
                                ? "system-search-filter-options-selected-div"
                                : "system-search-filter-options-unselected-div"
                            }
                            onClick={() => handleChangeSchoolFilter(doc)}
                          >
                            {doc.name}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="filter-parent-div">
                      <p className="filter-label">{t("Status")}</p>
                      <div className="system-search-filter-options-div">
                        {statusesState.map((doc, firstIndex) => (
                          <div
                            className={
                              doc.id === selectedStatus.id
                                ? "system-search-filter-options-selected-div"
                                : "system-search-filter-options-unselected-div"
                            }
                            onClick={() => handleChangeStatus(doc)}
                          >
                            {doc.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="system-search-filter-options-refugee-continue-btn-div">
                      <Button
                        variant="contained"
                        className={classes.filterContinueButton}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClickFilterContinue}
                        color="primary"
                      >
                        {t("Confirm")}
                      </Button>
                    </div>
                  </div>
                ) : null}
              </div>
            </ClickAwayListener>
          </div>
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
            <th>
              {t("Type")}
            </th>
            <th>
              {t("Supplier Name")}
            </th>
            <th>
              {t("Contact Person")}
            </th>
            <th>
              {t("Assigned Municipality")}
            </th>
            <th style={{ textAlign: "center", paddingLeft: "0px" }}>
              {t("Assigned Refugees")}
            </th>
            <th>
              {t("Telephone")}
            </th>
            <th>
              {t("E-mail")}
            </th>
            <th>
              {t("Created")}
            </th>
            <th style={{ textAlign: "center", paddingLeft: "0px" }}>
              {t("Actions")}
            </th>

          </tr>
          {SearchedSuppliers &&
            SearchedSuppliers.searchAllSuppliers &&
            SearchedSuppliers.searchAllSuppliers.docs !== null &&
            SearchedSuppliers.searchAllSuppliers.docs.map((doc) => (
              <tr>
                <td onClick={() => handleTooltipClose()}>
                  {doc.type}
                </td>
                <td onClick={() => handleTooltipClose()}>
                  <Tooltip classes={classess} title={doc.name} arrow><span>
                    {Truncate(doc.name)}
                  </span>
                  </Tooltip>
                </td>
                <td onClick={() => handleTooltipClose()}>
                  {doc.contactPerson ? (
                    <Tooltip classes={classess} title={doc.contactPerson.name} arrow><span>
                      {Truncate(doc.contactPerson.name)}
                    </span>
                    </Tooltip>
                  ) : <span className="unassigned-td">{t("NA")}</span>}
                </td>
                <td onClick={() => handleTooltipClose()}>
                  {doc.municipality ? (
                    <Tooltip classes={classess} title={doc.municipality.name} arrow><span>
                      {Truncate(doc.municipality.name)}
                    </span>
                    </Tooltip>
                  ) : <span className="unassigned-td">{t("Unassigned")}</span>}
                </td>
                <td style={{ textAlign: "center", paddingLeft: "0px" }} onClick={() => handleTooltipClose()}>{doc.totalRefugees}</td>
                <td onClick={() => handleTooltipClose()}>
                  {doc.phoneNumber}
                </td>
                <td onClick={() => handleTooltipClose()}>
                  <Tooltip classes={classess} title={doc.email} arrow><span>
                    {TruncateEmail(doc.email)}
                  </span>
                  </Tooltip>
                </td>
                <td onClick={() => handleTooltipClose()}>
                  {(doc.status && doc.status === "blocked") ? <span style={{ color: "#FF0000" }}>{t("Inactive")}</span> :
                    new Date(doc.createdAt).toLocaleDateString()
                  }                 </td>
                <td style={{ textAlign: "center", paddingLeft: "0px" }}>

                  <div className={classes.rootAction}>
                    <MoreHorizIcon onClick={() => handleTooltipOpen(doc.id)} style={{ color: "454A92", fontSize: 20, cursor: "pointer" }} />
                    {opent === doc.id ? (
                      <>
                        {doc.isAssigned ? (
                          <div className="dropdownAction">
                            <div className="tooltip-triangle"></div>

                            <div className="system-search-table-actions-icon-div">
                              <img
                                src={editIcon}
                                className="system-search-table-icon"
                                alt="Smiley face"
                                onClick={() => viewEditSummary(doc)}
                              />
                            </div>
                            {(doc.status && doc.status === "blocked") ?
                              <div className="system-search-table-actions-icon-div" onClick={() => handleClickUnblockDialogopen(doc)}>
                                <img
                                  src={restoreIcon}
                                  className="system-search-table-icon"
                                  alt="Smiley face"
                                />
                              </div>
                              :
                              <div className="system-search-table-actions-icon-div" onClick={() => handleClickBlockDialogopen(doc)}>
                                <img
                                  src={blockIcon}
                                  className="system-search-table-icon"
                                  alt="Smiley face"
                                />
                              </div>
                            }
                            {doc.isDeleted ?
                              <div className="system-search-table-actions-icon-delete-div">
                                <img
                                  src={delIcon}
                                  style={{ opacity: "0.5" }}
                                  className="system-search-table-icon-del"
                                  alt="Smiley face"
                                />
                              </div>
                              :
                              <div className="system-search-table-actions-icon-delete-div" onClick={() => handleClickDeleteDialogopen(doc)}>
                                <img
                                  src={delIcon}
                                  className="system-search-table-icon-del"
                                  alt="Smiley face"
                                />
                              </div>

                            }
                          </div>
                        )
                          :
                          <div className="dropdownActionView">
                            <div className="tooltip-triangle"></div>

                            <div className="system-search-table-actions-view-icon-div">
                              <img
                                src={viewIcon}
                                className="system-search-table-icon"
                                alt="Smiley face"
                                onClick={() => viewSummary(doc)}
                              />
                            </div>
                          </div>

                        }
                      </>
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
            SearchedSuppliers &&
              SearchedSuppliers.searchAllSuppliers
              ? SearchedSuppliers.searchAllSuppliers
                .totalDocs
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
  );
}
export default withReducer("SuppliersDataReducer", reducer)(SuppliersData);
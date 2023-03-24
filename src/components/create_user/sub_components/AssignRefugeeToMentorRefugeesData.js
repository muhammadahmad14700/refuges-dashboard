import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import checkIcon from '../../../assets/images/Tick_Mark_Icon.svg';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducers";
import withReducer from "../../../store/withReducer";
import * as Actions from "../store/actions";
const useStyles = makeStyles((theme) => ({
  filterButton: {
    fontSize: "14px",
    fontFamily: "opensans-semibold",
    backgroundColor: "#454A92",
    height: "35px",
    color: "white",
    width: "140px",
    borderRadius: "0px"
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
  },
  tablePagination: {

    overflow: "visible"
  },
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
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
    height: "226px",
  },
  chkroot: {
    padding: 2
  },
  icon: {
    border: "1px solid #454A92",
    borderRadius: 0,
    width: "18px",
    height: "18px",

  },
  checkedIcon: {
    backgroundColor: '#ffffff',
    '&:before': {
      display: 'block',
      width: "18px",
      height: "18px",
      backgroundImage: `url(${checkIcon})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "14px 14px",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#ffffff',
    },
  },
}));
// Inspired by blueprintjs
function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.chkroot}
      icon={<span className={classes.icon} />}
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      color="primary"
      {...props}
    />
  );
}
function AssignRefugeeToMentorRefugeesData(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  var history = useHistory();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [refugees, setRefugees] = React.useState({});
  React.useEffect(() => {
    let assignedMunicipalities = JSON.parse(sessionStorage.getItem("assignedMunicipalities"));
    if (assignedMunicipalities && assignedMunicipalities.length > 0) {
      let municipalities = JSON.parse(sessionStorage.getItem("assignedMunicipalities"));
      let municipalityId = municipalities[0].id
      if (props.searchText) {
        dispatch(Actions.getAllMiniSearchedRefugees(0 + 1, rowsPerPage, props.searchText, sessionStorage.getItem("user_id"), '', municipalityId));
      }
      else {
        dispatch(Actions.getAllMiniSearchedRefugees(page + 1, rowsPerPage, props.searchText, sessionStorage.getItem("user_id"), '', municipalityId));

      }
    }
    else {
      history.push({
        pathname: "/assignMunicipalityToMentor"
      });
    }
  }, [rowsPerPage, page, props.searchText, dispatch]);
  const handleChangeSelected = (index) => {
    let newObj = Object.assign({}, refugees);
    newObj.docs[index].isSelected = !refugees.docs[index].isSelected;
    if (newObj.docs[index].isSelected) {
      let newElement = {
        bsn: newObj.docs[index].bsn,
        id: newObj.docs[index].id,
        name: newObj.docs[index].name
      }
      props.setSelectedRefugees(() => [...props.selectedRefugees, newElement]);
    }
    if (!newObj.docs[index].isSelected) {
      props.setSelectedRefugees(props.selectedRefugees.filter(item => item.id !== newObj.docs[index].id));
    }
    setRefugees(newObj);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const SearchedRefugees = useSelector(
    ({ AssignRefugeeToMentorRefugeesDataReducer }) =>
      AssignRefugeeToMentorRefugeesDataReducer.allMiniSearchedRefugeesReducer.data
  );
  const loading = useSelector(
    ({ AssignRefugeeToMentorRefugeesDataReducer }) =>
      AssignRefugeeToMentorRefugeesDataReducer.allMiniSearchedRefugeesReducer.isLoading
  );

  const errMsg = useSelector(
    ({ AssignRefugeeToMentorRefugeesDataReducer }) =>
      AssignRefugeeToMentorRefugeesDataReducer.allMiniSearchedRefugeesReducer.errMsg
  );
  React.useEffect(() => {
    if (SearchedRefugees && SearchedRefugees.miniSearchAllRefugees && props.selectedRefugees.length === 0) {
      let refugeesObj = SearchedRefugees.miniSearchAllRefugees;
      if (refugeesObj.docs !== null && refugeesObj.docs.length > 0) {
        for (let i = 0; i < refugeesObj.docs.length; i++) {
          const doc = refugeesObj.docs[i];
          doc["isSelected"] = false;
        }
      }
      setRefugees(refugeesObj);

    }
    if (SearchedRefugees && SearchedRefugees.miniSearchAllRefugees && props.selectedRefugees.length > 0) {
      let selrefugeesObj = SearchedRefugees.miniSearchAllRefugees;
      if (selrefugeesObj.docs !== null && selrefugeesObj.docs.length > 0) {
        for (let i = 0; i < selrefugeesObj.docs.length; i++) {
          const seldoc = selrefugeesObj.docs[i];
          seldoc["isSelected"] = false;
          for (let j = 0; j < props.selectedRefugees.length; j++) {
            const selRefugee = props.selectedRefugees[j];
            if (seldoc.id === selRefugee.id) {
              seldoc["isSelected"] = true;
            }
          }

        }
      }
      setRefugees(selrefugeesObj);
    }

  }, [SearchedRefugees]);
  React.useEffect(() => {
    if (SearchedRefugees && SearchedRefugees.miniSearchAllRefugees && props.selectedRefugees.length > 0 && props.editCheck) {
      let selrefugeesObj = SearchedRefugees.miniSearchAllRefugees;
      if (selrefugeesObj.docs !== null && selrefugeesObj.docs.length > 0) {
        for (let i = 0; i < selrefugeesObj.docs.length; i++) {
          const seldoc = selrefugeesObj.docs[i];
          seldoc["isSelected"] = false;
          for (let j = 0; j < props.selectedRefugees.length; j++) {
            const selRefugee = props.selectedRefugees[j];
            if (seldoc.id === selRefugee.id) {
              seldoc["isSelected"] = true;
            }
          }

        }
      }
      setRefugees(selrefugeesObj);
      props.setEditCheck(false);
    }
  }, [props.editCheck, SearchedRefugees]);
  React.useEffect(() => {
    if (SearchedRefugees && SearchedRefugees.miniSearchAllRefugees && props.unAssignId) {
      let selrefugeesObj = SearchedRefugees.miniSearchAllRefugees;
      if (selrefugeesObj.docs !== null && selrefugeesObj.docs.length > 0) {
        for (let i = 0; i < selrefugeesObj.docs.length; i++) {
          const seldoc = selrefugeesObj.docs[i];
          seldoc["isSelected"] = false;
          for (let j = 0; j < props.selectedRefugees.length; j++) {
            const selRefugee = props.selectedRefugees[j];
            if (seldoc.id === selRefugee.id) {
              seldoc["isSelected"] = true;
            }
          }

        }
      }
      setRefugees(selrefugeesObj);
      props.setUnAssignId(false);
    }
  }, [props.unAssignId, props.selectedRefugees]);
  return (
    <div>
      <div className="system-search-filter-div">
        <div className="system-search-filter-total-div">
          {t("Total Refugees")}: {(refugees && refugees.totalDocs) ? refugees.totalDocs : "0"}
        </div>

      </div>

      <div className="edit-mun-table-div">
        <table
          className="system-search-table-tag"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            backgroundColor: "white",
          }}
        >

          <tr>
            <th>
              {t("BSN")}
            </th>
            <th>
              {t("Name")}
            </th>

            <th>
              {t("Assigned Municipality")}
            </th>
            <th>
              {t("Assign")}
            </th>

          </tr>
          {refugees && refugees.docs !== null && refugees.docs &&
            refugees.docs.length > 0 &&
            refugees.docs.map((doc, index) => (
              <tr>
                <td>
                  {doc.bsn}
                </td>
                <td>
                  {doc.name}
                </td>
                <td>
                  {doc.municipality ? doc.municipality.name : <span className="unassigned-td">{t("Unassigned")}</span>}
                </td>
                <td>
                  <StyledCheckbox
                    checked={doc.isSelected}
                    onClick={() => handleChangeSelected(index)}
                  />
                </td>
              </tr>
            ))}
        </table>
      </div>
      <div className="assign-mentor-to-municipality-pagination-div">


        <TablePagination
          colSpan={3}
          component="div"
          count={
            refugees && refugees.totalDocs
              ? refugees
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
export default withReducer("AssignRefugeeToMentorRefugeesDataReducer", reducer)(AssignRefugeeToMentorRefugeesData);
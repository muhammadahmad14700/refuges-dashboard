import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import checkIcon from '../../../assets/images/Tick_Mark_Icon.svg';
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
function AssignMentorToMunicipalityMentorsData(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [mentors, setMentors] = React.useState({});
  React.useEffect(() => {
    if (sessionStorage.getItem("user_id")) {
      if (props.searchText) {
        dispatch(Actions.getAllMiniSearchedMentors(0 + 1, rowsPerPage, props.searchText, '', sessionStorage.getItem("user_id")));
      }
      else {
        dispatch(Actions.getAllMiniSearchedMentors(page + 1, rowsPerPage, props.searchText, '', sessionStorage.getItem("user_id")));

      }
    }
  }, [rowsPerPage, page, props.searchText, dispatch]);
  const handleChangeSelected = (index) => {
    let newObj = Object.assign({}, mentors);
    newObj.docs[index].isSelected = !mentors.docs[index].isSelected;
    if (newObj.docs[index].isSelected) {
      let newElement = {
        bsn: newObj.docs[index].bsn,
        id: newObj.docs[index].id,
        name: newObj.docs[index].name
      }
      props.setSelectedMentors(() => [...props.selectedMentors, newElement]);
    }
    if (!newObj.docs[index].isSelected) {
      props.setSelectedMentors(props.selectedMentors.filter(item => item.id !== newObj.docs[index].id));
    }
    setMentors(newObj);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const SearchedMentors = useSelector(
    ({ AssignMentorToMunicipalityMentorsDataReducer }) =>
      AssignMentorToMunicipalityMentorsDataReducer.allMiniSearchedMentorsReducer.data
  );
  const loading = useSelector(
    ({ AssignMentorToMunicipalityMentorsDataReducer }) =>
      AssignMentorToMunicipalityMentorsDataReducer.allMiniSearchedMentorsReducer.isLoading
  );

  const errMsg = useSelector(
    ({ AssignMentorToMunicipalityMentorsDataReducer }) =>
      AssignMentorToMunicipalityMentorsDataReducer.allMiniSearchedMentorsReducer.errMsg
  );
  React.useEffect(() => {
    if (SearchedMentors && SearchedMentors.miniSearchAllMentors && props.selectedMentors.length === 0) {
      let mentorsObj = SearchedMentors.miniSearchAllMentors;
      if (mentorsObj.docs !== null && mentorsObj.docs.length > 0) {
        for (let i = 0; i < mentorsObj.docs.length; i++) {
          const doc = mentorsObj.docs[i];
          doc["isSelected"] = false;
        }
      }
      setMentors(mentorsObj);

    }
    if (SearchedMentors && SearchedMentors.miniSearchAllMentors && props.selectedMentors.length > 0) {
      let selmentorsObj = SearchedMentors.miniSearchAllMentors;
      if (selmentorsObj.docs !== null && selmentorsObj.docs.length > 0) {
        for (let i = 0; i < selmentorsObj.docs.length; i++) {
          const seldoc = selmentorsObj.docs[i];
          seldoc["isSelected"] = false;
          for (let j = 0; j < props.selectedMentors.length; j++) {
            const selMentor = props.selectedMentors[j];
            if (seldoc.id === selMentor.id) {
              seldoc["isSelected"] = true;
            }
          }

        }
      }
      setMentors(selmentorsObj);
    }

  }, [SearchedMentors]);
  React.useEffect(() => {
    if (SearchedMentors && SearchedMentors.miniSearchAllMentors && props.selectedMentors.length > 0 && props.editCheck) {
      let selmentorsObj = SearchedMentors.miniSearchAllMentors;
      if (selmentorsObj.docs !== null && selmentorsObj.docs.length > 0) {
        for (let i = 0; i < selmentorsObj.docs.length; i++) {
          const seldoc = selmentorsObj.docs[i];
          seldoc["isSelected"] = false;
          for (let j = 0; j < props.selectedMentors.length; j++) {
            const selMentor = props.selectedMentors[j];
            if (seldoc.id === selMentor.id) {
              seldoc["isSelected"] = true;
            }
          }

        }
      }
      setMentors(selmentorsObj);
    }
  }, [props.editCheck, SearchedMentors]);
  React.useEffect(() => {
    if (SearchedMentors && SearchedMentors.miniSearchAllMentors && props.unAssignId) {
      let selmentorsObj = SearchedMentors.miniSearchAllMentors;
      if (selmentorsObj.docs !== null && selmentorsObj.docs.length > 0) {
        for (let i = 0; i < selmentorsObj.docs.length; i++) {
          const seldoc = selmentorsObj.docs[i];
          seldoc["isSelected"] = false;
          for (let j = 0; j < props.selectedMentors.length; j++) {
            const selMentor = props.selectedMentors[j];
            if (seldoc.id === selMentor.id) {
              seldoc["isSelected"] = true;
            }
          }

        }
      }
      setMentors(selmentorsObj);
      props.setUnAssignId(false);
    }
  }, [props.unAssignId, props.selectedMentors]);
  return (
    <div>
      <div className="system-search-filter-div">
        <div className="system-search-filter-total-div">
          {t("Total Mentors")}: {(mentors && mentors.totalDocs) ? mentors.totalDocs : "0"}
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
          {mentors && mentors.docs !== null && mentors.docs &&
            mentors.docs.length > 0 &&
            mentors.docs.map((doc, index) => (
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
            mentors && mentors.totalDocs
              ? mentors
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
export default withReducer("AssignMentorToMunicipalityMentorsDataReducer", reducer)(AssignMentorToMunicipalityMentorsData);
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
function AssignMunicipalityToSupplierMunicipalitiesData(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const timer = React.useRef();
  const [municipalities, setMunicipalities] = React.useState({});
  React.useEffect(() => {
    if (props.searchText) {
      dispatch(Actions.getAllMiniSearchedMunicipalities(0 + 1, rowsPerPage, props.searchText, '', '', sessionStorage.getItem("user_id")));

    }
    else {
      dispatch(Actions.getAllMiniSearchedMunicipalities(page + 1, rowsPerPage, props.searchText, '', '', sessionStorage.getItem("user_id")));

    }
  }, [rowsPerPage, page, props.searchText, dispatch]);
  const handleChangeSelected = (index) => {
    sessionStorage.removeItem("assignedRefugees");
    let newObj = Object.assign({}, municipalities);
    for (let i = 0; i < newObj.docs.length; i++) {
      const element = newObj.docs[i];
      if (i !== index) {
        element.isSelected = false;
      }

    }
    newObj.docs[index].isSelected = !municipalities.docs[index].isSelected;
    if (newObj.docs[index].isSelected && !newObj.docs[index].isAssigned) {
      let newElement = {
        id: newObj.docs[index].id,
        name: newObj.docs[index].name,
        province: newObj.docs[index].province,
        contactPerson: newObj.docs[index].contactPerson,
        isAssigned: newObj.docs[index].isAssigned,
      }
      if (props.assignedMunicipalitiesState.length > 0) {

        props.setUnSelectedMunicipalities(props.assignedMunicipalitiesState);
      }
      props.setAssignedMunicipalitiesState([]);
      props.setSelectedMunicipalities([newElement]);
    }
    if (newObj.docs[index].isSelected && newObj.docs[index].isAssigned) {
      let newElement = {
        id: newObj.docs[index].id,
        name: newObj.docs[index].name,
        province: newObj.docs[index].province,
        contactPerson: newObj.docs[index].contactPerson,
        isAssigned: newObj.docs[index].isAssigned,
      }
      props.setAssignedMunicipalitiesState([]);
      props.setSelectedMunicipalities([newElement]);
      if (props.unSelectedMunicipalities.length > 0) {
        props.setUnSelectedMunicipalities(props.unSelectedMunicipalities.filter(item => item.id !== newObj.docs[index].id));

      }

    }
    if (!newObj.docs[index].isSelected && !newObj.docs[index].isAssigned) {
      props.setSelectedMunicipalities(props.selectedMunicipalities.filter(item => item.id !== newObj.docs[index].id));
      props.setAssignedMunicipalitiesState(props.assignedMunicipalitiesState.filter(item => item.id !== newObj.docs[index].id));
    }
    if (!newObj.docs[index].isSelected && newObj.docs[index].isAssigned) {
      let newElement = {
        id: newObj.docs[index].id,
        name: newObj.docs[index].name,
        province: newObj.docs[index].province,
        contactPerson: newObj.docs[index].contactPerson,
        isAssigned: newObj.docs[index].isAssigned,
      }
      props.setUnSelectedMunicipalities([newElement]);
      props.setSelectedMunicipalities(props.selectedMunicipalities.filter(item => item.id !== newObj.docs[index].id));
      props.setAssignedMunicipalitiesState(props.assignedMunicipalitiesState.filter(item => item.id !== newObj.docs[index].id));
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const SearchedMunicipalities = useSelector(
    ({ AssignMunicipalityToSupplierMunicipalitiesDataReducer }) =>
      AssignMunicipalityToSupplierMunicipalitiesDataReducer.allMiniSearchedMunicipalitiesReducer.data
  );
  const loading = useSelector(
    ({ AssignMunicipalityToSupplierMunicipalitiesDataReducer }) =>
      AssignMunicipalityToSupplierMunicipalitiesDataReducer.allMiniSearchedMunicipalitiesReducer.isLoading
  );

  const errMsg = useSelector(
    ({ AssignMunicipalityToSupplierMunicipalitiesDataReducer }) =>
      AssignMunicipalityToSupplierMunicipalitiesDataReducer.allMiniSearchedMunicipalitiesReducer.errMsg
  );
  React.useEffect(() => {
    timer.current = window.setTimeout(() => {
      if (SearchedMunicipalities && SearchedMunicipalities.miniSearchAllMunicipalities && props.selectedMunicipalities.length === 0 && props.unSelectedMunicipalities.length === 0) {
        let municipalitiesObj = SearchedMunicipalities.miniSearchAllMunicipalities;
        if (municipalitiesObj.docs !== null && municipalitiesObj.docs.length > 0) {
          for (let i = 0; i < municipalitiesObj.docs.length; i++) {
            const doc = municipalitiesObj.docs[i];
            if (doc.isAssigned) {
              doc["isSelected"] = true;
            }
            else {
              doc["isSelected"] = false;
            }
          }
        }
        setMunicipalities(municipalitiesObj);

      }
      if (SearchedMunicipalities && SearchedMunicipalities.miniSearchAllMunicipalities && (props.selectedMunicipalities.length > 0 || props.unSelectedMunicipalities.length > 0)) {
        let selmunicipalitiesObj = SearchedMunicipalities.miniSearchAllMunicipalities;
        if (selmunicipalitiesObj.docs !== null && selmunicipalitiesObj.docs.length > 0) {
          for (let i = 0; i < selmunicipalitiesObj.docs.length; i++) {
            const seldoc = selmunicipalitiesObj.docs[i];
            seldoc["isSelected"] = false;
            for (let j = 0; j < props.selectedMunicipalities.length; j++) {
              const selMunicipality = props.selectedMunicipalities[j];
              if (seldoc.id === selMunicipality.id) {
                seldoc["isSelected"] = true;
              }
            }
            if (props.unSelectedMunicipalities.length > 0) {
              for (let j = 0; j < props.unSelectedMunicipalities.length; j++) {
                const selMunicipality = props.unSelectedMunicipalities[j];
                if (selMunicipality.isAssigned) {
                  seldoc["isSelected"] = false;
                  props.setAssignedMunicipalitiesState(props.assignedMunicipalitiesState.filter(item => item.id !== selMunicipality.id));

                }
              }
            }
          }
        }
        setMunicipalities(selmunicipalitiesObj);
      }

    }, 1000);
  }, [SearchedMunicipalities]);
  React.useEffect(() => {
    if (SearchedMunicipalities && SearchedMunicipalities.miniSearchAllMunicipalities && props.selectedMunicipalities.length > 0 && props.editCheck) {
      let selmunicipalitiesObj = SearchedMunicipalities.miniSearchAllMunicipalities;
      if (selmunicipalitiesObj.docs !== null && selmunicipalitiesObj.docs.length > 0) {
        for (let i = 0; i < selmunicipalitiesObj.docs.length; i++) {
          const seldoc = selmunicipalitiesObj.docs[i];
          seldoc["isSelected"] = false;
          for (let j = 0; j < props.selectedMunicipalities.length; j++) {
            const selMunicipality = props.selectedMunicipalities[j];
            if (seldoc.id === selMunicipality.id) {
              seldoc["isSelected"] = true;
            }
          }
          if (props.unSelectedMunicipalities.length > 0) {
            for (let j = 0; j < props.unSelectedMunicipalities.length; j++) {
              const selMunicipality = props.unSelectedMunicipalities[j];
              if (selMunicipality.isAssigned) {
                seldoc["isSelected"] = false;
                props.setAssignedMunicipalitiesState(props.assignedMunicipalitiesState.filter(item => item.id !== selMunicipality.id));

              }
            }
          }

        }
      }
      setMunicipalities(selmunicipalitiesObj);
    }
  }, [props.editCheck, SearchedMunicipalities]);
  React.useEffect(() => {
    if (SearchedMunicipalities && SearchedMunicipalities.miniSearchAllMunicipalities && props.unAssignId) {
      let selmunicipalitiesObj = SearchedMunicipalities.miniSearchAllMunicipalities;
      if (selmunicipalitiesObj.docs !== null && selmunicipalitiesObj.docs.length > 0) {
        for (let i = 0; i < selmunicipalitiesObj.docs.length; i++) {
          const seldoc = selmunicipalitiesObj.docs[i];
          seldoc["isSelected"] = false;
          for (let j = 0; j < props.selectedMunicipalities.length; j++) {
            const selMunicipality = props.selectedMunicipalities[j];
            if (seldoc.id === selMunicipality.id) {
              seldoc["isSelected"] = true;
            }
          }

        }
      }
      setMunicipalities(selmunicipalitiesObj);
      props.setUnAssignId(false);
    }
  }, [props.unAssignId, props.selectedMunicipalities]);

  return (
    <div>
      <div className="system-search-filter-div">
        <div className="system-search-filter-total-div">
          {t("Total Municipalities")}: {(municipalities && municipalities.totalDocs) ? municipalities.totalDocs : "0"}
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
              {t("Land")}
            </th>
            <th>
              {t("Municipality Name")}
            </th>
            <th>
              {t("Manager Name")}
            </th>

            <th>
              {t("Contact Person")}
            </th>
            <th>
              {t("Assign")}
            </th>

          </tr>
          {municipalities && municipalities.docs !== null && municipalities.docs &&
            municipalities.docs.length > 0 &&
            municipalities.docs.map((doc, index) => (
              <tr>
                <td>
                  {doc.province}
                </td>
                <td>
                  {doc.name}
                </td>
                <td>
                  {doc.manager === null ? (
                    <span className="unassigned-td">{t("Unassigned")}</span>
                  ) : (
                    doc.manager.name
                  )}
                </td>
                <td>
                  {doc.contactPerson === null ? (
                    <span className="unassigned-td">{t("NA")}</span>
                  ) : (
                    doc.contactPerson.name
                  )}
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
            municipalities && municipalities.totalDocs
              ? municipalities
                .totalDocs
              : 0
          }
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          classes={{
            root: classes.tablePagination,
          }}
        />
      </div>
    </div>
  );
}
export default withReducer("AssignMunicipalityToSupplierMunicipalitiesDataReducer", reducer)(AssignMunicipalityToSupplierMunicipalitiesData);
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
function AssignSupplierToMunicipalitySuppliersData(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const timer = React.useRef();
  const [suppliers, setSuppliers] = React.useState({});
  React.useEffect(() => {
    if (props.searchText) {
      dispatch(Actions.getAllMiniSearchedSuppliers(0 + 1, rowsPerPage, props.searchText, '', sessionStorage.getItem("user_id")));
    }
    else {

      dispatch(Actions.getAllMiniSearchedSuppliers(page + 1, rowsPerPage, props.searchText, '', sessionStorage.getItem("user_id")));
    }
  }, [rowsPerPage, page, props.searchText, dispatch])
  const handleChangeSelected = (index) => {
    let newObj = Object.assign({}, suppliers);
    newObj.docs[index].isSelected = !suppliers.docs[index].isSelected;
    if (newObj.docs[index].isSelected) {
      let newElement = {
        id: newObj.docs[index].id,
        name: newObj.docs[index].name,
        type: newObj.docs[index].type,
        contactPerson: newObj.docs[index].contactPerson,
        municipality: newObj.docs[index].municipality

      }
      props.setSelectedSuppliers(() => [...props.selectedSuppliers, newElement]);
    }
    if (!newObj.docs[index].isSelected) {
      props.setSelectedSuppliers(props.selectedSuppliers.filter(item => item.id !== newObj.docs[index].id));
    }
    setSuppliers(newObj);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const SearchedSuppliers = useSelector(
    ({ AssignSupplierToMunicipalitySuppliersDataReducer }) =>
      AssignSupplierToMunicipalitySuppliersDataReducer.allMiniSearchedSuppliersReducer.data
  );
  const loading = useSelector(
    ({ AssignSupplierToMunicipalitySuppliersDataReducer }) =>
      AssignSupplierToMunicipalitySuppliersDataReducer.allMiniSearchedSuppliersReducer.isLoading
  );

  const errMsg = useSelector(
    ({ AssignSupplierToMunicipalitySuppliersDataReducer }) =>
      AssignSupplierToMunicipalitySuppliersDataReducer.allMiniSearchedSuppliersReducer.errMsg
  );
  React.useEffect(() => {

    if (SearchedSuppliers && SearchedSuppliers.miniSearchAllSuppliers && props.selectedSuppliers.length > 0 && props.editCheck) {
      let selsuppliersObj = SearchedSuppliers.miniSearchAllSuppliers;
      if (selsuppliersObj.docs !== null && selsuppliersObj.docs.length > 0) {
        for (let i = 0; i < selsuppliersObj.docs.length; i++) {
          const seldoc = selsuppliersObj.docs[i];
          seldoc["isSelected"] = false;
          for (let j = 0; j < props.selectedSuppliers.length; j++) {
            const selSupplier = props.selectedSuppliers[j];
            if (seldoc.id === selSupplier.id) {
              seldoc["isSelected"] = true;
            }
          }

        }
      }
      setSuppliers(selsuppliersObj);
    }

  }, [props.editCheck, SearchedSuppliers]);
  React.useEffect(() => {
    timer.current = window.setTimeout(() => {
      if (SearchedSuppliers && SearchedSuppliers.miniSearchAllSuppliers && props.selectedSuppliers.length === 0) {
        let suppliersObj = SearchedSuppliers.miniSearchAllSuppliers;
        if (suppliersObj.docs !== null && suppliersObj.docs.length > 0) {
          for (let i = 0; i < suppliersObj.docs.length; i++) {
            const doc = suppliersObj.docs[i];
            doc["isSelected"] = false;
          }
        }
        setSuppliers(suppliersObj);

      }
      if (SearchedSuppliers && SearchedSuppliers.miniSearchAllSuppliers && props.selectedSuppliers.length > 0) {
        let selsuppliersObj = SearchedSuppliers.miniSearchAllSuppliers;
        if (selsuppliersObj.docs !== null && selsuppliersObj.docs.length > 0) {
          for (let i = 0; i < selsuppliersObj.docs.length; i++) {
            const seldoc = selsuppliersObj.docs[i];
            seldoc["isSelected"] = false;
            for (let j = 0; j < props.selectedSuppliers.length; j++) {
              const selSupplier = props.selectedSuppliers[j];
              if (seldoc.id === selSupplier.id) {
                seldoc["isSelected"] = true;
              }
            }

          }
        }
        setSuppliers(selsuppliersObj);
      }
    }, 1000);
  }, [SearchedSuppliers]);

  React.useEffect(() => {
    if (SearchedSuppliers && SearchedSuppliers.miniSearchAllSuppliers && props.unAssignId) {
      let selsuppliersObj = SearchedSuppliers.miniSearchAllSuppliers;
      if (selsuppliersObj.docs !== null && selsuppliersObj.docs.length > 0) {
        for (let i = 0; i < selsuppliersObj.docs.length; i++) {
          const seldoc = selsuppliersObj.docs[i];
          seldoc["isSelected"] = false;
          for (let j = 0; j < props.selectedSuppliers.length; j++) {
            const selSupplier = props.selectedSuppliers[j];
            if (seldoc.id === selSupplier.id) {
              seldoc["isSelected"] = true;
            }
          }

        }
      }
      setSuppliers(selsuppliersObj);
      props.setUnAssignId(false);
    }
  }, [props.unAssignId, props.selectedSuppliers]);
  return (
    <div>
      <div className="system-search-filter-div">
        <div className="system-search-filter-total-div">
          {t("Total Suppliers")}: {(suppliers && suppliers.totalDocs) ? suppliers.totalDocs : "0"}
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
            <th>
              {t("Assign")}
            </th>

          </tr>
          {suppliers && suppliers.docs !== null && suppliers.docs &&
            suppliers.docs.length > 0 &&
            suppliers.docs.map((doc, index) => (
              <tr>
                <td>
                  {doc.type}
                </td>
                <td>
                  {doc.name}
                </td>
                <td>
                  {doc.contactPerson ? doc.contactPerson.name : <span className="unassigned-td">{t("NA")}</span>}
                </td>
                <td>
                  {doc.municipality ? doc.municipality.name : <span className="unassigned-td">{t("Unassigned")}</span>}
                </td>
                <td>
                  {
                    (doc.municipality && doc.municipality._id === sessionStorage.getItem("user_id"))
                      ?
                      <img src={checkIcon} width="14px"></img>
                      :
                      <StyledCheckbox
                        checked={doc.isSelected}
                        onClick={() => handleChangeSelected(index)}
                      />

                  }
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
            suppliers && suppliers.totalDocs
              ? suppliers
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
export default withReducer("AssignSupplierToMunicipalitySuppliersDataReducer", reducer)(AssignSupplierToMunicipalitySuppliersData);
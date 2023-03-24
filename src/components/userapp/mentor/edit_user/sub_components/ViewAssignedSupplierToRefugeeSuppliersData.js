import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/styles";
import checkIcon from '../../../../../assets/images/Tick_Mark_Icon.svg';
import { useTranslation } from 'react-i18next';
// store

import reducer from "../store/reducers";
import withReducer from "../../../../../store/withReducer";
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
function AssignSupplierToRefugeeSuppliersData(props) {
  const [t] = useTranslation();
  const classes = useStyles();
  return (
    <div>
      <div className="system-search-filter-div">
        <div className="system-search-filter-total-div">
          {t("Total Suppliers")}: {(props.assignedSuppliers && props.assignedSuppliers.listAssignedSuppliers) ? props.assignedSuppliers.listAssignedSuppliers.totalDocs : "0"}
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
              {t("Name")}
            </th>
            <th>
              {t("Email")}
            </th>
            <th>
              {t("Phone Number")}
            </th>
            <th>
              {t("Assigned Municipality")}
            </th>

          </tr>
          {props.assignedSuppliers && props.assignedSuppliers.listAssignedSuppliers && props.assignedSuppliers.listAssignedSuppliers.docs &&
            props.assignedSuppliers.listAssignedSuppliers.docs.length > 0 &&
            props.assignedSuppliers.listAssignedSuppliers.docs.map((doc, index) => (
              <tr>
                <td>
                  {doc.type}
                </td>
                <td>
                  {doc.name}
                </td>
                <td>
                  {doc.email}
                </td>
                <td>
                  {doc.phoneNumber}
                </td>
                <td>
                  {doc.municipality ? doc.municipality.name : <span className="unassigned-td">{t("Unassigned")}</span>}
                </td>
              </tr>
            ))}
        </table>
      </div>
      <div className="assign-mentor-to-municipality-pagination-div" style={{ marginTop: "40px" }}>


        <TablePagination
          colSpan={3}
          component="div"
          count={
            (props.assignedSuppliers && props.assignedSuppliers.listAssignedSuppliers) ? props.assignedSuppliers.listAssignedSuppliers.totalDocs : 0
          }
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          onChangePage={props.handleChangePage}
          onChangeRowsPerPage={props.handleChangeRowsPerPage}
          labelRowsPerPage={t('Rows per page')}
          classes={{
            root: classes.tablePagination,
          }}
        />
      </div>
    </div>
  );
}
export default withReducer("AssignSupplierToRefugeeSuppliersDataReducer", reducer)(AssignSupplierToRefugeeSuppliersData);
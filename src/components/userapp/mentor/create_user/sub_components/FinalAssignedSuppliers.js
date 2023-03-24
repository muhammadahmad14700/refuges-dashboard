import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tablePagination: {

    overflow: "visible"
  },
}));

function FinalAssignedSuppliers(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <div>
      <div className="edit-mun-total-div">
        Total Assigned: {props.selectedSuppliers.length}
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
              BSN
                 </th>
            <th>
              Name
                 </th>
          </tr>
          {props.selectedSuppliers &&
            props.selectedSuppliers.length > 0 &&
            (rowsPerPage > 0
              ? props.selectedSuppliers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : props.selectedSuppliers
            ).map((doc, index) => (
              <tr>
                <td>
                  {doc.id}
                </td>
                <td>
                  {doc.name}
                </td>
              </tr>
            ))}

        </table>
      </div>
      <div className="edit-mun-pagination-div">


        <TablePagination
          colSpan={1}
          component="div"
          count={props.selectedSuppliers ? props.selectedSuppliers.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage=''
          rowsPerPageOptions={[]}
          onChangePage={handleChangePage}
          classes={{
            root: classes.tablePagination,
          }}
        />
      </div>

    </div>
  );
}
export default FinalAssignedSuppliers;
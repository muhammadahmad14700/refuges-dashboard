import React from "react";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import SuppliersData from "./sub_components/ViewAssignedSupplierToRefugeeSuppliersData";
import { useTranslation } from 'react-i18next';
// store

import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import withReducer from "../../../../store/withReducer";
import * as Actions from "./store/actions";
const useStyles = makeStyles((theme) => ({
  backButton: {
    // margin: theme.spacing(1),
    fontSize: "16px",
    backgroundColor: "transparent",
    width: "140px",
    height: "40px",
    border: "1px solid white",
    opacity: 1,
    textTransform: "uppercase",
    fontFamily: "opensans-semibold",
  },
  con: {
    marginTop: "30px"
  },
  textFieldSearch: {
    width: "100%",
    margin: 0,
    height: "42px",
    backgroundColor: "#ffffff",
  },
  notchedOutline: {
    // borderWidth: "0px",
    borderColor: "black !important",
    borderRadius: "0px",
  },
  input1: {
    height: "21px",
    border: 0,
    '&::placeholder': {
      fontSize: '16px',
      color: "black",
      opacity: "1",
      fontFamily: "opensans-LightItalic"
    },
  },
  createButton: {
    fontSize: "16px",
    backgroundColor: "#454A92",
    // width: "203px",
    height: "40px",
    opacity: 1,
    textTransform: "uppercase",
    fontFamily: "opensans-semibold",
    float: "right",
    borderRadius: "2px",
    paddingLeft: 20,
    paddingRight: 20,
    boxShadow: "none"
  }
}));

function ViewAssignSupplierToRefugee(props) {
  const [t] = useTranslation();
  var history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [bg, setBg] = React.useState("bgforform");
  const [searchText, setSearchText] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  React.useEffect(() => {
    if (searchText) {
      dispatch(
        Actions.getAllAssignedSuppliers(
          0 + 1,
          rowsPerPage,
          "",
          "",
          sessionStorage.getItem("user_id"),
          searchText
        ));
    } else {
      dispatch(
        Actions.getAllAssignedSuppliers(
          page + 1,
          rowsPerPage,
          "",
          "",
          sessionStorage.getItem("user_id"),
          searchText
        ));
    }

  }, [rowsPerPage, page, searchText]);
  const handleChangeSearch = (value) => {
    setSearchText(value);
  };
  const assignedSuppliers = useSelector(
    ({ ViewAssignSupplierToRefugeeReducer }) =>
      ViewAssignSupplierToRefugeeReducer.AllAssignedSuppliersReducer.data
  );
  const loading = useSelector(
    ({ ViewAssignSupplierToRefugeeReducer }) =>
      ViewAssignSupplierToRefugeeReducer.AllAssignedSuppliersReducer.isLoading
  );

  const errMsg = useSelector(
    ({ ViewAssignSupplierToRefugeeReducer }) =>
      ViewAssignSupplierToRefugeeReducer.AllAssignedSuppliersReducer.errMsg
  );
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const clickBack = () => {
    history.goBack();
  };
  return (
    <div className="main">
      <div className={bg}>
        <Container fixed>
          <div className="edit-municipality-back-btn-div">
            <Button
              variant="contained"
              className={classes.backButton}
              onClick={() => clickBack()}
              color="primary"
            >
              {t("Back")}
            </Button>
          </div>
          <Grid container spacing={4} className={classes.con}>
            <Grid item sm={12} xs={12}>
              <div className="assign-mentor-to-municipality-left-grid-div">
                <div className="assign-mentor-to-municipality-left-grid-child-div">
                  <Grid container spacing={4}>
                    <Grid item sm={6}>
                      <div className="assign-mentor-to-municipality-search-div" style={{ marginTop: "25px" }}>
                        <div className="assign-mentor-to-municipality-search-div-search-field-wrapper">
                          <TextField
                            id="search"
                            onChange={e => handleChangeSearch(e.target.value)}
                            value={searchText}
                            name="search"
                            className={classes.textFieldSearch}
                            type="text"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <ClearIcon style={{ fontSize: "24px", color: "black" }} />
                                </InputAdornment>
                              ),
                              classes: {
                                notchedOutline: classes.notchedOutline,
                                input: classes.input1,
                              },
                            }}
                            placeholder={t("Search by name or BSN number")}
                            margin="normal"
                            variant="outlined"
                            size="small"
                          />
                        </div>
                        <div className="assign-mentor-to-municipality-search-div-search-btn-wrapper">
                          <div style={{ width: "30px", height: "30px", margin: "0 auto", marginTop: "5px" }}>
                            <SearchIcon style={{ color: "white", fontSize: "30px", margin: "0 auto" }} />
                          </div>
                        </div>

                      </div>

                    </Grid>
                    <Grid item sm={6}>
                    </Grid>
                  </Grid>

                </div>
                <SuppliersData
                  searchText={searchText}
                  assignedSuppliers={assignedSuppliers}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  handleChangePage={handleChangePage}
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );

}
export default withReducer("ViewAssignSupplierToRefugeeReducer", reducer)(ViewAssignSupplierToRefugee);
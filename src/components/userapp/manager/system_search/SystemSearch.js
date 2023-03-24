import React from "react";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import ListItem from '@material-ui/core/ListItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MentorsData from "./sub_components/MentorsData";
import SuppliersData from "./sub_components/SuppliersData";
import RefugeesData from "./sub_components/RefugeesData";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme) => ({
  dropdownButton: {
    // margin: theme.spacing(1),
    fontSize: "14px",
    fontFamily: "opensans-semibold",
    backgroundColor: "#454A92",
    width: "157px",
    height: "40px",
    opacity: 1,
    color: "white",
    marginLeft: "15px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    textTransform: "capitalize",
    justifyContent: "space-between",
    boxShadow: "none",
    // paddingTop: "10px"
  },
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
  textFieldSearch: {
    width: "100%",
    margin: 0,
    height: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  notchedOutline: {
    // borderWidth: "0px",
    borderColor: "black !important",
    borderRadius: "0px",
    borderLeft: 0
  },
  input1: {
    // height: "19px",
    border: 0,
    '&::placeholder': {
      fontSize: '16px',
      color: "black",
      opacity: "1",
      fontFamily: "opensans-italic"
    },
  },
  tablePagination: {

    overflow: "visible"
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  roott: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    width: "155px",
    // top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    // padding: theme.spacing(1),
    marginLeft: "15px",
    border: 'none',
    backgroundColor: "#E7E7E7",
    borderRadius: "0px 0px 5px 5px",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)"
  },
}));


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function SystemSearch(props) {
  const [t] = useTranslation();
  let roles = [
    {
      id: "all",
      name: t("All"),
      default: false
    },
    {
      id: "refugees",
      name: t("Refugees"),
      default: true
    },
    {
      id: "mentors",
      name: t("Mentors"),
      default: false
    },
    {
      id: "suppliers",
      name: t("Suppliers"),
      default: false
    },

  ];
  let tabs = [
    {
      id: "refugees",
      name: t("Refugees"),
      default: true
    },
    {
      id: "mentors",
      name: t("Mentors"),
      default: false
    },
    {
      id: "suppliers",
      name: t("Suppliers"),
      default: false
    },
  ];
  const classes = useStyles();
  let query = useQuery();
  const [searchPlaceholder, setSearchPlaceholder] = React.useState(t('Search by land, name or contact person'));
  const [rolesState, setRolesState] = React.useState(roles);
  const [tabsState, setTabsState] = React.useState(tabs);
  const [selectedTab, setSelectedTab] = React.useState({
    id: "refugees",
    name: t("Refugees"),
    default: true
  });
  const [selectedRole, setSelectedRole] = React.useState({
    id: "refugees",
    name: t("Refugees"),
    default: true
  });
  const [bg, setBg] = React.useState("bgforform");
  const [searchText, setSearchText] = React.useState('');
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (query.get("entity")) {
      if (query.get("entity") === "refugees") {
        setSelectedRole({
          id: "refugees",
          name: t("Refugees"),
          default: false
        });
        setSearchPlaceholder(t('Search by name, e-mail or BSN number'))
      }
      if (query.get("entity") === "mentors") {
        setSelectedRole({
          id: "mentors",
          name: t("Mentors"),
          default: false
        });
        setSearchPlaceholder(t('Search by name, e-mail or BSN number'))
      }
      if (query.get("entity") === "suppliers") {
        setSelectedRole({
          id: "suppliers",
          name: t("Suppliers"),
          default: false
        });
        setSearchPlaceholder(t('Search by name or e-mail'))
      }

    }
  }, [query.get("entity")])
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleChangeSearch = (value) => {
    setSearchText(value);
  };
  const handleChangeRole = (role) => {
    if (role.id === "all") {
      if (selectedTab.id === "suppliers") {
        setSearchPlaceholder(t('Search by name or e-mail'))
      }
      else {
        setSearchPlaceholder(t('Search by name, e-mail or BSN number'))
      }
    }
    else {
      if (role.id === "suppliers") {
        setSearchPlaceholder(t('Search by name or e-mail'))
      }
      else {
        setSearchPlaceholder(t('Search by name, e-mail or BSN number'))
      }
    }

    setSelectedRole(role);
    setOpen(false);
  }
  const handleChangeTab = (tab) => {
    if (tab.id === "suppliers") {
      setSearchPlaceholder(t('Search by name or e-mail'))
    }
    else {
      setSearchPlaceholder(t('Search by name, e-mail or BSN number'))
    }
    setSelectedTab(tab);
  }
  const handleClearSearch = () => {
    setSearchText('');
  }
  return (
    <div className="main">
      <div className={bg}>
        <Container fixed>
          <div className="system-search-main-div">
            <div className="system-search-title-div">
              <h3 className="system-search-title">
                {t("System Search")}
              </h3>
            </div>
            <div className="system-search-search-div">
              <div className="system-search-search-div-menu-wrapper">
                <ClickAwayListener onClickAway={handleClickAway}>
                  <div className={classes.root}>
                    <Button
                      variant="contained"
                      onClick={handleClick}
                      color="primary"
                      endIcon={<ExpandMoreIcon style={{ fontSize: 22 }} />}
                      className={classes.dropdownButton}>
                      {selectedRole.name}
                    </Button>
                    {open ? (
                      <div className={classes.dropdown}>
                        {rolesState.map((doc, firstIndex) => (
                          <ListItem button divider onClick={() => handleChangeRole(doc)}>
                            <ListItemText primary={<Typography type="body2" style={{
                              fontFamily: "opensans-semibold",
                              fontSize: "14px",
                            }}>{doc.name}</Typography>} />
                          </ListItem>
                        ))}

                      </div>
                    ) : null}
                  </div>
                </ClickAwayListener>


              </div>
              <div className="system-search-search-div-search-field-wrapper">
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
                        <ClearIcon style={{ fontSize: "24px", color: "black", cursor: "pointer" }} onClick={() => handleClearSearch()} />
                      </InputAdornment>
                    ),
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input1,
                    },
                  }}
                  placeholder={searchPlaceholder}
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="system-search-search-div-search-btn-wrapper">
                <div style={{ width: "30px", height: "30px", margin: "0 auto", marginTop: "5px" }}>
                  <SearchIcon style={{ color: "white", fontSize: "30px", margin: "0 auto" }} />
                </div>
              </div>

            </div>
            {selectedRole.id === "all" && (
              <div className="system-search-tabs-div">
                {tabsState.map((doc, firstIndex) => (
                  <div onClick={() => handleChangeTab(doc)} className={doc.id === selectedTab.id ? "system-search-single-tab-selective-div" : "system-search-single-tab-unselective-div"}>
                    {doc.name}
                    {doc.id === selectedTab.id && (
                      <hr className="system-search-single-tab-selective-div-hr" />

                    )}
                  </div>
                ))}
              </div>
            )}
            {selectedTab.id === "mentors" && selectedRole.id === "all" && (
              <MentorsData searchText={searchText} />
            )}
            {selectedTab.id === "suppliers" && selectedRole.id === "all" && (
              <SuppliersData searchText={searchText} />
            )}
            {selectedTab.id === "refugees" && selectedRole.id === "all" && (
              <RefugeesData searchText={searchText} />
            )}



            {selectedRole.id === "mentors" && (
              <MentorsData searchText={searchText} />
            )}
            {selectedRole.id === "suppliers" && (
              <SuppliersData searchText={searchText} />
            )}
            {selectedRole.id === "refugees" && (
              <RefugeesData searchText={searchText} />
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
export default SystemSearch;
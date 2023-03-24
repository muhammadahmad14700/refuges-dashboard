import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Collapse from '@material-ui/core/Collapse';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import logob from "../../../../../assets/images/logob.png";
import header from "../../../../../assets/images/home-footer.png";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Actions from "../../../login/store/actions/login.actions";
import { useTranslation } from 'react-i18next';
const drawerWidth = 395;

const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
  },
  root: {
    flexGrow: 1,
    paddingTop: "0px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundImage: `url(${header})`,
    position: "relative",
    backgroundColor: "#454a92",
    height: "92px",
    zIndex: "1",
    boxShadow: "-1px 0px 16px 4px rgba(0, 0, 0, 0.65)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // boxShadow:
    //   "0px 7px 6px -1px rgba(0,0,0,0.2), 0px 6px 7px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  button: {
    // marginTop: "-60px",
    padding: "0px"
  },
  con: {
    // backgroundColor: "red"
  },
  tool: {
    // backgroundColor: "yellow",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawerPaper: {
    // position: "relative",
    width: drawerWidth,
    backgroundColor: "#FFFFFF",
    color: "white",
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
  },
  drawerHeader: {
    display: 'inline-block',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  logout: {
    fontFamily: "opensans-bold", fontSize: "16px", float: "right", padding: "12px", marginTop: "10px", color: "#454a92",
    "&:hover": {
      cursor: "pointer"
    },
  },
  searchDiv: {
    width: "100%"
  },
  parentDiv: {
    width: "100%",
    // marginTop: "25px",
    backgroundColor: "#FFFFFF",
    color: "#454a92"
  },
  headDiv: {
    width: "100%",
    backgroundColor: "#454a92",
    height: "42px",
    fontFamily: "opensans-semibold",
    fontSize: "16px",
    alignItems: "center",
    display: "flex",
    lineHeight: "19px",
    textIndent: "32px",
    color: "#FFFFFF",


  },
  headDivWithNoChild: {
    width: "100%",
    backgroundColor: "#454a92",
    height: "42px",
    fontFamily: "opensans-semibold",
    fontSize: "16px",
    alignItems: "center",
    display: "flex",
    lineHeight: "19px",
    textIndent: "32px",
    color: "#FFFFFF",
    cursor: "pointer",
    marginTop: "2px"
  },
  childDiv: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: "42px",
    fontFamily: "opensans-semibold",
    fontSize: "16px",
    alignItems: "center",
    justifyContent: "left",
    display: "flex",
    lineHeight: "19px",
    textIndent: "32px",
    "&:hover": {
      cursor: "pointer"
    },
  },
  textFieldSearch: {
    width: "100%",
    margin: 0,
    backgroundColor: "#ffffff",
    border: 0,
  },
  notchedOutline: {
    borderWidth: "0px"
  },
  input1: {
    height: "30px",
    border: 0,
    '&::placeholder': {
      textAlign: "center",
      fontFamily: "Calibri"
    },
  },
  nested: {
    paddingLeft: "45px"
  },
}));
function Header(props) {
  const [t] = useTranslation();
  const navItems = [
    {
      id: "account_settings",
      headTitle: t("Account Settings"),
      list: false,
      hasChild: true,
      items: [
        {
          id: "account_settings_profile",
          name: t("Update Profile"),
          path: "/MentorUserProfile"
        },
        {
          id: "account_settings_update_password",
          name: t("Update Password"),
          path: "/updateUserPassword"
        }
      ]
    },
    {
      id: "all_system_users",
      headTitle: t("All System Users"),
      list: false,
      hasChild: true,
      items: [
        {
          id: "all_system_users_refugees",
          name: t("Refugees"),
          path: "/systemSearchByMentor"
        },
        {
          id: "all_system_users_suppliers",
          name: t("Suppliers"),
          path: "/systemSearchByMentor"
        },
        {
          id: "all_system_users_mentors",
          name: t("Mentors"),
          path: "/systemSearchByMentor"
        },
      ]
    },
    {
      id: "create_new_system_user",
      headTitle: t("Create New System User"),
      list: false,
      hasChild: false,
      path: "/createUserByMentor"
    },
    {
      id: "system_search",
      headTitle: t("System Search"),
      list: false,
      hasChild: false,
      path: "/systemSearchByMentor"
    },
  ];
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);
  const [navId, setNavId] = React.useState('');
  const [list, setlist] = React.useState(navItems);
  var history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Actions.logout());
    history.push("/");
  };
  const handleNavigateToDashboard = () => {
    sessionStorage.clear();
    history.push("/mentordashboard");
  };
  const handleNavigate = (path, id = '') => {
    toggleDrawer();
    sessionStorage.clear();
    if (id === "all_system_users_refugees") {
      history.push(`${path}/?entity=refugees`)

    }
    else if (id === "all_system_users_mentors") {
      history.push(`${path}/?entity=mentors`)
    }
    else if (id === "all_system_users_suppliers") {
      history.push(`${path}/?entity=suppliers`)

    }
    else {
      history.push(path);
    }
  };
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  const handleClick = (id, first, second) => {
    // 1. Make a shallow copy of the items
    let items = [...list];
    // 2. Make a shallow copy of the item you want to mutate
    let item = { ...items[first]["items"][second] };
    // 3. Replace the property you're intested in
    item.open = !item.open;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[first]["items"][second] = item;
    // 5. Set the state to our new copy
    setlist(items);
    setNavId(id);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container fixed className={classes.con}>
          <Toolbar className={classes.tool}>
            <Typography variant="div" className={classes.title}>

              <img className="blockh-logob" onClick={() => handleNavigateToDashboard()} src={logob} alt="logob"></img>
            </Typography>
            <div className="menu-div">
              <IconButton
                className={classes.button}
                color="inherit"
                aria-label="Menu"
                onClick={toggleDrawer}
              >
                <MenuIcon style={{ fontSize: "50px" }} />

              </IconButton>
              <p className="menu-text">{t("MENU")}</p>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={toggleDrawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer} style={{ float: "left" }}>
            <ChevronRightIcon fontSize="large" style={{ color: "#454a92" }} />
          </IconButton>
          <Typography
            className={classes.logout}
            component="h5"
            variant="h5"
            onClick={() => logout()}
          >
            {t("Logout")}
          </Typography>
        </div>

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >

          <div className={classes.parentDiv}>
            {list.map((doc, firstIndex) => (
              (!doc.list && doc.hasChild) ?
                <>
                  <div className={classes.headDiv}>
                    {doc.headTitle}
                  </div>
                  {doc.items.map((item) => (
                    <div key={item.id} className={classes.childDiv} onClick={() => handleNavigate(item.path, item.id)}>
                      {item.name}
                    </div>
                  ))}
                </>
                :
                (!doc.list && !doc.hasChild) ?
                  <div className={classes.headDivWithNoChild} onClick={() => handleNavigate(doc.path)}>
                    {doc.headTitle}
                  </div>
                  :
                  <>
                    <div className={classes.headDiv}>
                      {doc.headTitle}
                    </div>
                    {doc.items.map((item, secondIndex) => (
                      <>
                        <ListItem button onClick={() => handleClick(item.id, firstIndex, secondIndex)}>
                          <ListItemText
                            disableTypography
                            component
                            primary={<Typography type="body2" style={{
                              fontFamily: "opensans-semibold",
                              fontSize: "16px",
                              textIndent: "18px"
                            }}>{item.name}</Typography>}
                          />
                          {item.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={item.open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {item.items_child.map((child) => (
                              <ListItem button className={classes.nested}>
                                <ListItemText onClick={() => handleNavigate(child.path)} primary={<Typography type="body2" style={{
                                  fontFamily: "opensans-regular",
                                  fontSize: "16px",
                                }}>{child.name}</Typography>} />
                              </ListItem>
                            ))}

                          </List>
                        </Collapse>
                      </>
                    ))}
                  </>
            ))}



          </div>

        </List>
      </Drawer>

    </div>
  );
}
export default Header;

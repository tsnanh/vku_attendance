import React, { SyntheticEvent, useState } from "react";
import {
  AppBar,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  CssBaseline,
  ListItem,
  ListItemIcon,
  Drawer,
  List,
  Divider,
  ListItemText,
  IconButton,
  InputBase,
  fade,
  Tooltip,
  Snackbar,
} from "@material-ui/core";
import {
  Menu,
  Search,
  Schedule,
  Group,
  FormatListNumbered,
} from "@material-ui/icons";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import TeacherFragment from "../Teacher";
import vkulogo from "../../vku_logo_official.png";
import BacklogFragment from "../Backlog";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#FFF",
      color: "#000",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
    },
    header: {
      textAlign: "center",
      padding: 8,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
    subtitle: {
      paddingLeft: 8,
      fontWeight: 400,
      marginRight: theme.spacing(4),
      marginBottom: theme.spacing(0.5),
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      marginRight: theme.spacing(1),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
  })
);

export default function Home(props: any) {
  const classes = useStyles();
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const showSnackbar = (msg: string) => {
    return () => {
      setSnackbarMessage(msg);
      setSnackbarOpen(true);
    };
  };

  const handleSnackbarClose = (
    event: SyntheticEvent | MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarMessage("");
    setSnackbarOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
          >
            <Menu />
          </IconButton>
          <img
            src={vkulogo}
            style={{ width: 64, height: "inherit", marginRight: 8 }}
          />
          <Typography variant="h6" className={classes.title} noWrap>
            {props.title}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div onClick={showSnackbar("Time Set!")}>
            <Tooltip title="Set Machine Time" arrow>
              <IconButton
                className={classes.menuButton}
                edge="end"
                color="inherit"
              >
                <Schedule />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Divider />
          <List>
            {["Teachers", "Backlogs"].map((text, index) => (
              <Link
                to={`/${text.toLowerCase()}`}
                className={classes.link}
                key={text}
              >
                <ListItem button>
                  <ListItemIcon>
                    {index % 2 !== 0 ? <Group /> : <FormatListNumbered />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route exact path="/teachers">
            <TeacherFragment
              showSnackbar={showSnackbar}
              handleSnackbarClose={handleSnackbarClose}
            />
          </Route>
          <Route exact path="/backlogs">
            <BacklogFragment
              showSnackbar={showSnackbar}
              handleSnackbarClose={handleSnackbarClose}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

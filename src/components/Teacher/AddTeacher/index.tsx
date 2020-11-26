import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function AddTeacher(props: any) {
  const teacher = props.teacher;
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

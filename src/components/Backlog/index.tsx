import {
  Grid,
  Container,
  Typography,
  makeStyles,
  Theme,
  Button,
  createStyles,
} from "@material-ui/core";
import { ColDef, DataGrid } from "@material-ui/data-grid";
import { Add, Delete, Edit } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Backlog } from "../../models/Backlog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headline: {
      fontWeight: 400,
    },
    toolRow: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    rowItem: {
      marginLeft: theme.spacing(2),
    },
    dataGrid: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function BacklogFragment(props: any) {
  const classes = useStyles();
  const state = useSelector((reducers: any) => reducers.teacher);
  const dispatch = useDispatch();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Container className={classes.toolRow}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Typography variant="h6" className={classes.headline}>
            Backlogs
          </Typography>
          <Button
            color="primary"
            startIcon={<Add />}
            className={classes.rowItem}
          >
            ADD
          </Button>
          <Button
            color="primary"
            startIcon={<Edit />}
            className={classes.rowItem}
          >
            EDIT
          </Button>
          <Button
            color="primary"
            startIcon={<Delete />}
            className={classes.rowItem}
          >
            DELETE
          </Button>
        </Grid>
        <div style={{ height: 440, width: "100%" }}></div>
      </Container>
    </Grid>
  );
}

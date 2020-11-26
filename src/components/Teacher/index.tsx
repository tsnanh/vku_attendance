import {
  IconButton,
  AppBar,
  Toolbar,
  Dialog,
  Grid,
  Container,
  Typography,
  makeStyles,
  Theme,
  Button,
  createStyles,
  CircularProgress,
  Slide,
  Transitions,
  Divider,
  List,
  ListItem,
  ListItemText,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { ColDef, DataGrid, RowParams, RowData } from "@material-ui/data-grid";
import { Add, Delete, Edit } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachersFromMachine } from "../../reducers/Teacher/teacherActions";
import { Teacher } from "../../models/Teacher";
import { TeacherState } from "../../reducers/Teacher/types";
import TeacherDialog from "./Dialog";
import { TransitionProps } from "@material-ui/core/transitions";
import { Close } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
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
    content: { height: 440, width: "100%" },
  })
);

const columns: ColDef[] = [
  { field: "id", headerName: "ID", width: 50, type: "number" },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "cardId", headerName: "CardId", width: 90, type: "number" },
  { field: "hasBacklog", headerName: "Has Backlog", width: 140 },
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type TeacherDialogState = {
  teacher?: any;
  isOpen: boolean;
};
type TeacherTableState = {
  id?: number;
  name?: string;
  email?: string;
  cardId?: string;
};

export default function TeacherFragment(props: any) {
  const history = useHistory();
  const classes = useStyles();
  const state = useSelector((reducers: any) => reducers.teacher);
  const dispatch = useDispatch();
  const [_, setSelection] = React.useState<RowData[]>([]);
  const [deleteDialog, setDeleteDialogOpen] = React.useState(false);

  const handleDeleteOpen = () => {
    setDeleteDialogOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteDialogOpen(false);
  };

  const deleteSelectedTeachers = () => {
    // Delete teachers here
  };

  const onRowClick = (param: RowParams) => {
    handleClickOpen(param.data);
    console.log(open);
  };
  const dialogState: TeacherDialogState = {
    isOpen: false,
  };
  const [open, setOpen] = React.useState(dialogState);
  const [teacher, setTeacher] = React.useState({} as TeacherTableState);

  const onDeleteButtonClick = () => {};

  const handleClickOpen = (teacher: any) => {
    setOpen({ isOpen: true, teacher: teacher } as TeacherDialogState);
    setTeacher({
      ...teacher,
    } as TeacherTableState);
  };

  const handleClose = () => {
    setOpen({ isOpen: false } as TeacherDialogState);
    setTeacher({} as TeacherTableState);
    console.log(open);
  };

  const mapStateToUi = (state: TeacherState) => {
    if (state.isFetching) {
      return <CircularProgress />;
    } else {
      if (state.error) {
        props.showSnackbar("Error");
        return <Typography variant="h6">Error</Typography>;
      }
      if (state.teachers) {
        return (
          <DataGrid
            checkboxSelection={true}
            columns={columns}
            rows={mapTeachersToPresentRows(state.teachers)}
            pageSize={10}
            className={classes.dataGrid}
            onRowClick={onRowClick}
            onSelectionChange={(newSelection) => {
              setSelection(newSelection.rows);
            }}
          />
        );
      }
    }
  };

  useEffect(() => {
    dispatch(fetchTeachersFromMachine());
  }, [dispatch]);

  const mapTeachersToPresentRows = (teachers: Teacher[]) =>
    teachers.map((teacher: Teacher, index: number) => {
      return {
        id: index,
        name: teacher.profile.name,
        email: teacher.profile.email,
        cardId: teacher.profile.cardId,
      };
    });

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <TeacherDialog />
        <Container className={classes.toolRow}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Typography variant="h6" className={classes.headline}>
              Teachers
            </Typography>
            <Button
              color="primary"
              startIcon={<Add />}
              className={classes.rowItem}
              onClick={() => history.push("/addTeacher")}
            >
              ADD TEACHER
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
              onClick={() => setDeleteDialogOpen(true)}
            >
              DELETE
            </Button>
          </Grid>
          <div className={classes.content}>{mapStateToUi(state)}</div>
        </Container>
      </Grid>
      <Dialog
        fullScreen
        open={open.isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {teacher.name}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText secondary={teacher.id} primary="ID" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText secondary={teacher.name} primary="Name" />
          </ListItem>
        </List>
      </Dialog>
      <Dialog
        open={deleteDialog}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Users?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete all selected teachers?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            CANCEL
          </Button>
          <Button onClick={deleteSelectedTeachers} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

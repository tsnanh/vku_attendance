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
import { fetchTeachersFromMachine } from "../../reducers/Teacher/teacherActions";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		headline: {
			fontWeight: 400,
		},
		toolRow: {
			marginTop: 8,
		},
		rowItem: {
			marginLeft: theme.spacing(2),
		},
	})
);

const column: ColDef[] = [{ field: "id", headerName: "ID", width: 70 }];

export default function TeacherFragment(props: any) {
	const classes = useStyles();
	const teacherReducer = useSelector((reducers: any) => reducers.teacher);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTeachersFromMachine());
	}, [dispatch]);

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
						Teachers
					</Typography>
					<Button
						color="primary"
						startIcon={<Add />}
						className={classes.rowItem}
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
					>
						DELETE
					</Button>
				</Grid>
				<DataGrid></DataGrid>
			</Container>
		</Grid>
	);
}

import {
	Grid,
	Container,
	Typography,
	makeStyles,
	Theme,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachersFromMachine } from "../../reducers/Teacher/teacherActions";

export default function TeacherFragment(props: any) {
	const classes = makeStyles((theme: Theme) => {
		headline: {
			fontWeight: 400;
		}
	});

	const teacherReducer = useSelector((reducers: any) => reducers.teacher);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTeachersFromMachine());
	}, [dispatch]);

	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<Grid container direction="row" justify="flex-start" alignItems="center">
				<Container>
					<Typography variant="h6" className={classes.headline}>
						Teachers
					</Typography>
          <Button 
				</Container>
			</Grid>
		</Grid>
	);
}

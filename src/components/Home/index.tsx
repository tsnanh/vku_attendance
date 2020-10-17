import React from "react";
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
	CircularProgress,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchTeachersFromMachine } from "../../reducers/Home/teacherActions";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
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
			padding: theme.spacing(3),
		},
		header: {
			textAlign: "center",
			padding: 8,
		},
	})
);

function Home(props: any) {
	const classes = useStyles();

	const dispatch = useDispatch();
	dispatch(fetchTeachersFromMachine);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap>
						{props.title}
					</Typography>
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
					<Typography variant="h6" className={classes.header}>
						Dashboard
					</Typography>
					<Divider />
					<List>
						{["All mail", "Trash"].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>
									{index % 2 === 0 ? <Menu /> : <Menu />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				{renderSwitch(props)}
			</main>
		</div>
	);
}

const renderSwitch = (props: any) => {
	console.log(props);
	if (props.isFetching) {
		return <CircularProgress />;
	}
};

Home.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	teachers: PropTypes.array,
	error: PropTypes.any,
};

const mapStateToProps = (state: any) => {
	const { isFetching, teachers, error } = state.home;
	console.log(state);

	return {
		isFetching,
		teachers,
		error,
	};
};

export default connect(mapStateToProps)(Home);

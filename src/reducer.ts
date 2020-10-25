import { combineReducers } from "@reduxjs/toolkit";
import teacherReducer from "./reducers/Teacher";
import backlogReducer from "./reducers/Backlog";
import machineReducer from "./reducers/Machine";

export default combineReducers({
	teacher: teacherReducer,
	backlog: backlogReducer,
	machine: machineReducer,
});

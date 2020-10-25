import axios from "axios";
import { Dispatch } from "react";
import {
	FETCH_TEACHERS_FAILED,
	FETCH_TEACHERS_REQUEST,
	FETCH_TEACHERS_SUCCESS,
} from "../../constants";
import { HomeAction } from "./types";
import { Teacher } from "../../models/Teacher";

export function fetchTeachersRequest(): HomeAction {
	const action: HomeAction = {
		type: FETCH_TEACHERS_REQUEST,
	};
	return action;
}

const fetchTeachersSuccess = (teachers: Teacher[]): HomeAction => {
	const action: HomeAction = {
		type: FETCH_TEACHERS_SUCCESS,
		teachers,
	};
	return action;
};

const fetchTeachersFailed = (error: any): HomeAction => {
	const action: HomeAction = {
		type: FETCH_TEACHERS_FAILED,
		error,
	};
	return action;
};

export function fetchTeachersFromMachine() {
	return (dispatch: Dispatch<HomeAction>) => {
		dispatch(fetchTeachersRequest());
		axios
			.get("http://localhost:5000/api/teachers")
			.then((response) => response.data)
			.then((data) => data.map((obj: any) => obj as Teacher))
			.then((teachers: Teacher[]) => dispatch(fetchTeachersSuccess(teachers)))
			.catch((error) => dispatch(fetchTeachersFailed(error)));
	};
}

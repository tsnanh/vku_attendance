import axios from "axios";
import {
	FETCH_TEACHERS_FAILED,
	FETCH_TEACHERS_REQUEST,
	FETCH_TEACHERS_SUCCESS,
} from "../../constants";
import { Teacher } from "../../models/Teacher";

export function fetchTeachersRequest() {
	return {
		type: FETCH_TEACHERS_REQUEST,
	};
}

const fetchTeachersSuccess = (teachers: Teacher[]) => {
	return {
		type: FETCH_TEACHERS_SUCCESS,
		teachers,
	};
};

const fetchTeachersFailed = (error: any) => {
	return {
		type: FETCH_TEACHERS_FAILED,
		error,
	};
};

export function fetchTeachersFromMachine() {
	return new Promise((dispatch: any) => {
		dispatch(fetchTeachersFailed(null));
		axios
			.get("http://localhost:5000/api/teachers")
			.then((response) => response.data)
			.then((data) => data.map((obj: any) => obj as Teacher))
			.then((teachers: Teacher[]) => dispatch(fetchTeachersSuccess(teachers)))
			.catch((error) => dispatch(fetchTeachersFailed(error)));
	});
}

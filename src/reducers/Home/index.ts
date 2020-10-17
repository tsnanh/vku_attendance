import {
	FETCH_TEACHERS_REQUEST,
	FETCH_TEACHERS_FAILED,
	FETCH_TEACHERS_SUCCESS,
} from "../../constants";
import { HomeAction, HomeState } from "./types";

const initialState: HomeState = {
	isFetching: false,
	teachers: [],
};

export default function homeReducer(
	state = initialState,
	action: HomeAction
): HomeState {
	switch (action.type) {
		case FETCH_TEACHERS_SUCCESS:
			return {
				...state,
				isFetching: false,
				teachers: action.teachers,
			};
		case FETCH_TEACHERS_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		case FETCH_TEACHERS_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		default:
			return state;
	}
}

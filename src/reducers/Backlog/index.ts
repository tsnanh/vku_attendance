import {
	FETCH_BACKLOGS_FAILED,
	FETCH_BACKLOGS_REQUEST,
	FETCH_BACKLOGS_SUCCESS,
} from "../../constants";
import { BacklogAction, BacklogState } from "./types";

const initialState: BacklogState = {
	backlogs: [],
	isFetching: false,
};

export default function backlogReducer(
	state: BacklogState = initialState,
	action: BacklogAction
): BacklogState {
	switch (action.type) {
		case FETCH_BACKLOGS_SUCCESS:
			return {
				...state,
				backlogs: action.backlogs,
				isFetching: false,
			};
		case FETCH_BACKLOGS_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		case FETCH_BACKLOGS_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		default:
			return state;
	}
}

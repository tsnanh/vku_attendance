import axios from "axios";
import { Dispatch } from "react";
import {
	FETCH_BACKLOGS_FAILED,
	FETCH_BACKLOGS_REQUEST,
	FETCH_BACKLOGS_SUCCESS,
} from "../../constants";
import { Backlog } from "../../models/Backlog";
import { BacklogAction } from "./types";

export function fetchBacklogsRequest(): BacklogAction {
	return {
		type: FETCH_BACKLOGS_REQUEST,
	} as BacklogAction;
}

const fetchBacklogsSuccess = (backlogs: Backlog[]): BacklogAction => {
	return {
		type: FETCH_BACKLOGS_SUCCESS,
		backlogs,
	} as BacklogAction;
};

const fetchBacklogsFailed = (error: any): BacklogAction => {
	return {
		type: FETCH_BACKLOGS_FAILED,
		error,
	} as BacklogAction;
};

export function fetchBacklogsFromDb() {
	return async (dispatch: Dispatch<BacklogAction>) => {
		try {
			dispatch(fetchBacklogsRequest());
			const response = await axios.get("http://localhost:5000/api/backlogs");
			const backlogs: Backlog[] = response.data.map(
				(obj: any) => obj as Backlog
			);
			dispatch(fetchBacklogsSuccess(backlogs));
		} catch (e) {
			dispatch(fetchBacklogsFailed(e));
		}
	};
}

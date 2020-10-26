import { Backlog } from "../../models/Backlog";

export type BacklogState = {
	readonly backlogs: Backlog[];
	readonly isFetching: boolean;
	readonly error?: any;
};

export type BacklogAction = {
	type: string;
	backlogs: Backlog[];
	error?: any;
};

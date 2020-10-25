import { Teacher } from "../../models/Teacher";

export type HomeState = {
	readonly teachers?: Teacher[];
	readonly isFetching: boolean;
	readonly error?: any;
};

export type HomeAction = {
	type: string;
	teachers?: Teacher[];
	error?: any;
};

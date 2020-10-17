import { Teacher } from "../../models/Teacher";

export interface HomeState {
	readonly teachers?: Teacher[];
	readonly isFetching: boolean;
	readonly error?: any;
}

export interface HomeAction {
	type: string;
	teachers?: Teacher[];
	error?: any;
}

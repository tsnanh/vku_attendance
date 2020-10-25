export type MachineAction = {
	type: string;
	data?: any;
	error?: any;
};

export type MachineState = {
	readonly isFetching: boolean;
	readonly data?: any;
	readonly error?: any;
};

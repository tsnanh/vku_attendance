export type Backlog = {
	readonly teacherId: string;
	readonly history: History[];
};

export type History = {
	readonly date: Number;
	readonly enrolledTime: EnrolledTime[];
	readonly description: string;
};

export type EnrolledTime = {
	readonly time: Number;
};

export type Teacher = {
	inMachine: InMachine;
	profile: Profile;
	email: string;
};

export type InMachine = {
	uid: Number;
};

export type Profile = {
	name: string;
	cardId: string;
};

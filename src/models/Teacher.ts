export interface Teacher {
	inMachine: InMachine,
	profile: Profile,
	email: string
}

interface InMachine {
	uid: Number
}

interface Profile {
	name: string,
	cardId: string
}
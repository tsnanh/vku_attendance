export type Teacher = {
  inMachine: InMachine;
  profile: Profile;
};

export type InMachine = {
  uid: number;
};

export type Profile = {
  name: string;
  cardId: string;
  email: string;
};

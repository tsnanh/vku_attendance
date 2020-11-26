import { Teacher } from "../../models/Teacher";

export type TeacherState = {
  readonly teachers?: Teacher[];
  readonly isFetching: boolean;
  readonly error?: any;
};

export type TeacherAction = {
  type: string;
  teachers?: Teacher[];
  error?: any;
};

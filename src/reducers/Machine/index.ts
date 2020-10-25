import {
	MACHINE_SET_CURRENT_TIME_FAILED,
	MACHINE_SET_CURRENT_TIME_REQUEST,
	MACHINE_SET_CURRENT_TIME_SUCCESS,
} from "../../constants";
import { MachineAction, MachineState } from "./types";

const initialState: MachineState = {
	isFetching: false,
};

export default function machineReducer(
	state: MachineState = initialState,
	action: MachineAction
): MachineState {
	switch (action.type) {
		case MACHINE_SET_CURRENT_TIME_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		case MACHINE_SET_CURRENT_TIME_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		case MACHINE_SET_CURRENT_TIME_SUCCESS:
			return {
				...state,
				isFetching: false,
				data: action.data,
			};
		default:
			return state;
	}
}

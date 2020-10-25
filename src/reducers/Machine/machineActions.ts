import axios from "axios";
import { Dispatch } from "react";
import {
	MACHINE_SET_CURRENT_TIME_FAILED,
	MACHINE_SET_CURRENT_TIME_REQUEST,
	MACHINE_SET_CURRENT_TIME_SUCCESS,
} from "../../constants";
import { MachineAction } from "./types";

const setMachineTimeRequest = (): MachineAction => {
	return {
		type: MACHINE_SET_CURRENT_TIME_REQUEST,
	} as MachineAction;
};

const setMachineTimeSuccess = (message: string): MachineAction => {
	return {
		type: MACHINE_SET_CURRENT_TIME_SUCCESS,
		data: message,
	} as MachineAction;
};

const setMachineTimeFailed = (error: any): MachineAction => {
	return {
		type: MACHINE_SET_CURRENT_TIME_FAILED,
		error,
	} as MachineAction;
};

export function setCurrentTimeOnMachine() {
	return async (dispatch: Dispatch<MachineAction>) => {
		try {
			dispatch(setMachineTimeRequest());
			const response = await axios.post(
				"http://localhost:5000/api/machine/time"
			);
			const message = response.data;
			dispatch(setMachineTimeSuccess(message));
		} catch (e: any) {
			dispatch(setMachineTimeFailed(e));
		}
	};
}

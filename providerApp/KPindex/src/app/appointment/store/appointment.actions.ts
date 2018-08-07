import { Action } from '@ngrx/store';

import { AppointmentType } from '../appointment.model';

export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
export const EDIT_APPOINTMENT = 'EDIT_APPOINTMENT';

export class AddAppointment implements Action {
	readonly type = ADD_APPOINTMENT;

	constructor(public payload: AppointmentType) { }
}

export class EditAppointment implements Action {
	readonly type = EDIT_APPOINTMENT;

	constructor(public payload: {appointmentType: AppointmentType}) { }	// constructor(public payload: StaffType) { }
}
// export class StartAdd implements Action {
// 	readonly type = START_ADD;

// 	constructor(public payload: number) { }
// }

// export class StopAdd implements Action {
// 	readonly type = STOP_ADD;
// }

export type AppointmentTypeActions = AddAppointment | EditAppointment;

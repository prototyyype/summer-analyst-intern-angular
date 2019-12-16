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
 constructor(public payload: {appointmentType: AppointmentType}) { }
}

export type AppointmentTypeActions = AddAppointment | EditAppointment;

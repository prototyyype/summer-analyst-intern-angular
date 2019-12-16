import * as AppointmentTypeActions from './appointment.actions';
import { AppointmentType } from '../appointment.model';

export interface AppState {
  appointmentState: State;
}

export interface State {
 appointments: AppointmentType[];
 addedAppointment: AppointmentType;
}

const initialState: State = {
 appointments: [
  new AppointmentType('July 31, 2018', '11:50:00 AM PDT', 'Flu Shots', 'Dr. Smith'),
  new AppointmentType('August 1, 2018', '7:00:00 AM PDT', 'Physical Examination', 'Dr. James'),
  new AppointmentType('July 29, 2018', '3:00:00 PM PDT', 'Urgent Care', 'Dr. King')
 ],
 addedAppointment: null
};

export function appointmentTypeReducer(state = initialState, action: AppointmentTypeActions.AppointmentTypeActions) {
 switch (action.type) {
  case AppointmentTypeActions.ADD_APPOINTMENT:
   return {
    ...state,
    appointments: [
     ...state.appointments,
     action.payload
    ]
   };
  case AppointmentTypeActions.EDIT_APPOINTMENT:
  default:
   return state;
 }
}

import  { AppointmentType } from './appointment.model';

export class AppointmentService {
  appointments: AppointmentType[] = [
    new AppointmentType('July 31, 2018', '11:50:00 AM PDT', 'Flu Shots', 'Dr. Smith'),
    new AppointmentType('August 1, 2018', '7:00:00 AM PDT', 'Physical Examination', 'Dr. James'),
    new AppointmentType('July 29, 2018', '3:00:00 PM PDT', 'Urgent Care', 'Dr. King')
  ]

	getAppointments() {
		return this.appointments.slice();
	}

	getColumns() {
		return [{"description": "date", "title": "Date"},
			{"description": "time", "title": "Time"},
			{"description": "medService", "title": "Service"},
			{"description": "doctor", "title": "Doctor"},
			{"description": "editOrDelete", "title": "Action"}];
	}

	getAppointment(index: number) {
		return this.appointments[index];
	}

	addAppointment(appointment: AppointmentType) {
		appointment.date = new Date().toDateString();
		this.appointments.push(appointment);
	}
}

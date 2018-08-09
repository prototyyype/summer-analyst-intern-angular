import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { AppointmentType } from '../appointment.model';

@Component({
  selector: 'app-appointment-create-appt',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {
  @Input() displayDialog: boolean;
  @Input() newAppointmentType: boolean;
  @Output() saved = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {


  }

  save() {
    if (this.newAppointmentType) {
      const newAppointment = new AppointmentType(this.appointmentType.date, this.appointmentType.time, this.appointmentType.medService, this.appointmentType.doctor);
      this.store.dispatch(new AppointmentTypeActions.AddAppointment(newAppointment));
    } else {
      const newAppointment = new AppointmentType(this.appointmentType.date, this.appointmentType.time, this.appointmentType.medService, this.appointmentType.doctor);
      this.store.dispatch(new AppointmentTypeActions.EditAppointment({appointmentType: newAppointment}));
    }

    this.appointmentType = null;
    this.displayDialog = false;
  }

}

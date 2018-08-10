import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { AppointmentType } from '../appointment.model';
import * as fromAppointmentType from '../store/appointment.reducers';
import * as AppointmentTypeActions from '../store/appointment.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-appointment-create-appt',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {
  @Input() displayDialog: boolean;
  @Input() newAppointmentType: boolean;
  @Output() saved = new EventEmitter<boolean>();
  appointmentType: AppointmentType;
  appointmentState: Observable<{appointments: AppointmentType[]}>;

  constructor(private store: Store<fromAppointmentType.AppState>)
  {
    this.appointmentType = {date: '', time: '', medService: '', doctor: ''};
  }

  ngOnInit() {
  }

  save() {
    this.saved.emit(false);
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

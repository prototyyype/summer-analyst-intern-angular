import { Component, OnInit } from '@angular/core';
// import { ButtonModule } from "primeng/button";
import { Observable } from "rxjs";

import { AppointmentService } from '../appointment.service';
import { AppointmentType } from '../appointment.model';
import * as AppointmentTypeActions from '../store/appointment.actions';
import * as fromAppointmentType from '../store/appointment.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-appointment-appt-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.scss']
})
export class AppointmentTableComponent implements OnInit {
  appointmentState: Observable<{appointments: AppointmentType[]}>;
  columns: {description: string, title: string}[];

  appointmentType: AppointmentType;
  selectedAppointmentType: AppointmentType;
  displayDialog: boolean;
  displayUpdateDialog: boolean;
  newAppointmentType: boolean;
  appointmentDisabled: boolean;

  constructor(
    private appointmentService: AppointmentService,
    private store: Store<fromAppointmentType.AppState>) {}

  ngOnInit() {
    this.appointmentState = this.store.select('appointmentState');
    this.columns = this.appointmentService.getColumns();
  }

  // ADD NEW APPOINTMENT
  showDialogToAdd() {
    this.appointmentDisabled = true;
    this.newAppointmentType = true;
    this.appointmentType = {date: '', time: '', medService: '', doctor: ''};
    this.displayDialog = true;
  }


  onRowSelect(event) {
    this.appointmentDisabled = false;
    this.newAppointmentType = false;
    this.appointmentType = this.appointmentType = this.cloneAppointmentType(event.data);
    this.displayDialog = true;
  }

  cloneAppointmentType(a: AppointmentType): AppointmentType {
    let appointmentType = this.appointmentType = {date: '', time: '', medService: '', doctor: ''};
    for (let item in a) {
      appointmentType[item] = a[item];
    }
    return appointmentType;
  }



  cancel() {
    this.displayDialog = false;
    this.displayUpdateDialog = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Subscription } from "rxjs";

import { ButtonModule } from "primeng/primeng";
import { TableModule } from 'primeng/table';

import { AppointmentType } from './appointment.model';
import * as AppointmentTypeActions from './store/appointment.actions';
import * as fromAppointmentType from './store/appointment.reducers';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  appointmentState: Observable<{appointments: AppointmentType[]}>;

  constructor(
    private store: Store<fromAppointmentType.AppState>
  ) { }

  ngOnInit() {
    this.appointmentState = this.store.select('appointmentState');
  }

}

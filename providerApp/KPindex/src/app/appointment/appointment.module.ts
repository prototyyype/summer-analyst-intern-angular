import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { CreateAppointmentComponent } from 'src/app/appointment/create-appointment/create-appointment.component';
import { AppointmentTableComponent } from 'src/app/appointment/appointment-table/appointment-table.component';
import { AppointmentComponent } from 'src/app/appointment/appointment.component';
import { AppointmentService } from './appointment.service';
import { appointmentTypeReducer } from './store/appointment.reducers';


@NgModule({
  declarations: [
    AppointmentComponent,
    CreateAppointmentComponent,
    AppointmentTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    StoreModule.forRoot({appointmentState: appointmentTypeReducer})
  ],
  providers: [AppointmentService],
  exports: [AppointmentComponent, CreateAppointmentComponent, AppointmentTableComponent]
})
export class AppointmentModule { }

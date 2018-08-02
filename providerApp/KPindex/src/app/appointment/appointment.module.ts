import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import {TableModule} from 'primeng/table';

import { CreateAppointmentComponent } from "src/app/appointment/create-appointment/create-appointment.component";
import { AppointmentTableComponent } from "src/app/appointment/appointment-table/appointment-table.component";
import { AppointmentComponent } from "src/app/appointment/appointment.component";


@NgModule({
  declarations: [
    AppointmentComponent,
    CreateAppointmentComponent,
    AppointmentTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [AppointmentComponent, CreateAppointmentComponent, AppointmentTableComponent]
  // bootstrap: [AppointmentComponent]
})
export class AppointmentModule { }

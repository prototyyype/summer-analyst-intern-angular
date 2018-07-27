import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CreateAppointmentComponent } from "src/app/appointment/create-appointment/create-appointment.component";
import { AppointmentComponent } from "src/app/appointment/appointment.component";

@NgModule({
  declarations: [
    AppointmentComponent,
    CreateAppointmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: [AppointmentComponent]
})
export class AppointmentModule { }

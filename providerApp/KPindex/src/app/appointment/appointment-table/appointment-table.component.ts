import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-appointment-appt-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.scss']
})
export class AppointmentTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //
  // cars: Car[];
  //
  //     constructor(private carService: CarService) { }
  //
  //     ngOnInit() {
  //         this.carService.getCarsSmall().then(cars => this.cars = cars);
  //     }

}

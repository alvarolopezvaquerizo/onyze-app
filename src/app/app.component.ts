import { Component } from '@angular/core';
import { PassengersService, Passenger } from '../app/services/passengers.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onyze';

  passengers: Passenger[] = [];

  constructor( private _passengersService: PassengersService ) {

  }

  ngOnInit(): void {
    this.passengers = this._passengersService.getPassengers();
  }
}
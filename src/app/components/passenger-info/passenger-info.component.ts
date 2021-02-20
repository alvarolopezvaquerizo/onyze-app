import { Component, OnInit } from '@angular/core';
import { PassengersService, Passenger } from '../../services/passengers.services';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css']
})
export class PassengerInfoComponent implements OnInit {

  passengers: Passenger[] = [];

  constructor( private _passengersService: PassengersService ) {

  }

  ngOnInit(): void {
    this.passengers = this._passengersService.getPassengers();
    console.log(this.passengers);
  }

}

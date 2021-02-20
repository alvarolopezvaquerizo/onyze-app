import { Component, Input, OnInit } from '@angular/core';
import { PassengersService, Passenger } from '../../services/passengers.services';

@Component({
  selector: 'app-data-payments-passenger',
  templateUrl: './data-payments-passenger.component.html',
  styleUrls: ['./data-payments-passenger.component.css']
})
export class DataPaymentsPassengerComponent implements OnInit {

  @Input() show: boolean;

  @Input() passenger: Passenger;

  constructor() {

  }

  ngOnInit(): void {

  }

}

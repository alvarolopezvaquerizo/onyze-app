import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../services/passengers.services';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css']
})
export class PassengerInfoComponent implements OnInit {

  @Input() passenger: Passenger;

  constructor() {

  }

  ngOnInit(): void {

  }

}
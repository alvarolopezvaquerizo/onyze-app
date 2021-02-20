import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../services/passengers.services';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.css']
})
export class PassengerCardComponent implements OnInit {

  @Input() passenger: Passenger;

  show: boolean;

  constructor() {
    this.show = false;
  }

  ngOnInit(): void {
  }

  viewChanged(value: boolean) {
    this.show = value;
  }

}

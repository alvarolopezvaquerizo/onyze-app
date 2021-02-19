import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-payments-passenger',
  templateUrl: './data-payments-passenger.component.html',
  styleUrls: ['./data-payments-passenger.component.css']
})
export class DataPaymentsPassengerComponent implements OnInit {

  @Input() show: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

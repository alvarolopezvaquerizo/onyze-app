import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.css']
})
export class PassengerCardComponent implements OnInit {

  show: boolean;

  constructor() {
    this.show = true;
  }

  ngOnInit(): void {
  }

  viewChanged(value: boolean) {
    this.show = value;
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headboard-passenger-info',
  templateUrl: './headboard-passenger-info.component.html',
  styleUrls: ['./headboard-passenger-info.component.css']
})
export class HeadboardPassengerInfoComponent implements OnInit {

  @Output() viewChanged = new EventEmitter<boolean>(false);

  status: boolean;

  constructor() {
    this.status = false;
  }

  ngOnInit(): void {
  }

  hidden():void {
    this.status = !this.status;
    this.viewChanged.emit(this.status);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PassengersService } from './services/passengers.services';

import { AppComponent } from './app.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { HeadboardPassengerInfoComponent } from './components/headboard-passenger-info/headboard-passenger-info.component';
import { DataPaymentsPassengerComponent } from './components/data-payments-passenger/data-payments-passenger.component';
import { PassengerCardComponent } from './components/passenger-card/passenger-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerInfoComponent,
    HeadboardPassengerInfoComponent,
    DataPaymentsPassengerComponent,
    PassengerCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PassengersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

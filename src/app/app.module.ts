import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { HeadboardPassengerInfoComponent } from './components/headboard-passenger-info/headboard-passenger-info.component';
import { DataPaymentsPassengerComponent } from './components/data-payments-passenger/data-payments-passenger.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerInfoComponent,
    HeadboardPassengerInfoComponent,
    DataPaymentsPassengerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

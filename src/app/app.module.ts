import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

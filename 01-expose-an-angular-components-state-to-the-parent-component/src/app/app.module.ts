import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SwitchComponent } from './irrelevant-implementation-details/switch.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ToggleComponent, SwitchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

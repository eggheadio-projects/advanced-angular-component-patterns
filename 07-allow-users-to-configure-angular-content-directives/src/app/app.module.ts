import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyToggleComponent } from './my-toggle.component';
import { SwitchComponent } from './irrelevant-implementation-details/switch.component';
import { ToggleModule } from './toggle/toggle.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ToggleModule ],
  declarations: [ AppComponent, MyToggleComponent, SwitchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

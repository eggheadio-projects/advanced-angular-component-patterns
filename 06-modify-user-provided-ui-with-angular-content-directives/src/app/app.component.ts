import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {ToggleComponent} from './toggle/toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  public on = true;
}

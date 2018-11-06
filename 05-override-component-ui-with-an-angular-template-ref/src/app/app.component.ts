import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  public on = true;

  onToggle(message, on) {
    console.log(message, on);
  }
}

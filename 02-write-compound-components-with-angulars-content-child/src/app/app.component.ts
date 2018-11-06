import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  onToggle(on) {
    console.log('toggle', on);
  }
}

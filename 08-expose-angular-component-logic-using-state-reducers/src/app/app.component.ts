import { Component } from '@angular/core';
import { ToggleState } from './toggle/toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  timesClicked = 0;
  
  stateReducer = (state: ToggleState, changes: Partial<ToggleState>) => {
    if (this.timesClicked > 3) {
      return state;
    }
    if (changes.on !== undefined) {
      this.timesClicked = this.timesClicked + 1;
    }
    return { ...state, ...changes };
  }

  log(message, value) {
    console.log(message, value);
  }
}

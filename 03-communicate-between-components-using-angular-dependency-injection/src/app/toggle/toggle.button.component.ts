import { Component } from '@angular/core';

import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'toggle-button',
  template: '<switch [on]="toggle.on" (click)="onClick()" ></switch>',
})
export class ToggleButtonComponent  {
  constructor(public toggle: ToggleComponent) {}

  onClick() {
    this.toggle.setOnState(!this.toggle.on);
  }
}

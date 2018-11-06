import { Component } from '@angular/core';

import { ToggleProviderDirective } from './toggle.toggleProvider.directive';

@Component({
  selector: 'toggle-button',
  template: '<switch [on]="toggleProvider.toggle.on" (click)="onClick()" ></switch>',
})
export class ToggleButtonComponent  {
  constructor(public toggleProvider: ToggleProviderDirective) {}

  onClick() {
    this.toggleProvider.toggle.setOnState(!this.toggleProvider.toggle.on);
  }
}

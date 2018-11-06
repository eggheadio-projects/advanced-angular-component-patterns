import { Component } from '@angular/core';

import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'toggle-on',
  template: '<ng-content *ngIf="toggle.on"></ng-content>',
})
export class ToggleOnComponent {
  constructor(public toggle: ToggleComponent) { }
}

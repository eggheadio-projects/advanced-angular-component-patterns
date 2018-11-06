import { Component } from '@angular/core';

import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'toggle-off',
  template: '<ng-content *ngIf="!toggle.on"></ng-content>',
})
export class ToggleOffComponent {
  constructor(public toggle: ToggleComponent) { }
}

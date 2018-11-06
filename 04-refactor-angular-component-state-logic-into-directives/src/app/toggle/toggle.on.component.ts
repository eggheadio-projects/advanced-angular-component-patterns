import { Component } from '@angular/core';

import { ToggleProviderDirective } from './toggle.toggleProvider.directive';

@Component({
  selector: 'toggle-on',
  template: '<ng-content *ngIf="toggleProvider.toggle.on"></ng-content>',
})
export class ToggleOnComponent {
  constructor(public toggleProvider: ToggleProviderDirective) { }
}

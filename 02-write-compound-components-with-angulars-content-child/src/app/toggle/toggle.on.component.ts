import { Component, Input } from '@angular/core';

@Component({
  selector: 'toggle-on',
  template: '<ng-content *ngIf="on"></ng-content>',
})
export class ToggleOnComponent  {
  @Input() on: boolean;
}

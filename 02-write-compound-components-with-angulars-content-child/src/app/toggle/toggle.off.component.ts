import { Component, Input } from '@angular/core';

@Component({
  selector: 'toggle-off',
  template: '<ng-content *ngIf="!on"></ng-content>',
})
export class ToggleOffComponent  {
  @Input() on: boolean;
}

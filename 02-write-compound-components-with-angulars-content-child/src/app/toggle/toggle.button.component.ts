import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-button',
  template: '<switch [on]="on" (click)="onClick()" ></switch>',
})
export class ToggleButtonComponent  {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  onClick() {
    this.on = !this.on;
    this.toggle.emit(this.on);
  }
}

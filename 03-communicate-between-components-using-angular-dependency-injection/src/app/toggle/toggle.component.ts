import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle',
  template: '<ng-content></ng-content>',
})
export class ToggleComponent {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  setOnState(on: boolean) {
    this.on = on;
    this.toggle.emit(this.on);
  }
}

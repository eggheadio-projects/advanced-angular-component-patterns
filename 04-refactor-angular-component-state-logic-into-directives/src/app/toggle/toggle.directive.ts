import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  exportAs: 'toggle',
  selector: 'toggle, [toggle]',
})
export class ToggleDirective {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  setOnState(on: boolean) {
    this.on = on;
    this.toggle.emit(this.on);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-toggle',
  template: `
    <button (click)="toggle.emit()">
      {{on ? 'on' : 'off'}}
    </button>
  `,
})
export class MyToggleComponent {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
}

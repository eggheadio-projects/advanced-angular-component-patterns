import { Component, Input, Output, EventEmitter, TemplateRef, ContentChild,ViewChild } from '@angular/core';
import { TogglerDirective} from './toggler.directive';

@Component({
  exportAs: 'toggle',
  selector: 'toggle',
  template: `
  <ng-container *ngTemplateOutlet="layoutTemplate; context: { on: this.on, toggle: this.toggle, fns: { toggle: this.toggle } }">
  </ng-container>
`,
})
export class ToggleComponent {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(TemplateRef)
  @Input() layoutTemplate: TemplateRef<any>;

  toggle = () => {
    this.setOnState(!this.on);
  }

  setOnState(on: boolean) {
    this.on = on;
    this.toggled.emit(this.on);
  }
}

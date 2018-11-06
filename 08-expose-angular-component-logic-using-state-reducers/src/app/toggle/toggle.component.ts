import { Component, Input, Output, EventEmitter, TemplateRef, ContentChild, OnChanges, SimpleChanges } from '@angular/core';

export interface ToggleState {
  on: boolean;
}

export type ToggleStateReducer =
  (state: ToggleState, changes: Partial<ToggleState>)
    => ToggleState;

@Component({
  exportAs: 'toggle',
  selector: 'toggle',
  template: `
  <ng-container *ngTemplateOutlet="layoutTemplate; context: { on: on, fns: {toggle: toggle} }">
  </ng-container>
`,
})
export class ToggleComponent {
  @Input() on: boolean;

  @Input() stateReducer: ToggleStateReducer =
    (state, changes) => ({ ...state, ...changes });

  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(TemplateRef)
  @Input() layoutTemplate: TemplateRef<any>;

  toggle = () => {
    this.setOnState(!this.on);
  }

  setOnState(on: boolean) {
    const oldState = { on: this.on };
    const newState = this.stateReducer(oldState, { on });
    if (oldState !== newState) {
      this.on = newState.on;
      this.toggled.emit(this.on);
    }
  }
}

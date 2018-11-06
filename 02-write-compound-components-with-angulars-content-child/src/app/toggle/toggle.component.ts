import { Component, Input, Output, EventEmitter, ContentChild, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';

import { ToggleOnComponent } from './toggle.on.component';
import { ToggleOffComponent } from './toggle.off.component';
import { ToggleButtonComponent } from './toggle.button.component';

@Component({
  selector: 'toggle',
  template: '<ng-content></ng-content>',
})
export class ToggleComponent implements AfterContentInit, OnChanges {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(ToggleOnComponent) toggleOn: ToggleOnComponent;
  @ContentChild(ToggleOffComponent) toggleOff: ToggleOffComponent;
  @ContentChild(ToggleButtonComponent) toggleButton: ToggleButtonComponent;

  ngAfterContentInit() {
    this.toggleButton.toggle.subscribe(on => {
      this.on = on;
      this.toggle.emit(on);
      this.update();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const { on } = changes;
    if (on) {
      this.update();
    }
  }

  update() {
    this.toggleOn.on = this.on;
    this.toggleOff.on = this.on;
    this.toggleButton.on = this.on;
  }
}

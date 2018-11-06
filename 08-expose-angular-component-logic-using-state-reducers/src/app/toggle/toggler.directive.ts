import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[toggler]'
})
export class TogglerDirective implements OnChanges {
  @Input() toggler: Partial<TogglerDirective>;

  @Input()
  @HostBinding('attr.role') role = 'switch';

  @HostBinding('attr.aria-checked') ariaChecked;
  
  @Input() on;

  ngOnChanges(changes: SimpleChanges) {
    const { on, toggler } = changes;
    if (toggler) {
      if (this.toggler.role) {
        this.role = this.toggler.role;
      }
      if (this.toggler.ariaChecked) {
        this.ariaChecked = this.toggler.ariaChecked;
      }
    }
    if (on) {
      if (this.toggler.ariaChecked === undefined) {
        this.ariaChecked = on.currentValue;
      }
    }
  }

  constructor() { }

}
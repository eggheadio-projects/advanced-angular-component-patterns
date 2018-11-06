import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[toggler]'
})
export class TogglerDirective {
  @HostBinding('attr.role') role = 'switch';

  @HostBinding('attr.aria-checked')
  @Input() on;

  constructor() { }

}
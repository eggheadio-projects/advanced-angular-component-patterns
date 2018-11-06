import { Component, Input } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent  {
  @Input() on: boolean;
  @Input() className: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'labelled-state',
  template: `
  <div>
    {{toggleName}} toggle is: 
    <toggle-on>on</toggle-on>
    <toggle-off>off</toggle-off>
  </div>
  `,
})
export class LabelledStateComponent {
  @Input()
  toggleName: string;
}

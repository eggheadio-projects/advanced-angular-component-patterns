import { Component } from '@angular/core';

@Component({
  selector: 'other-component',
  template: `
  <div>
    Other component: 
    <toggle-on>on</toggle-on>
    <toggle-off>off</toggle-off>
  </div>
  `,
})
export class OtherComponent  {
}

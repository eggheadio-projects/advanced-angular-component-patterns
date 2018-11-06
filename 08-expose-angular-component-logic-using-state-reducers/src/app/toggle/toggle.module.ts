import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleComponent } from './toggle.component';
import { TogglerDirective } from './toggler.directive';

@NgModule({
  declarations: [
    ToggleComponent,
    TogglerDirective,
  ],
  imports: [ CommonModule ],
  exports: [
    ToggleComponent,
    TogglerDirective,
  ],
})
export class ToggleModule {}

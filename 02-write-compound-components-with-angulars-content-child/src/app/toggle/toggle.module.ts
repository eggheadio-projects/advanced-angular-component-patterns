import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleComponent } from './toggle.component';
import { ToggleOnComponent } from './toggle.on.component';
import { ToggleOffComponent } from './toggle.off.component';
import { ToggleButtonComponent } from './toggle.button.component';
import { SwitchComponent } from '../irrelevant-implementation-details/switch.component';

@NgModule({
  declarations: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
    SwitchComponent,
  ],
  imports: [ CommonModule ],
  exports: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
  ],
})
export class ToggleModule {}

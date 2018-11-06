import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleDirective } from './toggle.directive';
import { ToggleProviderDirective } from './toggle.toggleProvider.directive';
import { ToggleOnComponent } from './toggle.on.component';
import { ToggleOffComponent } from './toggle.off.component';
import { ToggleButtonComponent } from './toggle.button.component';
import { SwitchComponent } from '../irrelevant-implementation-details/switch.component';

@NgModule({
  declarations: [
    ToggleDirective,
    ToggleProviderDirective,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
    SwitchComponent,
  ],
  imports: [ CommonModule ],
  exports: [
    ToggleDirective,
    ToggleProviderDirective,
    ToggleButtonComponent,
    ToggleOffComponent,
    ToggleOnComponent,
  ],
})
export class ToggleModule {}

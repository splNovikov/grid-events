import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ConfirmModalComponent } from './confirm/confirm-modal.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ConfirmModalComponent
  ],
  entryComponents: [
    ConfirmModalComponent
  ]
})
export class ModalsModule {
}

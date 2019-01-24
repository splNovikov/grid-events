import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ge-confirm-modal',
  templateUrl: 'confirm-modal.component.html',
})
export class ConfirmModalComponent {

  constructor(
    private _dialogRef: MatDialogRef<ConfirmModalComponent>,
    // todo: confirm data type
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public onNoClick = (): void => {
    this._dialogRef.close();
  }

  public onConfirm = (): void => {
    this.data.onConfirm();
    this._dialogRef.close();
  }

}

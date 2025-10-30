import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_IMPORTS = [MatDialogModule,MatButtonModule];
@Component({
  selector: 'app-dialog',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css'
})
export class Dialog {
  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}

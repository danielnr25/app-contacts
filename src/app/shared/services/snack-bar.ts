import { inject, Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBar {
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: 'ok'):void {
    this._snackBar.open(message, action,{
      duration:30000,
      verticalPosition:'top',
      horizontalPosition:'right',
    });
  }
}

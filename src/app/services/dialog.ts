import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@components/dialog/dialog';
import { firstValueFrom } from 'rxjs';
// firstValueFrom convierte un observable en una promesa que se resuelve con el primer valor emitido. Es ideal para usarlo async await.

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) {}

  async openConfirmDialog(
    title: string,
    message: string
  ): Promise<boolean> {
    const dialogRef = this.dialog.open(Dialog, {
      width: '450px',
      data: { title, message },
    });

    return await firstValueFrom(dialogRef.afterClosed());
  }
}

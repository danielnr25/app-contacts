import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const MATERIAL_IMPORTS = [MatDialogModule,MatInputModule,MatButtonModule];
@Component({
  selector: 'app-modal',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {

  // variables privadas
  private readonly _matDialog = inject(MAT_DIALOG_DATA); // me sirve para recibir los datos del contacto si es editar o crear

  getTitle():string{
    return this._matDialog.data? 'EDITAR' : 'REGISTRAR';
  }
}

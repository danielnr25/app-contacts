import { Component, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { APP_CONSTANTS } from '@shared/constants';
import { CommonModule } from '@angular/common';
const MATERIAL_IMPORTS = [MatDialogModule,MatInputModule,MatButtonModule,MatSelectModule,MatFormFieldModule];
@Component({
  selector: 'app-modal',
  imports: [ReactiveFormsModule,MATERIAL_IMPORTS,CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal implements OnInit {
  contactForm!:FormGroup; // contactForm: nos servirá para crear un formulario reactivo
  countries = APP_CONSTANTS.COUNTRIES;

  // variables privadas
  private readonly _matDialog = inject(MAT_DIALOG_DATA); // me sirve para recibir los datos del contacto si es editar o crear
  private readonly _formBuilder = inject(FormBuilder); // me sirve para crear el formulario reactivo

  getTitle():string{
    return this._matDialog.data? 'EDITAR' : 'REGISTRAR';
  }

  ngOnInit(): void {
    console.log(this.countries);
    console.log(this._matDialog.data);
    this._buildForm();
    this.contactForm.patchValue(this._matDialog.data); // me sirve para crear la data de contactos en el formulario
  }

  private _buildForm ():void{ // crear o construir el formulario reactivo
    this.contactForm = this._formBuilder.nonNullable.group({ // me sirve para que los campos del formulario no puedan ser ¿nulos
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      job:['',Validators.required],
      country:['',Validators.required],
      company:['',Validators.required],
      address:['',Validators.required],
      website:['',Validators.required]
    })
  }

}

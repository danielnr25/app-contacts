import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SnackBar } from '@shared/services/snack-bar';
const MATERIAL_MODULES = [MatInputModule,MatFormFieldModule,MatNativeDateModule,MatButtonModule,MatCardModule,MatIconModule];
@Component({
  selector: 'app-login',
  imports: [MATERIAL_MODULES,FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';

  private readonly _snackBarSvc = inject(SnackBar);

  login(){
    if(this.email==='admin@email.com' && this.password==='1234'){
      console.log('Acceso, correcto');
    }else{
      this._snackBarSvc.openSnackBar('Acceso Denegado','ok')
    }
  }

}

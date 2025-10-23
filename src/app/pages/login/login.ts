import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SnackBar } from '@shared/services/snack-bar';
import { AuthService } from '@services/auth';
import { Router } from '@angular/router';
const MATERIAL_MODULES = [
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
];
@Component({
  selector: 'app-login',
  imports: [MATERIAL_MODULES, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  loading: boolean = false;
  private readonly _snackBarSvc = inject(SnackBar);
  private readonly _fb = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  form = this._fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  errorMessage: string | null = null;

  onSubmit(): void {
    if (!this.form.valid) {
      this._snackBarSvc.openSnackBar('Por favor complete el formulario correctamente', 'ok');
    }
    const rawForm = this.form.getRawValue();
    this.loading = true;
    this._authService.login(rawForm.email, rawForm.password).subscribe({
      next: () => {
        this._snackBarSvc.openSnackBar(`Bienvenido a la aplicacion de contactos`, 'ok');
        this._router.navigate(['/contacts']);
      },
      error: (err) => {
        this.errorMessage = err.message;
        switch (err.message) {
          case 'Firebase: Error (auth/invalid-credential).':
            this.errorMessage = 'Usuario no encontrado';
            break;
          case 'auth/wrong-password':
            this.errorMessage = 'Contraseña incorrecta';
            break;
          default:
            this.errorMessage = 'Error desconocido. Intente nuevamente más tarde.';
        }
        this.loading = false;
        this._snackBarSvc.openSnackBar(`Error al Ingresar: ${this.errorMessage}`, 'ok');
      },
      complete: () =>{
        this.loading = false;
      }
    });
  }
}

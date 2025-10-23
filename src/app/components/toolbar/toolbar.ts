import { Component, inject, output } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '@services/auth';
import { Router } from '@angular/router';
import { SnackBar } from '@shared/services/snack-bar';

const MATERIAL_IMPORTS = [MatToolbarModule,MatIconModule,MatButtonModule]

@Component({
  selector: 'app-toolbar',
  imports: [MATERIAL_IMPORTS],
  template: `
    <mat-toolbar>
      <a mat-button>
        <mat-icon>menu</mat-icon>
        <span>Home</span>
      </a>
      <a mat-button>
        <mat-icon>list-all</mat-icon>
        <span>Contactos</span>
      </a>
      <span class="spacer"></span>
      <a mat-button (click)="emitClick()">
        <mat-icon>add_box</mat-icon>
        <span>Nuevo</span>
      </a>
      <a mat-button (click)="logout()">
        <mat-icon>logout</mat-icon>
        <span>Cerrar Sesión</span>
      </a>

    </mat-toolbar>
  `,
  styles: `
    .spacer{
      flex:1 1 auto;
    }
  `
})
export class Toolbar {
  // decorador para emitir eventos hacia el componente padre
  OnNewContactEvent = output<void>();

  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  private readonly _snackBar = inject(SnackBar);


  emitClick():void{
    this.OnNewContactEvent.emit(); // emitir el evento cuando se hace un clic en el botón nuevo
  }

  logout():void{
    this._authService.logout().subscribe({
      next:()=>{
        this._router.navigate(['/login']);
      },
      error:(err)=>{
        this._snackBar.openSnackBar('Error al cerrar sesión: '+ err.message,'ok');
      }
    })
  }
}

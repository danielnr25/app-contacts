import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
const MATERIAL_IMPORTS = [MatDatepickerModule,MatInputModule,MatFormFieldModule,MatNativeDateModule,MatIconModule,MatDividerModule,MatButtonModule,MatCardModule];
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MATERIAL_IMPORTS],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
const MATERIAL_IMPORTS = [MatFormFieldModule, MatInputModule, MatIconModule];

@Component({
  selector: 'app-filter-input',
  imports: [MATERIAL_IMPORTS, CommonModule],
  templateUrl: './filter-input.html',
  styleUrl: './filter-input.css'
})
export class FilterInput {
  // evento personalizado per notificarme el cambio del filtro
  @Output() filterChanged = new EventEmitter<string>();

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filterChanged.emit(filterValue);
  }

}

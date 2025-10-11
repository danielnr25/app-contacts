import { Component, inject, OnInit, AfterViewInit,ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {Contact} from '@interfaces/IContact'
import { ContactService } from '@services/contact';
import { CommonModule } from '@angular/common';
import { ModalService } from '@components/modal/modal.service';
import { Modal } from '@components/modal/modal';

const MATERIAL_IMPORTS = [MatTableModule,MatPaginatorModule,MatButtonModule,MatIconModule];
@Component({
  selector: 'app-list-contacts',
  imports: [MATERIAL_IMPORTS,CommonModule],
  templateUrl: './list-contacts.html',
  styleUrl: './list-contacts.css'
})

// OnInit: ciclo de vida de angular, se ejecuta apenas el componente arranca (ideal para cargar datos)/
// ngAfterViewInit: se ejecuta cuando angular ya termino de renderizar la vista del componente

export class ListContacts implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['id','photo','firstname','lastname','email','phone','country','job','company','actions'];
  //dataSource = CONTACT_DATA;
  dataSource = new MatTableDataSource<Contact>([]);

  // importacion de servicios
  private readonly _contactSvc = inject(ContactService);
  private readonly _modalSvc = inject(ModalService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit():void{
    this._contactSvc.getAllContacts().subscribe(data =>{
      //console.log(data);
      //console.log('datos cargando ... ngOnInit');
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
      //console.log('Vista de contactos, ya existe paginator');
  }

  openEditForm(data:any):void{
    console.log(data);
    this._modalSvc.openModal(Modal,'400px',data,true)
  }

}

import { Component, inject, OnInit, AfterViewInit,ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import Contact from '@interfaces/IContact'
import { ContactService } from '@services/contact';

const MATERIAL_IMPORTS = [MatTableModule,MatPaginatorModule];

export const CONTACT_DATA: Contact[] = [
  {
    id: 1,
    firstname: 'Daniel',
    lastname: 'Núñez',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    email: 'daniel.nunez@example.com',
    country: 'Perú',
    phone: 51987654321,
    job: 'Analista de Programación',
    company: 'Tech Solutions SAC',
    address: 'Av. Grau 123, Lima',
    website: 'https://daniel.dev',
    created_at: new Date('2025-01-10T09:30:00'),
    updated_at: new Date('2025-02-15T12:45:00')
  },
  {
    id: 2,
    firstname: 'Brenda',
    lastname: 'Zevallos',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    email: 'brenda.zevallos@example.com',
    country: 'Chile',
    phone: 56912345678,
    job: 'Diseñadora UX/UI',
    company: 'Creativa Studio',
    address: 'Calle Providencia 456, Santiago',
    website: 'https://brendazevallos.com',
    created_at: new Date('2025-01-20T11:15:00'),
    updated_at: new Date('2025-02-18T14:20:00')
  },
  {
    id: 3,
    firstname: 'Carlos',
    lastname: 'Ramírez',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    email: 'carlos.ramirez@example.com',
    country: 'México',
    phone: 5215512345678,
    job: 'Project Manager',
    company: 'Innovatech',
    address: 'Av. Reforma 789, Ciudad de México',
    website: 'https://carlosramirez.mx',
    created_at: new Date('2025-01-25T10:00:00'),
    updated_at: new Date('2025-02-20T16:30:00')
  },
  {
    id: 4,
    firstname: 'Lucía',
    lastname: 'Fernández',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
    email: 'lucia.fernandez@example.com',
    country: 'Argentina',
    phone: 541112345678,
    job: 'Desarrolladora Full-Stack',
    company: 'Code Factory',
    address: 'Calle Corrientes 321, Buenos Aires',
    website: 'https://luciafernandez.dev',
    created_at: new Date('2025-02-01T08:45:00'),
    updated_at: new Date('2025-02-22T11:10:00')
  },
  {
    id: 5,
    firstname: 'Mateo',
    lastname: 'Torres',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
    email: 'mateo.torres@example.com',
    country: 'Colombia',
    phone: 573212345678,
    job: 'Data Scientist',
    company: 'AI Labs',
    address: 'Cra 45 #67-89, Bogotá',
    website: 'https://mateotorres.ai',
    created_at: new Date('2025-02-05T13:25:00'),
    updated_at: new Date('2025-02-25T15:55:00')
  }

];



@Component({
  selector: 'app-list-contacts',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './list-contacts.html',
  styleUrl: './list-contacts.css'
})

// OnInit: ciclo de vida de angular, se ejecuta apenas el componente arranca (ideal para cargar datos)/
// ngAfterViewInit: se ejecuta cuando angular ya termino de renderizar la vista del componente

export class ListContacts implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['id','photo','firstname','lastname','email','phone','country','job','company'];
  //dataSource = CONTACT_DATA;
  dataSource = new MatTableDataSource<Contact>([]);
  private readonly _contactSvc = inject(ContactService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit():void{
    this._contactSvc.getAllContacts().subscribe(data =>{
      console.log(data);
      console.log('datos cargando ... ngOnInit');
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
      console.log('Vista de contactos, ya existe paginator');

  }
}

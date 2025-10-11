import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import {Contact} from '@interfaces/IContact';
import { Observable } from 'rxjs';
//Observable: es como una fuente de datos a la que un componente se puede suscribir (subscribe()) para recibir actualizaciones

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private readonly _firestore = inject(Firestore);

  private readonly _contactCollection = collection(this._firestore,'contact');

  // método para obtener todos los contactos

  getAllContacts():Observable<Contact[]>{
    return collectionData(this._contactCollection,{ idField: 'id'}) as Observable<Contact[]>
  }



}

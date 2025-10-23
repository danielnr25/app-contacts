import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { Contact } from '@interfaces/IContact';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '@shared/constants';
//Observable: es como una fuente de datos a la que un componente se puede suscribir (subscribe()) para recibir actualizaciones

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly _firestore = inject(Firestore);

  private readonly _contactCollection = collection(this._firestore, APP_CONSTANTS.COLLECTION_NAME);

  // método para obtener todos los contactos
  getAllContacts(): Observable<Contact[]> {
    return collectionData(this._contactCollection, { idField: 'id' }) as Observable<Contact[]>;
  }

  // método para crear un nuevo contacto
  newContact(contact: Partial<Contact>): Promise<DocumentReference<DocumentData>> {
    return addDoc(this._contactCollection, {
      ...contact,
      created_at: Date.now(),
      updated_at: Date.now(),
    });
  }

  // método para actualizar un contacto
  updateContact(id: string, contact: any) {
    const docRef = this._getDocRef(id);
    updateDoc(docRef, {
      ...contact,
      updated_at: Date.now(),
    });
  }

  // método para eliminar un contacto
  deleteContact(id: string) {
    const docRef = this._getDocRef(id);
    deleteDoc(docRef);
  }

  //método privado para obtener la referencia de un ID de contacto
  private _getDocRef(id: string) {
    return doc(this._firestore, APP_CONSTANTS.COLLECTION_NAME, id);
  }
}

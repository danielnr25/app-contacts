import { Component, inject } from '@angular/core';
import { ListContacts } from '@core/components/list-contacts/list-contacts';
import {MatCardModule} from '@angular/material/card';
import { Toolbar } from '@components/toolbar/toolbar';
import { ModalService } from '@core/components/modal/modal.service';
import { Modal } from '@core/components/modal/modal';


const MATERIAL_MODULES = [MatCardModule];
@Component({
  selector: 'app-contacts',
  imports: [MATERIAL_MODULES,Toolbar,ListContacts],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {

  contacts = [];

  private readonly _modalSvc = inject(ModalService);
  onClickNewContact():void{
    this._modalSvc.openModal(Modal);
  }


}

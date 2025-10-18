import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListContacts } from '@core/components/list-contacts/list-contacts';
import {MatCardModule} from '@angular/material/card';
import { Toolbar } from '@components/toolbar/toolbar';
import { ModalService } from '@components/modal/modal.service';
import { Modal } from '@components/modal/modal';
import { Login } from '@pages/login/login';
const MATERIAL_MODULES = [MatCardModule];
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListContacts,MATERIAL_MODULES,Toolbar,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private readonly _modalSvc = inject(ModalService);
  onClickNewContact():void{
    this._modalSvc.openModal(Modal);
  }
}

import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Contact } from '@interfaces/IContact';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private readonly _dialog = inject(MatDialog);
  constructor() {}
  // CT: tipo de componente en nuestro es Modalcomponent
  openModal<CT,T=Contact>(componentRef:ComponentType<CT>,width:string = '400px',data?:T,isEditing=false):void{
    const config = {data, isEditing}
    this._dialog.open(componentRef,{width,data:config})
  }

  closeModal():void{
    this._dialog.closeAll();
  }

}

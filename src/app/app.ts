import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListContacts } from '@core/components/list-contacts/list-contacts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListContacts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

import { Routes } from '@angular/router';
import { Contacts } from '@pages/contacts/contacts';
import { Login } from '@pages/login/login';
import { authGuard } from '@guards/auth-guard';
export const routes: Routes = [
  {path: 'login', component: Login},
  {path: 'contacts', component:Contacts,canActivate:[authGuard]},
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login'}
];

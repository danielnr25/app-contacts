import { inject, Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly _firebaseAuth = inject(Auth);

  login(email:string, password:string): Observable<void>{
    const promise = signInWithEmailAndPassword(
      this._firebaseAuth,
      email,
      password
    ).then(()=>{});
    return from(promise);
  }

  logout(): Observable<void>{
    const promise = signOut(this._firebaseAuth);
    return from(promise);
  }

  get isAuthenticated():boolean{
    return this._firebaseAuth.currentUser !== null;
  }

  get currentUser(){
    return this._firebaseAuth.currentUser;
  }

}

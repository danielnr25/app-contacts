import { inject, Injectable } from '@angular/core';
import { Auth,authState,signInWithEmailAndPassword, signOut,User } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly _firebaseAuth = inject(Auth);

  // Observable que emite si el usuario actual
  readonly user$: Observable<User | null> = authState(this._firebaseAuth);

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


  // forma reactiva de verificar si el usuario está autenticado
  get isAuthenticated$():Observable<boolean>{
    return this.user$.pipe(map(user => !!user));
  }

  get currentUser(){
    const user = this._firebaseAuth.currentUser;
    return user;
  }

}

import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '@services/auth';
import { inject } from '@angular/core';
import { map,take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  /*
    const auth = inject(Auth);
    const user = auth.currentUser;
    if (!user) {
      router.navigate(['/login']);
      return false;
    }
  */
  return authService.isAuthenticated$.pipe(
    take(1),
    map(isAuth =>{
      if (!isAuth) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  )

};

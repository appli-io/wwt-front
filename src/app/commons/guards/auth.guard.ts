import { inject }      from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../../auth.service';

export const authGuard = (b: boolean = true) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (!authService.isTokenExpired()) {
    return b;
  } else {
    router.navigate([ '/authentication/sign-in' ]);
    return false;
  }
};

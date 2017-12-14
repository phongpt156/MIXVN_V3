import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from 'app/admin/admin-shared/services/auth-admin/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/admin/login']);
      return false;
    }

    if (state.url === '/admin') {
      this.router.navigate(['/admin/dashboard']);
    }

    return true;
  }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from 'app/admin/admin-shared/services/auth-admin/auth.service';

@Injectable()
export class CheckLogin implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin/dashboard']);
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

import { AuthService } from 'app/shared/services/auth/auth.service';

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

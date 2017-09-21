import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class CheckLogin implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/admin/dashboard']);
      return false;
    }
    return true;
  }
}

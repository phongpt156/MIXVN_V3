import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private isLogin: boolean = false;

  constructor() { }

  getLoginStatus(): boolean {
    return this.isLogin;
  }

  setLoginStatus(status: boolean) {
    this.isLogin = status;
  }
}

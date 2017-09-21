import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private isLogin = false;

  constructor() { }

  getLoginStatus(): boolean {
    return this.isLogin;
  }

  setLoginStatus(status: boolean) {
    this.isLogin = status;
  }
}

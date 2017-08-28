import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  private isAlertLogin: boolean = false;

  constructor() { }

  getAlertLogin(): boolean {
    return this.isAlertLogin;
  }

  setAlertLogin(status: boolean) {
    this.isAlertLogin = status;
  }
}

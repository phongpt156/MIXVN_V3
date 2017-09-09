import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getToken(): string {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';
import { USER } from 'app/shared/constants/api/frontend';

@Injectable()
export class UserService {
  private user: any = {};

  userChange: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient,
  ) { }

  getUser(): any {
    return this.user
  }

  setUser(user) {
    this.user = user;
    this.userChange.next(user);
  }

  loginFacebook(body): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.post(USER.loginFacebook, body, options)
    .catch(handleError);
  }

  get(): Observable<any> {
    const options = createCommonHeaders();

    return this.http.get(USER.getUser, options)
    .catch(handleError);
  }
}

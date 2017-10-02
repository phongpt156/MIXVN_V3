import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/catch';

import { AuthService } from 'app/shared/services/auth/auth.service';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';
import { ADMIN } from 'app/shared/constants/api/backend';

@Injectable()
export class AdminService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private authHttp: AuthHttp
  ) { }

  login(body): Observable<any> {
    const options = createCommonHeaders(this.authService);
    return this.http.post(ADMIN.signin, body, options)
    .catch(handleError);
  }

  getAdmin(): Observable<any> {
    const options = createCommonHeaders(this.authService);
    return this.http.get(ADMIN.getAdmin, options)
    .catch(handleError);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { createCommonHeaders, handleError } from 'app/shared/functions/http-req';
import { ADMIN } from 'app/shared/constants/api/backend';

@Injectable()
export class AdminService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(body): Observable<any> {
    const options = createCommonHeaders();

    return this.http.post(ADMIN.signin, body, options)
    .catch(handleError);
  }

  getAdmin(): Observable<any> {
    const options = createCommonHeaders();

    return this.http.get(ADMIN.getAdmin, options)
    .catch(handleError);
  }
}

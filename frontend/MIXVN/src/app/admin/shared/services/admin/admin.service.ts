import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthService } from 'app/shared/services/auth/auth.service';
import { createCommonHeaders, extractData, extractDataArray, handleError, handleErrorRes } from 'app/shared/functions/http-req';
import { ADMIN } from 'app/shared/constants/api';

@Injectable()
export class AdminService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private router: Router
  ) { }

  login(body): Observable<any> {
    let options = createCommonHeaders(this.authService);
    return this.http.post(ADMIN.signin, body, options)
    .map(extractData)
    .catch(handleError);
  }

  getAdmin(): Observable<any> {
    let options = createCommonHeaders(this.authService);
    return this.http.get(ADMIN.getAdmin, options)
    .map(extractData)
    .catch((error: Response | any) => {
      localStorage.removeItem('token');
      this.router.navigate(['/admin/login']);
      return handleError(error);
    });
  }
}

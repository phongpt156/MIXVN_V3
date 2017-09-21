import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { AuthService } from 'app/shared/services/auth/auth.service';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';
import { ADMIN } from 'app/shared/constants/api/backend';

@Injectable()
export class AdminService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  login(body): Observable<any> {
    const options = createCommonHeaders(this.authService);
    return this.http.post(ADMIN.signin, body, options)
    .catch(handleError);
  }

  getAdmin(): Observable<any> {
    const options = createCommonHeaders(this.authService);
    return this.http.get(ADMIN.getAdmin, options)
    .catch((error: Response | any) => {
      localStorage.removeItem('token');
      this.router.navigate(['/admin/login']);
      return handleError(error);
    });
  }
}

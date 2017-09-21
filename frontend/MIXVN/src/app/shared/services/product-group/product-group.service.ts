import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { PRODUCT_GROUP } from 'app/shared/constants/api/backend';
import { ApiResponse } from 'app/shared/interfaces/api-response';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { createCommonHeaders, handleError } from 'app/shared/functions/http-req';

@Injectable()
export class ProductGroupService {

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  add(body): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService, '');

    return this.http.post(PRODUCT_GROUP.add, body, options)
    .catch(handleError);
  }
}

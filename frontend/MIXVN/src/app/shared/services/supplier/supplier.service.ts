import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError, handleErrorRes} from 'app/shared/functions/http-req';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { SUPPLIER } from 'app/shared/constants/api/backend';

@Injectable()
export class SupplierService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getAll(): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService);

    return this.http.get(SUPPLIER.getAll, options)
    .catch(handleError);
  }

  add(body): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService, '');

    return this.http.post(SUPPLIER.add, body, options)
    .catch(handleError);
  }
}

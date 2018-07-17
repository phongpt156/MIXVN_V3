import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError } from 'app/shared/functions/http-req';
import { SUPPLIER } from 'app/shared/constants/api/backend';

@Injectable()
export class SupplierService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(SUPPLIER.getAll, options)
    .catch(handleError);
  }

  add(body): Observable<ApiResponse> {
    const options = createCommonHeaders('');

    return this.http.post(SUPPLIER.add, body, options)
    .catch(handleError);
  }

  edit(body, id: number): Observable<ApiResponse> {
    const options = createCommonHeaders('');

    return this.http.post(SUPPLIER.edit + id, body, options)
    .catch(handleError);
  }

  delete(id: number): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(SUPPLIER.delete + id, options)
    .catch(handleError);
  }
}

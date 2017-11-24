import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';
import { SUPPLIER } from 'app/shared/constants/api/frontend';

@Injectable()
export class SupplierService {

  constructor(
    private http: HttpClient
  ) { }

  getSupplier(id: number): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(SUPPLIER.getSupplier + id, options)
    .catch(handleError);
  }

  getSetsBySupplier(id: number, type: number): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(SUPPLIER.getSetsBySupplier + id + '/set/type=' + type, options)
    .catch(handleError);
  }

  searchSet(id: number, itemName: string, type: number): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(SUPPLIER.getSetsBySupplier + id + '/set/s=' + itemName + '/type=' + type, options)
    .catch(handleError);
  }
}

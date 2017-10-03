import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { PRODUCT } from 'app/shared/constants/api/backend';
import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError } from 'app/shared/functions/http-req';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) {}

  searchByName(name: string): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(PRODUCT.searchByName + name, options)
    .catch(handleError);
  }

  getAll(): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(PRODUCT.getAll, options)
    .catch(handleError);
  }

  add(body): Observable<ApiResponse> {
    const options = createCommonHeaders('');

    return this.http.post(PRODUCT.add, body, options)
    .catch(handleError);
  }

  edit(body, id: number): Observable<ApiResponse> {
    const options = createCommonHeaders('');

    return this.http.post(PRODUCT.edit + id, body, options)
    .catch(handleError);
  }

  delete(id: number): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.delete(PRODUCT.delete + id, options)
    .catch(handleError);
  }
}

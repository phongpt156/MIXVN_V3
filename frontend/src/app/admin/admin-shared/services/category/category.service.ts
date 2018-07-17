import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError } from 'app/shared/functions/http-req';
import { CATEGORY } from 'app/shared/constants/api/backend';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient,
  ) { }

  getCategories(): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(CATEGORY.getAll, options)
    .catch(handleError);
  }

  add(body: any): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.post(CATEGORY.add, body, options)
    .catch(handleError);
  }

  edit(body: any, id: number): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.put(CATEGORY.edit + id, body, options)
    .catch(handleError);
  }

  delete(id: number): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.delete(CATEGORY.delete + id, options)
    .catch(handleError);
  }

  getByGender(genderId: number): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(CATEGORY.getByGender + genderId, options)
    .catch(handleError);
  }
}

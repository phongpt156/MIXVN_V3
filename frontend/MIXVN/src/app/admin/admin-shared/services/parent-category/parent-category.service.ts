import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';
import { PARENT_CATEGORY } from 'app/shared/constants/api/backend';

@Injectable()
export class ParentCategoryService {

  constructor(
    private http: HttpClient,
  ) { }

  add(body): Observable<ApiResponse> {
    const options = createCommonHeaders();
    return this.http.post(PARENT_CATEGORY.add, body, options)
    .catch(handleError);
  }

  delete(id: number): Observable<ApiResponse> {
    const options = createCommonHeaders();
    return this.http.delete(PARENT_CATEGORY.delete + id, options)
    .catch(handleError);
  }

  edit(body, id: number): Observable<ApiResponse> {
    const options = createCommonHeaders();
    return this.http.put(PARENT_CATEGORY.edit + id, body, options)
    .catch(handleError);
  }
}

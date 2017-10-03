import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { FEATURE } from 'app/shared/constants/api/backend';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';

@Injectable()
export class FeatureService {
  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(FEATURE.getAll, options)
    .catch(handleError);
  }

  add(body): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.post(FEATURE.add, body, options)
    .catch(handleError);
  }

  edit(body, id): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.put(FEATURE.edit + id, body, options)
    .catch(handleError);
  }

  delete(id): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.delete(FEATURE.delete + id, options)
    .catch(handleError);
  }
}

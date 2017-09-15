import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';
import { FEATURE_VALUE } from 'app/shared/constants/api/backend';

@Injectable()
export class FeatureValueService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  add(body): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService);

    return this.http.post(FEATURE_VALUE.add, body, options)
    .catch(handleError);
  }

  edit(body, id: number): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService);
    return this.http.put(FEATURE_VALUE.edit + id, body, options)
    .catch(handleError);
  }

  delete(id: number): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService);

    return this.http.delete(FEATURE_VALUE.delete + id, options)
    .catch(handleError);
  }
}

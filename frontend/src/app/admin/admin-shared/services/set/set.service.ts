import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { SET } from 'app/shared/constants/api/backend';
import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError } from 'app/shared/functions/http-req';

@Injectable()
export class SetService {

  constructor(
    private http: HttpClient
  ) { }

  add(body): Observable<ApiResponse> {
    const options = createCommonHeaders('');

    return this.http.post(SET.add, body, options)
    .catch(handleError);
  }
}

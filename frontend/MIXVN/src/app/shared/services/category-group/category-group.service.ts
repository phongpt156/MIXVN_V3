import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, extractData, extractDataArray, handleError, handleErrorRes} from 'app/shared/functions/http-req';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { CATEGORY_GROUP } from 'app/shared/constants/api/backend';

@Injectable()
export class CategoryGroupService {

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  add(body): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService);

    return this.http.post(CATEGORY_GROUP.add, body, options)
    .map(extractData)
    .catch(handleError);
  }

  edit(body, id: number): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService);

    return this.http.put(CATEGORY_GROUP.edit + id, body, options)
    .map(extractData)
    .catch(handleError);
  }

  delete(id: number): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService);

    return this.http.delete(CATEGORY_GROUP.delete, options)
    .map(extractData)
    .catch(handleError);
  }
}

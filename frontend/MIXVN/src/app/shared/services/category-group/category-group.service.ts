import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError, handleErrorRes} from 'app/shared/functions/http-req';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { CATEGORY_GROUP } from 'app/shared/constants/api/backend';

@Injectable()
export class CategoryGroupService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  add(body): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService);

    return this.http.post(CATEGORY_GROUP.add, body, options)
    .catch(handleError);
  }

  edit(body, id: number): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService);

    return this.http.put(CATEGORY_GROUP.edit + id, body, options)
    .catch(handleError);
  }

  delete(id: number): Observable<ApiResponse> {
    let options = createCommonHeaders(this.authService);

    return this.http.delete(CATEGORY_GROUP.delete + id, options)
    .catch(handleError);
  }
}

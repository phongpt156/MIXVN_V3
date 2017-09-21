import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { CATEGORY } from 'app/shared/constants/api/frontend';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getCategories(): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService);

    return this.http.get(CATEGORY.getAll, options)
    .catch(handleError);
  }
}

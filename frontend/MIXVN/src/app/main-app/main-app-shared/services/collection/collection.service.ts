import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';
import { COLLECTION } from 'app/shared/constants/api/frontend';

@Injectable()
export class CollectionService {

  constructor(
    private http: HttpClient,
  ) { }

  getCollections(): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(COLLECTION.getCollections, options)
    .catch(handleError);
  }

  getCollectionPage(id: number): Observable<ApiResponse> {
    const options = createCommonHeaders();

    return this.http.get(COLLECTION.getCollectionPage + id, options)
    .catch(handleError);
  }
}

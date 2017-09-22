import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';

import { AuthService } from 'app/shared/services/auth/auth.service';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';

import { COLLECTION } from 'app/shared/constants/api/backend';

@Injectable()
export class CollectionService {
  protected collections: any[] = [];
  collectionsChange: Subject<any[]> = new Subject<any[]>();

  getCollections(): any[] {
    return this.collections;
  }

  setCollections(collections: any[]) {
    this.collections = collections;
    this.collectionsChange.next(collections);
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getAll(): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService);

    return this.http.get(COLLECTION.getAll, options)
    .catch(handleError);
  }

  add(body): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService, '');

    return this.http.post(COLLECTION.add, body, options)
    .catch(handleError);
  }

  edit(body, id: number): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService, '');

    return this.http.post(COLLECTION.edit + id, body, options)
    .catch(handleError);
  }

  delete(id: number): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService);

    return this.http.get(COLLECTION.delete + id, options)
    .catch(handleError);
  }
}

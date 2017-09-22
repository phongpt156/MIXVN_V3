import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { FEATURE } from 'app/shared/constants/api/backend';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';

@Injectable()
export class FeatureService {
  protected features: any[] = [];

  featuresChange: Subject<any[]> = new Subject<any[]>();

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getFeatures(): any[] {
    return this.features;
  }

  setFeatures(features: any[]) {
    this.features = features;
    this.featuresChange.next(features);
  }

  getAll(): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService);

    return this.http.get(FEATURE.getAll, options)
    .catch(handleError);
  }

  add(body): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService);

    return this.http.post(FEATURE.add, body, options)
    .catch(handleError);
  }

  edit(body, id): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService);

    return this.http.put(FEATURE.edit + id, body, options)
    .catch(handleError);
  }

  delete(id): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService);

    return this.http.delete(FEATURE.delete + id, options)
    .catch(handleError);
  }
}

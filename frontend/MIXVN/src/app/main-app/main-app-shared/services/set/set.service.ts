import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError, handleErrorRes } from 'app/shared/functions/http-req';
import { SET } from 'app/shared/constants/api/frontend';

@Injectable()
export class SetService {
  protected sets: any[] = [];
  protected selectedSet: any;

  setsChange: Subject<any[]> = new Subject<any[]>();
  selectedItemChange: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient
  ) { }

  getSelectedSet(): any {
    return this.selectedSet;
  }

  setSelectedSet(set: any) {
    this.selectedSet = set;
    this.selectedItemChange.next(set);
  }

  getSets(): any[] {
    return this.sets;
  }

  setSets(sets: any[]) {
    this.sets = sets;
    this.setsChange.next(sets);
  }

  getNewest(): Observable<ApiResponse> {
    let options = createCommonHeaders();

    return this.http.get(SET.getSets + 1, options)
    .catch(handleError);
  }

  getMostLike(): Observable<ApiResponse> {
    let options = createCommonHeaders();

    return this.http.get(SET.getSets + 2, options)
    .catch(handleError);
  }

  getDiscount(): Observable<ApiResponse> {
    let options = createCommonHeaders();

    return this.http.get(SET.getSets + 3, options)
    .catch(handleError);
  }

  like(setId: number): Observable<ApiResponse> {
    let options = createCommonHeaders();

    return this.http.get(SET.like + setId, options)
    .catch(handleError);
  }

  search(body: any): Observable<ApiResponse> {
    let options = createCommonHeaders();

    return this.http.post(SET.search, body, options)
    .catch(handleError);
  }
}

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

  convertData(data: any[]): any[] {
    let currentSetId: number;
    let sets: any[] = [];
    let set: any;
    let item: any;
    let feature: any;

    data.forEach(val => {
      item = {};

      if (val.id != currentSetId) {
        set = {};
        sets.push(set);

        set.items = [];
        set.id = currentSetId = val.id;
        set.img = val.img;
      }

      item.id = val.item_id;
      item.img = val.item_img;
      item.price = val.item_price;
      item.supplier = {};
      item.supplier.id = val.supplier_id;
      item.supplier.name = val.supplier_name;
      item.supplier.address = val.supplier_address;

      if (val.features) {
        item.features = [];
        let featureName: string;
        let length: number;

        val.features.split(',').forEach(val => {
          val = val.split(': ');
          if (val[0] !== featureName) {
            featureName = val[0];
            item.features.push({name: val[0], value: [val[1]]});
            length = item.features.length;
          } else {
            item.features[length - 1].value.push(val[1]);
          }
        });
      }

      set.items.push(item);
    });
    
    console.log(sets);
    return sets;
  }

  addSets(sets: any[]) {
    this.sets.push(sets);
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

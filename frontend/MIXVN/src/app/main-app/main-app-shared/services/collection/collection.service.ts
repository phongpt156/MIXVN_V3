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

  convertData(data: any[]): any {
    const collection: any = {};

    data.forEach(val => {
      if (!collection.id) {
        collection.id = val.collection_id;
        collection.img = val.collection_img;
        collection.name = val.collection_name;
        collection.sets = [];
      }

      if (val.id) {
        const set: any = {};
        set.id = val.id;
        set.img = val.img;
        set.item_id = val.item_id;
        set.item_discount = val.item_discount;
        set.item_name = val.item_name;
        set.item_price = val.item_price;
        set.supplier_id = val.supplier_id;
        set.supplier_name = val.supplier_name;
        set.sum_like = val.sum_like;
        set.user_id = val.user_id;
        collection.sets.push(set);
      }
    });

    return collection;
  }
}

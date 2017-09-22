import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';

import { ApiResponse } from 'app/shared/interfaces/api-response';
import { createCommonHeaders, handleError, handleErrorRes} from 'app/shared/functions/http-req';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { SUPPLIER } from 'app/shared/constants/api/backend';

@Injectable()
export class SupplierService {
  protected suppliers: any[] = [];
  suppliersChange: Subject<any[]> = new Subject<any[]>();

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getSuppliers(): any[] {
    return this.suppliers;
  }

  setSuppliers(suppliers: any[]) {
    this.suppliers = suppliers;
    this.suppliersChange.next(suppliers);
  }

  getAll(): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService);

    return this.http.get(SUPPLIER.getAll, options)
    .catch(handleError);
  }

  add(body): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService, '');

    return this.http.post(SUPPLIER.add, body, options)
    .catch(handleError);
  }

  edit(body, id: number): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService, '');

    return this.http.post(SUPPLIER.edit + id, body, options)
    .catch(handleError);
  }

  delete(id: number): Observable<ApiResponse> {
    const options = createCommonHeaders(this.authService);

    return this.http.get(SUPPLIER.delete + id, options)
    .catch(handleError);
  }
}

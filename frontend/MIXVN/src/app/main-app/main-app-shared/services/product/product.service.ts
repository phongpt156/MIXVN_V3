import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductService {
  protected products: any[];
  protected selectedProduct: any;

  productsChange: Subject<any[]> = new Subject<any[]>();
  selectedProductChange: Subject<any> = new Subject<any>();

  constructor() {}

  getSelectedProduct(): any {
    return this.selectedProduct;
  }

  setSelectedProduct(product: any) {
    this.selectedProduct = product;
    this.selectedProductChange.next(product);
  }

  getProducts(): any[] {
    return this.products;
  }

  setProducts(products: any[]) {
    this.products = products;
    this.productsChange.next(products);
  }
}

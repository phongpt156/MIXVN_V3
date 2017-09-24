import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { ProductService } from 'app/main-app/main-app-shared/services/product/product.service';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'mix-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss'],
  host: {
    '(document:keyup)': 'onKeyup($event)',
  }
})
export class ProductDetailModalComponent implements OnInit, OnDestroy {
  _productSubscription: Subscription;
  _productsSubscription: any;
  products: any[] = [];
  product: any;
  index: number;

  constructor(
    public bsModalRef: BsModalRef,
    private commonService: CommonService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.product = this.productService.getSelectedProduct();

    this._productSubscription = this.productService.selectedProductChange.subscribe(product => {
      this.product = product;
    });

    this._productsSubscription = this.productService.productsChange.subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    this.commonService.setBlur(false);
    this._productSubscription.unsubscribe();
    this._productsSubscription.unsubscribe();
  }

  changeProduct(action: number) {
    if (action === 1) {
      this.index--;
    } else {
      this.index++;
    }
    this.productService.setSelectedProduct(this.products[this.index]);
  }

  onKeyup(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft' && this.index > 0) {
      this.changeProduct(1);
    } else if (e.key === 'ArrowRight' && this.index < this.products.length - 1) {
      this.changeProduct(2);
    }
  }

  goToSupplierPage() {
    this.bsModalRef.hide();
    this.router.navigate(['/shop']);
  }
}

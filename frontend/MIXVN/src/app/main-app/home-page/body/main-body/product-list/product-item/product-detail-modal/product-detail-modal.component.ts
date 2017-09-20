import { Component, OnInit, OnDestroy } from '@angular/core';

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
  product: any;
  index: number;

  constructor(
    private commonService: CommonService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.index);
    });
  }

  ngOnDestroy() {
    this.commonService.setBlur(false);
  }

  changeProduct(action: number) {
    if (action === 1) {
      this.index--;
    } else {
      this.index++;
    }
    this.productService.selectedProduct = this.productService.products[this.index];
  }

  onKeyup(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft' && this.index > 0) {
      this.changeProduct(1);
    } else if (e.key === 'ArrowRight' && this.index < this.productService.products.length - 1) {
      this.changeProduct(2);
    }
  }
}

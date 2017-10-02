import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

import { CommonService } from 'app/shared/services/common/common.service';
import { ProductService } from 'app/main-app/main-app-shared/services/product/product.service';

import { ProductDetailModalComponent  } from './product-detail-modal/product-detail-modal.component';

@Component({
  selector: 'mix-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  bsModalRef: BsModalRef;
  @Input() product: any = {};
  @Input() index: number;

  constructor(
    private commonService: CommonService,
    private bsModalService: BsModalService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openDetailProductModal(product: any) {
    this.commonService.setBlur(true);

    this.bsModalRef = this.bsModalService.show(ProductDetailModalComponent, { class: 'w-50'});

    this.bsModalRef.content.index = this.index;
    this.productService.setSelectedProduct(this.product);
  }

  goToSupplierPage() {
    this.router.navigate(['/shop']);
  }
}

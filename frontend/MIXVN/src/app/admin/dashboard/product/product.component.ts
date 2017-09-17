import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';

import { ProductService } from 'app/shared/services/product/product.service';

import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'mix-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(
    private productService: ProductService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll()
    .subscribe(res => {
      console.log(res);
      this.productService.products = res.data;
    });
  }

  openEditProductModal(product: any) {
    this.bsModalRef = this.bsModalService.show(EditProductComponent, {class: 'w-75 modal-lg'});
    this.bsModalRef.content.product = product;
  }
}

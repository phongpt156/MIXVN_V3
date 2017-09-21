import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';

import { ProductService } from 'app/admin/admin-shared/services/product/product.service';

import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'mix-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('deleteProductModal') deleteProductModal;

  bsModalRef: BsModalRef;
  selectedProductId: number;

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
      this.productService.products = res.data;
    });
  }

  openAddProductModal() {
    this.bsModalRef = this.bsModalService.show(AddProductComponent, {class: 'w-75 modal-lg'});
  }

  openEditProductModal(product: any) {
    this.bsModalRef = this.bsModalService.show(EditProductComponent, {class: 'w-75 modal-lg'});
    this.bsModalRef.content.product = product;
  }

  openDeleteProductModal(id: number) {
    this.selectedProductId = id;
    this.bsModalRef = this.bsModalService.show(this.deleteProductModal);
  }

  deleteProduct() {
    this.productService.delete(this.selectedProductId)
    .subscribe(res => {
      this.bsModalRef.hide();
      this.getProducts();
    });
  }
}

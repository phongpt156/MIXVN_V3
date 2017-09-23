import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs/Subscription';

import { ProductService } from 'app/admin/admin-shared/services/product/product.service';

import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'mix-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  @ViewChild('deleteProductModal') deleteProductModal;
  products: any[] = [];
  bsModalRef: BsModalRef;
  selectedProductId: number;
  _subscription: Subscription;

  constructor(
    private productService: ProductService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this._subscription = this.productService.productsChange.subscribe((products: any[]) => {
      this.products = products;
    });
    this.getProducts();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  getProducts() {
    this.productService.getAll()
    .subscribe(res => {
      this.productService.setProducts(res.data);
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

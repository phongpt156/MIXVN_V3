import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ProductService } from 'app/admin/admin-shared/services/product/product.service';

import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@Component({
  selector: 'mix-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  dialogRef: any;

  constructor(
    public dialog: MdDialog,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll()
    .subscribe(res => {
      this.products = res.data;
    });
  }

  openAddProductModal() {
    this.dialogRef = this.dialog.open(AddProductComponent, {
      panelClass: ['w-50', 'mh-100', 'overflow']
    });

    this.dialogRef.afterClosed().subscribe(isAdd => {
      if (isAdd) {
        this.getProducts();
      }
    });
  }

  openEditProductModal(product: any) {
    this.dialogRef = this.dialog.open(EditProductComponent, {
      panelClass: ['w-50', 'mh-100', 'overflow']
    });

    this.dialogRef.componentInstance.product = product;
    
    this.dialogRef.afterClosed().subscribe(isEdit => {
      if (isEdit) {
        this.getProducts();
      }
    });
  }

  openDeleteProductModal(id: number) {
    this.dialogRef = this.dialog.open(DeleteProductComponent);

    this.dialogRef.afterClosed().subscribe((isDelete) => {
      if (isDelete) {
        this.productService.delete(id)
        .subscribe(res => {
          this.getProducts();
        });
      }
    });
  }
}

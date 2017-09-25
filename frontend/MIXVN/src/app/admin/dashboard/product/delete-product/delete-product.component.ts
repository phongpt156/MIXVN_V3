import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { ProductService } from 'app/admin/admin-shared/services/product/product.service';

@Component({
  selector: 'mix-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  id: number;

  constructor(
    public dialogRef: MdDialogRef<DeleteProductComponent>,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.delete(this.id)
    .subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}

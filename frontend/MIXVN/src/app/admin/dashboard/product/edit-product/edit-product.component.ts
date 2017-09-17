import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductService } from 'app/shared/services/product/product.service';
import { CategoryService } from 'app/shared/services/category/category.service';
import { SupplierService } from 'app/shared/services/supplier/supplier.service';
import { FeatureService } from 'app/shared/services/feature/feature.service';

@Component({
  selector: 'mix-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: any;
  editProductForm: FormGroup;
  categories: any[] = [];
  suppliers: any[] = [];
  productImage: File;
  features: any[] = [];

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private featureService: FeatureService
  ) { }

  ngOnInit() {
    this.editProductForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      category: ['', Validators.required],
      supplier: ['', Validators.required],
      features: ['1'],
      active: [true, Validators.required ]
    });

    this.getCategories();
    this.getSuppliers();
    this.getFeatures();
    this.patchValue();
  }

  patchValue() {
    setTimeout(() => {
      this.editProductForm.patchValue({
        name: this.product.name,
        price: this.product.price,
        discount: this.product.discount,
        category: this.product.category.id,
        supplier: this.product.supplier.id,
        active: this.product.active
      });
      console.log(this.product);
    });
  }

  getCategories() {
    this.categoryService.getCategories()
    .subscribe(res => {
      this.categories = res.data;
    });
  }

  getSuppliers() {
    this.supplierService.getAll()
    .subscribe(res => {
      this.suppliers = res.data;
    });
  }

  getFeatures() {
    this.featureService.getAll()
    .subscribe(res => {
      this.features = res.data;
      console.log(this.features);
    });
  }

  onSubmit() {

  }
}

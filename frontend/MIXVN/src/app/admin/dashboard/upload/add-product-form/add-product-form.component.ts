import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GENDER } from 'app/shared/constants/constants';

import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';
import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { CategoryService } from 'app/admin/admin-shared/services/category/category.service';

@Component({
  selector: 'mix-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  @Input() addProductForm: FormGroup;
  @Input() index: number;
  @Output() productImageAction: EventEmitter<any> = new EventEmitter;
  @Output() productId: EventEmitter<any> = new EventEmitter;

  // gender: any = GENDER;
  // categories: any[] = [];
  // suppliers: any[] = [];
  // productImage: File;
  // isDisabled: boolean = false;
  product: any;
  // features: any[] = [];

  constructor(
    private fb: FormBuilder,
    private supplierService: SupplierService,
    private featureService: FeatureService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    // this.getCategories(this.addProductForm.value.gender);

    // this.getSuppliers();
    // this.getFeatures();
  }

  // getCategories(genderId: number) {
  //   this.categoryService.getByGender(genderId)
  //   .subscribe(res => {
  //     this.categories = res.data;
  //   })
  // }

  // getFeatures() {
  //   this.featureService.getAll()
  //   .subscribe(res => {
  //     this.features = res.data;
  //     console.log(this.features);
  //   });
  // }

  // getSuppliers() {
  //   this.supplierService.getAll()
  //   .subscribe(res => {
  //     this.suppliers = res.data;
  //   });
  // }

  // imageUploaded(e) {
  //   this.productImage = e.file;
  //   this.productImageAction.emit({productImage: this.productImage, index: this.index});
  // }

  // imageRemoved(e) {
  //   this.productImage = undefined;
  //   this.productImageAction.emit({productImage: this.productImage, index: this.index});
  // }

  selectedProduct(e) {
    this.addProductForm.disable();
    this.productId.emit({productId: e.product.id, index: this.index});
    // this.isDisabled = true;
    this.product = e.product;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductService } from 'app/shared/services/product/product.service';
import { CategoryGroupService } from 'app/shared/services/category-group/category-group.service';
import { SupplierService } from 'app/shared/services/supplier/supplier.service';
import { FeatureService } from 'app/shared/services/feature/feature.service';

import { GENDER } from 'app/shared/constants/constants';

@Component({
  selector: 'mix-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnDestroy {
  product: any;
  editProductForm: FormGroup;
  categories: any[] = [];
  suppliers: any[] = [];
  productImage: File;
  features: any[] = [];
  gender: any = GENDER;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryGroupService: CategoryGroupService,
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
      features: [],
      gender: ['', Validators.required],
      active: [true, Validators.required ]
    });

    this.getSuppliers();
    this.getFeatures();
    this.patchValue();
  }

  ngOnDestroy() {
    this.getProducts();
  }

  patchValue() {
    setTimeout(() => {
      this.editProductForm.patchValue({
        name: this.product.name,
        price: this.product.price,
        discount: this.product.discount,
        category: this.product.category.id,
        supplier: this.product.supplier.id,
        gender: this.product.gender,
        active: this.product.active,
      });
      let features: any[] = [];
      this.product.featureValues.forEach(val => {
        features.push(val.id);
      });
      this.getCategories(this.product.gender);
      this.editProductForm.controls.features.setValue(features);
    });
  }

  getCategories(genderId: number) {
    this.categoryGroupService.getByGender(genderId)
    .subscribe(res => {
      this.categories = [];
      res.data.forEach(categoryGroup => {
        this.categories = this.categories.concat(categoryGroup.categories);
      });
    })
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
    });
  }

  getProducts() {
    this.productService.getAll()
    .subscribe(res => {
      this.productService.products = res.data;
    });
  }

  imageUploaded(e) {
    this.productImage = e.file;
  }

  imageRemoved(e) {
    this.productImage = undefined;
  }

  onSubmit() {
    if (this.editProductForm.valid) {
      let formData: FormData = new FormData;
      console.log(this.editProductForm.value);      
      if (this.productImage) {
        formData.append('img', this.productImage, this.productImage.name);
      }

      for (let name in this.editProductForm.value) {
        formData.append(name, this.editProductForm.value[name]);
      }

      this.productService.edit(formData, this.product.id)
      .subscribe(res => {
        this.bsModalRef.hide();
      }); 
    }
  }
}

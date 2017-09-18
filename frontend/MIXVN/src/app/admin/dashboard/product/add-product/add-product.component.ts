import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { ProductService } from 'app/shared/services/product/product.service';
import { CategoryGroupService } from 'app/shared/services/category-group/category-group.service';
import { SupplierService } from 'app/shared/services/supplier/supplier.service';
import { FeatureService } from 'app/shared/services/feature/feature.service';

import { GENDER } from 'app/shared/constants/constants';

@Component({
  selector: 'mix-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {
  addProductForm: FormGroup;
  productImage: File;
  categories: any[] = [];
  suppliers: any[] = [];
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
    this.addProductForm = this.fb.group({
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
  }

  ngOnDestroy() {
    this.getProducts();
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

  imageUploaded(e) {
    this.productImage = e.file;
  }

  imageRemoved(e) {
    this.productImage = undefined;
  }

  getProducts() {
    this.productService.getAll()
    .subscribe(res => {
      this.productService.products = res.data;
    });
  }

  onSubmit() {
    if (this.addProductForm.valid && this.productImage) {
      let formData: FormData = new FormData;
      console.log(this.addProductForm.value);      
      formData.append('img', this.productImage, this.productImage.name);

      for (let name in this.addProductForm.value) {
        formData.append(name, this.addProductForm.value[name]);
      }

      this.productService.add(formData)
      .subscribe(res => {
        this.bsModalRef.hide();
      });
    }
  } 
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductService } from 'app/admin/admin-shared/services/product/product.service';
import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';
import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { CategoryService } from 'app/admin/admin-shared/services/category/category.service';

import { GENDER } from 'app/shared/constants/constants';

declare var Cropper: any;

@Component({
  selector: 'mix-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @ViewChild('productImagePreview') productImagePreview;
  product: any;
  editProductForm: FormGroup;
  categories: any[] = [];
  suppliers: any[] = [];
  productImage: string;
  features: any[] = [];
  gender: any = GENDER;
  cropper: any;
  isSelectImage = false;
  formData: FormData = new FormData;
  isPending = false;

  constructor(
    public dialogRef: MdDialogRef<EditProductComponent>,
    private fb: FormBuilder,
    private productService: ProductService,
    private supplierService: SupplierService,
    private featureService: FeatureService,
    private categoryService: CategoryService
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

    this.cropper = new Cropper(this.productImagePreview.nativeElement, {
      aspectRatio: 3 / 4,
      viewMode: 1
    });

  }

  patchValue() {
    this.editProductForm.patchValue({
      name: this.product.name,
      price: this.product.price,
      discount: this.product.discount,
      category: this.product.category.id,
      supplier: this.product.supplier.id,
      gender: this.product.gender,
      active: this.product.active,
    });
    this.productImage = this.product.img;
    const features: any[] = [];
    this.product.featureValues.forEach(val => {
      features.push(val.id);
    });
    this.getCategories(this.product.gender);
    this.editProductForm.controls.features.setValue(features);
  }

  getCategories(genderId: number) {
    this.categoryService.getByGender(genderId)
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
    });
  }

  imageUploaded(e) {
    const oFReader = new FileReader();

    oFReader.readAsDataURL(e.file);
    oFReader.onload = (oFREvent) => {
      this.cropper.destroy();
      this.isSelectImage = true;
      this.cropper.replace(oFREvent.target['result']);
    }
  }

  imageRemoved() {
    this.isSelectImage = false;
    this.cropper.destroy();
  }

  async onSubmit() {
    if (!this.isPending) {
      if (this.editProductForm.valid) {
        this.isPending = true;
        if (this.isSelectImage) {
          await this.convertBlob();
        }
        this.sendData();
      }
    }
  }

  sendData() {
    for (const name of Object.keys(this.editProductForm.value)) {
      this.formData.append(name, this.editProductForm.value[name]);
    }
    this.productService.edit(this.formData, this.product.id)
    .subscribe(res => {
      this.dialogRef.close(true);
      this.isPending = false;
    });
  }

  convertBlob() {
    return new Promise(resolve => {
      this.cropper.getCroppedCanvas().toBlob((productImage) => {
        this.formData.append('img', productImage);
        resolve();
      });
    });
  }
}

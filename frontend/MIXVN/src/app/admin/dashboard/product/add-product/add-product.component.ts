import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { ProductService } from 'app/admin/admin-shared/services/product/product.service';
import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';
import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { CategoryService } from 'app/admin/admin-shared/services/category/category.service';

import { GENDER } from 'app/shared/constants/constants';

declare var Cropper: any;

@Component({
  selector: 'mix-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild('productImagePreview') productImagePreview;
  addProductForm: FormGroup;
  categories: any[] = [];
  suppliers: any[] = [];
  features: any[] = [];
  gender: any = GENDER;
  cropper: any;
  isSelectImage = false;
  formData: FormData = new FormData;
  isPending = false;

  constructor(
    public dialogRef: MdDialogRef<AddProductComponent>,
    private fb: FormBuilder,
    private productService: ProductService,
    private supplierService: SupplierService,
    private featureService: FeatureService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      discount: [''],
      category: ['', Validators.required],
      supplier: ['', Validators.required],
      features: [],
      gender: ['', Validators.required],
      active: [true, Validators.required ]
    });

    this.cropper = new Cropper(this.productImagePreview.nativeElement, {
      aspectRatio: 3 / 4,
      viewMode: 1
    });

    this.getSuppliers();
    this.getFeatures();
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

  async submit() {
    if (!this.isPending) {
      if (this.addProductForm.valid && this.isSelectImage) {
        this.isPending = true;
        await this.convertBlob();

        for (const name of Object.keys(this.addProductForm.value)) {
          this.formData.append(name, this.addProductForm.value[name]);
        }
        this.productService.add(this.formData)
        .subscribe(res => {
          this.dialogRef.close(true);
          this.isPending = false;
        });
      }
    }
  }

  onSubmit() {
    this.submit();
  }

  convertBlob() {
    return new Promise((resolve) => {
      this.cropper.getCroppedCanvas().toBlob((productImage) => {
        this.formData.append('img', productImage);
        resolve();
      });
    })
  }
}

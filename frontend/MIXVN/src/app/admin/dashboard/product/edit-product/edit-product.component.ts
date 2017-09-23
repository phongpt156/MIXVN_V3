import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductService } from 'app/admin/admin-shared/services/product/product.service';
import { CategoryGroupService } from 'app/admin/admin-shared/services/category-group/category-group.service';
import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';
import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';

import { GENDER } from 'app/shared/constants/constants';

declare var Cropper: any;

@Component({
  selector: 'mix-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnDestroy {
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

    this.cropper = new Cropper(this.productImagePreview.nativeElement, {
      aspectRatio: 3 / 4,
      viewMode: 1
    });

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
      this.productImage = this.product.img;
      const features: any[] = [];
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
      this.productService.setProducts(res.data);
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
      console.log(res);
      this.bsModalRef.hide();
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

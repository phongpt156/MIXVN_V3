import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ItemService } from 'app/admin/admin-shared/services/item/item.service';
import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';
import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { CategoryService } from 'app/admin/admin-shared/services/category/category.service';

import { GENDER } from 'app/shared/constants/constants';

declare var Cropper: any;

@Component({
  selector: 'mix-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  @ViewChild('itemImagePreview') itemImagePreview;
  item: any;
  editItemForm: FormGroup;
  categories: any[] = [];
  suppliers: any[] = [];
  itemImage: string;
  features: any[] = [];
  gender: any = GENDER;
  cropper: any;
  isSelectImage = false;
  formData: FormData = new FormData;
  isPending = false;

  constructor(
    public dialogRef: MatDialogRef<EditItemComponent>,
    private fb: FormBuilder,
    private itemService: ItemService,
    private supplierService: SupplierService,
    private featureService: FeatureService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.editItemForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      discount: [''],
      category: ['', Validators.required],
      supplier: ['', Validators.required],
      features: [],
      gender: ['', Validators.required],
      active: [true, Validators.required ]
    });

    this.getSuppliers();
    this.getFeatures();
    this.patchValue();

    this.cropper = new Cropper(this.itemImagePreview.nativeElement, {
      aspectRatio: 3 / 4,
      viewMode: 1
    });

  }

  patchValue() {
    this.editItemForm.patchValue({
      name: this.item.name,
      price: this.item.price,
      discount: this.item.discount,
      category: this.item.category.id,
      supplier: this.item.supplier.id,
      gender: this.item.gender,
      active: this.item.active,
    });
    this.itemImage = this.item.img;
    const features: any[] = [];
    this.item.featureValues.forEach(val => {
      features.push(val.id);
    });
    this.getCategories(this.item.gender);
    this.editItemForm.controls.features.setValue(features);
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
      if (this.editItemForm.valid) {
        this.isPending = true;
        if (this.isSelectImage) {
          await this.convertBlob();
        }
        this.sendData();
      }
    }
  }

  sendData() {
    for (const name of Object.keys(this.editItemForm.value)) {
      this.formData.append(name, this.editItemForm.value[name]);
    }
    this.itemService.edit(this.formData, this.item.id)
    .subscribe(res => {
      this.dialogRef.close(true);
      this.isPending = false;
    });
  }

  convertBlob() {
    return new Promise(resolve => {
      this.cropper.getCroppedCanvas().toBlob((itemImage) => {
        this.formData.append('img', itemImage);
        resolve();
      });
    });
  }
}

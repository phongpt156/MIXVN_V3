import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { MIX_PATH } from 'app/shared/constants/constants';

import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';
import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';
import { CategoryService } from 'app/admin/admin-shared/services/category/category.service';

@Component({
  selector: 'mix-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @Input() addItemForm: FormGroup;
  @Input() index: number;

  // gender: any = GENDER;
  // categories: any[] = [];
  // suppliers: any[] = [];
  // itemImage: File;
  // isDisabled: boolean = false;
  item: any;
  mixPath: string = MIX_PATH;
  // features: any[] = [];

  constructor(
    private fb: FormBuilder,
    private supplierService: SupplierService,
    private featureService: FeatureService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    // this.getCategories(this.addItemForm.value.gender);

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
  //   this.itemImage = e.file;
  //   this.itemImageAction.emit({itemImage: this.itemImage, index: this.index});
  // }

  // imageRemoved(e) {
  //   this.itemImage = undefined;
  //   this.itemImageAction.emit({itemImage: this.itemImage, index: this.index});
  // }

  selectedItem(e) {
    this.addItemForm.setValue({
      id: e.item.id,
      name: e.item.name
    });
    this.item = e.item;
  }
}

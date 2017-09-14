import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { SupplierService } from 'app/shared/services/supplier/supplier.service';

@Component({
  selector: 'mix-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit, OnDestroy {
  editSupplierForm: FormGroup;
  backgroundImageFile: File;
  avatarFile: File;
  supplier: any = {};
  supplierAvatar: string;
  supplierBackgroundImage: string;
  tmpSupplierAvatar: string;
  tmpSupplierBackgroundImage: string;
  formData: FormData = new FormData;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.editSupplierForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      facebook_link: [''],
      facebook_title: [''],
      instagram_link: [''],
      instagram_title: [''],
      active: [true]
    });

    setTimeout(() => {
      this.patchValue();
    });
  }

  ngOnDestroy() {
    this.supplierService.getAll()
    .subscribe(res => {
      this.supplierService.suppliers = res.data;
    });
  }

  patchValue() {
    this.editSupplierForm.patchValue({
      name: this.supplier.name,
      address: this.supplier.address,
      facebook_link: this.supplier.facebook_link ? this.supplier.facebook_link : '',
      facebook_title: this.supplier.facebook_title ? this.supplier.facebook_title : '',
      instagram_link: this.supplier.instagram_link ? this.supplier.instagram_link : '',
      instagram_title: this.supplier.instagram_title ? this.supplier.instagram_title : '',
      active: this.supplier.active ? true : false
    });

    this.tmpSupplierAvatar = this.supplierAvatar = this.supplier.avatar;
    this.tmpSupplierBackgroundImage = this.supplierBackgroundImage = this.supplier.background_image;
  }

  imageUploaded(e, name: string) {
    if (name === 'background_image') {
      this.backgroundImageFile = e.file;
    } else if (name === 'avatar') {
      this.avatarFile = e.file;
    }
  }

  imageRemoved(e, name: string) {
    if (name === 'background_image') {
      this.backgroundImageFile = undefined;
    } else if (name === 'avatar') {
      this.avatarFile = undefined;
    }
  }

  onSubmit() {
    if (this.editSupplierForm.valid) {
      if (this.backgroundImageFile) {
        this.formData.append('background_image', this.backgroundImageFile, this.backgroundImageFile.name);
      }

      if (this.avatarFile) {
        this.formData.append('avatar', this.avatarFile, this.avatarFile.name);
      }

      for (let i in this.editSupplierForm.value) {
        this.formData.append(i, this.editSupplierForm.value[i]);
      }
      
      this.supplierService.edit(this.formData, this.supplier.id)
      .subscribe(res => {
        this.bsModalRef.hide();
      });
    }
  }
}

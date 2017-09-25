import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';

declare var Cropper: any;

@Component({
  selector: 'mix-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit {
  @ViewChild('supplierBackgroundImagePreview') supplierBackgroundImagePreview;
  @ViewChild('supplierAvatarImagePreview') supplierAvatarImagePreview;
  editSupplierForm: FormGroup;
  supplier: any = {};
  supplierAvatar: string;
  supplierBackgroundImage: string;
  tmpSupplierAvatar: string;
  tmpSupplierBackgroundImage: string;
  private formData: FormData = new FormData;
  backgroundCropper: any;
  avatarCropper: any;
  isSelectBackgroundImage = false;
  isSelectAvatarImage = false;

  constructor(
    public dialogRef: MdDialogRef<EditSupplierComponent>,
    private fb: FormBuilder,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.editSupplierForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: [''],
      open_time: [''],
      close_time: [''],
      facebook_link: [''],
      facebook_title: [''],
      instagram_link: [''],
      instagram_title: [''],
      active: [true]
    });

    this.patchValue();

    this.backgroundCropper = new Cropper(this.supplierBackgroundImagePreview.nativeElement, {
      aspectRatio: 21 / 9,
      viewMode: 1
    });

    this.avatarCropper = new Cropper(this.supplierAvatarImagePreview.nativeElement, {
      aspectRatio: 1 / 1,
      viewMode: 1
    });
  }

  patchValue() {
    this.editSupplierForm.patchValue({
      name: this.supplier.name,
      address: this.supplier.address,
      phone_number: this.supplier.phone_number || '',
      open_time: this.supplier.open_time,
      close_time: this.supplier.close_time,
      facebook_link: this.supplier.facebook_link || '',
      facebook_title: this.supplier.facebook_title || '',
      instagram_link: this.supplier.instagram_link || '',
      instagram_title: this.supplier.instagram_title || '',
      active: this.supplier.active ? true : false
    });

    this.tmpSupplierAvatar = this.supplierAvatar = this.supplier.avatar;
    this.tmpSupplierBackgroundImage = this.supplierBackgroundImage = this.supplier.background_image;
  }

  imageUploaded(e, name: string) {
    const oFReader = new FileReader();
    oFReader.readAsDataURL(e.file);
    if (name === 'background_image') {
      oFReader.onload = (oFREvent) => {
        this.backgroundCropper.replace(oFREvent.target['result']);
      }
      this.isSelectBackgroundImage = true;
    } else if (name === 'avatar') {
      oFReader.onload = (oFREvent) => {
        this.avatarCropper.replace(oFREvent.target['result']);
      }
      this.isSelectAvatarImage = true;
    }
  }

  imageRemoved(e, name: string) {
    if (name === 'background_image') {
      this.isSelectBackgroundImage = false;
      this.backgroundCropper.destroy();
    } else if (name === 'avatar') {
      this.isSelectAvatarImage = false;
      this.avatarCropper.destroy();
    }
  }

  async onSubmit() {
    if (this.editSupplierForm.valid) {
      if (this.isSelectBackgroundImage) {
        await this.convertBlob('background_image');
      }

      if (this.isSelectAvatarImage) {
        await this.convertBlob('avatar');
      }
      this.senData();
    }
  }

  convertBlob(name: string) {
    return new Promise(resolve => {
      if (name === 'background_image') {
        this.backgroundCropper.getCroppedCanvas().toBlob(backgroundImage => {
          this.formData.append('background_image', backgroundImage);
          resolve();
        });
      } else if (name === 'avatar') {
        this.avatarCropper.getCroppedCanvas().toBlob(avatarImage => {
          this.formData.append('avatar', avatarImage);
          resolve();
        });
      }
    });
  }

  senData() {
    for (const i of Object.keys(this.editSupplierForm.value)) {
      this.formData.append(i, this.editSupplierForm.value[i]);
    }

    this.supplierService.edit(this.formData, this.supplier.id)
    .subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}

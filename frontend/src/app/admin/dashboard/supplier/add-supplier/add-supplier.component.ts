import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { SupplierService } from 'app/admin/admin-shared/services/supplier/supplier.service';

declare var Cropper: any;

@Component({
  selector: 'mix-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {
  @ViewChild('supplierBackgroundImagePreview') supplierBackgroundImagePreview;
  @ViewChild('supplierAvatarImagePreview') supplierAvatarImagePreview;
  addSupplierForm: FormGroup;
  private formData: FormData = new FormData;
  backgroundCropper: any;
  avatarCropper: any;
  isSelectBackgroundImage = false;
  isSelectAvatarImage = false;

  constructor(
    public dialogRef: MatDialogRef<AddSupplierComponent>,
    private fb: FormBuilder,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.addSupplierForm = this.fb.group({
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

    this.backgroundCropper = new Cropper(this.supplierBackgroundImagePreview.nativeElement, {
      aspectRatio: 17 / 4,
      viewMode: 1
    });

    this.avatarCropper = new Cropper(this.supplierAvatarImagePreview.nativeElement, {
      aspectRatio: 1 / 1,
      viewMode: 1
    });
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
    if (this.addSupplierForm.valid) {
      if (this.isSelectBackgroundImage) {
        await this.convertBlob('background_image');
      }
      if (this.isSelectAvatarImage) {
        await this.convertBlob('avatar');
      }
      this.sendData();
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

  sendData() {
  for (const i of Object.keys(this.addSupplierForm.value)) {
      this.formData.append(i, this.addSupplierForm.value[i]);
    }

    this.supplierService.add(this.formData)
    .subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
